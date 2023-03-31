"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59301],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2004:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(49231),r=n(19841);const o={tabItem:"tabItem_Z7jx"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},66081:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(48041),r=n(49231),o=n(19841),l=n(51556),c=n(19409),i=n(86449),s=n(80828),u=n(70621);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=i??d;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=n(68213);const h={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function v(e){let{className:t,block:n,selectedValue:c,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==c&&(d(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":c===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},93451:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(229),r=n(65137),o=n(43939),l=n(49231);const c=e=>{const{colorMode:t}=(0,r.I)();let n=(0,o.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),c="inherit";e.lightBg&&"dark"!==t&&(c=e.lightBg),e.darkBg&&"dark"===t&&(c=e.darkBg);let i={};return e.sx&&(i={backgroundColor:c,m:"auto",display:"flex",...i,...e.sx}),l.createElement(a.Z,{component:"img",sx:i,src:n})}},43101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var a=n(48041),r=(n(49231),n(54852)),o=(n(93451),n(15733),n(17558)),l=n(66081),c=n(2004),i=n(75784),s=n(65646);const u='import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\nconst result = AggregatorAccount.decodeLatestValue(aggregator);\nconsole.log(result);\n',d='import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\nconst result = AggregatorAccount.decodeLatestValue(aggregator);\nconsole.log(result);\n',p='import { QueueAccount } from "@switchboard-xyz/solana.js";\nimport { OracleJob } from "@switchboard-xyz/common";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n',g='import { QueueAccount } from "@switchboard-xyz/solana.js";\nimport { OracleJob } from "@switchboard-xyz/common";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n',m={sidebar_position:10,title:"Data Feed Integration"},f=void 0,b={unversionedId:"solana/feed-integration",id:"solana/feed-integration",title:"Data Feed Integration",description:"\x3c!-- ## Configuration",source:"@site/docs/solana/feed-integration.mdx",sourceDirName:"solana",slug:"/solana/feed-integration",permalink:"/solana/feed-integration",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Data Feed Integration"},sidebar:"solana",previous:{title:"Devnet",permalink:"/solana/program/devnet"},next:{title:"Priority Fees",permalink:"/solana/priority-fees"}},h={},v=[{value:"Read a Feed",id:"read-a-feed",level:2},{value:"Rust SDK",id:"rust-sdk",level:3},{value:"Typescript SDK",id:"typescript-sdk",level:3},{value:"CLI",id:"cli",level:3},{value:"Create a Feed",id:"create-a-feed",level:2},{value:"UI",id:"ui",level:3},{value:"Typescript SDK",id:"typescript-sdk-1",level:3},{value:"CLI",id:"cli-1",level:3},{value:"More Resources",id:"more-resources",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why is my feed stale?",id:"why-is-my-feed-stale",level:3}],y={toc:v},k="wrapper";function w(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-a-feed"},"Read a Feed"),(0,r.kt)("h3",{id:"rust-sdk"},"Rust SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},s.Z)),(0,r.kt)(c.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},i.Z))),(0,r.kt)("h3",{id:"typescript-sdk"},"Typescript SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},d)),(0,r.kt)(c.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},u))),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 solana aggregator print --mainnetBeta $AGGREGATOR_PUBKEY\n")),(0,r.kt)("admonition",{title:"CLI --json flag",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag to return a JSON object representing the\naccount state which can then be piped to a file descriptor.")),(0,r.kt)("h2",{id:"create-a-feed"},"Create a Feed"),(0,r.kt)("h3",{id:"ui"},"UI"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/publisher"},"Publisher")," for creating a feed with the UI."),(0,r.kt)("h3",{id:"typescript-sdk-1"},"Typescript SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},g)),(0,r.kt)(c.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},p))),(0,r.kt)("h3",{id:"cli-1"},"CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 solana aggregator create $QUEUE_PUBKEY \\\n    --keypair ~/.config/solana/devnet.json \\\n    --crankKey $CRANK_PUBKEY \\\n    --name "My_Test_Feed" \\\n    --updateInterval 10 \\\n    --minOracles 1 \\\n    --batchSize 1 \\\n    --leaseAmount 1.337 \\\n    --job ./directory/jobs/btc/binanceCom.json \\\n    --job ./directory/jobs/btc/kraken.json \\\n    --job ./directory/jobs/btc/bitfinex.json\n')),(0,r.kt)("h2",{id:"more-resources"},"More Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-feed-parser"},"anchor-feed-parser"),":\nView an anchor example showing how to deserialize and read a Switchboard data\nfeed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/javascript/solana.js/test/aggregator.spec.ts"},"aggregator.spec.ts"),":\nView the javascript tests for an aggregator and see sample implementations")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"why-is-my-feed-stale"},"Why is my feed stale?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the feed have enough funds in its lease account?"),(0,r.kt)("li",{parentName:"ul"},"Does the feed have the right permissions for its queue?"),(0,r.kt)("li",{parentName:"ul"},"Is the feed currently on a crank?"),(0,r.kt)("li",{parentName:"ul"},"Is a new round being opened?"))))}w.isMDXComponent=!0},65646:(e,t,n)=>{n.d(t,{Z:()=>a});const a="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},75784:(e,t,n)=>{n.d(t,{Z:()=>a});const a='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);