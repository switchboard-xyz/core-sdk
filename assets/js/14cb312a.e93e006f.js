"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80182],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(49231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>r,l1:()=>u,Au:()=>i});var a=n(49231),l=n(15733);const r=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),l=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(l,null)))},o=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(l.Z,{to:t.typeLink},n)},o=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(r,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(o,null))},i=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(o,{fields:t.fields}))};var s=n(59415),c=n(17558);const u=e=>{(0,s.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(c.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},58890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(48041),l=(n(49231),n(54852)),r=n(88491);const o={title:"ConditionalTask",hide_title:!0},i=void 0,s={unversionedId:"tasks/ConditionalTask",id:"tasks/ConditionalTask",title:"ConditionalTask",description:"ConditionalTask",source:"@site/docs/tasks/ConditionalTask.mdx",sourceDirName:"tasks",slug:"/tasks/ConditionalTask",permalink:"/tasks/ConditionalTask",draft:!1,tags:[],version:"current",frontMatter:{title:"ConditionalTask",hide_title:!0},sidebar:"publisher",previous:{title:"ComparisonTask",permalink:"/tasks/ComparisonTask"},next:{title:"CronParseTask",permalink:"/tasks/CronParseTask"}},c={},u=[{value:"<code>ConditionalTask</code>",id:"conditionaltask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>ConditionalTask</code>",id:"conditionaltask-1",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"conditionaltask"},(0,l.kt)("inlineCode",{parentName:"h2"},"ConditionalTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," ConditionalTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," ConditionalTask")),(0,l.kt)("p",null,"This task will run the ",(0,l.kt)("inlineCode",{parentName:"p"},"attempt")," subtasks in an effort to produce a valid\nnumerical result. If ",(0,l.kt)("inlineCode",{parentName:"p"},"attempt")," fails to produce an acceptable result,\n",(0,l.kt)("inlineCode",{parentName:"p"},"on_failure")," subtasks will be run instead."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"conditionaltask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"ConditionalTask")),(0,l.kt)(r.Au,{key:0,message:{name:"ConditionalTask",longName:"ConditionalTask",fullName:".ConditionalTask",description:"This task will run the `attempt` subtasks in an effort to produce a valid numerical result. If\n`attempt` fails to produce an acceptable result, `on_failure` subtasks will be run instead.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"attempt",description:"A list of subtasks to process in an attempt to produce a valid numerical result.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_failure",description:"A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable\nresult.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);