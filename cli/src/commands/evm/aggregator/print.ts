import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString, stripTrailingZeros } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { fetchJobsFromIPFS, Job, Permissions } from "@switchboard-xyz/evm.js";
import chalk from "chalk";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator";

  static flags = {
    ...BaseCommand.flags,
    jobs: Flags.boolean({
      description: "print the job definitions for the aggregator",
    }),
    results: Flags.boolean({
      description: "print the current results for the aggregator",
    }),
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorPrint);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorAddress
    );

    let permissions: string | undefined;
    try {
      permissions = await Permissions.getSwitchboardPermissions(
        this.program,
        aggregator.queueAddress,
        aggregatorAccount.address
      );
    } catch {}

    let jobs: Job[] | undefined;
    try {
      jobs = await fetchJobsFromIPFS(aggregator.jobsHash);
    } catch {}

    const aggregatorData = {
      ...aggregator,
      permissions,
      jobs,
    };

    if (flags.json) {
      return this.normalizeAccountData(
        aggregatorAccount.address,
        aggregatorData
      );
    }

    this.prettyPrintAggregator(aggregatorData, aggregatorAccount.address);

    if (flags.results) {
      const results = await aggregatorAccount.fetchAllResults();
      this.log(
        chalk.underline(
          chalkString("\n## Results", Array.from({ length: 44 }).join(" "))
        )
      );
      if (results && results.length > 0) {
        for (const result of results) {
          this.logger.info(
            chalkString(
              result.timestamp.toString(),
              stripTrailingZeros(result.result.toString())
            )
          );
        }
      } else {
        this.log("No results found");
      }
    }

    if (flags.jobs && jobs && (jobs?.length ?? 0) > 0) {
      this.prettyPrintJobs(jobs);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to print aggregator");
  }
}
