"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4121],{88491:(e,t,l)=>{l.d(t,{zY:()=>s,l1:()=>u,Au:()=>c});var n=l(49231),a=l(15733);const s=e=>{const{enumb:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),a=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(l,null),n.createElement(a,null)))},r=e=>{const{fields:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const l=n.createElement("code",null,t.longType);return void 0===t.typeLink?l:n.createElement(a.Z,{to:t.typeLink},l)},r=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(s,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(l,null),n.createElement(r,null))},c=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(r,{fields:t.fields}))};var m=l(62791),p=l(17558);const u=e=>{(0,m.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},89104:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var n=l(48041),a=(l(49231),l(54852)),s=l(88491);const r={title:"TpsTask",hide_title:!0},c=void 0,m={unversionedId:"tasks/TpsTask",id:"tasks/TpsTask",title:"TpsTask",description:"TpsTask",source:"@site/docs/tasks/TpsTask.mdx",sourceDirName:"tasks",slug:"/tasks/TpsTask",permalink:"/tasks/TpsTask",draft:!1,tags:[],version:"current",frontMatter:{title:"TpsTask",hide_title:!0},sidebar:"publisher",previous:{title:"SysclockOffsetTask",permalink:"/tasks/SysclockOffsetTask"},next:{title:"TwapTask",permalink:"/tasks/TwapTask"}},p={},u=[{value:"<code>TpsTask</code>",id:"tpstask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>TpsTask</code>",id:"tpstask-1",level:3}],i={toc:u},o="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(o,(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tpstask"},(0,a.kt)("inlineCode",{parentName:"h2"},"TpsTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," TpsTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," TpsTask")),(0,a.kt)("p",null,"Fetch the current transactions per second."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"tpstask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"TpsTask")),(0,a.kt)(s.Au,{key:0,message:{name:"TpsTask",longName:"TpsTask",fullName:".TpsTask",description:"Fetch the current transactions per second.",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);