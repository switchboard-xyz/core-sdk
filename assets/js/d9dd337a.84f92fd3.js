"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(r),b=a,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95538:(e,t,r)=>{r.d(t,{zY:()=>l,Au:()=>c});var n=r(67294),a=r(39960);const l=e=>{const{enumb:t}=e,r=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),a=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(r,null),n.createElement(a,null)))},o=e=>{const{fields:t}=e,r=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const r=n.createElement("code",null,t.longType);return void 0===t.typeLink?r:n.createElement(a.Z,{to:t.typeLink},r)},o=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(l,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(r,null),n.createElement(o,null))},c=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(o,{fields:t.fields}))}},91968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(83117),a=(r(67294),r(3905)),l=r(95538);const o={title:"SubtractTask",hide_title:!0},c=void 0,s={unversionedId:"protos/SubtractTask",id:"protos/SubtractTask",title:"SubtractTask",description:"SubtractTask",source:"@site/docs/protos/SubtractTask.mdx",sourceDirName:"protos",slug:"/protos/SubtractTask",permalink:"/protos/SubtractTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SubtractTask",hide_title:!0},sidebar:"publisher",previous:{title:"SplTokenParseTask",permalink:"/protos/SplTokenParseTask"},next:{title:"SushiswapExchangeRateTask",permalink:"/protos/SushiswapExchangeRateTask"}},i={},u=[{value:"<code>SubtractTask</code>",id:"subtracttask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SubtractTask</code>",id:"subtracttask-1",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"subtracttask"},(0,a.kt)("inlineCode",{parentName:"h2"},"SubtractTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," SubtractTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," SubtractTask")),(0,a.kt)("p",null,"This task will subtract a numerical input by a scalar value or by another\naggregate."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"subtracttask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"SubtractTask")),(0,a.kt)(l.Au,{key:0,message:{name:"SubtractTask",longName:"SubtractTask",fullName:".SubtractTask",description:"This task will subtract a numerical input by a scalar value or by another\naggregate.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"scalar",description:"Specifies a scalar to subtract by.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!0,oneofdecl:"Subtraction",defaultValue:""},{name:"aggregator_pubkey",description:"Specifies an aggregator to subtract by.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"Subtraction",defaultValue:""},{name:"job",description:"A job whose result is computed before subtracting our numerical input by that result.",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!0,oneofdecl:"Subtraction",defaultValue:""},{name:"big",description:"A stringified big.js. `Accepts variable expansion syntax.`",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"Subtraction",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);