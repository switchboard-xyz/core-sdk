"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(83117),a=r(67294),o=r(86010),s=r(12466),i=r(76775),l=r(91980),c=r(67392),u=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=r(72389);const h="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==i&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},43725:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(86886),a=r(67294),o=r(44267),s=r(15861),i=r(21519),l=r(78445),c=r(44073),u=r(39960),d=r(13264),p=r(92949);const m=(0,d.Z)(c.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),b=(0,d.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function f(e){let{title:t,image:r,imageDark:n,description:l,to:c,sx:d}=e;const{colorMode:f}=(0,p.I)();return a.createElement(u.Z,{href:c,style:{textDecoration:"none"}},a.createElement(m,{dark:"dark"===f?1:0,sx:d},a.createElement(o.Z,{sx:{height:"100%",width:"100%"}},a.createElement(b,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===f&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?a.createElement(a.Fragment,null,a.createElement(i.Z,{sx:{marginBottom:"1rem"}}),a.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):a.createElement(a.Fragment,null))))}function g(e){let{items:t,cols:r,sx:o,direction:s,justifyContent:i,alignItems:l}=e;return a.createElement(n.ZP,{container:!0,spacing:3,direction:s??"row",justifyContent:i,alignItems:l},t.map((e=>a.createElement(n.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},a.createElement(f,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},17492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=r(83117),a=(r(67294),r(3905)),o=r(74866),s=r(85162),i=r(43725),l=r(44996);const c={sidebar_position:20,title:"@switchboard-xyz/evm.js"},u=void 0,d={unversionedId:"coredao/dev/javascript",id:"coredao/dev/javascript",title:"@switchboard-xyz/evm.js",description:"<a",source:"@site/docs/coredao/dev/javascript.mdx",sourceDirName:"coredao/dev",slug:"/coredao/dev/javascript",permalink:"/coredao/dev/javascript",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"@switchboard-xyz/evm.js"},sidebar:"coredao",previous:{title:"SDK Overview",permalink:"/coredao/dev/"},next:{title:"ISwitchboard.sol",permalink:"/coredao/dev/solidity/ISwitchboard"}},p={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Create a Data Feed",id:"create-a-data-feed",level:3},{value:"Creating Jobs on IPFS",id:"creating-jobs-on-ipfs",level:3}],b={toc:m};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{style:{padding:"0 5px"},href:"https://www.npmjs.com/package/@switchboard-xyz/evm.js"},(0,a.kt)("img",{alt:"NPM Badge",src:"https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-evm?color=red&filename=javascript%2Fevm.js%2Fpackage.json&label=%40switchboard-xyz%2Fevm.js&logo=npm"})),"A library of utility functions to interact with the Switchboardv2 program",(0,a.kt)("h2",{id:"quick-links"},"Quick Links"),(0,a.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-evm/tree/main/javascript/evm.js",title:"Github",description:"View the Github repo",image:(0,a.kt)("img",{src:(0,l.Z)("/img/icons/github/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,l.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/evm.js/",title:"Typedocs",description:"View the Typedocs",image:(0,a.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,a.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @switchboard-xyz/evm.js\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/evm.js\n")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"create-a-data-feed"},"Create a Data Feed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AggregatorAccount, OracleJob } from "@switchboard-xyz/evm.js";\nimport { BigNumber, Wallet } from "ethers";\n\nconst authorityAddress = "0x1"; // Add your address here\nconst queueAddress = "0x83Fb069B10426056Ef8Ca54750cB9bB552a59e7D"; // Permissionless queue address\nconst switchboardAddress = "0xe9F5Ecb00BC437F061DF59d899F00f260740dC48";\n\nconst batchSize = 1; // 1 oracle will resolve a feed\nconst minUpdateDelaySeconds = 30; // update every 30 seconds\nconst minOracleResults = 1; // it should only take 1 oracle to resolve the feed\nconst ipfsJobsAddress = ""; // OracleJobs stored in IPFS\nconst varianceThreshold = 0; // Always update - but this is stored as a fixed scale factor decimal 18 digits represent the decimal portion of each num\nconst minJobResults = 1; // It should only take 1 job to resolve a feed\nconst forceReportPeriod = 0; // Force a result is off\n\nconst tx = await switchboard.createAggregator(\n  "My BTC Feed",\n  authorityAddress,\n  oracleRequestBatchSize,\n  minUpdateDelaySeconds,\n  minOracleResults,\n  ipfsJobsAddress,\n  queueAddress,\n\n  /// Response Configs (not used on-chain)\n  varianceThreshold,\n  minJobResults,\n  forceReportPeriod,\n\n  false, // Aggregator V3 Inteface is off (makes updates more expensive)\n  {\n    value: BigNumber.from(\n      new Big(params.initialLoadAmount).mul(WEI_PER_ETH.toString()).toString()\n    ),\n  }\n);\n\n// get aggregator address from receipt\nconst aggregatorAddress = tx.wait().then((logs) => {\n  const log = logs.logs[0];\n  const sbLog = switchboard.interface.parseLog(log);\n  return sbLog.args.accountAddress as string;\n});\n')),(0,a.kt)("h3",{id:"creating-jobs-on-ipfs"},"Creating Jobs on IPFS"),(0,a.kt)("p",null,"A set of jobs must be encoded with the\n",(0,a.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/bafybeiaprigfe7hakc4hgqyrjtgsbggrpvzfufpufzvpwtzlznyjb5hjw4/%20USD"},"following structure"),".\nThis example uses ",(0,a.kt)("a",{parentName:"p",href:"https://web3.storage"},"web3.storage"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const jobs = [\n  {\n    name: job.name,\n    weight: job.weight,\n    data: Buffer.from(\n      sb.OracleJob.encodeDelimited({\n        tasks: [\n          {\n            httpTask: {\n              url: "https://api.coinbase.com/v2/prices/USDC-USD/spot",\n            },\n          },\n          {\n            jsonParseTask: {\n              path: "$.data.amount",\n            },\n          },\n          {\n            boundTask: {\n              lowerBoundValue: "0.98",\n              upperBoundValue: "1.02",\n            },\n          },\n        ],\n      }).finish()\n    ).toString("base64"),\n  },\n];\n\nconst client = new Web3Storage({\n  token: "<TOKEN_GOES_HERE>",\n});\n\n// get jobs from validation\nconst content = new File([JSON.stringify(jobs)], "", {\n  type: "application/json",\n});\n\n// get content ID - fetchable immediately via ipfs\nconst cid = await client.put([content], {\n  wrapWithDirectory: false,\n});\n')))}f.isMDXComponent=!0}}]);