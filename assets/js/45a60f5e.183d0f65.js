"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>l,Au:()=>i});var a=n(67294),r=n(39960);const l=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),r=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(r,null)))},o=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(r.Z,{to:t.typeLink},n)},o=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(l,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(o,null))},i=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(o,{fields:t.fields}))}},60301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),l=n(95538);const o={title:"ConditionalTask",hide_title:!0},i=void 0,s={unversionedId:"protos/ConditionalTask",id:"protos/ConditionalTask",title:"ConditionalTask",description:"ConditionalTask",source:"@site/docs/protos/ConditionalTask.mdx",sourceDirName:"protos",slug:"/protos/ConditionalTask",permalink:"/protos/ConditionalTask",draft:!1,tags:[],version:"current",frontMatter:{title:"ConditionalTask",hide_title:!0},sidebar:"publisher",previous:{title:"ComparisonTask",permalink:"/protos/ComparisonTask"},next:{title:"CronParseTask",permalink:"/protos/CronParseTask"}},c={},p=[{value:"<code>ConditionalTask</code>",id:"conditionaltask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>ConditionalTask</code>",id:"conditionaltask-1",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"conditionaltask"},(0,r.kt)("inlineCode",{parentName:"h2"},"ConditionalTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"path")," ConditionalTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"package")," ConditionalTask")),(0,r.kt)("p",null,"This task will run the ",(0,r.kt)("inlineCode",{parentName:"p"},"attempt")," subtasks in an effort to produce a valid\nnumerical result. If ",(0,r.kt)("inlineCode",{parentName:"p"},"attempt")," fails to produce an acceptable result,\n",(0,r.kt)("inlineCode",{parentName:"p"},"on_failure")," subtasks will be run instead."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"conditionaltask-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"ConditionalTask")),(0,r.kt)(l.Au,{key:0,message:{name:"ConditionalTask",longName:"ConditionalTask",fullName:".ConditionalTask",description:"This task will run the `attempt` subtasks in an effort to produce a valid numerical result. If\n`attempt` fails to produce an acceptable result, `on_failure` subtasks will be run instead.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"attempt",description:"A list of subtasks to process in an attempt to produce a valid numerical result.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_failure",description:"A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable\nresult.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);