import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";

import { Flags } from "@oclif/core";
import { OracleQueueAccount } from "@switchboard-xyz/evm.js";

export default class QueueCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new oracle queue";

  static aliases = ["evm:create:queue"];

  static examples = [
    `$ sb evm queue create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt --name 'my queue' --oracleTimeout 3600 --queueSize 8`,
    "$ sb evm queue create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt --unpermissionedFeeds",
  ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate account that will be the authority for the queue",
    }),
    name: Flags.string({
      description: "name of the queue for easier identification",
    }),
    reward: Flags.integer({
      char: "r",
      description:
        "oracle rewards for successfully responding to an update request",
      default: 0,
    }),
    oracleTimeout: Flags.integer({
      description: "number of oracles to add to the queue",
      default: 180,
    }),
    queueSize: Flags.integer({
      description: "maximum number of oracles the queue can support",
      default: 100,
    }),
    unpermissionedFeeds: Flags.boolean({
      description: "permit unpermissioned feeds",
      default: false,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(QueueCreate);

    const authority = await this.getAuthority(flags.authority);

    const [queueAccount, tx] = await OracleQueueAccount.create(this.program, {
      name: flags.name ?? "",
      authority: await authority.getAddress(),
      oracleTimeout: flags.oracleTimeout,
      reward: flags.reward,
      unpermissionedFeedsEnabled: !flags.unpermissionedFeeds,
      maxSize: flags.queueSize,
    });

    await tx.wait();

    const queueData = await queueAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(queueAccount.address, queueData);
    }

    this.prettyPrintQueue(queueAccount.address, queueData);

    this.logger.info(this.toUrl(tx.hash));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create oracle queue");
  }
}
