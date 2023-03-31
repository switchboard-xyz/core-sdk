"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66659],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var l=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?l.createElement(f,o(o({ref:t},u),{},{components:n})):l.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>r,l1:()=>u,Au:()=>s});var l=n(49231),a=n(15733);const r=e=>{const{enumb:t}=e,n=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),a=()=>l.createElement("tbody",null,t.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement("table",null,l.createElement(n,null),l.createElement(a,null)))},o=e=>{const{fields:t}=e,n=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const n=l.createElement("code",null,t.longType);return void 0===t.typeLink?n:l.createElement(a.Z,{to:t.typeLink},n)},o=()=>l.createElement("tbody",null,t.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(r,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(n,null),l.createElement(o,null))},s=e=>{const{message:t}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement(o,{fields:t.fields}))};var i=n(59415),c=n(17558);const u=e=>{(0,i.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(c.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},33844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(48041),a=(n(49231),n(54852)),r=n(88491);const o={title:"AddTask",hide_title:!0},s=void 0,i={unversionedId:"tasks/AddTask",id:"tasks/AddTask",title:"AddTask",description:"AddTask",source:"@site/docs/tasks/AddTask.mdx",sourceDirName:"tasks",slug:"/tasks/AddTask",permalink:"/tasks/AddTask",draft:!1,tags:[],version:"current",frontMatter:{title:"AddTask",hide_title:!0},sidebar:"publisher",previous:{title:"OracleJob",permalink:"/tasks/"},next:{title:"AnchorFetchTask",permalink:"/tasks/AnchorFetchTask"}},c={},u=[{value:"<code>AddTask</code>",id:"addtask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>AddTask</code>",id:"addtask-1",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"addtask"},(0,a.kt)("inlineCode",{parentName:"h2"},"AddTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," AddTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," AddTask")),(0,a.kt)("p",null,"This task will add a numerical input by a scalar value or by another aggregate."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"addtask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"AddTask")),(0,a.kt)(r.Au,{key:0,message:{name:"AddTask",longName:"AddTask",fullName:".AddTask",description:"This task will add a numerical input by a scalar value or by another\naggregate.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"scalar",description:"Specifies a scalar to add by.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!0,oneofdecl:"Addition",defaultValue:""},{name:"aggregator_pubkey",description:"Specifies an aggregator to add by.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"Addition",defaultValue:""},{name:"job",description:"A job whose result is computed before adding our numerical input by that result.",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!0,oneofdecl:"Addition",defaultValue:""},{name:"big",description:"A stringified big.js. `Accepts variable expansion syntax.`",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"Addition",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);