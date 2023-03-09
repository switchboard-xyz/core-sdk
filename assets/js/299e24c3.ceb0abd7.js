"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83601],{88491:(e,t,a)=>{a.d(t,{zY:()=>c,l1:()=>m,Au:()=>s});var n=a(49231),l=a(15733);const c=e=>{const{enumb:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),l=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(a,null),n.createElement(l,null)))},r=e=>{const{fields:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),c=e=>{let{field:t}=e;const a=n.createElement("code",null,t.longType);return void 0===t.typeLink?a:n.createElement(l.Z,{to:t.typeLink},a)},r=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(c,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(a,null),n.createElement(r,null))},s=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(r,{fields:t.fields}))};var o=a(62791),u=a(17558);const m=e=>{(0,o.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(u.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},88583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(48041),l=(a(49231),a(54852)),c=a(88491);const r={title:"SolanaAccountDataFetchTask",hide_title:!0},s=void 0,o={unversionedId:"tasks/SolanaAccountDataFetchTask",id:"tasks/SolanaAccountDataFetchTask",title:"SolanaAccountDataFetchTask",description:"SolanaAccountDataFetchTask",source:"@site/docs/tasks/SolanaAccountDataFetchTask.mdx",sourceDirName:"tasks",slug:"/tasks/SolanaAccountDataFetchTask",permalink:"/tasks/SolanaAccountDataFetchTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SolanaAccountDataFetchTask",hide_title:!0},sidebar:"publisher",previous:{title:"SerumSwapTask",permalink:"/tasks/SerumSwapTask"},next:{title:"SplStakePoolTask",permalink:"/tasks/SplStakePoolTask"}},u={},m=[{value:"<code>SolanaAccountDataFetchTask</code>",id:"solanaaccountdatafetchtask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SolanaAccountDataFetchTask</code>",id:"solanaaccountdatafetchtask-1",level:3}],i={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"solanaaccountdatafetchtask"},(0,l.kt)("inlineCode",{parentName:"h2"},"SolanaAccountDataFetchTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," SolanaAccountDataFetchTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," SolanaAccountDataFetchTask")),(0,l.kt)("p",null,"Fetch the account data in a stringified buffer format."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"solanaaccountdatafetchtask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"SolanaAccountDataFetchTask")),(0,l.kt)(c.Au,{key:0,message:{name:"SolanaAccountDataFetchTask",longName:"SolanaAccountDataFetchTask",fullName:".SolanaAccountDataFetchTask",description:"Fetch the account data in a stringified buffer format.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"pubkey",description:"The on-chain account to fetch the account data from.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);