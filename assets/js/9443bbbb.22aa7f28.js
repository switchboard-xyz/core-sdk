"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93494],{26565:(e,t,l)=>{l.d(t,{zY:()=>r,l1:()=>u,Au:()=>c});var a=l(67294),n=l(39960);const r=e=>{const{enumb:t}=e,l=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),n=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(l,null),a.createElement(n,null)))},s=e=>{const{fields:t}=e,l=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const l=a.createElement("code",null,t.longType);return void 0===t.typeLink?l:a.createElement(n.Z,{to:t.typeLink},l)},s=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(r,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(l,null),a.createElement(s,null))},c=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(s,{fields:t.fields}))};var o=l(2734),i=l(90814);const u=e=>{(0,o.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(i.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},78312:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=l(83117),n=(l(67294),l(3905)),r=l(26565);const s={title:"OracleTask",hide_title:!0},c=void 0,o={unversionedId:"tasks/OracleTask",id:"tasks/OracleTask",title:"OracleTask",description:"OracleTask",source:"@site/docs/tasks/OracleTask.mdx",sourceDirName:"tasks",slug:"/tasks/OracleTask",permalink:"/tasks/OracleTask",draft:!1,tags:[],version:"current",frontMatter:{title:"OracleTask",hide_title:!0},sidebar:"publisher",previous:{title:"MultiplyTask",permalink:"/tasks/MultiplyTask"},next:{title:"PancakeswapExchangeRateTask",permalink:"/tasks/PancakeswapExchangeRateTask"}},i={},u=[{value:"<code>OracleTask</code>",id:"oracletask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>OracleTask</code>",id:"oracletask-1",level:3}],d={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"oracletask"},(0,n.kt)("inlineCode",{parentName:"h2"},"OracleTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"path")," OracleTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"package")," OracleTask")),(0,n.kt)("p",null,"Fetch the current price of a Solana oracle protocol."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"messages"},"Messages"),(0,n.kt)("h3",{id:"oracletask-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"OracleTask")),(0,n.kt)(r.Au,{key:0,message:{name:"OracleTask",longName:"OracleTask",fullName:".OracleTask",description:"Fetch the current price of a Solana oracle protocol.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"switchboard_address",description:"Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: https://switchboard.xyz/explorer",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"AggregatorAddress",defaultValue:""},{name:"pyth_address",description:"Mainnet address for a Pyth feed. A full list can be found here: https://pyth.network/price-feeds/",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"AggregatorAddress",defaultValue:""},{name:"chainlink_address",description:"Mainnet address for a Chainlink feed. A full list can be found here: https://docs.chain.link/docs/solana/data-feeds-solana",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"AggregatorAddress",defaultValue:""},{name:"pyth_allowed_confidence_interval",description:"Value (as a percentage) that the lower bound confidence interval is of the actual value.\nConfidence intervals that are larger that this treshold are rejected.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);