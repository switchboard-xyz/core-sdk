"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[745],{54852:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92994:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(84323),r=a(432),o=a(49231),i=a(19841),l=a(9790),s=a(17109),c=a(20001),u=a(78362),d=a(68248),p=a(15698);function m(e){return(0,p.Z)("MuiTypography",e)}(0,a(40433).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=a(20264);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=o.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiTypography"}),o=(e=>y[e]||e)(a.color),c=(0,l.Z)((0,r.Z)({},a,{color:o})),{align:p="inherit",className:v,component:k,gutterBottom:w=!1,noWrap:x=!1,paragraph:T=!1,variant:S="body1",variantMapping:A=f}=c,C=(0,n.Z)(c,g),E=(0,r.Z)({},c,{align:p,color:o,className:v,component:k,gutterBottom:w,noWrap:x,paragraph:T,variant:S,variantMapping:A}),Z=k||(T?"p":A[S]||f[S])||"span",I=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:r,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,a&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,s.Z)(l,m,i)})(E);return(0,h.jsx)(b,(0,r.Z)({as:Z,ref:t,ownerState:E,className:(0,i.Z)(I.root,v)},C))}))},68248:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a(5393).Z},4225:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(49231),r=a(19841);const o={tabItem:"tabItem_Hnis"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},15078:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(432),r=a(49231),o=a(19841),i=a(18665),l=a(88777),s=a(67095);const c={tabList:"tabList_IpD_",tabItem:"tabItem_lwlC"};function u(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function d(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(d,(0,n.Z)({},e,t)))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},88777:(e,t,a)=>{a.d(t,{Y:()=>p});var n=a(49231),r=a(19409),o=a(62002),i=a(17242),l=a(75601);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,m]=d({queryString:a,groupId:r}),[h,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,l.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=p??h;return u({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),g(e)}),[m,g,o]),tabValues:o}}},97730:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(49231),r=a(55013),o=a(50853),i=a(92994);const l=(0,a(20001).ZP)("div")((e=>{let{dark:t}=e;return{display:"flex",width:"100%",height:"100%",padding:"32px",gap:"16px",border:"solid 1px #E8E8E8",borderRadius:"16px",flexDirection:"column",boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)"}})),s=e=>{let{title:t,content:a}=e;const{colorMode:s}=(0,r.I)();return n.createElement("div",null,n.createElement(l,{dark:Number("dark"===s)},n.createElement(o.ZP,{container:!0,spacing:1,justifyContent:"flex-start",alignItems:"center"},n.createElement(o.ZP,{item:!0,xs:12},n.createElement(i.Z,{variant:"h6",style:{fontWeight:"bold"}},t)),n.createElement(o.ZP,{item:!0,xs:12},n.createElement(i.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:a}})))))}},86963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>k,default:()=>C,frontMatter:()=>v,metadata:()=>w,toc:()=>T});var n=a(432),r=(a(49231),a(54852)),o=a(18150),i=a(15078),l=a(4225),s=a(97730);const c='import { parseMrEnclave } from "@switchboard-xyz/common";\nimport type { SwitchboardProgram } from "@switchboard-xyz/solana.js";\nimport {\n  AttesationQueueAccount,\n  FunctionAccount,\n} from "@switchboard-xyz/solana.js";\n\nlet program: SwitchboardProgram;\nconst attestationQueueAccount = new AttesationQueueAccount(\n  program,\n  "2ie3JZfKcvsRLsJaP5fSo43gUo1vsurnUAtAgUdUAiDG" // mainnet attestation queue\n);\n\nconst [functionAccount] = await FunctionAccount.create(program, {\n  name: "FUNCTION_NAME",\n  metadata: "FUNCTION_METADATA",\n  schedule: "30 * * * * *", // every 30 seconds\n  container: "switchboardlabs/basic-binance-oracle",\n  containerRegistry: "dockerhub",\n  version: "latest",\n  mrEnclave: parseMrEnclave("0xABC123"),\n  attestationQueue: attestationQueueAccount,\n});\n',u='sb solana function create 2ie3JZfKcvsRLsJaP5fSo43gUo1vsurnUAtAgUdUAiDG \\\n  --name "My Function" \\\n  --metadata "Randomness Callback" \\\n  --schedule "30 * * * * *" \\\n  --containerRegistry dockerhub \\\n  --container "switchboardlabs/basic-binance-oracle" \\\n  --keypair ~/.config/solana/id.json \\\n  --mainnetBeta',d="use switchboard_solana::FunctionAccountData;\n\n#[derive(Accounts)]\npub struct SaveDataInstruction<'info> {\n    // ... your required accounts to modify your program's state\n\n    // We use this to derive and verify the functions enclave state\n    #[account(\n        constraint =\n            function.load()?.validate(\n              &enclave_signer.to_account_info()\n            )?\n    )]\n    pub function: AccountLoader<'info, FunctionAccountData>,\n    pub enclave_signer: Signer<'info>,\n}\n",p='import type {\n  attestationTypes,\n  SwitchboardProgram,\n} from "@swtichboard-xyz/solana.js";\nimport { FunctionAccount } from "@swtichboard-xyz/solana.js";\n\nlet program: SwitchboardProgram;\n\nconst functionAccount = new FunctionAccount(program, "My_Function_Pubkey");\nconst functionState: attestationTypes.FunctionAccountData =\n  await functionAccount.loadData();\n',m="sb solana function print $MY_FUNCTION_PUBKEY --mainnetBeta",h='import type {\n  JobAccount,\n  SwitchboardProgram,\n} from "@switchboard-xyz/solana.js";\nimport { OracleQueueAccount } from "@switchboard-xyz/solana.js";\n\nlet program: SwitchboardProgram;\nlet jobAccount: JobAccount;\n\nconst queueAccount = new OracleQueueAccount(\n  program,\n  "uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX"\n); // devnet\n\nconst [aggregatorAccount] = await queueAccount.createFeed({\n  batchSize: 1,\n  minRequiredOracleResults: 1,\n  minRequiredJobResults: 1,\n  minUpdateDelaySeconds: 60,\n  fundAmount: 2.5,\n  enable: true,\n  jobs: [\n    // existing job account\n    { pubkey: jobAccount.publicKey },\n    // or create a new job account with the feed\n    {\n      weight: 2,\n      data: OracleJob.encodeDelimited(\n        OracleJob.fromObject({\n          tasks: [\n            {\n              valueTask: {\n                value: 1,\n              },\n            },\n          ],\n        })\n      ).finish(),\n    },\n  ],\n});\n',g='export QUEUE_KEY=uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX\nexport CRANK_KEY=GN9jjCy2THzZxhYqZETmPM3my8vg4R5JyNkgULddUMa5\n\nsb solana aggregator create "$QUEUE_KEY" \\\n    --keypair ~/.config/solana/id.json \\\n    --crankKey "$CRANK_KEY" \\\n    --name "My_Test_Feed" \\\n    --updateInterval 10 \\\n    --minOracles 1 \\\n    --batchSize 1 \\\n    --leaseAmount 0.1 \\\n    --job ./src/oracle-job.json \\\n    --verbose',b='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\n\nuse std::convert::TryInto;\n\n// Instruction accounts\n#[derive(Accounts)]\n#[instruction(params: ReadFeedParams)]\npub struct ReadFeed<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n// Instruction params\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadFeedParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n// Instruction logic\npub fn read_result(\n    ctx: Context<ReadResult>\n) -> anchor_lang::Result<()> {\n    let feed = &ctx.accounts.switchboard_aggregator.load()?;\n\n    // get result\n    let val: f64 = feed.get_result()?.try_into()?;\n\n    // check whether the feed has been updated in the last 300 seconds\n    feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n        .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n    msg!("Current feed result is {}!", val);\n\n    // Your custom logic here\n\n    Ok(())\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n}',f='import type { SwitchboardProgram, types } from "@swtichboard-xyz/solana.js";\nimport { AggregatorAccount } from "@swtichboard-xyz/solana.js";\n\nlet program: SwitchboardProgram;\n\nconst aggregatorAccount = new AggregatorAccount(program, "My_Data_Feed_Pubkey");\nconst aggregatorState: types.AggregatorAccountData =\n  await aggregatorAccount.loadData();\n',y='sb solana function print "$MY_FUNCTION_PUBKEY"',v={slug:"./quick-start",title:"Quick Start",pagination_prev:null,keywords:["Solana","Solana SDK","Oracles","Web3","Off-chain","Randomness"]},k=void 0,w={unversionedId:"solana/quick-start",id:"solana/quick-start",title:"Quick Start",description:"Clone the Switchboard Solana SDK to get started:",source:"@site/docs/201-solana/00-quick-start.mdx",sourceDirName:"201-solana",slug:"/solana/quick-start",permalink:"/solana/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"./quick-start",title:"Quick Start",pagination_prev:null,keywords:["Solana","Solana SDK","Oracles","Web3","Off-chain","Randomness"]},sidebar:"sidebar",next:{title:"Program Addresses",permalink:"/solana/program-addresses"}},x={},T=[{value:"Functions",id:"functions",level:2},{value:"Create a Scheduled Function",id:"create-a-scheduled-function",level:3},{value:"Read a Function",id:"read-a-function",level:3},{value:"Debug a Function",id:"debug-a-function",level:3},{value:"Data Feeds",id:"data-feeds",level:2},{value:"Create a Data Feed",id:"create-a-data-feed",level:3},{value:"Read a Data Feed",id:"read-a-data-feed",level:3}],S={toc:T},A="wrapper";function C(e){let{components:t,...a}=e;return(0,r.kt)(A,(0,n.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Clone the Switchboard Solana SDK to get started:"),(0,r.kt)(o.default,{language:"bash",mdxType:"CodeBlock"},"git clone https://github.com/switchboard-xyz/solana-sdk"),(0,r.kt)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px"}},(0,r.kt)(s.Z,{title:"Quick Links",content:'\n      <ul>\n        <li><a href="/solana/program-sdk">Program & SDK</a></li>\n        <li><a href="https://github.com/switchboard-xyz/solana-sdk">Github SDK</a></li>\n      </ul>\n    ',mdxType:"SimpleCard"}),(0,r.kt)(s.Z,{title:"Libraries",content:'\n      <ul>\n        <li><a href="../api/solana.js">@switchboard-xyz/solana.js</a></li>\n        <li><a href="https://docs.rs/switchboard-solana/latest/switchboard_solana">Rust: switchboard-solana</a></li>\n        <li><a href="../api/cli">Switchboard CLI</a></li>\n      </ul>\n    ',mdxType:"SimpleCard"}),(0,r.kt)(s.Z,{title:"Github Examples",content:'\n      <ul>\n        <li><a href="https://github.com/switchboard-xyz/solana-sdk/tree/main/examples/feeds">Data Feeds Examples</a></li>\n        <li><a href="https://github.com/switchboard-xyz/solana-sdk/tree/main/examples/functions">Functions Examples</a></li>\n        <li><a href="https://github.com/switchboard-xyz/solana-simple-randomness-example">Randomness Function</a></li>\n      </ul>\n    ',mdxType:"SimpleCard"}),(0,r.kt)(s.Z,{title:"Guides",content:'\n      <ul>\n        <li><a href="">Building Data Feeds through Task Runner</a></li>\n        <li><a href="">Building Data Feeds through Functions</a></li>\n        <li><a href="">Data Feeds Best Practices</a></li>\n      </ul>\n    ',mdxType:"SimpleCard"})),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"create-a-scheduled-function"},"Create a Scheduled Function"),(0,r.kt)("p",null,"The examples below show how to create a Switchboard Function that runs the\n",(0,r.kt)("inlineCode",{parentName:"p"},"switchboardlabs/basic-binance-oracle:latest")," container from dockerhub every 30\nseconds."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"typescript",mdxType:"CodeBlock"},c)),(0,r.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"typescript",mdxType:"CodeBlock"},u))),(0,r.kt)("h3",{id:"read-a-function"},"Read a Function"),(0,r.kt)("p",null,"Switchboard Functions allow you to execute arbitrary instructions as long as the\nfunctions ",(0,r.kt)("inlineCode",{parentName:"p"},"enclave.signer")," has signed the transaction. This keypair gets\ngenerated within the enclave so we can prove the transaction was built securely."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Rust",label:"Rust",default:!0,default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"This example shows how to verify that the functions `enclave.signer` has signed your custom instructions."),(0,r.kt)(o.default,{language:"rust",mdxType:"CodeBlock"},d)),(0,r.kt)(l.Z,{value:"Javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"typescript",mdxType:"CodeBlock"},p)),(0,r.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"bash",mdxType:"CodeBlock"},m))),(0,r.kt)("h3",{id:"debug-a-function"},"Debug a Function"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Coming Soon!")),(0,r.kt)("p",null,"The Switchboard Function developer tooling is still in its early stages. By the\nend of Q3 we will support a function simulation server, an endpoint to view\ncontainer logs, and some helper scripts to manage your protocols functions."),(0,r.kt)("h2",{id:"data-feeds"},"Data Feeds"),(0,r.kt)("h3",{id:"create-a-data-feed"},"Create a Data Feed"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"typescript",mdxType:"CodeBlock"},h)),(0,r.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"bash",mdxType:"CodeBlock"},g))),(0,r.kt)("h3",{id:"read-a-data-feed"},"Read a Data Feed"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)(o.default,{language:"rust",mdxType:"CodeBlock"},b)),(0,r.kt)(l.Z,{value:"Javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"javascript",mdxType:"CodeBlock"},f)),(0,r.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.kt)(o.default,{language:"bash",mdxType:"CodeBlock"},y),(0,r.kt)("p",null,"You need to add `--mainnetBeta` to view a function for the mainnet-beta network. The default network is devnet."))))}C.isMDXComponent=!0}}]);