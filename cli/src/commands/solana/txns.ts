import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana/index";

import { Args, Flags } from "@oclif/core";
import type {
  ConfirmedSignatureInfo,
  ParsedTransactionMeta,
  TransactionVersion,
} from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import {
  BN,
  BNtoDateTimeString,
  isBase58,
  toDateTimeString,
} from "@switchboard-xyz/common";
import { types } from "@switchboard-xyz/solana.js";
import base58 from "bs58";
import fs from "fs";
import _ from "lodash";

const discriminatorMap = new Map([
  [Buffer.from([66, 57, 216, 251, 165, 107, 128, 98]).toString(), "CrankPop"],
  [
    Buffer.from([153, 122, 177, 151, 240, 86, 240, 213]).toString(),
    "CrankPopV2",
  ],
  [
    Buffer.from([236, 77, 162, 17, 192, 67, 224, 217]).toString(),
    "AggregatorSetConfig",
  ],
  [
    Buffer.from([140, 176, 3, 173, 23, 2, 4, 81]).toString(),
    "AggregatorSetAuthority",
  ],
  [
    Buffer.from([111, 152, 142, 153, 206, 39, 22, 148]).toString(),
    "AggregatorSetResolutionMode",
  ],
  [
    Buffer.from([194, 248, 179, 97, 237, 24, 9, 110]).toString(),
    "AggregatorSetQueue",
  ],
  [
    Buffer.from([228, 238, 67, 53, 69, 176, 185, 227]).toString(),
    "AggregatorLock",
  ],
  [
    Buffer.from([21, 67, 5, 0, 74, 168, 51, 192]).toString(),
    "AggregatorSaveResult",
  ],
  [
    Buffer.from([33, 3, 188, 52, 185, 222, 0, 4]).toString(),
    "AggregatorSaveResultV2",
  ],
  [
    Buffer.from([239, 69, 229, 179, 156, 246, 118, 191]).toString(),
    "AggregatorOpenRound",
  ],
  [
    Buffer.from([10, 175, 217, 130, 111, 35, 117, 54]).toString(),
    "OracleHeartbeat",
  ],
  [
    Buffer.from([168, 190, 157, 252, 159, 226, 241, 89]).toString(),
    "LeaseInit",
  ],
  [
    Buffer.from([202, 70, 141, 29, 136, 142, 230, 118]).toString(),
    "LeaseExtend",
  ],
  [
    Buffer.from([186, 41, 100, 248, 234, 81, 61, 169]).toString(),
    "LeaseWithdraw",
  ],
  [
    Buffer.from([255, 4, 88, 2, 213, 175, 87, 22]).toString(),
    "LeaseSetAuthority",
  ],
  [Buffer.from([155, 175, 160, 18, 7, 147, 249, 16]).toString(), "CrankPush"],
  [
    Buffer.from([239, 69, 229, 179, 156, 246, 118, 191]).toString(),
    "AggregatorOpenRound",
  ],
]);

interface ParsedSwitchboardTransaction {
  transaction: undefined;
  slot?: number | undefined;
  meta?: ParsedTransactionMeta | null | undefined;
  blockTime?: number | null | undefined;
  version?: TransactionVersion | undefined;
  timestamp: string;
  ixnName: string;
  success: string;
  signatures: string[] | undefined;
}

export default class SolanaTransactions extends BaseCommand {
  static enableJsonFlag = true;

  static hidden = true;

  static description = "fetch transactions for an on-chain account";

  static flags = {
    ...BaseCommand.flags,
    limit: Flags.integer({
      description: "",
      default: 1000,
    }),
    force: Flags.boolean({
      description: "",
    }),
    saveResult: Flags.boolean({
      description: "only show save result transactions",
      exclusive: ["openRound", "crankPop", "leaseExtend"],
    }),
    openRound: Flags.boolean({
      description: "only show open round transactions",
      exclusive: ["saveResult", "crankPop", "leaseExtend"],
    }),
    crankPop: Flags.boolean({
      description: "only show crank pop transactions",
      exclusive: ["saveResult", "openRound", "leaseExtend"],
    }),
    leaseExtend: Flags.boolean({
      description: "only show lease extend transactions",
      exclusive: ["saveResult", "openRound", "crankPop"],
    }),
  };

  static args = {
    pubkey: Args.string({
      description: "publicKey of the Switchboard account to search for",
      required: true,
    }),
    filename: Args.string({
      required: true,
      description: "filename to save the json file",
    }),
  };

  async run(): Promise<any> {
    const { args, flags } = await this.parse(SolanaTransactions);

    const outputFile = this.normalizePath(args.filename);
    if (fs.existsSync(outputFile) && !flags.force) {
      throw new Error(`File already exists: ${outputFile}`);
    }

    const pubkey = new PublicKey(args.pubkey);

    const signatures: Array<ConfirmedSignatureInfo> = [];
    let lastSig: string | undefined;
    while (signatures.length < flags.limit) {
      try {
        const signatureBatch: ConfirmedSignatureInfo[] =
          await this.program.connection.getSignaturesForAddress(pubkey, {
            before: lastSig,
            limit: 1000,
          });
        lastSig = signatureBatch.slice(-1)[0].signature;
        signatures.push(...signatureBatch);
      } catch {
        break;
      }
    }

    const parsedTransactions: ParsedSwitchboardTransaction[] = (
      await Promise.all(
        _.chunk(signatures, 100).map(async (signatures) => {
          return await this.program.connection.getParsedTransactions(
            signatures.map((s) => s.signature)
          );
        })
      )
    )
      .flat()
      .map((parsedTxn, txnIdx) => {
        const logs = (parsedTxn?.meta?.logMessages ?? []).join("\n");
        let ixnName = "";
        let success: string | boolean = "Unknown";
        const parsedTxnIxns = (
          parsedTxn?.transaction?.message?.instructions ?? []
        ).map((ixn) => {
          if (
            ixn.programId.equals(this.program.oracleProgramId) &&
            "data" in ixn
          ) {
            const ixnData = isBase58(ixn.data)
              ? Buffer.from(base58.decode(ixn.data))
              : Buffer.from(ixn.data, "base64");

            const sbIxnName =
              discriminatorMap.get(ixnData.slice(0, 8).toString()) ??
              "Switchboard Unknown";
            if (sbIxnName !== "") {
              ixnName = sbIxnName;
            }

            switch (sbIxnName) {
              case "AggregatorOpenRound":
              case "OracleHeartbeat":
              case "AggregatorSaveResultV2":
              case "AggregatorSaveResult":
              case "CrankPopV2":
              case "CrankPop": {
                if (
                  logs.includes("AnchorError") ||
                  logs.includes("Crank pop miss")
                ) {
                  success = false;
                  break;
                } else {
                  success = true;
                }
              }
            }

            return {
              ...ixn,
              ixnName: sbIxnName,
            };
          }

          return ixn;
        });

        return {
          timestamp: BNtoDateTimeString(new BN(parsedTxn?.blockTime ?? 0)),
          ixnName: ixnName,
          success,
          signatures: parsedTxn?.transaction.signatures,
          ...parsedTxn,
          transaction: undefined,
          // transaction: {
          //   ...parsedTxn.transaction,
          //   message: {
          //     ...parsedTxn.transaction.message,
          //     instructions: parsedTxnIxns,
          //   },
          // },
        };
      });

    const filteredTransactions: ParsedSwitchboardTransaction[] =
      flags.saveResult
        ? parsedTransactions.filter(
            (t) =>
              t.ixnName === "AggregatorSaveResultV2" ||
              t.ixnName === "AggregatorSaveResult"
          )
        : flags.openRound
        ? parsedTransactions.filter(
            (t) => t.ixnName === "AggregatorSaveResultV2"
          )
        : flags.crankPop
        ? parsedTransactions.filter(
            (t) => t.ixnName === "CrankPop" || t.ixnName === "CrankPopV2"
          )
        : flags.leaseExtend
        ? parsedTransactions.filter((t) => t.ixnName === "LeaseExtend")
        : parsedTransactions;

    let numSuccess = 0;
    let numFailed = 0;

    for (const txn of filteredTransactions) {
      if (typeof txn.success === "boolean") {
        if (txn.success) {
          numSuccess += 1;
        } else {
          numFailed += 1;
        }
      }
    }

    if (numSuccess + numFailed === 0) {
      this.log(`No transactions found`);
      return;
    }

    this.log(`numSuccess: ${numSuccess}`);
    this.log(`numFailed: ${numFailed}`);

    fs.writeFileSync(
      outputFile,
      JSON.stringify(
        filteredTransactions,
        (key, value) => {
          const ignoreKeys: string[] = [
            "postTokenBalances",
            "postBalances",
            "preBalances",
            "preTokenBalances",
          ];
          if (ignoreKeys.includes(key)) {
            return;
          }

          return value;
        },
        2
      )
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to print Switchboard account");
  }
}
