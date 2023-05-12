"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3847],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(95907),a=(r(49231),r(54852));const o={sidebar_position:3,title:"Access Control"},i=void 0,s={unversionedId:"arch/acess-control",id:"arch/acess-control",title:"Access Control",description:"Oracle queue resources, such as oracles, aggregators, VRF accounts, or buffer",source:"@site/docs/arch/acess-control.mdx",sourceDirName:"arch",slug:"/arch/acess-control",permalink:"/arch/acess-control",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Access Control"},sidebar:"gettingStartedSidebar",previous:{title:"Oracle Queues",permalink:"/arch/queues"},next:{title:"Data Feeds",permalink:"/arch/feeds"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(92322).Z,width:"866",height:"438"})),(0,a.kt)("p",null,"Oracle queue resources, such as oracles, aggregators, VRF accounts, or buffer\nrelayer accounts, ",(0,a.kt)("em",{parentName:"p"},"MUST")," have an associated PermissionAccount initialized before\ninteracting with a queue. Permissions are granted by ",(0,a.kt)("inlineCode",{parentName:"p"},"queue.authority"),", which\ncould be a DAO controlled account to allow network participants to vote on new\nentrants."),(0,a.kt)("p",null,"Oracles ",(0,a.kt)("em",{parentName:"p"},"MUST")," have ",(0,a.kt)("strong",{parentName:"p"},"PermitOracleHeartbeat")," permissions before heartbeating on\na queue. This is to prevent a malicious actor from spinning up a plethora of\noracles until it obtains the super majority, at which point it could misreport\ndata feed results and cause honest oracles to be slashed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Queue Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"False (0)"),(0,a.kt)("th",{parentName:"tr",align:null},"True (1)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedFeedsEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Aggregators & Buffer Relayers ",(0,a.kt)("em",{parentName:"td"},"MUST")," have ",(0,a.kt)("strong",{parentName:"td"},"PermitOracleQueueUsage")," permissions before requesting an update"),(0,a.kt)("td",{parentName:"tr",align:null},"Aggregators & Buffer Relayers require no explicit permissions before requesting an update")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedVrfEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},"VRF Accounts ",(0,a.kt)("em",{parentName:"td"},"MUST")," have ",(0,a.kt)("strong",{parentName:"td"},"PermitVrfRequests")," permissions before requesting an update"),(0,a.kt)("td",{parentName:"tr",align:null},"VRF Accounts require no explicit permissions before requesting an update")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enableBufferRelayers")),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer Relayers are ",(0,a.kt)("em",{parentName:"td"},"NOT")," permitted to request updates"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer Relayers are permitted to request updates")))))}d.isMDXComponent=!0},92322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/L1_Queue_Functional-a08fdc564b276fe29506326e162933de.png"}}]);