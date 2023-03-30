"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89222,4390,71038],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(b,s(s({ref:t},u),{},{components:r})):a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82764:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(45675),n=r(92897),o=r(49231),s=r(19841),i=r(32301),l=r(56133),c=r(32268),u=r(38026),d=r(1274),p=r(7523);function m(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var b=r(20264);const f=["className","raised"],g=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),h=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,u=(0,n.Z)(r,f),d=(0,a.Z)({},r,{raised:l}),p=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)})(d);return(0,b.jsx)(g,(0,a.Z)({className:(0,s.Z)(p.root,o),elevation:l?8:void 0,ref:t,ownerState:d},u))}))},63607:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(45675),n=r(92897),o=r(49231),s=r(19841),i=r(32301),l=r(56133),c=r(32268),u=r(1274),d=r(7523);function p(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var m=r(20264);const b=["className","component"],f=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,u=(0,n.Z)(r,b),d=(0,a.Z)({},r,{component:l}),g=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)})(d);return(0,m.jsx)(f,(0,a.Z)({as:l,className:(0,s.Z)(g.root,o),ownerState:d,ref:t},u))}))},27429:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(92897),n=r(45675),o=r(49231),s=r(19841),i=r(32301),l=r(69681),c=r(32268),u=r(56133),d=r(1274),p=r(7523);function m(e){return(0,p.Z)("MuiCardHeader",e)}const b=(0,d.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var f=r(20264);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${b.title}`]:t.title,[`& .${b.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),k=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:p="div",disableTypography:b=!1,subheader:k,subheaderTypographyProps:x,title:Z,titleTypographyProps:j}=r,E=(0,a.Z)(r,g),T=(0,n.Z)({},r,{component:p,disableTypography:b}),S=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)})(T);let C=Z;null==C||C.type===l.Z||b||(C=(0,f.jsx)(l.Z,(0,n.Z)({variant:u?"body2":"h5",className:S.title,component:"span",display:"block"},j,{children:C})));let N=k;return null==N||N.type===l.Z||b||(N=(0,f.jsx)(l.Z,(0,n.Z)({variant:u?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:N}))),(0,f.jsxs)(h,(0,n.Z)({className:(0,s.Z)(S.root,d),as:p,ref:t,ownerState:T},E,{children:[u&&(0,f.jsx)(v,{className:S.avatar,ownerState:T,children:u}),(0,f.jsxs)(w,{className:S.content,ownerState:T,children:[C,N]}),o&&(0,f.jsx)(y,{className:S.action,ownerState:T,children:o})]}))}))},2004:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(49231),n=r(19841);const o={tabItem:"tabItem_Z7jx"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},66081:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(48041),n=r(49231),o=r(19841),s=r(51556),i=r(19409),l=r(86449),c=r(80828),u=r(70621);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=r(68213);const h={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==i&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},26365:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(68868),n=r(49231),o=r(63607),s=r(69681),i=r(39687),l=r(27429),c=r(82764),u=r(15733),d=r(57236),p=r(65137);const m=(0,d.Z)(c.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),b=(0,d.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function f(e){let{title:t,image:r,imageDark:a,description:l,to:c,sx:d}=e;const{colorMode:f}=(0,p.I)();return n.createElement(u.Z,{href:c,style:{textDecoration:"none"}},n.createElement(m,{dark:"dark"===f?1:0,sx:d},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(b,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===f&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?n.createElement(n.Fragment,null,n.createElement(i.Z,{sx:{marginBottom:"1rem"}}),n.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):n.createElement(n.Fragment,null))))}function g(e){let{items:t,cols:r,sx:o,direction:s,justifyContent:i,alignItems:l}=e;return n.createElement(a.ZP,{container:!0,spacing:3,direction:s??"row",justifyContent:i,alignItems:l},t.map((e=>n.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},n.createElement(f,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},88100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=r(48041),n=(r(49231),r(54852)),o=r(66081),s=r(2004),i=r(26365),l=r(43939);const c={sidebar_position:20,title:"@switchboard-xyz/evm.js"},u=void 0,d={unversionedId:"coredao/dev/javascript",id:"coredao/dev/javascript",title:"@switchboard-xyz/evm.js",description:"<a",source:"@site/docs/coredao/dev/javascript.mdx",sourceDirName:"coredao/dev",slug:"/coredao/dev/javascript",permalink:"/coredao/dev/javascript",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"@switchboard-xyz/evm.js"},sidebar:"coredao",previous:{title:"SDK Overview",permalink:"/coredao/dev/"},next:{title:"ISwitchboard.sol",permalink:"/coredao/dev/solidity/ISwitchboard"}},p={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Create a Data Feed",id:"create-a-data-feed",level:3},{value:"Creating Jobs on IPFS",id:"creating-jobs-on-ipfs",level:3}],b={toc:m},f="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{style:{padding:"0 5px"},href:"https://www.npmjs.com/package/@switchboard-xyz/evm.js"},(0,n.kt)("img",{alt:"NPM Badge",src:"https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-evm?color=red&filename=javascript%2Fevm.js%2Fpackage.json&label=%40switchboard-xyz%2Fevm.js&logo=npm"})),"A library of utility functions to interact with the Switchboardv2 program",(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-evm/tree/main/javascript/evm.js",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/evm.js/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,l.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @switchboard-xyz/evm.js\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/evm.js\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"create-a-data-feed"},"Create a Data Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AggregatorAccount, OracleJob } from "@switchboard-xyz/evm.js";\nimport { BigNumber, Wallet } from "ethers";\n\nconst authorityAddress = "0x1"; // Add your address here\nconst queueAddress = "0x83Fb069B10426056Ef8Ca54750cB9bB552a59e7D"; // Permissionless queue address\nconst switchboardAddress = "0xe9F5Ecb00BC437F061DF59d899F00f260740dC48";\n\nconst batchSize = 1; // 1 oracle will resolve a feed\nconst minUpdateDelaySeconds = 30; // update every 30 seconds\nconst minOracleResults = 1; // it should only take 1 oracle to resolve the feed\nconst ipfsJobsAddress = ""; // OracleJobs stored in IPFS\nconst varianceThreshold = 0; // Always update - but this is stored as a fixed scale factor decimal 18 digits represent the decimal portion of each num\nconst minJobResults = 1; // It should only take 1 job to resolve a feed\nconst forceReportPeriod = 0; // Force a result is off\n\nconst tx = await switchboard.createAggregator(\n  "My BTC Feed",\n  authorityAddress,\n  oracleRequestBatchSize,\n  minUpdateDelaySeconds,\n  minOracleResults,\n  ipfsJobsAddress,\n  queueAddress,\n\n  /// Response Configs (not used on-chain)\n  varianceThreshold,\n  minJobResults,\n  forceReportPeriod,\n\n  false, // Aggregator V3 Inteface is off (makes updates more expensive)\n  {\n    value: BigNumber.from(\n      new Big(params.initialLoadAmount).mul(WEI_PER_ETH.toString()).toString()\n    ),\n  }\n);\n\n// get aggregator address from receipt\nconst aggregatorAddress = tx.wait().then((logs) => {\n  const log = logs.logs[0];\n  const sbLog = switchboard.interface.parseLog(log);\n  return sbLog.args.accountAddress as string;\n});\n')),(0,n.kt)("h3",{id:"creating-jobs-on-ipfs"},"Creating Jobs on IPFS"),(0,n.kt)("p",null,"A set of jobs must be encoded with the\n",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/bafybeiaprigfe7hakc4hgqyrjtgsbggrpvzfufpufzvpwtzlznyjb5hjw4/%20USD"},"following structure"),".\nThis example uses ",(0,n.kt)("a",{parentName:"p",href:"https://web3.storage"},"web3.storage"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const jobs = [\n  {\n    name: job.name,\n    weight: job.weight,\n    data: Buffer.from(\n      sb.OracleJob.encodeDelimited({\n        tasks: [\n          {\n            httpTask: {\n              url: "https://api.coinbase.com/v2/prices/USDC-USD/spot",\n            },\n          },\n          {\n            jsonParseTask: {\n              path: "$.data.amount",\n            },\n          },\n          {\n            boundTask: {\n              lowerBoundValue: "0.98",\n              upperBoundValue: "1.02",\n            },\n          },\n        ],\n      }).finish()\n    ).toString("base64"),\n  },\n];\n\nconst client = new Web3Storage({\n  token: "<TOKEN_GOES_HERE>",\n});\n\n// get jobs from validation\nconst content = new File([JSON.stringify(jobs)], "", {\n  type: "application/json",\n});\n\n// get content ID - fetchable immediately via ipfs\nconst cid = await client.put([content], {\n  wrapWithDirectory: false,\n});\n')))}g.isMDXComponent=!0}}]);