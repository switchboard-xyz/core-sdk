"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(83117),r=n(67294),o=n(86010),s=n(12466),i=n(76775),l=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=g({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=null!=l?l:d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=n(72389);const h="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(d(t),l(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var a;const t=u.indexOf(e.currentTarget)+1;n=null!=(a=u[t])?a:u[0];break}case"ArrowLeft":{var r;const t=u.indexOf(e.currentTarget)-1;n=null!=(r=u[t])?r:u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},43725:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(86886),r=n(67294),o=n(44267),s=n(15861),i=n(21519),l=n(78445),c=n(44073),u=n(39960),d=n(13264),p=n(92949);const m=(0,d.Z)(c.Z)((e=>{let{theme:t,dark:n}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:n?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(n?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:n?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,d.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function b(e){let{title:t,image:n,imageDark:a,description:l,to:c,sx:d}=e;const{colorMode:b}=(0,p.I)();return r.createElement(u.Z,{href:c,style:{textDecoration:"none"}},r.createElement(m,{dark:"dark"===b?1:0,sx:d},r.createElement(o.Z,{sx:{height:"100%",width:"100%"}},r.createElement(g,{avatar:r.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&a?a:n),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?r.createElement(r.Fragment,null,r.createElement(i.Z,{sx:{marginBottom:"1rem"}}),r.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):r.createElement(r.Fragment,null))))}function f(e){let{items:t,cols:n,sx:o,direction:s,justifyContent:i,alignItems:l}=e;return r.createElement(a.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:i,alignItems:l},t.map((e=>{var t;return r.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/n)?t:2)},r.createElement(b,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},25094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var a=n(83117),r=(n(67294),n(3905)),o=n(74866),s=n(85162),i=n(43725),l=n(44996);const c={toc:[]};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{cols:2,justifyContent:"center",items:[{to:"/aptos/program/mainnet",title:"Mainnet",description:"View the Mainnet deployment accounts",image:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/aptos/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/aptos/dark.svg")})},{to:"/aptos/program/testnet",title:"Testnet",description:"View the Testnet deployment accounts",image:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/aptos/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/aptos/dark.svg")})}],mdxType:"RoundedCardGroup"}))}u.isMDXComponent=!0;const d={sidebar_position:10,title:"@switchboard-xyz/aptos.js"},p=void 0,m={unversionedId:"aptos/dev/javascript",id:"aptos/dev/javascript",title:"@switchboard-xyz/aptos.js",description:"GitHub&nbsp;",source:"@site/docs/aptos/dev/javascript.mdx",sourceDirName:"aptos/dev",slug:"/aptos/dev/javascript",permalink:"/aptos/dev/javascript",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"@switchboard-xyz/aptos.js"},sidebar:"aptos",previous:{title:"sbv2-aptos",permalink:"/aptos/dev/move"},next:{title:"Feed Parser",permalink:"/aptos/dev/feed-parser"}},g={},b=[{value:"Quick Links",id:"quick-links",level:2},{value:"Live Deployment:",id:"live-deployment",level:2},{value:"Install",id:"install",level:2},{value:"Creating Feeds",id:"creating-feeds",level:2},{value:"Reading Feeds",id:"reading-feeds",level:2},{value:"Listening to Updates",id:"listening-to-updates",level:2}],f={toc:b};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-aptos"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/@switchboard-xyz%2Faptos.js"},(0,r.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@switchboard-xyz%2Faptos.js.svg",alt:"npm version"}))),(0,r.kt)("p",null,"A library of utility functions to interact with Switchboard Modules on Aptos"),(0,r.kt)("h2",{id:"quick-links"},"Quick Links"),(0,r.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-aptos/tree/main/javascript/aptos.js",title:"Github",description:"View the Github repo",image:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/github/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/aptos.js/",title:"Typedocs",description:"View the Typedocs",image:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,r.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,r.kt)("h2",{id:"live-deployment"},"Live Deployment:"),(0,r.kt)("p",null,"We're currently deployed on Aptos Testnet and Aptos Devnet."),(0,r.kt)(u,{mdxType:"AptosNetworks"}),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @switchboard-xyz/aptos.js\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/aptos.js\n")))),(0,r.kt)("h2",{id:"creating-feeds"},"Creating Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Buffer } from "buffer";\nimport { AptosClient, AptosAccount, FaucetClient, HexString } from "aptos";\nimport {\n  AptosEvent,\n  EventCallback,\n  OracleJob,\n  createFeed,\n} from "@switchboard-xyz/aptos.js";\nimport Big from "big.js";\n\nconst NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";\nconst FAUCET_URL = "https://faucet.testnet.aptoslabs.com";\n\nconst SWITCHBOARD_TESTNET_ADDRESS =\n  "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b";\n\nconst SWITCHBOARD_QUEUE_ADDRESS =\n  "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b";\n\nconst SWITCHBOARD_CRANK_ADDRESS =\n  "0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b";\n\nconst client = new AptosClient(NODE_URL);\nconst faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);\n\n// create new user\nlet user = new AptosAccount();\n\nawait faucetClient.fundAccount(user.address(), 50000);\nconsole.log(`User account ${user.address().hex()} created + funded.`);\n\n// Make Job data for btc price\nconst serializedJob = Buffer.from(\n  OracleJob.encodeDelimited(\n    OracleJob.create({\n      tasks: [\n        {\n          httpTask: {\n            url: "https://www.binance.us/api/v3/ticker/price?symbol=BTCUSD",\n          },\n        },\n        {\n          jsonParseTask: {\n            path: "$.price",\n          },\n        },\n      ],\n    })\n  ).finish()\n);\n\nconst [aggregator, createFeedTx] = await createFeed(\n  client,\n  user,\n  {\n    authority: user.address(),\n    queueAddress: SWITCHBOARD_QUEUE_ADDRESS, // account with OracleQueue resource\n    crankAddress: SWITCHBOARD_CRANK_ADDRESS, // account with Crank resource\n    batchSize: 1, // number of oracles to respond to each round\n    minJobResults: 1, // minimum # of jobs that need to return a result\n    minOracleResults: 1, // minumum # of oracles that need to respond for a result\n    minUpdateDelaySeconds: 5, // minimum delay between rounds\n    coinType: "0x1::aptos_coin::AptosCoin", // CoinType of the queue (now only AptosCoin)\n    initialLoadAmount: 1000, // load of the lease\n    jobs: [\n      {\n        name: "BTC/USD",\n        metadata: "binance",\n        authority: user.address().hex(),\n        data: serializedJob.toString("base64"), // jobs need to be base64 encoded strings\n        weight: 1,\n      },\n    ],\n  },\n  SWITCHBOARD_TESTNET_ADDRESS\n);\n\nconsole.log(\n  `Created Aggregator and Lease resources at account address ${aggregator.address}. Tx hash ${createFeedTx}`\n);\n\n// Manually trigger an update\nawait aggregator.openRound(user);\n')),(0,r.kt)("h2",{id:"reading-feeds"},"Reading Feeds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/aptos.js";\n\nconst aggregatorAccount: AggregatorAccount = new AggregatorAccount(\n  client,\n  aggregator_address,\n  SWITCHBOARD_TESTNET_ADDRESS\n);\n\nconsole.log(await aggregatorAccount.loadData());\n')),(0,r.kt)("h2",{id:"listening-to-updates"},"Listening to Updates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Listen to Aggregator Updates Off-Chain\n */\n\n// create event listener\nconst onAggregatorUpdate = (\n  client: AptosClient,\n  cb: EventCallback,\n  pollIntervalMs: number = 1000\n) => {\n  const event = new AptosEvent(\n    client,\n    HexString.ensure(SWITCHBOARD_TESTNET_ADDRESS),\n    `${SWITCHBOARD_TESTNET_ADDRESS}::switchboard::State`,\n    "aggregator_update_events",\n    pollIntervalMs\n  );\n  event.onTrigger(cb);\n  return event;\n};\n\n// initialize event listener\nconst updatePoller = onAggregatorUpdate(client, async (e) => {\n  if (aggregator.address == e.data.aggregator_address) {\n    console.log(`NEW RESULT:`, e.data);\n  }\n});\n')))}h.isMDXComponent=!0}}]);