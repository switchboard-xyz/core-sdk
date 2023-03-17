"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1290],{54852:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(49231);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||g[p]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2004:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(49231),n=a(19841);const o={tabItem:"tabItem_Z7jx"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},66081:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(48041),n=a(49231),o=a(19841),l=a(51556),s=a(19409),i=a(86449),c=a(80828),u=a(70621);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function g(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=g(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=m({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=a(68213);const h={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),g=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==s&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:g},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},26365:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(73013),n=a(49231),o=a(66318),l=a(67547),s=a(42941),i=a(31063),c=a(71821),u=a(15733),d=a(27957),g=a(65137);const p=(0,d.Z)(c.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),m=(0,d.Z)(i.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function b(e){let{title:t,image:a,imageDark:r,description:i,to:c,sx:d}=e;const{colorMode:b}=(0,g.I)();return n.createElement(u.Z,{href:c,style:{textDecoration:"none"}},n.createElement(p,{dark:"dark"===b?1:0,sx:d},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(m,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),i?n.createElement(n.Fragment,null,n.createElement(s.Z,{sx:{marginBottom:"1rem"}}),n.createElement(l.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},i)):n.createElement(n.Fragment,null))))}function f(e){let{items:t,cols:a,sx:o,direction:l,justifyContent:s,alignItems:i}=e;return n.createElement(r.ZP,{container:!0,spacing:3,direction:l??"row",justifyContent:s,alignItems:i},t.map((e=>n.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/a??2)},n.createElement(b,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},10442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=a(48041),n=(a(49231),a(54852)),o=a(66081),l=a(2004),s=a(26365),i=a(43939);const c={sidebar_position:20,title:"@switchboard-xyz/solana.js"},u=void 0,d={unversionedId:"solana/dev/javascript",id:"solana/dev/javascript",title:"@switchboard-xyz/solana.js",description:"<img",source:"@site/docs/solana/dev/javascript.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/javascript",permalink:"/solana/dev/javascript",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"@switchboard-xyz/solana.js"},sidebar:"solana",previous:{title:"Rust",permalink:"/solana/dev/rust"},next:{title:"switchboardpy",permalink:"/solana/dev/python"}},g={},p=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Load the Switchboard Program",id:"load-the-switchboard-program",level:3},{value:"Create a queue",id:"create-a-queue",level:3},{value:"Add an oracle",id:"add-an-oracle",level:3},{value:"Add a data feed",id:"add-a-data-feed",level:3},{value:"Update a Data Feed",id:"update-a-data-feed",level:3},{value:"Read a Data Feed",id:"read-a-data-feed",level:3},{value:"History Buffer",id:"history-buffer",level:3},{value:"Watch Switchboard",id:"watch-switchboard",level:3}],m={toc:p},b="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{style:{padding:"0 5px"},alt:"Test Status",src:"https://github.com/switchboard-xyz/sbv2-solana/actions/workflows/solana-js-test.yml/badge.svg"}),(0,n.kt)("a",{style:{padding:"0 5px"},href:"https://www.npmjs.com/package/@switchboard-xyz/solana.js"},(0,n.kt)("img",{alt:"NPM Badge",src:"https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-solana?color=red&filename=javascript%2Fsolana.js%2Fpackage.json&label=%40switchboard-xyz%2Fsolana.js&logo=npm"})),(0,n.kt)("p",null,"A library of utility functions to interact with the Switchboardv2 program"),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(s.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/javascript/solana.js",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/solana.js/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @switchboard-xyz/solana.js\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/solana.js\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Check out the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/javascript/solana.js/test"},"@switchboard-xyz/solana.js test directory"),"\nfor more examples."),(0,n.kt)("h3",{id:"load-the-switchboard-program"},"Load the Switchboard Program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { Connection } from "@solana/web3.js";\nimport {\n  SwitchboardProgram,\n  TransactionObject,\n} from "@switchboard-xyz/solana.js";\n\nconst program = await SwitchboardProgram.load(\n  "mainnet-beta",\n  new Connection("https://api.mainnet-beta.solana.com"),\n  payerKeypair /** Optional, READ-ONLY if not provided */\n);\n')),(0,n.kt)("h3",{id:"create-a-queue"},"Create a queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst [queueAccount, txnSignature] = await QueueAccount.create(program, {\n  name: "My Queue",\n  metadata: "Top Secret",\n  queueSize: 100,\n  reward: 0.00001337,\n  minStake: 10,\n  oracleTimeout: 60,\n  slashingEnabled: false,\n  unpermissionedFeeds: true,\n  unpermissionedVrf: true,\n  enableBufferRelayers: false,\n});\nconst queue = await queueAccount.loadData();\n')),(0,n.kt)("h3",{id:"add-an-oracle"},"Add an oracle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [oracleAccount, oracleInitSignature] = await queueAccount.createOracle({\n  name: "My Oracle",\n  metadata: "Oracle #1",\n  stakeAmount: 10,\n});\nconst oracle = await oracleAccount.loadData();\n\nawait oracleAccount.heartbeat();\n')),(0,n.kt)("h3",{id:"add-a-data-feed"},"Add a data feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      { pubkey: jobAccount.publicKey },\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n')),(0,n.kt)("h3",{id:"update-a-data-feed"},"Update a Data Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nawait aggregatorAccount.openRound();\n')),(0,n.kt)("h3",{id:"read-a-data-feed"},"Read a Data Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import Big from "big.js";\nimport { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nconst result: Big | null = await aggregatorAccount.fetchLatestValue();\nif (result === null) {\n  throw new Error("Aggregator holds no value");\n}\nconsole.log(result.toString());\n')),(0,n.kt)("h3",{id:"history-buffer"},"History Buffer"),(0,n.kt)("p",null,"Optionally, add a history buffer to your feed to store the last N historical\nsamples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  AggregatorAccount,\n  AggregatorHistoryBuffer,\n} from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\n\nconst [historyBuffer, addHistorySignature] =\n  await AggregatorHistoryBuffer.create(program, {\n    aggregatorAccount,\n    maxSamples: 10000,\n  });\nconst history = await historyBuffer.loadData();\n')),(0,n.kt)("h3",{id:"watch-switchboard"},"Watch Switchboard"),(0,n.kt)("p",null,"Setup a websocket listener to invoke a callback whenever an aggregator is\nupdated"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import Big from "big.js";\nimport { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nconst ws = aggregatorAccount.onChange((aggregator) => {\n  const result = AggregatorAccount.decodeLatestValue(aggregator);\n  if (result !== null) {\n    console.log(result.toString());\n  }\n});\n')))}f.isMDXComponent=!0}}]);