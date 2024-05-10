import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey, TransactionMessage } from "@solana/web3.js";
import {
  InstructionUtils,
  Oracle,
  Queue,
  SB_ON_DEMAND_PID,
  SwitchboardPermission,
} from "@switchboard-xyz/on-demand";
import * as bs58 from "bs58";
import chalk from "chalk";

export default class QueueAddMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Add allowed measurement to the queue";

  static flags = {
    ...BaseCommand.flags,
    mrEnclave: Flags.string({
      description: "Hex encoded mrEnclave",
      required: true,
    }),
    asProposal: Flags.boolean({
      description: "output the instruction as a proposal",
      required: false,
    }),
  };

  static args = {
    queue: Args.string({
      description: "The queue account to configure",
    }),
  };

  async run() {
    const { args, flags } = await this.parse(QueueAddMrEnclave);
    const payerKp = (this.program.provider.wallet as any).payer;
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    const queue = new Queue(program, new PublicKey(args.queue!));
    const ix = await queue.addMrEnclaveIx({
      mrEnclave: Buffer.from(flags.mrEnclave, "hex"),
    });
    if (flags.asProposal) {
      const tx = new TransactionMessage({
        recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
        payerKey: wallet.publicKey,
        instructions: [ix],
      });
      const msg = tx.compileToLegacyMessage();
      console.log(`Proposal transaction: ${bs58.encode(msg.serialize())}`);
    } else {
      const tx = await InstructionUtils.asV0Tx(program, [ix]);
      tx.sign([payerKp]);
      const signature = await connection.sendTransaction(tx);
      console.log(`Signature: ${signature}`);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to configure queue mrEnclave");
  }
}
