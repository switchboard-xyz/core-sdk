import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana/index";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";

export default class AggregatorList extends BaseCommand {
  static enableJsonFlag = true;

  static description =
    "get a list of aggregators from a provided authority pubkey";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    authorityKey: Args.string({
      description: "public key of the aggregator authority",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorList);

    const authorityPubkey = new PublicKey(args.authorityKey);

    const accounts = await this.program.getProgramAccounts();
    const aggregators = [...accounts.aggregators.entries()].filter(
      ([aggregatorKey, aggregator]) =>
        aggregator.authority.equals(authorityPubkey)
    );

    const aggregatorKeys = aggregators.map((a) => a[0]);

    if (flags.json) {
      return aggregatorKeys;
    }

    for (const aggregatorKey of aggregatorKeys) console.log(aggregatorKey);
  }

  async catch(error: any) {
    super.catch(error, "failed to list aggregators");
  }
}
