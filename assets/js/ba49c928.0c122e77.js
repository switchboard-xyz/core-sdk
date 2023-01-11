"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},75737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(83117),a=(r(67294),r(3905));const l={hide_table_of_contents:!0},o=void 0,i={unversionedId:"near/idl/events/AggregatorValueUpdateEvent",id:"near/idl/events/AggregatorValueUpdateEvent",title:"AggregatorValueUpdateEvent",description:"| Name          | Type                                                          | Description                                         |",source:"@site/docs/near/idl/events/AggregatorValueUpdateEvent.md",sourceDirName:"near/idl/events",slug:"/near/idl/events/AggregatorValueUpdateEvent",permalink:"/near/idl/events/AggregatorValueUpdateEvent",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"near",previous:{title:"AggregatorOpenRoundEvent",permalink:"/near/idl/events/AggregatorOpenRoundEvent"},next:{title:"OracleBootedEvent",permalink:"/near/idl/events/OracleBootedEvent"}},p={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feed_key"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the aggregator that was updated.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oracles"),(0,a.kt)("td",{parentName:"tr",align:null},"Vec<u8","[32]",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Oracles assigned to the update request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oracle_values"),(0,a.kt)("td",{parentName:"tr",align:null},"Vec<",(0,a.kt)("a",{parentName:"td",href:"/near/idl/types/SwitchboardDecimal"},"SwitchboardDecimal"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Array of oracle responses.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp of the event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"round_id"),(0,a.kt)("td",{parentName:"tr",align:null},"u128"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the round associated with the aggregator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/near/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,a.kt)("td",{parentName:"tr",align:null},"The accepted value on-chain.")))))}c.isMDXComponent=!0}}]);