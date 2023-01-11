"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20033],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:e},c),{},{components:r})):n.createElement(y,i({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73856:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={toc:[]};function i(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aggregatorAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of aggregator that is setting a lease authority for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queueAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the oracle queue that the resource belongs to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making changes.")))))}i.isMDXComponent=!0;const l={},p=void 0,s={unversionedId:"aptos/idl/scripts/LeaseSetAuthority",id:"aptos/idl/scripts/LeaseSetAuthority",title:"LeaseSetAuthority",description:"parameters for script",source:"@site/docs/aptos/idl/scripts/LeaseSetAuthority.mdx",sourceDirName:"aptos/idl/scripts",slug:"/aptos/idl/scripts/LeaseSetAuthority",permalink:"/aptos/idl/scripts/LeaseSetAuthority",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"LeaseInit",permalink:"/aptos/idl/scripts/LeaseInit"},next:{title:"LeaseWithdraw",permalink:"/aptos/idl/scripts/LeaseWithdraw"}},c={},u=[],d={toc:u};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"parameters for script\n",(0,a.kt)("inlineCode",{parentName:"p"},"${SWITCHBOARD_PROGRAM_ID}::lease_set_authority_action::run")),(0,a.kt)(i,{mdxType:"LeaseSetAuthorityparams"}))}m.isMDXComponent=!0}}]);