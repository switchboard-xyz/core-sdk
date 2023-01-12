"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3190],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),p=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=n,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},50781:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"solana/idl/instructions/oracleWithdraw",id:"solana/idl/instructions/oracleWithdraw",title:"oracleWithdraw",description:"Withdraw stake and/or rewards from an OracleAccount.",source:"@site/docs/solana/idl/instructions/oracleWithdraw.md",sourceDirName:"solana/idl/instructions",slug:"/solana/idl/instructions/oracleWithdraw",permalink:"/solana/idl/instructions/oracleWithdraw",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"oracleQueueSetConfig",permalink:"/solana/idl/instructions/oracleQueueSetConfig"},next:{title:"permissionInit",permalink:"/solana/idl/instructions/permissionInit"}},u={},p=[{value:"Accounts",id:"accounts",level:2},{value:"Args",id:"args",level:2}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Withdraw stake and/or rewards from an OracleAccount."),(0,n.kt)("h2",{id:"accounts"},"Accounts"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"isMut"),(0,n.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracle"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracleAuthority"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tokenAccount"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"withdrawAccount"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"permission"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"programState"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payer"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"systemProgram"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"args"},"Args"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/oraclewithdrawparams"},"OracleWithdrawParams")),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);