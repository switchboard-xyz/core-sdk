"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16578],{26565:(e,t,l)=>{l.d(t,{zY:()=>r,l1:()=>u,Au:()=>o});var n=l(67294),a=l(39960);const r=e=>{const{enumb:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),a=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(l,null),n.createElement(a,null)))},s=e=>{const{fields:t}=e,l=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const l=n.createElement("code",null,t.longType);return void 0===t.typeLink?l:n.createElement(a.Z,{to:t.typeLink},l)},s=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(r,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(l,null),n.createElement(s,null))},o=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(s,{fields:t.fields}))};var i=l(2734),m=l(90814);const u=e=>{(0,i.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(m.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},85862:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=l(83117),a=(l(67294),l(3905)),r=l(26565);const s={title:"PowTask",hide_title:!0},o=void 0,i={unversionedId:"tasks/PowTask",id:"tasks/PowTask",title:"PowTask",description:"PowTask",source:"@site/docs/tasks/PowTask.mdx",sourceDirName:"tasks",slug:"/tasks/PowTask",permalink:"/tasks/PowTask",draft:!1,tags:[],version:"current",frontMatter:{title:"PowTask",hide_title:!0},sidebar:"publisher",previous:{title:"PerpMarketTask",permalink:"/tasks/PerpMarketTask"},next:{title:"RegexExtractTask",permalink:"/tasks/RegexExtractTask"}},m={},u=[{value:"<code>PowTask</code>",id:"powtask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>PowTask</code>",id:"powtask-1",level:3}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"powtask"},(0,a.kt)("inlineCode",{parentName:"h2"},"PowTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," PowTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," PowTask")),(0,a.kt)("p",null,"Take the power of the working value."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"powtask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"PowTask")),(0,a.kt)(r.Au,{key:0,message:{name:"PowTask",longName:"PowTask",fullName:".PowTask",description:"Take the power of the working value.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"scalar",description:"Take the working value to the exponent of value.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!0,oneofdecl:"Exponent",defaultValue:""},{name:"aggregator_pubkey",description:"Take the working value to the exponent of the aggregators value.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"Exponent",defaultValue:""},{name:"big",description:"A stringified big.js. `Accepts variable expansion syntax.`",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"Exponent",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);