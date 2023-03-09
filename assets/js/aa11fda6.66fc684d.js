"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83937],{54852:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(49231);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34940:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(48041),a=(n(49231),n(54852));const i={hide_table_of_contents:!0},l=void 0,o={unversionedId:"near/idl/accounts/PermissionAccountData",id:"near/idl/accounts/PermissionAccountData",title:"PermissionAccountData",description:"| Field              | Type     | Description                                                                                                                |",source:"@site/docs/near/idl/accounts/PermissionAccountData.md",sourceDirName:"near/idl/accounts",slug:"/near/idl/accounts/PermissionAccountData",permalink:"/near/idl/accounts/PermissionAccountData",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"near",previous:{title:"OracleQueueAccountData",permalink:"/near/idl/accounts/OracleQueueAccountData"},next:{title:"Overview",permalink:"/near/idl/events/"}},u={},c=[],p={toc:c},s="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The authority that is allowed to set permissions for this account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"permissions"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"/near/idl/types/SwitchboardPermission"},"SwitchboardPermission")," enumeration assigned by the ",(0,a.kt)("inlineCode",{parentName:"td"},"granter")," to the ",(0,a.kt)("inlineCode",{parentName:"td"},"grantee"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"granter"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of account that is granting permissions to use its resources.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grantee"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of account that is being assigned permissions to use a granters resources.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp when the permissions expire.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"creation_timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the crank was created on-chain.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"update_timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"features"),(0,a.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);