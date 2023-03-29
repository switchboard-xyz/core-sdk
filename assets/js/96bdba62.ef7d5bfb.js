"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92268],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>f});var n=r(48041),a=r(49231),o=r(54852);const s=JSON.parse('{"aggregator":"An aggregator, or data feed, dictates: how data is brought on-chain from it\'s assigned source, how often updates can be requested, and from which set of oracles updates can be requested from.","curator":"A curator is someone who scours the internet and builds on-chain job definitions from which publishers can use to build data feeds from.","crank":"A crank is a priority queue of aggregators and their next available update time. The crank is the scheduling mechanism that allows feeds to be updated at a regular interval and reward the update requester for jump starting the system.","history buffer":"A history buffer is an optional feature that can be added to an aggregator and stores the last N accepted results along with a timestamp.","job":"A job, or OracleJob, stores a list of Switchboard tasks which instructs the oracle on how to bring data on-chain.","lease":"A lease is a prefunded escrow used to reward oracles for successfully updating a data feed.","oracle":"An oracle, or node, sits between the internet and a blockchain and facilitates the flow of information. An oracle reads in a feeds job definitions, calculates the result, and submits its response on-chain.","oracle consensus":"Oracle consensus determines how oracles come to agreement on the accepted on-chain result. Switchboard oracles use the median oracle response as the accepted result. A feed authority can control how many oracles are requested and how many must respond to influence its security.","oracle queue":"An oracle queue is a round-robin queue of oracles actively heartbeating on-chain. When an update is requested from a queue, the next N oracles are assigned to the update request and cycled to the back of the queue.","publisher":"A publisher is someone who builds and creates a data feed on-chain. Typically this is a program or dApp that requires the data.","task":"An instruction an oracle executes. A task can fetch, parse, or transform data.","variance threshold":"A feed authority may specify a variance threshold to prevent redundant update requests and only allow oracle responses if the variance percentage between the last accepted result and the current value exceeds some threshold. Useful for conserving a lease\'s funds and extends the life of a feed.","verifiable random function":"Verifiable Random Function (VRF) is a prove-able cryptographic function that uses a private key to generate a pseudo-random value which can be verified by anyone with just the public key without leaking the VRF producer\'s secret key."}');const i=function(){const e=[];for(const t in s)if(s.hasOwnProperty(t)){const r=s[t];e.push(a.createElement("tr",{key:t},a.createElement("td",null,c(t)),a.createElement("td",null,r)))}return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Term"),a.createElement("th",null,"Definition"))),a.createElement("tbody",null,e))};function c(e){const t=e.split(/\s+/);for(let r=0;r<t.length;r++){const e=t[r];if(e===e.toUpperCase())continue;const n=e.charAt(0).toUpperCase()+e.slice(1);t[r]=n}return t.join(" ")}const l={sidebar_position:50,slug:"/terms",title:"Terminology"},u=void 0,d={unversionedId:"about/terminology",id:"about/terminology",title:"Terminology",description:"",source:"@site/docs/about/terminology.mdx",sourceDirName:"about",slug:"/terms",permalink:"/terms",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,slug:"/terms",title:"Terminology"},sidebar:"about",previous:{title:"FAQ",permalink:"/faq"}},p={},f=[],h={toc:f},m="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"TermsTable"}))}b.isMDXComponent=!0}}]);