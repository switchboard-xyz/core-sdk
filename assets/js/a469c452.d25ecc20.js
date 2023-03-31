"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48361],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>l,l1:()=>u,Au:()=>o});var a=n(49231),r=n(15733);const l=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),r=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(r,null)))},s=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(r.Z,{to:t.typeLink},n)},s=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(l,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(s,null))},o=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(s,{fields:t.fields}))};var i=n(59415),p=n(17558);const u=e=>{(0,i.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},55003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=n(48041),r=(n(49231),n(54852)),l=n(88491);const s={toc:[]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.l1,{title:"Get Request Example",subtitle:"Bitfinex HttpTask",description:"Fetch data from the Bitfinex API",input:"NONE - Not used",output:"JSON Response",outputSample:'[["tBTCUSD",22295,24.53541614,22296,13.4187415,625,0.02884305,22294,2456.21099645,22339,21354]]',tasks:[{httpTask:{url:"https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD"}}],mdxType:"ProtoExample"}),(0,r.kt)(l.l1,{title:"POST Request with Headers",subtitle:"HttpTask",description:"Send a POST request with HTTP Headers",input:"NONE - Not used",output:"JSON Response",tasks:[{httpTask:{url:"https://mywebsite.org/path",method:"METHOD_POST",headers:[{key:"MY_HEADER_KEY",value:"MY_HEADER_VALUE"}],body:'{"MY_BODY_KEY":"MY_BODY_VALUE"}'}}],mdxType:"ProtoExample"}))}i.isMDXComponent=!0;const p={title:"HttpTask",hide_title:!0},u=void 0,c={unversionedId:"tasks/HttpTask",id:"tasks/HttpTask",title:"HttpTask",description:"HttpTask",source:"@site/docs/tasks/HttpTask.mdx",sourceDirName:"tasks",slug:"/tasks/HttpTask",permalink:"/tasks/HttpTask",draft:!1,tags:[],version:"current",frontMatter:{title:"HttpTask",hide_title:!0},sidebar:"publisher",previous:{title:"HistoryFunctionTask",permalink:"/tasks/HistoryFunctionTask"},next:{title:"JsonParseTask",permalink:"/tasks/JsonParseTask"}},m={},d=[{value:"<code>HttpTask</code>",id:"httptask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>HttpTask</code>",id:"httptask-1",level:3},{value:"<code>HttpTask.Header</code>",id:"httptaskheader",level:3},{value:"Enums",id:"enums",level:2},{value:"<code>HttpTask.Method</code>",id:"httptaskmethod",level:3},{value:"Examples",id:"examples",level:2}],k={toc:d},T="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(T,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"httptask"},(0,r.kt)("inlineCode",{parentName:"h2"},"HttpTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"path")," HttpTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"package")," HttpTask")),(0,r.kt)("p",null,"The adapter will report the text body of a successful HTTP request to the\nspecified url, or return an error if the response status code is greater than or\nequal to 400. @return string representation of it's output."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"httptask-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"HttpTask")),(0,r.kt)(l.Au,{key:0,message:{name:"HttpTask",longName:"HttpTask",fullName:".HttpTask",description:"The adapter will report the text body of a successful HTTP request to the specified url, \nor return an error if the response status code is greater than or equal to 400.\n@return string representation of it's output.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"url",description:"A string containing the URL to direct this HTTP request to.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"method",description:"The type of HTTP request to make.",label:"optional",type:"Method",longType:"HttpTask.Method",fullType:"HttpTask.Method",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"headers",description:"A list of headers to add to this HttpTask.",label:"repeated",type:"Header",longType:"HttpTask.Header",fullType:"HttpTask.Header",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"body",description:"A stringified body (if any) to add to this HttpTask.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("h3",{id:"httptaskheader"},(0,r.kt)("inlineCode",{parentName:"h3"},"HttpTask.Header")),(0,r.kt)(l.Au,{key:1,message:{name:"Header",longName:"HttpTask.Header",fullName:".HttpTask.Header",description:"An object that represents a header to add to an HTTP request.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"key",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("h3",{id:"httptaskmethod"},(0,r.kt)("inlineCode",{parentName:"h3"},"HttpTask.Method")),(0,r.kt)(l.zY,{key:0,enumb:{name:"Method",longName:"HttpTask.Method",fullName:".HttpTask.Method",description:"An enumeration representing the types of HTTP requests available to make.",values:[{name:"METHOD_UNKOWN",number:"0",description:"Unset HTTP method will default to METHOD_GET"},{name:"METHOD_GET",number:"1",description:"Perform an HTTP 'GET' request."},{name:"METHOD_POST",number:"2",description:"Perform an HTTP 'POST' request."}]},mdxType:"ProtoEnum"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i,{mdxType:"HttpTaskExamples"}))}f.isMDXComponent=!0}}]);