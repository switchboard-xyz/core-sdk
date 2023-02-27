"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4354],{26565:(e,t,l)=>{l.d(t,{zY:()=>r,l1:()=>c,Au:()=>o});var n=l(67294),a=l(39960);const r=e=>{const{enumb:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),a=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(l,null),n.createElement(a,null)))},s=e=>{const{fields:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const l=n.createElement("code",null,t.longType);return void 0===t.typeLink?l:n.createElement(a.Z,{to:t.typeLink},l)},s=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(r,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(l,null),n.createElement(s,null))},o=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(s,{fields:t.fields}))};var i=l(2734),p=l(90814);const c=e=>{(0,i.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},27672:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=l(83117),a=(l(67294),l(3905)),r=l(26565);const s={title:"LpTokenPriceTask",hide_title:!0},o=void 0,i={unversionedId:"tasks/LpTokenPriceTask",id:"tasks/LpTokenPriceTask",title:"LpTokenPriceTask",description:"LpTokenPriceTask",source:"@site/docs/tasks/LpTokenPriceTask.mdx",sourceDirName:"tasks",slug:"/tasks/LpTokenPriceTask",permalink:"/tasks/LpTokenPriceTask",draft:!1,tags:[],version:"current",frontMatter:{title:"LpTokenPriceTask",hide_title:!0},sidebar:"publisher",previous:{title:"LpExchangeRateTask",permalink:"/tasks/LpExchangeRateTask"},next:{title:"MangoPerpMarketTask",permalink:"/tasks/MangoPerpMarketTask"}},p={},c=[{value:"<code>LpTokenPriceTask</code>",id:"lptokenpricetask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>LpTokenPriceTask</code>",id:"lptokenpricetask-1",level:3}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"lptokenpricetask"},(0,a.kt)("inlineCode",{parentName:"h2"},"LpTokenPriceTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," LpTokenPriceTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," LpTokenPriceTask")),(0,a.kt)("p",null,"Fetch LP token price info from a number of supported exchanges."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"lptokenpricetask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"LpTokenPriceTask")),(0,a.kt)(r.Au,{key:0,message:{name:"LpTokenPriceTask",longName:"LpTokenPriceTask",fullName:".LpTokenPriceTask",description:"Fetch LP token price info from a number of supported exchanges.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"mercurial_pool_address",description:"Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"PoolAddress",defaultValue:""},{name:"saber_pool_address",description:"Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"PoolAddress",defaultValue:""},{name:"orca_pool_address",description:"Orca pool address. A full list can be found here: https://www.orca.so/pools",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"PoolAddress",defaultValue:""},{name:"raydium_pool_address",description:"The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"PoolAddress",defaultValue:""},{name:"price_feed_addresses",description:"A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"price_feed_jobs",description:"",label:"repeated",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"use_fair_price",description:"If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239",label:"optional",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);