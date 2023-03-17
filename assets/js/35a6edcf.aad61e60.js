"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76671],{88491:(e,t,l)=>{l.d(t,{zY:()=>s,l1:()=>u,Au:()=>r});var n=l(49231),a=l(15733);const s=e=>{const{enumb:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),a=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(l,null),n.createElement(a,null)))},c=e=>{const{fields:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const l=n.createElement("code",null,t.longType);return void 0===t.typeLink?l:n.createElement(a.Z,{to:t.typeLink},l)},c=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(s,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(l,null),n.createElement(c,null))},r=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(c,{fields:t.fields}))};var m=l(62791),o=l(17558);const u=e=>{(0,m.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(o.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},71855:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var n=l(48041),a=(l(49231),l(54852)),s=l(88491);const c={title:"SysclockOffsetTask",hide_title:!0},r=void 0,m={unversionedId:"tasks/SysclockOffsetTask",id:"tasks/SysclockOffsetTask",title:"SysclockOffsetTask",description:"SysclockOffsetTask",source:"@site/docs/tasks/SysclockOffsetTask.mdx",sourceDirName:"tasks",slug:"/tasks/SysclockOffsetTask",permalink:"/tasks/SysclockOffsetTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SysclockOffsetTask",hide_title:!0},sidebar:"publisher",previous:{title:"SushiswapExchangeRateTask",permalink:"/tasks/SushiswapExchangeRateTask"},next:{title:"TpsTask",permalink:"/tasks/TpsTask"}},o={},u=[{value:"<code>SysclockOffsetTask</code>",id:"sysclockoffsettask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SysclockOffsetTask</code>",id:"sysclockoffsettask-1",level:3}],i={toc:u},k="wrapper";function p(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sysclockoffsettask"},(0,a.kt)("inlineCode",{parentName:"h2"},"SysclockOffsetTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," SysclockOffsetTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," SysclockOffsetTask")),(0,a.kt)("p",null,"Return the difference between an oracle's clock and the current timestamp at\n",(0,a.kt)("inlineCode",{parentName:"p"},"SYSVAR_CLOCK_PUBKEY"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"sysclockoffsettask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"SysclockOffsetTask")),(0,a.kt)(s.Au,{key:0,message:{name:"SysclockOffsetTask",longName:"SysclockOffsetTask",fullName:".SysclockOffsetTask",description:"Return the difference between an oracle's clock and the current timestamp at `SYSVAR_CLOCK_PUBKEY`.",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);