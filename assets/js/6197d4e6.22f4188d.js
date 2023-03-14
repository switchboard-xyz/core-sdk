"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45221],{54852:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(49231);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(k,u(u({ref:e},p),{},{components:a})):n.createElement(k,u({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,u=new Array(l);u[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[d]="string"==typeof t?t:r,u[1]=o;for(var c=2;c<l;c++)u[c]=a[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},820:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(48041),r=(a(49231),a(54852));const l={},u=void 0,o={unversionedId:"solana/idl/accounts/VrfAccountData",id:"solana/idl/accounts/VrfAccountData",title:"VrfAccountData",description:"Size 0.203134560SOL",source:"@site/docs/solana/idl/accounts/VrfAccountData.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/VrfAccountData",permalink:"/solana/idl/accounts/VrfAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"SlidingResultAccountData",permalink:"/solana/idl/accounts/SlidingResultAccountData"},next:{title:"VrfLiteAccountData",permalink:"/solana/idl/accounts/VrfLiteAccountData"}},i={},c=[],p={toc:c},d="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Size: "),"29058 Bytes",(0,r.kt)("br",null),(0,r.kt)("b",null,"Rent Exemption: "),"0.203134560SOL",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/VrfStatus"},"VrfStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"The current status of the VRF account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Incremental counter for tracking VRF rounds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"On-chain account delegated for making account changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/solana/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")," that is assigned to fulfill VRF update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The token account used to hold funds for VRF update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/CallbackZC"},"CallbackZC")),(0,r.kt)("td",{parentName:"tr",align:null},"The callback that is invoked when an update request is successfully verified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of oracles assigned to a VRF update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"builders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/VrfBuilder"},"VrfBuilder"),"[8]"),(0,r.kt)("td",{parentName:"tr",align:null},"Struct containing the intermediate state between VRF crank actions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buildersLen"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of builders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testMode"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentRound"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/VrfRound"},"VrfRound")),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle results from the current round of update request that has not been accepted as valid yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[1024]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved for future info.")))))}s.isMDXComponent=!0}}]);