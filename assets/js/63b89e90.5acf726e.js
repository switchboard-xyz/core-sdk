"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59764],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,p(p({ref:e},s),{},{components:r})):n.createElement(f,p({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43534:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={toc:[]};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"crankAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the crank being popped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"popIdx"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Index of the element to pop on the crank.")))))}p.isMDXComponent=!0;const i={},l=void 0,c={unversionedId:"aptos/idl/scripts/CrankPop",id:"aptos/idl/scripts/CrankPop",title:"CrankPop",description:"parameters for script $::run",source:"@site/docs/aptos/idl/scripts/CrankPop.mdx",sourceDirName:"aptos/idl/scripts",slug:"/aptos/idl/scripts/CrankPop",permalink:"/aptos/idl/scripts/CrankPop",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"CrankInit",permalink:"/aptos/idl/scripts/CrankInit"},next:{title:"CrankPush",permalink:"/aptos/idl/scripts/CrankPush"}},s={},u=[],d={toc:u};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"parameters for script ",(0,a.kt)("inlineCode",{parentName:"p"},"${SWITCHBOARD_PROGRAM_ID}::crank_pop_action::run")),(0,a.kt)(p,{mdxType:"CrankPopParams"}))}m.isMDXComponent=!0}}]);