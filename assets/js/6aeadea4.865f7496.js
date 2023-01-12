"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1930],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(k,o(o({ref:e},p),{},{components:a})):n.createElement(k,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66122:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"solana/idl/accounts/LeaseAccountData",id:"solana/idl/accounts/LeaseAccountData",title:"LeaseAccountData",description:"This should be any ccount that links a permission to an escrow. Size 0.004043760 SOL.",source:"@site/docs/solana/idl/accounts/LeaseAccountData.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/LeaseAccountData",permalink:"/solana/idl/accounts/LeaseAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"JobAccountData",permalink:"/solana/idl/accounts/JobAccountData"},next:{title:"OracleAccountData",permalink:"/solana/idl/accounts/OracleAccountData"}},c={},u=[],p={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This should be any ccount that links a permission to an escrow. ",(0,r.kt)("b",null,"Size: "),"453 Bytes",(0,r.kt)("br",null),(0,r.kt)("b",null,"Rent Exemption: "),"0.004043760 SOL",(0,r.kt)("br",null),(0,r.kt)("br",null),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key of the token account holding the lease contract funds until rewarded to oracles for successfully processing updates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key of the oracle queue that the lease contract is applicable for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aggregator"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key of the aggregator that the lease contract is applicable for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key of the Solana token program ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isActive"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the lease contract is still active.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"crankRowCount"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of an aggregators position on a crank.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:null},"i64"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when the lease contract was created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updateCount"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter keeping track of the number of updates for the given aggregator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withdrawAuthority"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key of keypair that may withdraw funds from the lease at any time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[256]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}s.isMDXComponent=!0}}]);