"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48361],{88491:(e,t,a)=>{a.d(t,{zY:()=>s,l1:()=>u,Au:()=>o});var n=a(49231),l=a(15733);const s=e=>{const{enumb:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),l=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(a,null),n.createElement(l,null)))},r=e=>{const{fields:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),s=e=>{let{field:t}=e;const a=n.createElement("code",null,t.longType);return void 0===t.typeLink?a:n.createElement(l.Z,{to:t.typeLink},a)},r=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(s,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(a,null),n.createElement(r,null))},o=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(r,{fields:t.fields}))};var p=a(62791),i=a(17558);const u=e=>{(0,p.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(i.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},55003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=a(48041),l=(a(49231),a(54852)),s=a(88491);const r={toc:[]},o="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(o,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.l1,{title:"Get Request Example",subtitle:"Bitfinex HttpTask",description:"Fetch data from the Bitfinex API",input:"NONE - Not used",output:"JSON Response",outputSample:'[["tBTCUSD",22295,24.53541614,22296,13.4187415,625,0.02884305,22294,2456.21099645,22339,21354]]',tasks:[{httpTask:{url:"https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD"}}],mdxType:"ProtoExample"}),(0,l.kt)(s.l1,{title:"POST Request with Headers",subtitle:"HttpTask",description:"Send a POST request with HTTP Headers",input:"NONE - Not used",output:"JSON Response",tasks:[{httpTask:{url:"https://mywebsite.org/path",method:"METHOD_POST",headers:[{key:"MY_HEADER_KEY",value:"MY_HEADER_VALUE"}],body:'{"MY_BODY_KEY":"MY_BODY_VALUE"}'}}],mdxType:"ProtoExample"}))}p.isMDXComponent=!0;const i={title:"HttpTask",hide_title:!0},u=void 0,m={unversionedId:"tasks/HttpTask",id:"tasks/HttpTask",title:"HttpTask",description:"HttpTask",source:"@site/docs/tasks/HttpTask.mdx",sourceDirName:"tasks",slug:"/tasks/HttpTask",permalink:"/tasks/HttpTask",draft:!1,tags:[],version:"current",frontMatter:{title:"HttpTask",hide_title:!0},sidebar:"publisher",previous:{title:"HistoryFunctionTask",permalink:"/tasks/HistoryFunctionTask"},next:{title:"JsonParseTask",permalink:"/tasks/JsonParseTask"}},d={},c=[{value:"<code>HttpTask</code>",id:"httptask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>HttpTask</code>",id:"httptask-1",level:3},{value:"<code>HttpTask.Header</code>",id:"httptaskheader",level:3},{value:"Enums",id:"enums",level:2},{value:"<code>HttpTask.Method</code>",id:"httptaskmethod",level:3},{value:"Examples",id:"examples",level:2}],k={toc:c},T="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(T,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"httptask"},(0,l.kt)("inlineCode",{parentName:"h2"},"HttpTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," HttpTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," HttpTask")),(0,l.kt)("p",null,"The adapter will report the text body of a successful HTTP request to the\nspecified url, or return an error if the response status code is greater than or\nequal to 400. @return string representation of it's output."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"httptask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"HttpTask")),(0,l.kt)(s.Au,{key:0,message:{name:"HttpTask",longName:"HttpTask",fullName:".HttpTask",description:"The adapter will report the text body of a successful HTTP request to the specified url, \nor return an error if the response status code is greater than or equal to 400.\n@return string representation of it's output.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"url",description:"A string containing the URL to direct this HTTP request to.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"method",description:"The type of HTTP request to make.",label:"optional",type:"Method",longType:"HttpTask.Method",fullType:"HttpTask.Method",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"headers",description:"A list of headers to add to this HttpTask.",label:"repeated",type:"Header",longType:"HttpTask.Header",fullType:"HttpTask.Header",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"body",description:"A stringified body (if any) to add to this HttpTask.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("h3",{id:"httptaskheader"},(0,l.kt)("inlineCode",{parentName:"h3"},"HttpTask.Header")),(0,l.kt)(s.Au,{key:1,message:{name:"Header",longName:"HttpTask.Header",fullName:".HttpTask.Header",description:"An object that represents a header to add to an HTTP request.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"key",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"enums"},"Enums"),(0,l.kt)("h3",{id:"httptaskmethod"},(0,l.kt)("inlineCode",{parentName:"h3"},"HttpTask.Method")),(0,l.kt)(s.zY,{key:0,enumb:{name:"Method",longName:"HttpTask.Method",fullName:".HttpTask.Method",description:"An enumeration representing the types of HTTP requests available to make.",values:[{name:"METHOD_UNKOWN",number:"0",description:"Unset HTTP method will default to METHOD_GET"},{name:"METHOD_GET",number:"1",description:"Perform an HTTP 'GET' request."},{name:"METHOD_POST",number:"2",description:"Perform an HTTP 'POST' request."}]},mdxType:"ProtoEnum"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(p,{mdxType:"HttpTaskExamples"}))}h.isMDXComponent=!0}}]);