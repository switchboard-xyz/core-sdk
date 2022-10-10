"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:1,id:"introduction",slug:"."},i="Integration Checklist",c={unversionedId:"near/feeds/introduction",id:"near/feeds/introduction",title:"Integration Checklist",description:"Switchboard data feeds are permissionless in that anyone can configure their own",source:"@site/docs/near/feeds/integration-checklist.mdx",sourceDirName:"near/feeds",slug:"/near/feeds/",permalink:"/near/feeds/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"introduction",slug:"."},sidebar:"near",previous:{title:"Testnet",permalink:"/near/program/testnet"},next:{title:"Table of Contents",permalink:"/near/idl/"}},s={},l=[{value:"Read Access",id:"read-access",level:2},{value:"More Info",id:"more-info",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration-checklist"},"Integration Checklist"),(0,a.kt)("p",null,"Switchboard data feeds are permissionless in that anyone can configure their own\nsources and oracle consensus to achieve their desired level of security. When\ncreating Switchboard feeds, you will need to create the following on-chain\naccounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aggregator Account"),(0,a.kt)("li",{parentName:"ul"},"Permission Account"),(0,a.kt)("li",{parentName:"ul"},"Lease Account"),(0,a.kt)("li",{parentName:"ul"},"A JobAccount for each source of data.")),(0,a.kt)("h2",{id:"read-access"},"Read Access"),(0,a.kt)("p",null,"Switchboard data feeds on Solana are treated as public utilities where anyone\ncan read the current on-chain state."),(0,a.kt)("h2",{id:"more-info"},"More Info"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feeds/about"},"What are Data Feeds?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feeds/best-practices"},"Data Feeds - Best Practices"))))}p.isMDXComponent=!0}}]);