"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39090],{88491:(e,t,a)=>{a.d(t,{zY:()=>r,l1:()=>u,Au:()=>c});var n=a(49231),l=a(15733);const r=e=>{const{enumb:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),l=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(a,null),n.createElement(l,null)))},s=e=>{const{fields:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const a=n.createElement("code",null,t.longType);return void 0===t.typeLink?a:n.createElement(l.Z,{to:t.typeLink},a)},s=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(r,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(a,null),n.createElement(s,null))},c=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(s,{fields:t.fields}))};var m=a(62791),i=a(17558);const u=e=>{(0,m.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(i.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},92127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=a(48041),l=(a(49231),a(54852)),r=a(88491);const s={title:"RegexExtractTask",hide_title:!0},c=void 0,m={unversionedId:"tasks/RegexExtractTask",id:"tasks/RegexExtractTask",title:"RegexExtractTask",description:"RegexExtractTask",source:"@site/docs/tasks/RegexExtractTask.mdx",sourceDirName:"tasks",slug:"/tasks/RegexExtractTask",permalink:"/tasks/RegexExtractTask",draft:!1,tags:[],version:"current",frontMatter:{title:"RegexExtractTask",hide_title:!0},sidebar:"publisher",previous:{title:"PowTask",permalink:"/tasks/PowTask"},next:{title:"RoundTask",permalink:"/tasks/RoundTask"}},i={},u=[{value:"<code>RegexExtractTask</code>",id:"regexextracttask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>RegexExtractTask</code>",id:"regexextracttask-1",level:3}],o={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"regexextracttask"},(0,l.kt)("inlineCode",{parentName:"h2"},"RegexExtractTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," RegexExtractTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," RegexExtractTask")),(0,l.kt)("p",null,"Find a pattern within a string of a previous task and extract a group number."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"regexextracttask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"RegexExtractTask")),(0,l.kt)(r.Au,{key:0,message:{name:"RegexExtractTask",longName:"RegexExtractTask",fullName:".RegexExtractTask",description:"Find a pattern within a string of a previous task and extract a group number.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"pattern",description:"Regex pattern to find.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"group_number",description:"Group number to extract.",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);