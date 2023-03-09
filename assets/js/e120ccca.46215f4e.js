"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98278],{54852:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(49231);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(g,o(o({ref:e},u),{},{components:r})):n.createElement(g,o({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94198:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=r(48041),a=(r(49231),r(54852));const l={toc:[]},o="wrapper";function i(t){let{components:e,...r}=t;return(0,a.kt)(o,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"permissions"),(0,a.kt)("td",{parentName:"tr",align:null},"BitVector"),(0,a.kt)("td",{parentName:"tr",align:null},"The SwitchboardPermission enumeration assigned by the ",(0,a.kt)("inlineCode",{parentName:"td"},"granter")," to the ",(0,a.kt)("inlineCode",{parentName:"td"},"grantee"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"granter"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the account that is granting permissions to use its resources.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grantee"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the account that is being granted permissions to use a granter's resources.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the resource was created.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"updatedAt"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the permissions were last updated.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"features"),(0,a.kt)("td",{parentName:"tr",align:null},"bool[]"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}i.isMDXComponent=!0;const s={},p=void 0,u={unversionedId:"aptos/idl/resources/Permission",id:"aptos/idl/resources/Permission",title:"Permission",description:"",source:"@site/docs/aptos/idl/resources/Permission.mdx",sourceDirName:"aptos/idl/resources",slug:"/aptos/idl/resources/Permission",permalink:"/aptos/idl/resources/Permission",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"Oracle",permalink:"/aptos/idl/resources/Oracle"},next:{title:"Queue",permalink:"/aptos/idl/resources/Queue"}},c={},m=[],d={toc:m},g="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(g,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"Permission"}))}k.isMDXComponent=!0}}]);