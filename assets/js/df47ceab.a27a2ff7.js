"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2454],{54852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,f=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(95634),a=(n(49231),n(54852)),o=n(62282),i=n(29589);const s={sidebar_position:2,title:"Native Rust: Read Feed On-Chain",description:"Learn how to read a feed using the native Rust runtime."},c=void 0,d={unversionedId:"guides/solana/feeds/rust",id:"guides/solana/feeds/rust",title:"Native Rust: Read Feed On-Chain",description:"Learn how to read a feed using the native Rust runtime.",source:"@site/docs/guides/solana/feeds/rust.mdx",sourceDirName:"guides/solana/feeds",slug:"/guides/solana/feeds/rust",permalink:"/guides/solana/feeds/rust",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Native Rust: Read Feed On-Chain",description:"Learn how to read a feed using the native Rust runtime."},sidebar:"guidesSidebar",previous:{title:"Data Feeds",permalink:"/guides/solana/feeds/"},next:{title:"Anchor: Read Feed On-Chain",permalink:"/guides/solana/feeds/anchor"}},l={},u=[{value:"1. Add switchboard-v2",id:"1-add-switchboard-v2",level:2},{value:"2. <code>read_result</code> Instruction",id:"2-read_result-instruction",level:2},{value:"3. Off-Chain: Read the result!",id:"3-off-chain-read-the-result",level:2}],p={toc:u},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will walk you through how to read a Switchboard data feed using pure\nRust."),(0,a.kt)("p",null,"In order to read a Switchboard data feed, we will need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the switchboard-v2 dependency"),(0,a.kt)("li",{parentName:"ol"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},"read_result")," instruction with the Switchboard data feed as the\nfirst account"),(0,a.kt)("li",{parentName:"ol"},"Submit a transaction on-chain with the ",(0,a.kt)("inlineCode",{parentName:"li"},"read_result")," instruction")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"View the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/examples/feeds/02_spl_native"},"native-feed-parser"),"\nexample on Github.")),(0,a.kt)("h2",{id:"1-add-switchboard-v2"},"1. Add switchboard-v2"),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"switchboard-v2")," crate to your Cargo.toml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nswitchboard-v2 = "0.1"\n')),(0,a.kt)("h2",{id:"2-read_result-instruction"},"2. ",(0,a.kt)("inlineCode",{parentName:"h2"},"read_result")," Instruction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"First"),", we will get the aggregator AccountInfo from the accounts slice."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Next"),", verify the aggregator owner matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"PROGRAM_ID")," in the\nswitchboard-v2 crate."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Then"),", deserialize the AccountInfo into the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/switchboard-v2/latest/switchboard_v2/aggregator/struct.AggregatorAccountData.html"},"AggregatorAccountData (docs.rs)"),"\nstruct."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Then"),", verify the aggregator was updated in the last 300 seconds."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Finally"),", use the TryInto trait to convert the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/switchboard-v2/latest/switchboard_v2/decimal/struct.SwitchboardDecimal.html"},"SwitchboardDecimal (docs.rs)"),"\ninto the ",(0,a.kt)("inlineCode",{parentName:"p"},"f64")," primitive because it's easier to work with."),(0,a.kt)(o.default,{language:"rust",mdxType:"CodeBlock"},i.Z),(0,a.kt)("h2",{id:"3-off-chain-read-the-result"},"3. Off-Chain: Read the result!"),(0,a.kt)("p",null,"We will need to build a Solana transaction that contains our aggregator address\nto read."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@coral-xyz/anchor";\nimport {\n  PublicKey,\n  Transaction,\n  TransactionInstruction,\n} from "@solana/web3.js";\nimport { sleep } from "@switchboard-xyz/common";\nimport {\n  AggregatorAccount,\n  SwitchboardProgram,\n} from "@switchboard-xyz/solana.js";\nimport assert from "assert";\n\ndescribe("native-feed-parser test", () => {\n  const provider = anchor.AnchorProvider.env();\n  anchor.setProvider(provider);\n\n  let switchboard: SwitchboardProgram;\n  let aggregatorAccount: AggregatorAccount;\n\n  it("Read SOL/USD Feed", async () => {\n    const PROGRAM_ID = new PublicKey(""); // Your program ID\n\n    const readSwitchboardAggregatorTxn = new Transaction().add(\n      new TransactionInstruction({\n        keys: [\n          {\n            pubkey: aggregatorAccount.publicKey,\n            isSigner: false,\n            isWritable: false,\n          },\n        ],\n        programId: new PublicKey(PROGRAM_ID),\n        data: Buffer.from([]),\n      })\n    );\n\n    const signature = await provider.sendAndConfirm(\n      readSwitchboardAggregatorTxn\n    );\n\n    // wait for RPC\n    await sleep(2000);\n\n    const logs = await provider.connection.getParsedTransaction(\n      signature,\n      "confirmed"\n    );\n\n    console.log(JSON.stringify(logs?.meta?.logMessages, undefined, 2));\n    const match = JSON.stringify(logs?.meta?.logMessages ?? []).match(\n      new RegExp(/Current feed result is (?<feed_result>\\d+)/)\n    );\n    const feedResult = Number(match?.groups?.feed_result ?? null);\n    console.log(`Feed Result: ${feedResult}`);\n  });\n});\n')))}f.isMDXComponent=!0},29589:(e,t,n)=>{n.d(t,{Z:()=>r});const r="use std::convert::TryInto;\nuse switchboard_solana::prelude::*;\n\nuse solana_program::{\n    account_info::{next_account_info, AccountInfo},\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    program_error::ProgramError,\n    pubkey::Pubkey,\n};\n\nentrypoint!(process_instruction);\n\nfn process_instruction<'a>(\n    _program_id: &'a Pubkey,\n    accounts: &'a [AccountInfo<'a>],\n    _instruction_data: &'a [u8],\n) -> ProgramResult {\n    let accounts_iter = &mut accounts.iter();\n    let aggregator = next_account_info(accounts_iter)?;\n\n    let clock = Clock::get()?;\n\n    // check feed owner\n    let owner = *aggregator.owner;\n    if owner != SWITCHBOARD_PROGRAM_ID {\n        return Err(ProgramError::IncorrectProgramId);\n    }\n\n    // load and deserialize feed\n    let feed = AggregatorAccountData::new(aggregator)?;\n\n    // check if feed has updated in the last 5 minutes\n    let staleness = clock.unix_timestamp - feed.latest_confirmed_round.round_open_timestamp;\n    if staleness > 300 {\n        msg!(\"Feed has not been updated in {} seconds!\", staleness);\n        return Err(ProgramError::InvalidAccountData);\n    }\n\n    // get result\n    let val: f64 = feed.get_result()?.try_into()?;\n    msg!(\"Current feed result is {}!\", val);\n\n    Ok(())\n}\n"}}]);