"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53864],{88491:(e,t,n)=>{n.d(t,{zY:()=>s,l1:()=>c,Au:()=>i});var a=n(49231),l=n(15733);const s=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),l=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(l,null)))},r=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(l.Z,{to:t.typeLink},n)},r=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(s,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(r,null))},i=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(r,{fields:t.fields}))};var u=n(62791),m=n(17558);const c=e=>{(0,u.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(m.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},25070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(48041),l=(n(49231),n(54852)),s=n(88491);const r={title:"MedianTask",hide_title:!0},i=void 0,u={unversionedId:"tasks/MedianTask",id:"tasks/MedianTask",title:"MedianTask",description:"MedianTask",source:"@site/docs/tasks/MedianTask.mdx",sourceDirName:"tasks",slug:"/tasks/MedianTask",permalink:"/tasks/MedianTask",draft:!1,tags:[],version:"current",frontMatter:{title:"MedianTask",hide_title:!0},sidebar:"publisher",previous:{title:"MeanTask",permalink:"/tasks/MeanTask"},next:{title:"MinTask",permalink:"/tasks/MinTask"}},m={},c=[{value:"<code>MedianTask</code>",id:"mediantask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>MedianTask</code>",id:"mediantask-1",level:3}],d={toc:c},o="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"mediantask"},(0,l.kt)("inlineCode",{parentName:"h2"},"MedianTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," MedianTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," MedianTask")),(0,l.kt)("p",null,"Returns the median of all the results returned by the provided subtasks and\nsubjobs. Nested tasks must return a Number."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"mediantask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"MedianTask")),(0,l.kt)(s.Au,{key:0,message:{name:"MedianTask",longName:"MedianTask",fullName:".MedianTask",description:"Returns the median of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"tasks",description:"A list of subtasks to process and produce a list of result values.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"jobs",description:"A list of subjobs to process and produce a list of result values.",label:"repeated",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"min_successful_required",description:"",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);