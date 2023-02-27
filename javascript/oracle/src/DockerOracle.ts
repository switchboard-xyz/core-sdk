import type { ChildProcess } from "child_process";
import { execSync, spawn } from "child_process";
import crypto from "crypto";
import fs from "fs";
import os from "os";
import path from "path";
import { ISwitchboardOracle } from "./SwitchboardOracle";
import {
  IDockerOracleConfig,
  IOracleConfig,
  Chain,
  Network,
  OracleTagVersion,
  ReleaseChannelVersion,
} from "./types";
import { normalizeFsPath, sleep } from "./utils";

export class DockerOracle extends ISwitchboardOracle {
  readonly imageTag: string;

  readonly switchboardDirectory: string;
  readonly silent: boolean;

  readonly image: string;
  readonly arch: "linux/arm64" | "linux/amd64";
  readonly dockerRunFlags: Array<string>;

  readonly chain: Chain;
  readonly network: Network;
  readonly envVariables: Record<string, string>;
  readonly secretPath: string;

  logFile: string;

  dockerOracleProcess?: ChildProcess;
  isActive = true;
  readonly timestamp: number = Date.now();

  onDataCallback: (data: any) => void;
  onErrorCallback: (error: Error) => void;
  onCloseCallback: (code: number, signal: NodeJS.Signals) => void;

  constructor(readonly config: IDockerOracleConfig & OracleTagVersion) {
    super();
    DockerOracle.isDockerRunning();
    // set config
    this.chain = config.chain;
    this.network = config.network;
    this.arch = config.arch ?? "linux/amd64";
    this.imageTag = config.imageTag;
    this.silent = config.silent ?? false;

    this.dockerRunFlags = config.dockerRunFlags ?? [];

    // payer secret (required)
    this.secretPath = normalizeFsPath(config.secretPath);
    if (!this.secretPath) {
      throw new Error(`Payer secret path is required`);
    }
    if (!fs.existsSync(this.secretPath)) {
      throw new Error(`Payer secret path does not exist`);
    }

    // Set environment variables for docker image
    this.envVariables = ISwitchboardOracle.parseEnvVariables(config);
    if (this.envVariables["RPC_URL"].includes("localhost")) {
      this.envVariables["RPC_URL"] = this.envVariables["RPC_URL"].replace(
        "localhost",
        "host.docker.internal"
      );
    }
    if (this.envVariables["RPC_URL"].includes("0.0.0.0")) {
      this.envVariables["RPC_URL"] = this.envVariables["RPC_URL"].replace(
        "0.0.0.0",
        "host.docker.internal"
      );
    }

    // log config
    this.switchboardDirectory =
      config.switchboardDirectory ?? path.join(process.cwd(), ".switchboard");
    if (!fs.existsSync(this.switchboardDirectory)) {
      fs.mkdirSync(this.switchboardDirectory, { recursive: true });
    }
    this.logFile = path.join(
      this.switchboardDirectory,
      `docker.${this.imageTag}.${Math.floor(this.timestamp / 1000)}.log`
    );

    // build image name from a hash of provided args
    const shaHash = crypto.createHash("sha256");
    shaHash.update(
      Buffer.from(
        [
          this.chain,
          this.network,
          this.secretPath,
          this.arch,
          this.imageTag,
        ].join(" ") + JSON.stringify(this.envVariables)
      )
    );
    const hash = shaHash.digest().toString("hex");

    this.image = `sbv2-${this.chain}-${this.network}-${this.imageTag.replace(
      "dev-v2-",
      ""
    )}-${hash.slice(0, 16)}`;

    // callback config
    this.onDataCallback = (data) => {
      this.addLog(data.toString());
      if (!this.silent) {
        console.log(`\u001B[34m${data.toString()}\u001B[0m`);
      }
    };
    this.onErrorCallback = (error) => {
      this.addLog(error.toString());
      if (!this.silent) {
        console.error(`\u001B[31m${error.toString()}\u001B[0m`);
      }
    };
    this.onCloseCallback = (code, signal) => {
      this.addLog(`Exit code ${code} received`);
      this.saveLogs();
      if (!this.isActive) {
        return;
      }

      // if reboot from no RPC or if image already exists
      if (code === 0 || code === 125) {
        this.startOracle();
      } else if (!this.silent) {
        console.error(
          `\u001B[31mDocker image exited with code ${code}\u001B[0m`
        );
        console.log(`\u001B[34m${"Restarting oracle ..."}\u001B[0m`);
        this.startOracle();
      } else if (code !== 0 && code !== 1) {
        console.error(
          `\u001B[31mDocker image exited with code ${code}\u001B[0m`
        );
      }
    };
  }

  public static async fromReleaseChannel(
    config: IOracleConfig & ReleaseChannelVersion
  ): Promise<DockerOracle> {
    try {
      const nodeImage = await ISwitchboardOracle.getNodeImage(
        config.releaseChannel
      );
      return new DockerOracle({
        ...config,
        imageTag: nodeImage,
      });
    } catch (error) {
      throw new Error(
        `Failed to find oracle version for release channel ${config.releaseChannel}, ${error}`
      );
    }
  }

  public static isDockerRunning() {
    // Check docker is running
    try {
      execSync(`docker ps`, { stdio: ["pipe", "pipe", "pipe"] });
    } catch (error) {
      throw new Error(`Is Docker running?`);
    }
  }

  /**
   * Start a Docker process with the oracle running. If an existing oracle is detected, it will re-attach to the container.
   */
  start() {
    // Kill all existing switchboard oracles
    try {
      if (os.type() === "Windows_NT") {
        execSync(
          `FOR /F "tokens=*" %i IN ('docker ps -q -f "ancestor=switchboardlabs/node"') DO (docker container stop %i)`,
          { stdio: ["pipe", "pipe", "pipe"], shell: "powershell.exe" }
        );
      } else {
        execSync(
          `docker container stop $(docker ps | grep "switchboardlabs/node" | awk '{ print $1 }')`,
          { stdio: ["pipe", "pipe", "pipe"] }
        );
      }
    } catch (error) {
      const errorString = `Failed to stop existing docker containers, ${error}`;
      if (
        !errorString.includes(
          `"docker container stop" requires at least 1 argument`
        )
      ) {
        console.error(errorString);
      }
    }

    // we always try to create the oracle first
    // if already exist, attach to it
    this.createOracle();
  }

  /** Stop the docker oracle process */
  stop() {
    this.isActive = false;
    this.saveLogs();

    if (this.dockerOracleProcess) {
      this.dockerOracleProcess.removeAllListeners();
    }

    try {
      execSync(`docker container stop ${this.image}`, {
        stdio: ["pipe", "pipe", "pipe"],
      });
      return true;
    } catch (error) {
      console.error(`Failed to stop docker oracle, ${error}`);
      return false;
    }
  }

  /** Force kill the child_process */
  kill(exitCode = 1) {
    this.isActive = false;
    this.saveLogs();

    if (this.dockerOracleProcess) {
      this.dockerOracleProcess.removeAllListeners();
    }

    if (this.dockerOracleProcess) {
      const killed = this.dockerOracleProcess.kill(exitCode);
      if (!killed) {
        throw new Error(`Failed to kill the docker oracle process`);
      }
    }
  }

  amIAContainer(): boolean {
    let amIAContainer = false;

    // Yes, there are some edge cases to checking the presence of the /proc/self/cgroup file to determine if your code is running inside a container:
    // The /proc/self/cgroup file is only present on Linux systems that have the cgroups feature enabled, so this method will not work on other operating systems.
    // If your container is using the host's network namespace, then the /proc/self/cgroup will be the same as the host, and the check would return false, even if the code is running inside a container.
    // Some container runtime (e.g. lxc) does not use /proc/self/cgroup to isolate the container, so the check would return false.
    // If the container is running with --privileged flag it will have full access to the host, including the /proc filesystem, so the check would return false
    // Checking the presence of this file only verifies that the process is running in a cgroup, not that it is running in a container.
    try {
      if (fs.existsSync("/proc/self/cgroup")) {
        return true;
      }
    } catch (error) {}

    try {
      const stdout = execSync("ps -o pid,args", {
        encoding: "utf-8",
      });
      if (stdout.includes("dockerd") || stdout.includes("containerd")) {
        return true;
      }
    } catch (error) {}

    try {
      const stdout = execSync("lsof -p $$", {
        encoding: "utf-8",
      });
      if (stdout.includes("/var/run/docker.sock")) {
        return true;
      }
    } catch (error) {}

    // not a reliable way to check as it's not only depend on the container, it's depend on the environment variable set by the host or other config
    if (process.env.container && process.env.container === "docekr") {
      return true;
    }

    return amIAContainer;
  }

  /**
   * Start a Docker process with the oracle running and await for the oracle to signal readiness. If an existing oracle is detected, it will re-attach to the container.
   *
   * @param timeout - the number of seconds to await for the oracle to start successfully heartbeating
   *
   * @throws if timeout is exceeded and oracle heartbeat was never detected
   */
  public async startAndAwait(timeout: number = 60) {
    this.start();
    await this.awaitReady(timeout);
  }

  private getArgs(): string[] {
    const dockerRunFlags: Set<string> = new Set([
      `--network=host`, // TODO: re-evaluate this
      `--name ${this.image}`,
      `--platform=${this.arch}`,
      `--health-interval 10s`,
      `--health-start-period 10s`,
      ...this.dockerRunFlags,
    ]);

    for (const [key, value] of Object.entries(this.envVariables)) {
      dockerRunFlags.add(`-e ${key.toUpperCase()}=${value}`);
    }

    if (os.type() === "Linux") {
      dockerRunFlags.add(`--add-host=host.docker.internal:host-gateway`);
    }

    if (this.amIAContainer()) {
      // More Info: https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/
      dockerRunFlags.add(`-v /var/run/docker.sock:/var/run/docker.sock`);
    }

    if (this.chain === "aptos") {
      return [
        "run",
        ...Array.from(dockerRunFlags),
        `-e APTOS_FS_PAYER_SECRET_PATH=/home/node/sbv2-oracle/payer_secrets.json`,
        `--mount type=bind,source=${this.secretPath},target=/home/node/sbv2-oracle/payer_secrets.json`,
        `switchboardlabs/node:${this.imageTag}`,
      ].filter(Boolean);
    }

    if (this.chain === "near") {
      return [
        "run",
        ...Array.from(dockerRunFlags),
        `-e NEAR_FS_PAYER_SECRET_PATH=/home/node/sbv2-oracle/payer_secrets.json`,
        `--mount type=bind,source=${this.secretPath},target=/home/node/sbv2-oracle/payer_secrets.json`,
        `switchboardlabs/node:${this.imageTag}`,
      ].filter(Boolean);
    }

    if (this.chain === "solana") {
      return [
        "run",
        ...Array.from(dockerRunFlags),
        `-e SOLANA_FS_PAYER_SECRET_PATH=/home/node/sbv2-oracle/payer_secrets.json`,
        `--mount type=bind,source=${this.secretPath},target=/home/node/sbv2-oracle/payer_secrets.json`,
        `switchboardlabs/node:${this.imageTag}`,
      ].filter(Boolean);
    }

    throw new Error(`DockerOracle chain must be 'aptos', 'near', or 'solana'`);
  }

  createOracle() {
    // this.ready = false;
    this.dockerOracleProcess = spawn("docker", this.getArgs(), {
      shell: true,
      env: process.env,
      stdio: this.silent ? undefined : ["inherit", "pipe", "pipe"],
    });

    this.dockerOracleProcess!.stdout!.on("data", this.onDataCallback);
    this.dockerOracleProcess!.stderr!.on("data", (error) => {
      if (
        !error
          .toString()
          .includes(
            `The container name "/sbv2-${this.imageTag}" is already in use by container`
          )
      ) {
        console.error(`\u001B[34m${error.toString()}\u001B[0m`);
        this.addLog(error.toString());
      }
    });
    this.dockerOracleProcess!.stderr!.on("error", (error) => {
      if (
        !error
          .toString()
          .includes(
            `The container name "/sbv2-${this.imageTag}" is already in use by container`
          )
      ) {
        console.error(`\u001B[31m${error.toString()}\u001B[0m`);
        this.addLog(error.toString());
      }
    });
    this.dockerOracleProcess.on("close", this.onCloseCallback);
    this.dockerOracleProcess.on("exit", this.onCloseCallback);
  }

  private startOracle() {
    if (this.dockerOracleProcess) {
      this.dockerOracleProcess.removeAllListeners();
    }
    this.dockerOracleProcess = spawn(
      "docker",
      ["start", "--attach", this.image],
      {
        shell: true,
        env: process.env,
        stdio: this.silent ? undefined : ["inherit", "pipe", "pipe"],
      }
    );

    this.dockerOracleProcess!.stdout!.on("data", this.onDataCallback);
    this.dockerOracleProcess!.stderr!.on("error", this.onErrorCallback);
    this.dockerOracleProcess!.on("close", this.onCloseCallback);
    this.dockerOracleProcess!.on("exit", this.onCloseCallback);
  }

  public static checkDockerHealthStatus(containerName: string): boolean {
    try {
      const inspectResponseBuffer = execSync(
        `docker inspect --format='{{json .State.Health.Status}}' ${containerName}`,
        { stdio: ["pipe", "pipe", "pipe"] }
      );
      const response = Buffer.from(inspectResponseBuffer)
        .toString("utf-8")
        .replace(/\"/g, "") // remove double quotes
        .trim(); // trim new line
      return response === "healthy" ? true : false;
    } catch (error) {}

    return false;
  }

  checkDockerHealthStatus(): boolean {
    return DockerOracle.checkDockerHealthStatus(this.image);
  }

  /**
   * @param timeout - the number of seconds to await for the oracle to start successfully heartbeating
   *
   * @throws if timeout is exceeded and oracle heartbeat was never detected
   */
  async awaitReady(timeout: number = 60): Promise<void> {
    let numRetries = timeout * 2;
    while (numRetries) {
      try {
        const status = this.checkDockerHealthStatus();
        if (status === true) {
          return;
        }
      } catch {}

      --numRetries;
      await sleep(500);
    }

    throw new Error(`Failed to start Switchboard oracle in ${timeout} seconds`);
  }
}
