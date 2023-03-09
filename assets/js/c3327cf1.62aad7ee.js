"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7642],{88491:(e,t,a)=>{a.d(t,{zY:()=>r,l1:()=>c,Au:()=>m});var l=a(49231),n=a(15733);const r=e=>{const{enumb:t}=e,a=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),n=()=>l.createElement("tbody",null,t.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement("table",null,l.createElement(a,null),l.createElement(n,null)))},s=e=>{const{fields:t}=e,a=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const a=l.createElement("code",null,t.longType);return void 0===t.typeLink?a:l.createElement(n.Z,{to:t.typeLink},a)},s=()=>l.createElement("tbody",null,t.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(r,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(a,null),l.createElement(s,null))},m=e=>{const{message:t}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement(s,{fields:t.fields}))};var u=a(62791),p=a(17558);const c=e=>{(0,u.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},1578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var l=a(48041),n=(a(49231),a(54852)),r=a(88491);const s={title:"SerumSwapTask",hide_title:!0},m=void 0,u={unversionedId:"tasks/SerumSwapTask",id:"tasks/SerumSwapTask",title:"SerumSwapTask",description:"SerumSwapTask",source:"@site/docs/tasks/SerumSwapTask.mdx",sourceDirName:"tasks",slug:"/tasks/SerumSwapTask",permalink:"/tasks/SerumSwapTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SerumSwapTask",hide_title:!0},sidebar:"publisher",previous:{title:"RoundTask",permalink:"/tasks/RoundTask"},next:{title:"SolanaAccountDataFetchTask",permalink:"/tasks/SolanaAccountDataFetchTask"}},p={},c=[{value:"<code>SerumSwapTask</code>",id:"serumswaptask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SerumSwapTask</code>",id:"serumswaptask-1",level:3}],o={toc:c},i="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"serumswaptask"},(0,n.kt)("inlineCode",{parentName:"h2"},"SerumSwapTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"path")," SerumSwapTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"package")," SerumSwapTask")),(0,n.kt)("p",null,"Fetch the latest swap price on OpenBook's exchange"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"messages"},"Messages"),(0,n.kt)("h3",{id:"serumswaptask-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"SerumSwapTask")),(0,n.kt)(r.Au,{key:0,message:{name:"SerumSwapTask",longName:"SerumSwapTask",fullName:".SerumSwapTask",description:"Fetch the latest swap price on OpenBook's exchange",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"serum_pool_address",description:"The OrderBook pool to fetch swap price for",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);