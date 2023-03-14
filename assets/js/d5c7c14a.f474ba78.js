"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14767],{54852:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var r=n(49231);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=a,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(y,o(o({ref:e},u),{},{components:n})):r.createElement(y,o({ref:e},u))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36171:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(48041),a=(n(49231),n(54852));const l={},o=void 0,i={unversionedId:"solana/idl/types/CallbackZC",id:"solana/idl/types/CallbackZC",title:"CallbackZC",description:"| Field       | Type                                                 | Description                                           |",source:"@site/docs/solana/idl/types/CallbackZC.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/CallbackZC",permalink:"/solana/idl/types/CallbackZC",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"Callback",permalink:"/solana/idl/types/Callback"},next:{title:"CompletedPointZC",permalink:"/solana/idl/types/CompletedPointZC"}},p={},c=[],u={toc:c},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"programId"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The program ID of the callback program being invoked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accounts"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/solana/idl/types/AccountMetaZC"},"AccountMetaZC"),"[32]"),(0,a.kt)("td",{parentName:"tr",align:null},"The accounts being used in the callback instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accountsLen"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of accounts in the accounts array.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ixData"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[1024]"),(0,a.kt)("td",{parentName:"tr",align:null},"The serialized instruction data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ixDataLen"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The length of the instruction buffer.")))))}d.isMDXComponent=!0}}]);