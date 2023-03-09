"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89039],{88491:(e,t,a)=>{a.d(t,{zY:()=>n,l1:()=>i,Au:()=>p});var l=a(49231),r=a(15733);const n=e=>{const{enumb:t}=e,a=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),r=()=>l.createElement("tbody",null,t.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement("table",null,l.createElement(a,null),l.createElement(r,null)))},s=e=>{const{fields:t}=e,a=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),n=e=>{let{field:t}=e;const a=l.createElement("code",null,t.longType);return void 0===t.typeLink?a:l.createElement(r.Z,{to:t.typeLink},a)},s=()=>l.createElement("tbody",null,t.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(n,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(a,null),l.createElement(s,null))},p=e=>{const{message:t}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement(s,{fields:t.fields}))};var m=a(62791),o=a(17558);const i=e=>{(0,m.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(o.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},12580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>i});var l=a(48041),r=(a(49231),a(54852)),n=a(88491);const s={title:"PerpMarketTask",hide_title:!0},p=void 0,m={unversionedId:"tasks/PerpMarketTask",id:"tasks/PerpMarketTask",title:"PerpMarketTask",description:"PerpMarketTask",source:"@site/docs/tasks/PerpMarketTask.mdx",sourceDirName:"tasks",slug:"/tasks/PerpMarketTask",permalink:"/tasks/PerpMarketTask",draft:!1,tags:[],version:"current",frontMatter:{title:"PerpMarketTask",hide_title:!0},sidebar:"publisher",previous:{title:"PancakeswapExchangeRateTask",permalink:"/tasks/PancakeswapExchangeRateTask"},next:{title:"PowTask",permalink:"/tasks/PowTask"}},o={},i=[{value:"<code>PerpMarketTask</code>",id:"perpmarkettask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>PerpMarketTask</code>",id:"perpmarkettask-1",level:3}],c={toc:i},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"perpmarkettask"},(0,r.kt)("inlineCode",{parentName:"h2"},"PerpMarketTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"path")," PerpMarketTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"package")," PerpMarketTask")),(0,r.kt)("p",null,"Fetch the current price of a perpetual market."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"perpmarkettask-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"PerpMarketTask")),(0,r.kt)(n.Au,{key:0,message:{name:"PerpMarketTask",longName:"PerpMarketTask",fullName:".PerpMarketTask",description:"Fetch the current price of a perpetual market.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"mango_market_address",description:"Market address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"MarketAddress",defaultValue:""},{name:"drift_market_address",description:"Market address for a drift perpetual market. A full list can be found here: https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"MarketAddress",defaultValue:""},{name:"zeta_market_address",description:"Market address for a zeta perpetual market.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"MarketAddress",defaultValue:""},{name:"zo_market_address",description:"Market address for a 01 protocol perpetual market.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"MarketAddress",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);