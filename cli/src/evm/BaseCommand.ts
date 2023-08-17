import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import type { IBaseChain } from "../types/chain";
import { chalkString, stripTrailingZeros } from "../utils";

import type { BaseJob, JobDefinition, RawJobDefinition } from "./types";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import type { Big, IChainNetworkConfig } from "@switchboard-xyz/common";
import {
  BN,
  BNtoDateTimeString,
  getSupportedNetwork,
  isBase64,
  isHex,
  OracleJob,
  parseSecretString,
  toDateTimeString,
} from "@switchboard-xyz/common";
import type {
  AggregatorData,
  AttestationQueueData,
  EnclaveData,
  FunctionData,
  Job,
  OracleData,
  OracleQueueData,
  SwitchboardProgram,
} from "@switchboard-xyz/evm.js";
import {
  fetchJobsFromIPFS,
  fromBigNumber,
  publishJobsToIPFS,
  VerificationStatus,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { createHash } from "crypto";
import type { BigNumber } from "ethers";
import { providers, Wallet } from "ethers";
import fs from "fs";
import path from "path";

type EvmChain = "coredao" | "arbitrum";

type EvmNetwork = "mainnet" | "testnet";

export abstract class EvmBaseCommand extends BaseCommand implements IBaseChain {
  static flags = {
    ...BaseCommand.flags,
    chain: Flags.string({
      description: "the evm chain to interact with",
      options: ["coredao", "arbitrum"],
      exclusive: ["coredao", "arbitrum"],
      // exclusive: ["chainId"],
    }),
    // chainId: Flags.string({
    //   description: "the evm chain to interact with",
    //   options: ["coredao", "arbitrum"],
    //   required: true,
    //   exclusive: ["chain", "network"],
    // }),
    coredao: Flags.boolean({
      description: "use the coredao chain",
      exclusive: ["chain"],
    }),
    arbitrum: Flags.boolean({
      description: "use the arbitrum chain",
      exclusive: ["chain"],
    }),
    network: Flags.string({
      description: "the EVM network to connect to",
      options: ["mainnet", "testnet"],
      exclusive: ["mainnet", "testnet"],
    }),
    mainnet: Flags.boolean({
      description: "use the mainnet network",
      default: false,
      exclusive: ["network"],
    }),
    testnet: Flags.boolean({
      description: "use the testnet network",
      default: false,
      exclusive: ["network"],
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
    programId: Flags.string({
      description: "alternative Switchboard program ID to interact with",
    }),
  };

  public hasSigner = false;

  public chain: EvmChain;

  public network: EvmNetwork;

  public networkConfig: IChainNetworkConfig;

  public rpcUrl: string;

  public programId: string;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.chain = this.getChain(
      (flags as any).chain,
      (flags as any).coredao,
      (flags as any).arbitrum
    );

    this.network = this.getNetwork(
      (flags as any).network,
      (flags as any).mainnet,
      (flags as any).testnet
    );

    this.rpcUrl = this.getRpcUrl(
      this.chain,
      this.network,
      (flags as any).rpcUrl
    );

    this.networkConfig = getSupportedNetwork(this.chain, this.network);

    this.programId = this.getProgramId(
      this.chain,
      this.network,
      (flags as any).programId
    );

    this.logConfig({
      chain: this.chain,
      network: this.network,
      rpc: this.rpcUrl,
      programId: this.programId,
    });
  }

  getChain(chain?: string, coredao?: boolean, arbitrum?: boolean): EvmChain {
    if (coredao) {
      return "coredao";
    }

    if (arbitrum) {
      return "arbitrum";
    }

    if (!chain) {
      throw new Error(`Need to provide --chain`);
    }

    if (chain !== "coredao" && chain !== "arbitrum") {
      throw new Error(`--chain must be 'coredao' or 'arbitrum'`);
    }

    return chain;
  }

  getRpcUrl(chain: EvmChain, network: EvmNetwork, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    const rpcUrl = this.ctx.getRpcUrl(chain, network);
    if (!rpcUrl) {
      throw new Error(
        `Failed to get EVM RPC_URL for ${chain} ${network}. Try providing the --rpcUrl flag`
      );
    }

    return rpcUrl;
  }

  getNetwork(
    networkOption?: string,
    mainnet?: boolean,
    testnet?: boolean
  ): EvmNetwork {
    if (mainnet) {
      return "mainnet";
    }

    if (testnet) {
      return "testnet";
    }

    if (!networkOption) {
      throw new Error(`Need to provide --network`);
    }

    if (networkOption !== "mainnet" && networkOption !== "testnet") {
      throw new Error(`--network must be 'mainnet' or 'testnet'`);
    }

    return networkOption;
  }

  getProgramId(
    chain: EvmChain,
    network: EvmNetwork,
    programIdFlag?: string
  ): string {
    if (programIdFlag) {
      return programIdFlag;
    }

    return this.ctx.getProgramId(chain, network);
  }

  toUrl(signature: string) {
    const explorer: string | undefined =
      (this.networkConfig.metadata?.defaultExplorer as string) ?? "";
    if (explorer) {
      return path.join(explorer, "tx", signature);
    }

    return "NOT_SUPPORTED";
  }

  toAccountUrl(address: string) {
    const explorer: string | undefined =
      (this.networkConfig.metadata?.defaultExplorer as string) ?? "";
    if (explorer) {
      return path.join(explorer, "address", address);
    }

    return "NOT_SUPPORTED";
  }

  async getSigner(keypairPath: string): Promise<Wallet> {
    const parseKeypairString = (fileString: string): Wallet => {
      const parsedSecret = parseSecretString(fileString);
      if (parsedSecret) {
        const provider = new providers.JsonRpcProvider(this.rpcUrl);
        return new Wallet(parsedSecret.toString("hex"), provider);
      }

      throw new Error(`Failed to derive secret key from input file`);
    };

    const errors: any[] = [];

    // try loading keypair from filesystem
    try {
      const normalizedKeypairPath = this.normalizePath(keypairPath);
      const wallet = FsProvider.getSecret(
        normalizedKeypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from gcp secret manager
    try {
      const wallet = await GcpProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from aws secrets
    try {
      const wallet = await AwsProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    throw new Error(
      `Failed to load EVM keypair ${keypairPath}\n${errors
        .map((e) => (e as any).toString())
        .join("\n")}`
    );
  }

  convertRawNumber(num: BigNumber): Big {
    return fromBigNumber(num);
  }

  loadJobDefinitionWithMeta(definitionPath: string): JobDefinition {
    const normalizedPath = this.normalizePath(definitionPath);
    const jobDef = JSON.parse(
      fs
        .readFileSync(normalizedPath, "utf-8")
        .replace(/\/\*[\S\s]*?\*\/|([^:\\]|^)\/\/.*$/g, "")
    );

    let name = "";
    if ("name" in jobDef && typeof jobDef.name === "string") {
      name = jobDef.name;
    }

    let weight = 1;
    if ("weight" in jobDef && typeof jobDef.weight === "number") {
      weight = jobDef.weight;
    }

    if ("data" in jobDef && typeof jobDef.data === "string") {
      const dataString: string = jobDef.data;
      const oracleJob = OracleJob.decodeDelimited(
        Buffer.from(
          jobDef.data,
          isBase64(dataString)
            ? "base64"
            : isHex(dataString)
            ? "hex"
            : undefined
        )
      );
      return { name, weight, job: oracleJob, path: definitionPath };
    }

    if ("tasks" in jobDef && Array.isArray(jobDef.tasks)) {
      const oracleJob = this.loadJobDefinition(definitionPath);
      return { name, weight, job: oracleJob, path: definitionPath };
    }

    throw new Error(`Failed to parse job definition`);
  }

  deserializeJobData(jobData: Uint8Array): OracleJob {
    return OracleJob.decodeDelimited(jobData);
  }

  normalizeAccountData(
    address: string,
    data: Record<string, any>
  ): Record<string, any> {
    const object = {
      address: address,
      ...data,
    };
    return JSON.parse(JSON.stringify(object, this.jsonReplacers, 2));
  }

  prettyPrintFunction(
    address: string,
    functionData: FunctionData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Function", address, SPACING)));
    output.push(chalkString("name", functionData.name, SPACING));
    output.push(chalkString("authority", functionData.authority, SPACING));
    output.push(
      chalkString(
        "createdAt",
        BNtoDateTimeString(new BN(functionData.state.createdAt.toString())),
        SPACING
      )
    );
    output.push(chalkString("enclaveId", functionData.enclaveId, SPACING));
    output.push(chalkString("queueId", functionData.queueId, SPACING));
    output.push(chalkString("queueIdx", functionData.state.queueIdx, SPACING));
    output.push(chalkString("balance", functionData.balance, SPACING));
    output.push(chalkString("status", functionData.status, SPACING));
    output.push(
      chalkString(
        "lastExecutionTimestamp",
        BNtoDateTimeString(
          new BN(functionData.state.lastExecutionTimestamp.toString())
        ),
        SPACING
      )
    );
    output.push(
      chalkString(
        "nextAllowedTimestamp",
        BNtoDateTimeString(
          new BN(functionData.state.nextAllowedTimestamp.toString())
        ),
        SPACING
      )
    );
    output.push(
      chalkString(
        "lastExecutionGasCost",
        functionData.state.lastExecutionGasCost,
        SPACING
      )
    );
    output.push(
      chalkString("triggered", functionData.state.triggered, SPACING)
    );
    output.push(
      chalkString("triggerCount", functionData.state.triggerCount, SPACING)
    );
    output.push(
      chalkString(
        "triggeredSince",
        BNtoDateTimeString(
          new BN(functionData.state.triggeredSince.toString())
        ),
        SPACING
      )
    );
    // meta
    output.push(chalkString("schedule", functionData.config.schedule, SPACING));
    output.push(
      chalkString(
        "containerRegistry",
        functionData.config.containerRegistry,
        SPACING
      )
    );
    output.push(
      chalkString("container", functionData.config.container, SPACING)
    );
    output.push(chalkString("version", functionData.config.version, SPACING));
    output.push(
      chalkString(
        "permittedCallers",
        JSON.stringify(functionData.config.permittedCallers),
        SPACING
      )
    );
    output.push(
      chalkString(
        "mrEnclaves",
        JSON.stringify(functionData.config.mrEnclaves),
        SPACING
      )
    );
    output.push(
      chalkString(
        "allowAllFnCalls",
        functionData.config.allowAllFnCalls,
        SPACING
      )
    );
    output.push(
      chalkString(
        "useFnCallEscrow",
        functionData.config.useFnCallEscrow,
        SPACING
      )
    );
    output.push(chalkString("name", functionData.name, SPACING));
    output.push(chalkString("name", functionData.name, SPACING));
    output.push(chalkString("name", functionData.name, SPACING));
    output.push(chalkString("name", functionData.name, SPACING));

    const logString = output.join("\n");

    this.log(logString);
  }

  prettyPrintAttestationQueue(
    address: string,
    accountData: AttestationQueueData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(
      chalk.underline(chalkString("## Attestation Queue", address, SPACING))
    );
    output.push(chalkString("authority", accountData.authority, SPACING));
    output.push(chalkString("reward", accountData.reward, SPACING));
    output.push(chalkString("numVerifiers", accountData.data.length, SPACING));
    output.push(chalkString("maxSize", accountData.maxSize, SPACING));
    output.push(
      chalkString(
        "lastHeartbeat",
        BNtoDateTimeString(new BN(accountData.lastHeartbeat.toString())),
        SPACING
      )
    );
    output.push(
      chalkString(
        "maxEnclaveVerificationAge",
        accountData.maxEnclaveVerificationAge,
        SPACING
      )
    );
    output.push(
      chalkString(
        "allowAuthorityOverrideAfter",
        accountData.allowAuthorityOverrideAfter,
        SPACING
      )
    );
    output.push(
      chalkString(
        "maxConsecutiveFunctionFailures",
        accountData.maxConsecutiveFunctionFailures,
        SPACING
      )
    );
    output.push(
      chalkString(
        "requireAuthorityHeartbeatPermission",
        accountData.requireAuthorityHeartbeatPermission,
        SPACING
      )
    );
    output.push(
      chalkString(
        "requireUsagePermissions",
        accountData.requireUsagePermissions,
        SPACING
      )
    );
    output.push(
      chalkString("enclaveTimeout", accountData.enclaveTimeout, SPACING)
    );
    output.push(chalkString("gcIdx", accountData.gcIdx, SPACING));
    output.push(chalkString("currIdx", accountData.currIdx, SPACING));
    output.push(
      chalkString("mrEnclaves", JSON.stringify(accountData.mrEnclaves), SPACING)
    );

    const logString = output.join("\n");

    this.log(logString);
  }

  prettyPrintEnclave(address: string, accountData: EnclaveData, SPACING = 24) {
    const output: string[] = [];

    output.push(
      chalk.underline(chalkString("## Enclave (Verifier)", address, SPACING))
    );
    output.push(chalkString("signer", accountData.signer, SPACING));
    output.push(chalkString("authority", accountData.authority, SPACING));
    output.push(chalkString("queueId", accountData.queueId, SPACING));
    output.push(chalkString("isOnQueue", accountData.isOnQueue, SPACING));
    output.push(chalkString("balance", accountData.balance, SPACING));
    output.push(chalkString("cid", accountData.cid, SPACING));
    output.push(chalkString("mrEnclave", accountData.mrEnclave, SPACING));
    output.push(
      chalkString("verificationStatus", accountData.verificationStatus, SPACING)
    );
    output.push(
      chalkString(
        "verificationTimestamp",
        BNtoDateTimeString(
          new BN(accountData.verificationTimestamp.toString())
        ),
        SPACING
      )
    );
    output.push(
      chalkString(
        "validUntil",
        BNtoDateTimeString(new BN(accountData.validUntil.toString())),
        SPACING
      )
    );
    output.push(
      chalkString(
        "lastHeartbeat",
        BNtoDateTimeString(new BN(accountData.lastHeartbeat.toString())),
        SPACING
      )
    );

    const logString = output.join("\n");

    this.log(logString);
  }

  jobsToJson(jobs: Job[]): Array<{
    name: string;
    weight: number;
    data: string;
    tasks: OracleJob.ITask[];
  }> {
    return jobs.map((job) => {
      const oracleJob = OracleJob.decodeDelimited(
        new Uint8Array(Buffer.from(job.data, "base64"))
      );
      return {
        name: job.name,
        weight: job.weight,
        data: job.data,
        tasks: oracleJob.tasks,
      };
    });
  }

  convertJob(job: JobDefinition): BaseJob {
    const serializedJob = Buffer.from(
      OracleJob.encodeDelimited(job.job).finish()
    ).toString("base64");

    return {
      name: job.name ?? base64ToPseudoUniqueID(serializedJob),
      weight: job.weight ?? 1,
      data: serializedJob,
      path: job.path,
    };
  }

  // TODO: Dedupe
  async getUpdatedJobsHash(
    hash?: string,
    addJobs?: BaseJob[],
    removeJobs?: BaseJob[]
  ): Promise<[string, Omit<Required<RawJobDefinition>, "path">[]]> {
    let jobs: Job[] = [];
    if (hash) {
      const existingJobs = await fetchJobsFromIPFS(hash);
      jobs.push(...existingJobs);
    }

    for (const rmJob of removeJobs ?? []) {
      const idx = jobs.findIndex((j) => j.data === rmJob.data);
      if (idx === -1) {
        // TODO: Store file path for easier identification
        throw new Error(`Failed to remove job from job list, ${rmJob.path}`);
      }

      jobs = [...jobs.slice(0, idx), ...jobs.slice(idx + 1)];
    }

    jobs.push(...(addJobs ?? []));

    if (jobs.length === 0) {
      throw new Error(`No jobs to publish to IPFS`);
    }

    const jobsHash = await publishJobsToIPFS(
      jobs,
      "https://api.switchboard.xyz/api/ipfs"
    );

    const finalJobs = jobs.map((job) => {
      const oracleJob = OracleJob.decodeDelimited(
        new Uint8Array(Buffer.from(job.data, "base64"))
      );
      return {
        ...job,
        ...oracleJob,
      };
    });

    return [jobsHash, finalJobs];
  }
}

export function base64ToPseudoUniqueID(base64String: string): string {
  const binaryData = Buffer.from(base64String, "base64");
  const hash = createHash("sha256").update(binaryData).digest("hex");
  return hash.slice(0, 16);
}
