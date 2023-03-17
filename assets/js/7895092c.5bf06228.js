"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16137],{88491:(e,t,l)=>{l.d(t,{zY:()=>s,l1:()=>m,Au:()=>o});var a=l(49231),n=l(15733);const s=e=>{const{enumb:t}=e,l=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),n=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(l,null),a.createElement(n,null)))},r=e=>{const{fields:t}=e,l=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const l=a.createElement("code",null,t.longType);return void 0===t.typeLink?l:a.createElement(n.Z,{to:t.typeLink},l)},r=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(s,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(l,null),a.createElement(r,null))},o=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(r,{fields:t.fields}))};var p=l(62791),c=l(17558);const m=e=>{(0,p.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(c.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},53462:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>i,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=l(48041),n=(l(49231),l(54852)),s=l(88491);const r={title:"SplStakePoolTask",hide_title:!0},o=void 0,p={unversionedId:"tasks/SplStakePoolTask",id:"tasks/SplStakePoolTask",title:"SplStakePoolTask",description:"SplStakePoolTask",source:"@site/docs/tasks/SplStakePoolTask.mdx",sourceDirName:"tasks",slug:"/tasks/SplStakePoolTask",permalink:"/tasks/SplStakePoolTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SplStakePoolTask",hide_title:!0},sidebar:"publisher",previous:{title:"SolanaAccountDataFetchTask",permalink:"/tasks/SolanaAccountDataFetchTask"},next:{title:"SplTokenParseTask",permalink:"/tasks/SplTokenParseTask"}},c={},m=[{value:"<code>SplStakePoolTask</code>",id:"splstakepooltask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SplStakePoolTask</code>",id:"splstakepooltask-1",level:3}],u={toc:m},k="wrapper";function i(e){let{components:t,...l}=e;return(0,n.kt)(k,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"splstakepooltask"},(0,n.kt)("inlineCode",{parentName:"h2"},"SplStakePoolTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"path")," SplStakePoolTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"package")," SplStakePoolTask")),(0,n.kt)("p",null,"Fetch the JSON representation of an SPL Stake Pool account."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"messages"},"Messages"),(0,n.kt)("h3",{id:"splstakepooltask-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"SplStakePoolTask")),(0,n.kt)(s.Au,{key:0,message:{name:"SplStakePoolTask",longName:"SplStakePoolTask",fullName:".SplStakePoolTask",description:"Fetch the JSON representation of an SPL Stake Pool account.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"pubkey",description:"The pubkey of the SPL Stake Pool.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,n.kt)("hr",null))}i.isMDXComponent=!0}}]);