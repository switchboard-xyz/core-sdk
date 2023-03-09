"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97977],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(48041),a=(r(49231),r(54852));const i={},o=void 0,l={unversionedId:"solana/idl/types/SwitchboardPermission",id:"solana/idl/types/SwitchboardPermission",title:"SwitchboardPermission",description:"| Name                   | Value | Description                                                                                                                                                                               |",source:"@site/docs/solana/idl/types/SwitchboardPermission.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/SwitchboardPermission",permalink:"/solana/idl/types/SwitchboardPermission",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"SwitchboardDecimal",permalink:"/solana/idl/types/SwitchboardDecimal"},next:{title:"VaultTransferParams",permalink:"/solana/idl/types/VaultTransferParams"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PermitOracleHeartbeat"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"queue ",(0,a.kt)("inlineCode",{parentName:"td"},"authority")," has permitted an Oracle Account to heartbeat on it's queue and receive update requests. Oracles ",(0,a.kt)("em",{parentName:"td"},"always")," need permissions to join a queue.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PermitOracleQueueUsage"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"queue ",(0,a.kt)("inlineCode",{parentName:"td"},"authority")," has permitted an Aggregator Account to request updates from it's oracles or join an existing crank. ",(0,a.kt)("strong",{parentName:"td"},"Note:")," Not required if a queue has ",(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedFeedsEnabled"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PermitVrfRequests"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"queue ",(0,a.kt)("inlineCode",{parentName:"td"},"authority")," has permitted a VRF Account to request randomness from it's oracles. ",(0,a.kt)("strong",{parentName:"td"},"Note:")," Not required if a queue has ",(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedVrfEnabled"),".")))))}d.isMDXComponent=!0}}]);