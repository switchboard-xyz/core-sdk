"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80182],{88491:(e,t,n)=>{n.d(t,{zY:()=>s,l1:()=>m,Au:()=>i});var l=n(49231),a=n(15733);const s=e=>{const{enumb:t}=e,n=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),a=()=>l.createElement("tbody",null,t.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement("table",null,l.createElement(n,null),l.createElement(a,null)))},r=e=>{const{fields:t}=e,n=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const n=l.createElement("code",null,t.longType);return void 0===t.typeLink?n:l.createElement(a.Z,{to:t.typeLink},n)},r=()=>l.createElement("tbody",null,t.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(s,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(n,null),l.createElement(r,null))},i=e=>{const{message:t}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement(r,{fields:t.fields}))};var o=n(62791),u=n(17558);const m=e=>{(0,o.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(u.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},58890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=n(48041),a=(n(49231),n(54852)),s=n(88491);const r={title:"ConditionalTask",hide_title:!0},i=void 0,o={unversionedId:"tasks/ConditionalTask",id:"tasks/ConditionalTask",title:"ConditionalTask",description:"ConditionalTask",source:"@site/docs/tasks/ConditionalTask.mdx",sourceDirName:"tasks",slug:"/tasks/ConditionalTask",permalink:"/tasks/ConditionalTask",draft:!1,tags:[],version:"current",frontMatter:{title:"ConditionalTask",hide_title:!0},sidebar:"publisher",previous:{title:"ComparisonTask",permalink:"/tasks/ComparisonTask"},next:{title:"CronParseTask",permalink:"/tasks/CronParseTask"}},u={},m=[{value:"<code>ConditionalTask</code>",id:"conditionaltask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>ConditionalTask</code>",id:"conditionaltask-1",level:3}],c={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"conditionaltask"},(0,a.kt)("inlineCode",{parentName:"h2"},"ConditionalTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," ConditionalTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," ConditionalTask")),(0,a.kt)("p",null,"This task will run the ",(0,a.kt)("inlineCode",{parentName:"p"},"attempt")," subtasks in an effort to produce a valid\nnumerical result. If ",(0,a.kt)("inlineCode",{parentName:"p"},"attempt")," fails to produce an acceptable result,\n",(0,a.kt)("inlineCode",{parentName:"p"},"on_failure")," subtasks will be run instead."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"conditionaltask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"ConditionalTask")),(0,a.kt)(s.Au,{key:0,message:{name:"ConditionalTask",longName:"ConditionalTask",fullName:".ConditionalTask",description:"This task will run the `attempt` subtasks in an effort to produce a valid numerical result. If\n`attempt` fails to produce an acceptable result, `on_failure` subtasks will be run instead.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"attempt",description:"A list of subtasks to process in an attempt to produce a valid numerical result.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_failure",description:"A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable\nresult.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);