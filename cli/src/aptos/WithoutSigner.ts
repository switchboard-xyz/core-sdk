import { AptosBaseCommand as BaseCommand } from "./BaseCommand";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import { SwitchboardProgram } from "@switchboard-xyz/aptos.js";

export abstract class AptosWithoutSignerBaseCommand extends BaseCommand {
  static flags = {
    ...BaseCommand.flags,
    // namedAccount: Flags.string({
    //   description: "",
    //   required: true,
    // }),
  };

  public hasSigner = false;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.program = await SwitchboardProgram.load(
      this.networkId,
      this.rpcUrl,
      this.programId?.toString()
    );
  }
}
