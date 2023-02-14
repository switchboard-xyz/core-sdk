"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43644],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(83117),r=a(67294),o=a(86010),l=a(12466),s=a(76775),c=a(91980),u=a(67392),i=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=g(e),[l,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=null!=c?c:d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=a(72389);const h="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),g=e=>{const t=e.currentTarget,a=i.indexOf(t),n=u[a].value;n!==s&&(d(t),c(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{var n;const t=i.indexOf(e.currentTarget)+1;a=null!=(n=i[t])?n:i[0];break}case"ArrowLeft":{var r;const t=i.indexOf(e.currentTarget)-1;a=null!=(r=i[t])?r:i[i.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function _(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},24008:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(99226),r=a(92949),o=a(44996),l=a(67294);const s=e=>{const{colorMode:t}=(0,r.I)();let a=(0,o.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),s="inherit";e.lightBg&&"dark"!==t&&(s=e.lightBg),e.darkBg&&"dark"===t&&(s=e.darkBg);let c={};return e.sx&&(c={backgroundColor:s,m:"auto",display:"flex",...c,...e.sx}),l.createElement(n.Z,{component:"img",sx:c,src:a})}},56982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),o=(a(24008),a(39960),a(90814)),l=a(74866),s=a(85162),c=a(85383),u=a(78134);const i={sidebar_position:10,title:"Integration",slug:"."},d=void 0,g={unversionedId:"solana/feeds/integration",id:"solana/feeds/integration",title:"Integration",description:"\x3c!-- ## Configuration",source:"@site/docs/solana/feeds/integration.mdx",sourceDirName:"solana/feeds",slug:"/solana/feeds/",permalink:"/solana/feeds/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Integration",slug:"."},sidebar:"solana",previous:{title:"Devnet",permalink:"/solana/program/devnet"},next:{title:"Priority Fees",permalink:"/solana/feeds/priority-fees"}},m={},p=[{value:"Read a Feed",id:"read-a-feed",level:2},{value:"Rust SDK",id:"rust-sdk",level:3},{value:"Typescript SDK",id:"typescript-sdk",level:3},{value:"CLI",id:"cli",level:3},{value:"Create a Feed",id:"create-a-feed",level:2},{value:"UI",id:"ui",level:3},{value:"Typescript SDK",id:"typescript-sdk-1",level:3},{value:"CLI",id:"cli-1",level:3},{value:"More Resources",id:"more-resources",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why is my feed stale?",id:"why-is-my-feed-stale",level:3}],f={toc:p};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-a-feed"},"Read a Feed"),(0,r.kt)("h3",{id:"rust-sdk"},"Rust SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},u.Z)),(0,r.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},c.Z))),(0,r.kt)("h3",{id:"typescript-sdk"},"Typescript SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},'import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\nconst result = AggregatorAccount.decodeLatestValue(aggregator);\nconsole.log(result);\n')),(0,r.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},'import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\nconst result = AggregatorAccount.decodeLatestValue(aggregator);\nconsole.log(result);\n'))),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 solana aggregator print --mainnetBeta $AGGREGATOR_PUBKEY\n")),(0,r.kt)("admonition",{title:"CLI --json flag",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag to return a JSON object representing the\naccount state which can then be piped to a file descriptor.")),(0,r.kt)("h2",{id:"create-a-feed"},"Create a Feed"),(0,r.kt)("h3",{id:"ui"},"UI"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/publisher"},"Publisher")," for creating a feed with the UI."),(0,r.kt)("h3",{id:"typescript-sdk-1"},"Typescript SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\nimport { OracleJob } from "@switchboard-xyz/common";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n')),(0,r.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\nimport { OracleJob } from "@switchboard-xyz/common";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n'))),(0,r.kt)("h3",{id:"cli-1"},"CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 solana aggregator create $QUEUE_PUBKEY \\\n    --keypair ~/.config/solana/devnet.json \\\n    --crankKey $CRANK_PUBKEY \\\n    --name "My_Test_Feed" \\\n    --updateInterval 10 \\\n    --minOracles 1 \\\n    --batchSize 1 \\\n    --leaseAmount 1.337 \\\n    --job ./directory/jobs/btc/binanceCom.json \\\n    --job ./directory/jobs/btc/kraken.json \\\n    --job ./directory/jobs/btc/bitfinex.json\n')),(0,r.kt)("h2",{id:"more-resources"},"More Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-feed-parser"},"anchor-feed-parser"),":\nView an anchor example showing how to deserialize and read a Switchboard data\nfeed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/javascript/solana.js/test/aggregator.spec.ts"},"aggregator.spec.ts"),":\nView the javascript tests for an aggregator and see sample implementations")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"why-is-my-feed-stale"},"Why is my feed stale?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the feed have enough funds in its lease account?"),(0,r.kt)("li",{parentName:"ul"},"Does the feed have the right permissions for its queue?"),(0,r.kt)("li",{parentName:"ul"},"Is the feed currently on a crank?"),(0,r.kt)("li",{parentName:"ul"},"Is a new round being opened?"))))}b.isMDXComponent=!0},78134:(e,t,a)=>{a.d(t,{Z:()=>n});const n="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},85383:(e,t,a)=>{a.d(t,{Z:()=>n});const n='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);