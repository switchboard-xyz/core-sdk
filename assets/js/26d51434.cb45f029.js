"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(83117),n=a(67294),o=a(86010),l=a(72389),i=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a;const{lazy:l,block:p,defaultValue:g,values:m,groupId:b,className:h}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===g?g:null!=(t=null!=g?g:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:x}=(0,s.U)(),[A,j]=(0,n.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==A&&v.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,a=N.indexOf(t),r=v[a].value;r!==A&&(Z(t),j(r),null!=b&&x(b,String(r)))},T=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{var r;const t=N.indexOf(e.currentTarget)+1;a=null!=(r=N[t])?r:N[0];break}case"ArrowLeft":{var n;const t=N.indexOf(e.currentTarget)-1;a=null!=(n=N[t])?n:N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>N.push(e),onKeyDown:T,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function g(e){const t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},27433:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(44267),n=a(15861),o=a(21519),l=a(80102),i=a(83117),s=a(67294),c=a(86010),u=a(94780),d=a(33616),p=a(90948),g=a(34867);function m(e){return(0,g.Z)("MuiCardHeader",e)}const b=(0,a(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=a(85893);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,i.Z)({[`& .${b.title}`]:t.title,[`& .${b.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),y=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),w=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),k=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),x=s.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:o,className:s,component:p="div",disableTypography:g=!1,subheader:b,subheaderTypographyProps:x,title:A,titleTypographyProps:j}=a,N=(0,l.Z)(a,f),Z=(0,i.Z)({},a,{component:p,disableTypography:g}),O=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)})(Z);let T=A;null==T||T.type===n.Z||g||(T=(0,h.jsx)(n.Z,(0,i.Z)({variant:o?"body2":"h5",className:O.title,component:"span",display:"block"},j,{children:T})));let E=b;return null==E||E.type===n.Z||g||(E=(0,h.jsx)(n.Z,(0,i.Z)({variant:o?"body2":"body1",className:O.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:E}))),(0,h.jsxs)(v,(0,i.Z)({className:(0,c.Z)(O.root,s),as:p,ref:t,ownerState:Z},N,{children:[o&&(0,h.jsx)(y,{className:O.avatar,ownerState:Z,children:o}),(0,h.jsxs)(k,{className:O.content,ownerState:Z,children:[T,E]}),r&&(0,h.jsx)(w,{className:O.action,ownerState:Z,children:r})]}))}));var A=a(44073),j=a(39960),N=a(13264),Z=a(92949);const O=(0,N.Z)(A.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),T=(0,N.Z)(x)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function E(e){let{title:t,image:a,imageDark:l,description:i,to:c,sx:u}=e;const{colorMode:d}=(0,Z.I)();return s.createElement(j.Z,{href:c,style:{textDecoration:"none"}},s.createElement(O,{dark:"dark"===d?1:0,sx:u},s.createElement(r.Z,{sx:{height:"100%",width:"100%"}},s.createElement(T,{avatar:s.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===d&&l?l:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),i?s.createElement(s.Fragment,null,s.createElement(o.Z,{sx:{marginBottom:"1rem"}}),s.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},i)):s.createElement(s.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(86886),n=a(67294),o=a(27433);function l(e){let{items:t,cols:a,sx:l}=e;return n.createElement(r.ZP,{container:!0,spacing:3},t.map((e=>{var t;return n.createElement(r.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},n.createElement(o.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:l}))})))}},97157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var r=a(83117),n=(a(67294),a(3905)),o=a(65488),l=a(85162),i=a(17547),s=a(44996);const c={sidebar_position:20,title:"Javascript",slug:"."},u=void 0,d={unversionedId:"solana/dev/javascript/index",id:"solana/dev/javascript/index",title:"Javascript",description:"GitHub&nbsp;&nbsp;",source:"@site/docs/solana/dev/javascript/index.mdx",sourceDirName:"solana/dev/javascript",slug:"/solana/dev/javascript/",permalink:"/solana/dev/javascript/",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Javascript",slug:"."},sidebar:"solana",previous:{title:"Rust",permalink:"/solana/dev/rust"},next:{title:"Python",permalink:"/solana/dev/python"}},p={},g=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Load the Switchboard Program",id:"load-the-switchboard-program",level:3},{value:"Create a queue",id:"create-a-queue",level:3},{value:"Add an oracle",id:"add-an-oracle",level:3},{value:"Add a data feed",id:"add-a-data-feed",level:3},{value:"Update a Data Feed",id:"update-a-data-feed",level:3},{value:"Read a Data Feed",id:"read-a-data-feed",level:3},{value:"History Buffer",id:"history-buffer",level:3},{value:"Watch Switchboard",id:"watch-switchboard",level:3}],m={toc:g};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/solana.js/tree/main/libraries/ts"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/solana.js"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@switchboard-xyz/solana.js",alt:"npm"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,n.kt)("p",null,"A library of utility functions to interact with the Switchboardv2 program"),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/javascript/solana.js",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/solana.js/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,s.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @switchboard-xyz/solana.js\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/solana.js\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"load-the-switchboard-program"},"Load the Switchboard Program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { Connection } from "@solana/web3.js";\nimport {\n  SwitchboardProgram,\n  TransactionObject,\n} from "@switchboard-xyz/solana.js";\n\nconst program = await SwitchboardProgram.load(\n  "mainnet-beta",\n  new Connection("https://api.mainnet-beta.solana.com"),\n  payerKeypair /** Optional, READ-ONLY if not provided */\n);\n')),(0,n.kt)("h3",{id:"create-a-queue"},"Create a queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst [queueAccount, txnSignature] = await QueueAccount.create(program, {\n  name: "My Queue",\n  metadata: "Top Secret",\n  queueSize: 100,\n  reward: 0.00001337,\n  minStake: 10,\n  oracleTimeout: 60,\n  slashingEnabled: false,\n  unpermissionedFeeds: true,\n  unpermissionedVrf: true,\n  enableBufferRelayers: false,\n});\nconst queue = await queueAccount.loadData();\n')),(0,n.kt)("h3",{id:"add-an-oracle"},"Add an oracle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [oracleAccount, oracleInitSignature] = await queueAccount.createOracle({\n  name: "My Oracle",\n  metadata: "Oracle #1",\n  stakeAmount: 10,\n});\nconst oracle = await oracleAccount.loadData();\n\nawait oracleAccount.heartbeat();\n')),(0,n.kt)("h3",{id:"add-a-data-feed"},"Add a data feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      { pubkey: jobAccount.publicKey },\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n')),(0,n.kt)("h3",{id:"update-a-data-feed"},"Update a Data Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nawait aggregatorAccount.openRound();\n')),(0,n.kt)("h3",{id:"read-a-data-feed"},"Read a Data Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import Big from "big.js";\nimport { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nconst result: Big | null = await aggregatorAccount.fetchLatestValue();\nif (result === null) {\n  throw new Error("Aggregator holds no value");\n}\nconsole.log(result.toString());\n')),(0,n.kt)("h3",{id:"history-buffer"},"History Buffer"),(0,n.kt)("p",null,"Optionally, add a history buffer to your feed to store the last N historical\nsamples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  AggregatorAccount,\n  AggregatorHistoryBuffer,\n} from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\n\nconst [historyBuffer, addHistorySignature] =\n  await AggregatorHistoryBuffer.create(program, {\n    aggregatorAccount,\n    maxSamples: 10000,\n  });\nconst history = await historyBuffer.loadData();\n')),(0,n.kt)("h3",{id:"watch-switchboard"},"Watch Switchboard"),(0,n.kt)("p",null,"Setup a websocket listener to invoke a callback whenever an aggregator is\nupdated"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import Big from "big.js";\nimport { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nconst ws = aggregatorAccount.onChange((aggregator) => {\n  const result = AggregatorAccount.decodeLatestValue(aggregator);\n  if (result !== null) {\n    console.log(result.toString());\n  }\n});\n')))}b.isMDXComponent=!0}}]);