import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

import { Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { Big } from "@switchboard-xyz/common";
import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  OracleAccount,
  PermissionAccount,
  QueueAccount,
  SwitchboardDecimal,
  SwitchboardPermission,
} from "@switchboard-xyz/near.js";
import base58 from "bs58";
import fs from "fs";
import type { FinalExecutionOutcome } from "near-api-js/lib/providers";
import type { Action } from "near-api-js/lib/transaction";

export default class EnvCreate extends BaseCommand {
  static enableJsonFlag = true;

  static hidden = true;

  static description = "create a switchboard environment for near";

  static aliases = ["near:create:env"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the queue",
    }),
    name: Flags.string({
      description: "name of the queue for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the queue for easier identification",
    }),
    minStake: Flags.string({
      description: "minimum stake required by an oracle to join the queue",
      default: "0",
    }),
    reward: Flags.string({
      char: "r",
      description:
        "oracle rewards for successfully responding to an update request",
      default: "0",
    }),
    oracleTimeout: Flags.integer({
      description: "number of oracles to add to the queue",
      default: 180,
    }),
    queueSize: Flags.integer({
      description: "maximum number of oracles the queue can support",
      default: 100,
    }),
    slashingEnabled: Flags.boolean({
      description: "permit slashing malicous oracles",
      default: false,
    }),
    unpermissionedFeeds: Flags.boolean({
      description: "permit unpermissioned feeds",
      default: false,
    }),
    unpermissionedVrf: Flags.boolean({
      description: "permit unpermissioned VRF accounts",
      default: false,
    }),
    enableBufferRelayers: Flags.boolean({
      description: "enable oracles to fulfill buffer relayer requests",
      default: false,
    }),
    maxRows: Flags.integer({
      description: "",
      default: 100,
    }),
    feed: Flags.string({
      description: "filesystem path to feed definition file",
      multiple: true,
    }),
  };

  async run(): Promise<any> {
    const { flags, args } = await this.parse(EnvCreate);

    const txnReceipts: FinalExecutionOutcome[] = [];

    const queueActions: Action[] = [];

    const escrow = await this.loadEscrow();

    const [createQueueAction, queueAccount] = QueueAccount.createAction(
      this.program,
      {
        authority: flags.authority || this.program.account.accountId,
        name: Buffer.from(flags.name || ""),
        metadata: Buffer.from(flags.metadata || ""),
        mint: this.program.mint.address,
        reward: Number.parseInt(flags.reward ?? "0", 10),
        minStake: Number.parseInt(flags.minStake ?? "0", 10),
        queueSize: flags.queueSize,
        oracleTimeout: flags.oracleTimeout,
        slashingEnabled: flags.slashingEnabled,
        unpermissionedFeeds: flags.unpermissionedFeeds,
        unpermissionedVrf: flags.unpermissionedVrf,
        enableBufferRelayers: flags.enableBufferRelayers,
      }
    );
    queueActions.push(createQueueAction);

    const [createCrankAction, crankAccount] = CrankAccount.createAction(
      this.program,
      {
        queue: queueAccount.address,
        name: Buffer.from(flags.name || ""),
        metadata: Buffer.from(flags.metadata || ""),
        maxRows: flags.maxRows,
      }
    );
    queueActions.push(createCrankAction);

    const [createOracleAction, oracleAccount] = OracleAccount.createAction(
      this.program,
      {
        queue: queueAccount.address,
        authority: flags.authority || this.program.account.accountId,
        name: Buffer.from(flags.name || ""),
        metadata: Buffer.from(flags.metadata || ""),
      }
    );
    queueActions.push(createOracleAction);

    const [createOraclePermissionAction, oraclePermissionAccount] =
      PermissionAccount.createAction(this.program, {
        authority: flags.authority || this.program.account.accountId,
        granter: queueAccount.address,
        grantee: oracleAccount.address,
      });

    queueActions.push(
      createOraclePermissionAction,
      oraclePermissionAccount.setAction({
        permission: SwitchboardPermission.PERMIT_ORACLE_HEARTBEAT,
        enable: true,
      })
    );

    // send queueActions
    const queueReceipt = await this.program.sendActions(queueActions);
    txnReceipts.push(queueReceipt);
    this.logger.info(`${this.toUrl(queueReceipt.transaction.hash)}`);
    this.logger.info(
      `Queue Key (Uint8Array): [${queueAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Queue Key (Base58): ${this.encodeAddress(queueAccount.address)}`
    );
    this.logger.info(
      `Crank Key (Uint8Array): [${crankAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Crank Key (Base58): ${this.encodeAddress(crankAccount.address)}`
    );
    this.logger.info(
      `Oracle Key (Uint8Array): [${oracleAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Oracle Key (Base58): ${this.encodeAddress(oracleAccount.address)}`
    );

    const feeds: {
      aggregatorAccount: AggregatorAccount;
      jobs: JobAccount[];
      permissionAccount: PermissionAccount;
    }[] = [];
    for await (const feedDefinitionPath of flags.feed ?? []) {
      try {
        const feedDefinition = JSON.parse(
          fs
            .readFileSync(this.normalizePath(feedDefinitionPath), "utf-8")
            .replace(/\/\*[\S\s]*?\*\/|([^:\\]|^)\/\/.*$/g, "")
        );
        const jobs: JobAccount[] = [];
        const jobActions: Action[] = [];
        if ("jobs" in feedDefinition && Array.isArray(feedDefinition.jobs)) {
          for (const job of feedDefinition.jobs) {
            try {
              const oracleJob = OracleJob.fromObject(job);
              const [createJobAction, jobAccount] = JobAccount.createAction(
                this.program,
                {
                  authority: flags.authority || this.program.account.accountId,
                  data: Buffer.from(
                    OracleJob.encodeDelimited(oracleJob).finish()
                  ),
                }
              );
              jobActions.push(createJobAction);
              jobs.push(jobAccount);
            } catch (error) {
              this.error(`Failed to create job account for ${job}: ${error}`);
            }
          }
        }

        const jobReceipt = await this.program.sendActions(jobActions);
        txnReceipts.push(jobReceipt);
        this.logger.info(`${this.toUrl(jobReceipt.transaction.hash)}`);

        const feedActions: Action[] = [];

        const [createAggregatorAction, aggregatorAccount] =
          AggregatorAccount.createAction(this.program, {
            queue: queueAccount.address,
            crank: crankAccount.address,
            authority: flags.authority || this.program.account.accountId,
            name: Buffer.from(flags.name || ""),
            metadata: Buffer.from(flags.metadata || ""),
            batchSize: feedDefinition.batchSize || 1,
            minOracleResults: feedDefinition.minOracleResponses || 1,
            minJobResults: feedDefinition.minJobResponses || 1,
            minUpdateDelaySeconds: feedDefinition.minUpdateDelaySeconds || 30,
            startAfter: 0,
            rewardEscrow: escrow.address,
            varianceThreshold: feedDefinition.varianceThreshold
              ? SwitchboardDecimal.fromBig(
                  new Big(feedDefinition.varianceThreshold)
                )
              : SwitchboardDecimal.fromBig(new Big(0)),
            forceReportPeriod: feedDefinition.forceReportPeriod
              ? Number.parseInt(feedDefinition.forceReportPeriod, 10)
              : 0,
          });

        // add jobs
        feedActions.push(
          createAggregatorAction,
          ...jobs.map((j) => aggregatorAccount.addJobAction({ job: j.address }))
        );

        // add permissions
        const [aggregatorPermissionAction, aggregatorPermissionAccount] =
          PermissionAccount.createAction(this.program, {
            authority: flags.authority || this.program.account.accountId,
            granter: queueAccount.address,
            grantee: aggregatorAccount.address,
          });
        feedActions.push(aggregatorPermissionAction);

        // set permissions if required
        if (!flags.unpermissionedFeeds) {
          feedActions.push(
            aggregatorPermissionAccount.setAction({
              permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,
              enable: true,
            })
          );
        }

        // add to crank
        feedActions.push(
          crankAccount.pushAction({ aggregator: aggregatorAccount.address })
        );

        console.log(feedActions.length);

        const feedReceipt = await this.program.sendActions(feedActions);
        txnReceipts.push(feedReceipt);
        this.logger.info(`${this.toUrl(feedReceipt.transaction.hash)}`);

        feeds.push({
          aggregatorAccount,
          jobs,
          permissionAccount: aggregatorPermissionAccount,
        });
      } catch (error) {
        this.logger.error(
          `Failed to create feed ${feedDefinitionPath}: ${error}`
        );
      }
    }

    // build objects

    const queueData = await queueAccount.loadData();
    const crankData = await crankAccount.loadData();
    const oracleData = await oracleAccount.loadData();
    const oraclePermissionData = await oraclePermissionAccount.loadData();

    const feedData = await Promise.all(
      feeds.map(async (feed) => {
        const aggData = await feed.aggregatorAccount.loadData();
        const permissionData = await feed.permissionAccount.loadData();

        return {
          addressBase58: this.encodeAddress(feed.aggregatorAccount.address),
          ...aggData,
          permission: {
            address: feed.permissionAccount.address,
            addressBase58: this.encodeAddress(feed.permissionAccount.address),
            ...permissionData,
          },
        };
      })
    );

    const data = {
      addressBase58: this.encodeAddress(queueAccount.address),
      ...queueData,
      oracle: {
        addressBase58: this.encodeAddress(oracleAccount.address),
        ...oracleData,
        permission: {
          address: oraclePermissionAccount.address,
          addressBase58: this.encodeAddress(oraclePermissionAccount.address),
          ...oraclePermissionData,
        },
      },
      crank: {
        addressBase58: this.encodeAddress(crankAccount.address),
        ...crankData,
        length: crankData.data.length,
        data: crankData.data.map(
          (row) => `${row.nextTimestamp}, ${base58.encode(row.uuid)}`
        ),
      },
      feeds: feedData,
    };

    if (flags.json) {
      return data;
    }

    this.logger.info(JSON.stringify(data, undefined, 2));

    // this.logger.info(
    //   `Queue Key (Uint8Array): [${queueAccount.address
    //     .map((e) => (e as any).toString())
    //     .join(",")}]`
    // );
    // this.logger.info(
    //   `Queue Key (Base58): ${this.encodeAddress(queueAccount.address)}`
    // );
    // this.logger.info(JSON.stringify(queueData, this.fs.jsonReplacers, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create near oracle queue environment");
  }
}
