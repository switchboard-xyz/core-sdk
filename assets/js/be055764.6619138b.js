"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3358],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(83117),n=a(67294),o=a(86010),s=a(12466),i=a(76775),l=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,i]=(0,n.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const n=null!=(t=r.find((e=>e.default)))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=g({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=null!=l?l:d;return p({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==i&&(d(t),l(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;a=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var n;const t=u.indexOf(e.currentTarget)-1;a=null!=(n=u[t])?n:u[u.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},10686:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(44267),n=a(15861),o=a(21519),s=a(78445),i=a(44073),l=a(67294),c=a(39960),u=a(13264),d=a(92949);const m=(0,u.Z)(i.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),p=(0,u.Z)(s.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:a,imageDark:s,description:i,to:u,sx:g}=e;const{colorMode:b}=(0,d.I)();return l.createElement(c.Z,{href:u,style:{textDecoration:"none"}},l.createElement(m,{dark:"dark"===b?1:0,sx:g},l.createElement(r.Z,{sx:{height:"100%",width:"100%"}},l.createElement(p,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&s?s:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),i?l.createElement(l.Fragment,null,l.createElement(o.Z,{sx:{marginBottom:"1rem"}}),l.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},i)):l.createElement(l.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(86886),n=a(67294),o=a(10686);function s(e){let{items:t,cols:a,sx:s,direction:i,justifyContent:l,alignItems:c}=e;return n.createElement(r.ZP,{container:!0,spacing:3,direction:null!=i?i:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return n.createElement(r.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},n.createElement(o.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:s}))})))}},68704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=a(83117),n=(a(67294),a(3905)),o=a(74866),s=a(85162),i=a(17547),l=a(44996);const c={sidebar_position:10,slug:".",title:"@switchboard-xyz/near.js"},u=void 0,d={unversionedId:"near/dev/javascript/client",id:"near/dev/javascript/client",title:"@switchboard-xyz/near.js",description:"GitHub&nbsp;",source:"@site/docs/near/dev/javascript/client.mdx",sourceDirName:"near/dev/javascript",slug:"/near/dev/javascript/",permalink:"/near/dev/javascript/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"@switchboard-xyz/near.js"},sidebar:"near",previous:{title:"Sbv2 CLI",permalink:"/near/dev/cli"},next:{title:"sbv2-near",permalink:"/near/dev/rust/"}},m={},p=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Load the Switchboard Program",id:"load-the-switchboard-program",level:2},{value:"Create a Queue",id:"create-a-queue",level:2},{value:"Create a Feed",id:"create-a-feed",level:2},{value:"Create a Job",id:"create-a-job",level:2},{value:"Add Job to Feed",id:"add-job-to-feed",level:2},{value:"Create Feed Permissions",id:"create-feed-permissions",level:2},{value:"Set Feed Permissions",id:"set-feed-permissions",level:2},{value:"Add Feed to Crank",id:"add-feed-to-crank",level:2},{value:"Request a Feed Update",id:"request-a-feed-update",level:2}],g={toc:p};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-aptos"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/@switchboard-xyz%2Faptos.js"},(0,n.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@switchboard-xyz%2Faptos.js.svg",alt:"npm version"}))),(0,n.kt)("p",null,"SDK for interacting with Switchboard V2 on Near."),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-near/tree/main/javascript/near.js",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/near.js/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @switchboard-xyz/near.js\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn i @switchboard-xyz/near.js\n# couldn't auto-convert command\n")))),(0,n.kt)("h2",{id:"load-the-switchboard-program"},"Load the Switchboard Program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { SwitchboardProgram } from "@switchboard-xyz/near.js";\n\n// from filesystem keypair\nconst program = await SwitchboardProgram.loadFromFs(\n  "testnet", // Network ID\n  "https://rpc.testnet.near.org", // RPC URL\n  accountId // Near Account name\n);\n// from browser\nconst program = await SwitchboardProgram.loadFromBrowser(\n  "testnet", // Network ID\n  "https://rpc.testnet.near.org", // RPC URL\n  accountId // Near Account name\n);\n')),(0,n.kt)("h2",{id:"create-a-queue"},"Create a Queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/near.js";\n\nconst queue = await QueueAccount.create(program, {\n  authority: program.account.accountId,\n  mint: "wrap.test",\n  reward: 0,\n  minStake: 100,\n  queueSize: 100,\n  oracleTimeout: 180,\n  unpermissionedFeeds: true,\n});\nconsole.log(await queue.loadData());\n')),(0,n.kt)("h2",{id:"create-a-feed"},"Create a Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/near.js";\n\nconst aggregator = await AggregatorAccount.create(program, {\n  authority: program.account.accountId,\n  queue: queue.address,\n  name: Buffer.from(""),\n  metadata: Buffer.from(""),\n  batchSize: 1,\n  minOracleResults: 1,\n  minJobResults: 1,\n  minUpdateDelaySeconds: 5,\n  startAfter: 0,\n  varianceThreshold: sbv2.SwitchboardDecimal.fromBig(new Big(0)),\n  forceReportPeriod: 0,\n  crank: crank.address,\n  rewardEscrow: escrow.address,\n  historyLimit: 1000,\n});\nconsole.log(await aggregator.loadData());\n')),(0,n.kt)("h2",{id:"create-a-job"},"Create a Job"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { JobAccount } from "@switchboard-xyz/near.js";\n\nconst job = await JobAccount.create(program, {\n  data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),\n  name: Buffer.from("Job1"),\n  metadata: Buffer.from("Job1 - FtxUS BTC/USD"),\n});\nconsole.log(await job.loadData());\n')),(0,n.kt)("h2",{id:"add-job-to-feed"},"Add Job to Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await aggregator.addJob({\n  job: job.address,\n  weight: 1,\n});\n")),(0,n.kt)("h2",{id:"create-feed-permissions"},"Create Feed Permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { PermissionAccount } from "@switchboard-xyz/near.js";\n\nconst permission = await PermissionAccount.create(program, {\n  authority: program.account.accountId,\n  granter: queue.address,\n  grantee: aggregator.address,\n});\n')),(0,n.kt)("h2",{id:"set-feed-permissions"},"Set Feed Permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await permission.set({\n  permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,\n  enable: true,\n});\n")),(0,n.kt)("h2",{id:"add-feed-to-crank"},"Add Feed to Crank"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { CrankAccount } from "@switchboard-xyz/near.js";\n\nconst crank = new CrankAccount({ program, address: crankAddress });\nawait crank.push({\n  aggregator: aggregatorAccount.address,\n});\n')),(0,n.kt)("h2",{id:"request-a-feed-update"},"Request a Feed Update"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { EscrowAccount } from "@switchboard-xyz/near.js";\n\nconst escrowAccount = await EscrowAccount.getOrCreateStaticAccount(program);\nawait aggregatorAccount.openRound({\n  rewardRecipient: escrowAccount.address,\n});\n')))}b.isMDXComponent=!0}}]);