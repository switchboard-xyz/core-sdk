"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87018],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>l,l1:()=>u,Au:()=>o});var r=n(49231),a=n(15733);const l=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),a=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(a,null)))},c=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(a.Z,{to:t.typeLink},n)},c=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(l,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(c,null))},o=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(c,{fields:t.fields}))};var s=n(59415),i=n(17558);const u=e=>{(0,s.Z)();return r.createElement(r.Fragment,null,r.createElement("h3",null,e.title),r.createElement("p",null,e.description),r.createElement("p",null,r.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?r.createElement(r.Fragment,null,r.createElement("br",null),e.inputSample):r.createElement(r.Fragment,null)),r.createElement(i.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),r.createElement("p",null,r.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?r.createElement(r.Fragment,null,r.createElement("br",null),e.outputSample):r.createElement(r.Fragment,null)))}},62413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(48041),a=(n(49231),n(54852)),l=n(88491);const c={title:"AnchorFetchTask",hide_title:!0},o=void 0,s={unversionedId:"tasks/AnchorFetchTask",id:"tasks/AnchorFetchTask",title:"AnchorFetchTask",description:"AnchorFetchTask",source:"@site/docs/tasks/AnchorFetchTask.mdx",sourceDirName:"tasks",slug:"/tasks/AnchorFetchTask",permalink:"/tasks/AnchorFetchTask",draft:!1,tags:[],version:"current",frontMatter:{title:"AnchorFetchTask",hide_title:!0},sidebar:"publisher",previous:{title:"AddTask",permalink:"/tasks/AddTask"},next:{title:"BoundTask",permalink:"/tasks/BoundTask"}},i={},u=[{value:"<code>AnchorFetchTask</code>",id:"anchorfetchtask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>AnchorFetchTask</code>",id:"anchorfetchtask-1",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"anchorfetchtask"},(0,a.kt)("inlineCode",{parentName:"h2"},"AnchorFetchTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," AnchorFetchTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," AnchorFetchTask")),(0,a.kt)("p",null,"Load a parse an Anchor based solana account."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"anchorfetchtask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"AnchorFetchTask")),(0,a.kt)(l.Au,{key:0,message:{name:"AnchorFetchTask",longName:"AnchorFetchTask",fullName:".AnchorFetchTask",description:"Load a parse an Anchor based solana account.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"program_id",description:"Owning program of the account to parse.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"account_address",description:"The account to parse.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);