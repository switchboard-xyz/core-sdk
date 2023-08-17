import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args, Flags } from "@oclif/core";
import { fetchJobsFromIPFS } from "@switchboard-xyz/evm.js";

export default class JobPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an IPFS job hash";

  static examples = [
    "$ sb evm job print bafkreih4ots3go2ytcvp74cvshnmlikw2mtm47pugpnlzuf36vr6emoov4 --arbitrum --testnet",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    jobHash: Args.string({
      description: "IPFS hash of the job definitions",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(JobPrint);

    const jobs = await fetchJobsFromIPFS(args.jobHash);

    if (flags.json) {
      return {
        cid: args.jobHash,
        jobs: this.jobsToJson(jobs),
      };
    }

    this.prettyPrintJobs(jobs);
  }

  async catch(error: any) {
    super.catch(error, "failed to print jobs");
  }
}
