"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),o=a(86010),l=a(72389),s=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:m,values:b,groupId:g,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,i.U)(),[j,x]=(0,r.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=g){const e=k[g];null!=e&&e!==j&&h.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==j&&(A(t),x(n),null!=g&&O(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=N.indexOf(e.currentTarget)+1;a=null!=(n=N[t])?n:N[0];break}case"ArrowLeft":{var r;const t=N.indexOf(e.currentTarget)-1;a=null!=(r=N[t])?r:N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},46321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const s={sidebar_position:10,slug:".",title:"@switchboard-xyz/solana.js"},i=void 0,c={unversionedId:"solana/dev/javascript/client",id:"solana/dev/javascript/client",title:"@switchboard-xyz/solana.js",description:"GitHub&nbsp;&nbsp;",source:"@site/docs/solana/dev/javascript/client.mdx",sourceDirName:"solana/dev/javascript",slug:"/solana/dev/javascript/",permalink:"/sbv2-core/solana/dev/javascript/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"@switchboard-xyz/solana.js"},sidebar:"solana",previous:{title:"Sbv2 CLI",permalink:"/sbv2-core/solana/dev/cli"},next:{title:"@switchboard-xyz/sbv2-lite",permalink:"/sbv2-core/solana/dev/javascript/sbv2-lite"}},u={},p=[{value:"Install",id:"install",level:2},{value:"Creating Feeds",id:"creating-feeds",level:2},{value:"Updating Feeds",id:"updating-feeds",level:3},{value:"Reading Feeds",id:"reading-feeds",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/libraries/ts"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/switchboard-v2"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@switchboard-xyz/switchboard-v2",alt:"npm"})),"\xa0","\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,r.kt)("p",null,"A library of utility functions to interact with the Switchboardv2 program"),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @switchboard-xyz/switchboard-v2\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn i @switchboard-xyz/switchboard-v2\n# couldn't auto-convert command\n")))),(0,r.kt)("h2",{id:"creating-feeds"},"Creating Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  OracleQueueAccount,\n  loadSwitchboardProgram,\n} from "@switchboard-xyz/switchboard-v2";\n\nconst payerKeypair = Keypair.fromSecretKey(\n  JSON.parse(fs.readFileSync("../keypair-path.json", "utf-8"))\n);\nconst program = await loadSwitchboardProgram(\n  "devnet",\n  new Connection(clusterApiUrl("devnet")),\n  payerKeypair\n);\nconst queueAccount = new OracleQueueAccount({\n  program: program,\n  // devnet permissionless queue\n  publicKey: new PublicKey("F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy"),\n});\n\nconst aggregatorAccount = await AggregatorAccount.create(program, {\n  name: Buffer.from("FeedName"),\n  batchSize: 6,\n  minRequiredJobResults: 1,\n  minRequiredOracleResults: 1,\n  minUpdateDelaySeconds: 30,\n  queueAccount,\n});\n')),(0,r.kt)("h3",{id:"updating-feeds"},"Updating Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport {\n  AggregatorAccount,\n  OracleQueueAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nconst program: anchor.Program;\nconst queueAccount: OracleQueueAccount;\n\nawait aggregatorAccount.openRound({\n  oracleQueueAccount: queueAccount,\n  payoutWallet: tokenAccount,\n});\n')),(0,r.kt)("h3",{id:"reading-feeds"},"Reading Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";\nimport { Big } from "big.js";\n\nconst aggregatorAccount: AggregatorAccount;\nconst result: Big = await aggregatorAccount.getLatestValue();\n\nconsole.log(result.toNumber());\n')))}m.isMDXComponent=!0}}]);