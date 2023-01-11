"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:70,title:"Maintenance"},i=void 0,s={unversionedId:"feeds/maintenance",id:"feeds/maintenance",title:"Maintenance",description:"The following highlights some basic maintenance you should employ when creating",source:"@site/docs/feeds/maintenance.mdx",sourceDirName:"feeds",slug:"/feeds/maintenance",permalink:"/feeds/maintenance",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Maintenance"},sidebar:"learn",previous:{title:"Best Practices",permalink:"/feeds/best-practices"},next:{title:"What is Randomness",permalink:"/randomness/"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following highlights some basic maintenance you should employ when creating\nyour own Switchboard feed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitor Lease Funds")," \u2014 you should monitor your feeds lease account for low\nbalances. When a feed\u2019s lease is emptied, it will no longer process new\nupdates until it has enough to reward the oracles processing the update. We\nare working with a few web3 messaging services to enable wallet notifications\nwhen leases are low on funds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitor Crank Eviction")," \u2014 if a lease is emptied, it will also be evicted\nfrom its crank. Switchboard feeds act like public utilities where anyone is\nfree to re-push it to a crank, as long as it doesn\u2019t have\n",(0,a.kt)("inlineCode",{parentName:"li"},"aggregator.disableCrank")," set to true."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitor Data Sources")," \u2014 Sometimes APIs change or move. High availability\nfeeds should have some basic routine health checks to ensure their on-chain\ndata is updating as expected."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitor Priority Fees")," - Solana data feeds may specify a priority fee\nconfiguration in order to push updates through during periods of congestion.\nYou should monitor the average priority fee for the network and update as\nneeded.")))}p.isMDXComponent=!0}}]);