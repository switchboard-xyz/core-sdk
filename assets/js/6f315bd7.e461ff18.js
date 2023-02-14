"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73334],{26565:(e,t,l)=>{l.d(t,{zY:()=>r,l1:()=>c,Au:()=>m});var a=l(67294),n=l(39960);const r=e=>{const{enumb:t}=e,l=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),n=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(l,null),a.createElement(n,null)))},s=e=>{const{fields:t}=e,l=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const l=a.createElement("code",null,t.longType);return void 0===t.typeLink?l:a.createElement(n.Z,{to:t.typeLink},l)},s=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(r,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(l,null),a.createElement(s,null))},m=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(s,{fields:t.fields}))};var i=l(2734),u=l(90814);const c=e=>{(0,i.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(u.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},65732:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=l(83117),n=(l(67294),l(3905)),r=l(26565);const s={title:"EwmaTask",hide_title:!0},m=void 0,i={unversionedId:"tasks/EwmaTask",id:"tasks/EwmaTask",title:"EwmaTask",description:"EwmaTask",source:"@site/docs/tasks/EwmaTask.mdx",sourceDirName:"tasks",slug:"/tasks/EwmaTask",permalink:"/tasks/EwmaTask",draft:!1,tags:[],version:"current",frontMatter:{title:"EwmaTask",hide_title:!0},sidebar:"publisher",previous:{title:"DivideTask",permalink:"/tasks/DivideTask"},next:{title:"HistoryFunctionTask",permalink:"/tasks/HistoryFunctionTask"}},u={},c=[{value:"<code>EwmaTask</code>",id:"ewmatask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>EwmaTask</code>",id:"ewmatask-1",level:3}],o={toc:c};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ewmatask"},(0,n.kt)("inlineCode",{parentName:"h2"},"EwmaTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"path")," EwmaTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"package")," EwmaTask")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"messages"},"Messages"),(0,n.kt)("h3",{id:"ewmatask-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"EwmaTask")),(0,n.kt)(r.Au,{key:0,message:{name:"EwmaTask",longName:"EwmaTask",fullName:".EwmaTask",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"aggregator_address",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"period",description:"",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"lambda",description:"",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);