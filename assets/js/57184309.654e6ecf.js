"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12043],{26565:(e,t,a)=>{a.d(t,{zY:()=>s,l1:()=>m,Au:()=>i});var l=a(67294),n=a(39960);const s=e=>{const{enumb:t}=e,a=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),n=()=>l.createElement("tbody",null,t.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement("table",null,l.createElement(a,null),l.createElement(n,null)))},r=e=>{const{fields:t}=e,a=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const a=l.createElement("code",null,t.longType);return void 0===t.typeLink?a:l.createElement(n.Z,{to:t.typeLink},a)},r=()=>l.createElement("tbody",null,t.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(s,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(a,null),l.createElement(r,null))},i=e=>{const{message:t}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement(r,{fields:t.fields}))};var p=a(2734),o=a(90814);const m=e=>{(0,p.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(o.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},73492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(83117),n=(a(67294),a(3905)),s=a(26565);const r={title:"TwapTask",hide_title:!0},i=void 0,p={unversionedId:"tasks/TwapTask",id:"tasks/TwapTask",title:"TwapTask",description:"TwapTask",source:"@site/docs/tasks/TwapTask.mdx",sourceDirName:"tasks",slug:"/tasks/TwapTask",permalink:"/tasks/TwapTask",draft:!1,tags:[],version:"current",frontMatter:{title:"TwapTask",hide_title:!0},sidebar:"publisher",previous:{title:"TpsTask",permalink:"/tasks/TpsTask"},next:{title:"UniswapExchangeRateTask",permalink:"/tasks/UniswapExchangeRateTask"}},o={},m=[{value:"<code>TwapTask</code>",id:"twaptask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>TwapTask</code>",id:"twaptask-1",level:3}],u={toc:m};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"twaptask"},(0,n.kt)("inlineCode",{parentName:"h2"},"TwapTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"path")," TwapTask")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"package")," TwapTask")),(0,n.kt)("p",null,"Takes a twap over a set period for a certain aggregator."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"messages"},"Messages"),(0,n.kt)("h3",{id:"twaptask-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"TwapTask")),(0,n.kt)(s.Au,{key:0,message:{name:"TwapTask",longName:"TwapTask",fullName:".TwapTask",description:"Takes a twap over a set period for a certain aggregator.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"aggregator_pubkey",description:"The target aggregator for the TWAP.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"period",description:"Period, in seconds, the twap should account for",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"weight_by_propagation_time",description:"Weight samples by their propagation time",label:"optional",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"min_samples",description:"Minimum number of samples in the history to calculate a valid result",label:"optional",type:"uint32",longType:"uint32",fullType:"uint32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"ending_unix_timestamp",description:"Ending unix timestamp to collect values up to",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"ending_unix_timestamp_task",description:"Execute the task to get the ending unix timestamp",label:"optional",type:"CronParseTask",longType:"CronParseTask",fullType:"CronParseTask",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,n.kt)("hr",null))}c.isMDXComponent=!0}}]);