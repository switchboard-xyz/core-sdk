"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50667],{54852:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=n,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26365:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(73013),n=r(49231),o=r(66318),i=r(67547),s=r(42941),c=r(31063),l=r(71821),d=r(15733),m=r(27957),u=r(65137);const p=(0,m.Z)(l.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,m.Z)(c.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function f(e){let{title:t,image:r,imageDark:a,description:c,to:l,sx:m}=e;const{colorMode:f}=(0,u.I)();return n.createElement(d.Z,{href:l,style:{textDecoration:"none"}},n.createElement(p,{dark:"dark"===f?1:0,sx:m},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(g,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===f&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),c?n.createElement(n.Fragment,null,n.createElement(s.Z,{sx:{marginBottom:"1rem"}}),n.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},c)):n.createElement(n.Fragment,null))))}function b(e){let{items:t,cols:r,sx:o,direction:i,justifyContent:s,alignItems:c}=e;return n.createElement(a.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:c},t.map((e=>n.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},n.createElement(f,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},84189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=r(48041),n=(r(49231),r(54852)),o=r(26365),i=r(43939);const s={sidebar_position:10,title:"@switchboard-xyz/near.js"},c=void 0,l={unversionedId:"near/dev/javascript",id:"near/dev/javascript",title:"@switchboard-xyz/near.js",description:"<a",source:"@site/docs/near/dev/javascript.mdx",sourceDirName:"near/dev",slug:"/near/dev/javascript",permalink:"/near/dev/javascript",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"@switchboard-xyz/near.js"},sidebar:"near",previous:{title:"sbv2-near",permalink:"/near/dev/rust"},next:{title:"Feed Parser",permalink:"/near/dev/feed-parser"}},d={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Load the Switchboard Program",id:"load-the-switchboard-program",level:3},{value:"Create a Queue",id:"create-a-queue",level:3},{value:"Create a Feed",id:"create-a-feed",level:3},{value:"Create a Job",id:"create-a-job",level:3},{value:"Create Feed Permissions",id:"create-feed-permissions",level:3},{value:"Set Feed Permissions",id:"set-feed-permissions",level:3},{value:"Add Feed to Crank",id:"add-feed-to-crank",level:3},{value:"Request a Feed Update",id:"request-a-feed-update",level:3}],u={toc:m},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{style:{padding:"0 5px"},href:"https://www.npmjs.com/package/@switchboard-xyz/near.js"},(0,n.kt)("img",{alt:"NPM Badge",src:"https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-near?color=red&filename=javascript%2Fnear.js%2Fpackage.json&label=%40switchboard-xyz%2Fnear.js&logo=npm"})),(0,n.kt)("p",null,"SDK for interacting with Switchboard V2 on Near."),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(o.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-near/tree/main/javascript/near.js",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/near.js/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @switchboard-xyz/near.js\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"load-the-switchboard-program"},"Load the Switchboard Program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { SwitchboardProgram } from "@switchboard-xyz/near.js";\n\n// from filesystem keypair\nconst program = await SwitchboardProgram.loadFromFs(\n  "testnet", // Network ID\n  "https://rpc.testnet.near.org", // RPC URL\n  accountId // Near Account name\n);\n// from browser\nconst program = await SwitchboardProgram.loadFromBrowser(\n  "testnet", // Network ID\n  "https://rpc.testnet.near.org", // RPC URL\n  accountId // Near Account name\n);\n')),(0,n.kt)("h3",{id:"create-a-queue"},"Create a Queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/near.js";\n\nconst queue = await QueueAccount.create(program, {\n  authority: program.account.accountId,\n  mint: "wrap.test",\n  reward: 0,\n  minStake: 100,\n  queueSize: 100,\n  oracleTimeout: 180,\n  unpermissionedFeeds: true,\n});\nconsole.log(await queue.loadData());\n')),(0,n.kt)("h3",{id:"create-a-feed"},"Create a Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/near.js";\n\nconst aggregator = await AggregatorAccount.create(program, {\n  authority: program.account.accountId,\n  queue: queue.address,\n  name: Buffer.from(""),\n  metadata: Buffer.from(""),\n  batchSize: 1,\n  minOracleResults: 1,\n  minJobResults: 1,\n  minUpdateDelaySeconds: 5,\n  startAfter: 0,\n  varianceThreshold: sbv2.SwitchboardDecimal.fromBig(new Big(0)),\n  forceReportPeriod: 0,\n  crank: crank.address,\n  rewardEscrow: escrow.address,\n  historyLimit: 1000,\n});\nconsole.log(await aggregator.loadData());\n')),(0,n.kt)("h3",{id:"create-a-job"},"Create a Job"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { JobAccount } from "@switchboard-xyz/near.js";\n\nconst job = await JobAccount.create(program, {\n  data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),\n  name: Buffer.from("Job1"),\n  metadata: Buffer.from("Job1 - FtxUS BTC/USD"),\n});\nconsole.log(await job.loadData());\n')),(0,n.kt)("p",null,"Add Job to Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await aggregator.addJob({\n  job: job.address,\n  weight: 1,\n});\n")),(0,n.kt)("h3",{id:"create-feed-permissions"},"Create Feed Permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { PermissionAccount } from "@switchboard-xyz/near.js";\n\nconst permission = await PermissionAccount.create(program, {\n  authority: program.account.accountId,\n  granter: queue.address,\n  grantee: aggregator.address,\n});\n')),(0,n.kt)("h3",{id:"set-feed-permissions"},"Set Feed Permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await permission.set({\n  permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,\n  enable: true,\n});\n")),(0,n.kt)("h3",{id:"add-feed-to-crank"},"Add Feed to Crank"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { CrankAccount } from "@switchboard-xyz/near.js";\n\nconst crank = new CrankAccount({ program, address: crankAddress });\nawait crank.push({\n  aggregator: aggregatorAccount.address,\n});\n')),(0,n.kt)("h3",{id:"request-a-feed-update"},"Request a Feed Update"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { EscrowAccount } from "@switchboard-xyz/near.js";\n\nconst escrowAccount = await EscrowAccount.getOrCreateStaticAccount(program);\nawait aggregatorAccount.openRound({\n  rewardRecipient: escrowAccount.address,\n});\n')))}g.isMDXComponent=!0}}]);