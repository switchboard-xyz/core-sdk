"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16778],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2374:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const l={toc:[]};function i(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the current update count.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roundOpenTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the time that the round was opened at.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roundOpenBlockHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintain the blockheight at the time that the round was opened.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the current median of all successful round responses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stdDeviation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"Standard deviation of the accepted results in the round.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minResponse"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the minimum node response this round.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxResponse"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the maximum node response this round.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"HexString[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Pubkeys of the oracles fulfilling this round.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"medians"),(0,r.kt)("td",{parentName:"tr",align:null},"Option<",(0,r.kt)("a",{parentName:"td",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal"),">","[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents all successful node responses this round. ",(0,r.kt)("inlineCode",{parentName:"td"},"NaN")," if empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentPayout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/aptos/idl/types/SwitchboardDecimal"},"SwitchboardDecimal"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Current rewards/slashes oracles have received this round.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorsFulfilled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains whether the oracle assigned at the specific index failed to fulfill a round response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the number of successful responses received from nodes. Nodes can submit one successful response per round.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numError"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the number of failed responses from the oracles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isClosed"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains whether or not the round is closed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roundConfirmedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the round close timestamp.")))))}i.isMDXComponent=!0;const o={},p=void 0,d={unversionedId:"aptos/idl/types/AggregatorRound",id:"aptos/idl/types/AggregatorRound",title:"AggregatorRound",description:"",source:"@site/docs/aptos/idl/types/AggregatorRound.mdx",sourceDirName:"aptos/idl/types",slug:"/aptos/idl/types/AggregatorRound",permalink:"/aptos/idl/types/AggregatorRound",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"AggregatorResultsConfig",permalink:"/aptos/idl/types/AggregatorResultsConfig"},next:{title:"Coin",permalink:"/aptos/idl/types/Coin"}},s={},u=[],m={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"AggregatorRound"}))}c.isMDXComponent=!0}}]);