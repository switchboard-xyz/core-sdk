"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6682],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45983:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(63536),a=r(38984),o=r(40862),l=r(49231);const i=e=>{const{colorMode:t}=(0,n.I)(),r=(0,a.Z)("dark"===t&&e.darkImg?e.darkImg:e.img);let i="inherit";e.lightBg&&"dark"!==t&&(i=e.lightBg),e.darkBg&&"dark"===t&&(i=e.darkBg);let s={};return e.sx&&(s={backgroundColor:i,m:"auto",display:"flex",...s,...e.sx}),l.createElement(o.Z,{component:"img",sx:s,src:r})}},82774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(95634),a=(r(49231),r(54852)),o=r(45983);const l={slug:"/the-oracle-problem",title:"The Oracle Problem",hide_table_of_contents:!0},i=void 0,s={unversionedId:"learn/the-oracle-problem",id:"learn/the-oracle-problem",title:"The Oracle Problem",description:"<MarkdownImage",source:"@site/docs/101-learn/00-the-oracle-problem.mdx",sourceDirName:"101-learn",slug:"/the-oracle-problem",permalink:"/the-oracle-problem",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/the-oracle-problem",title:"The Oracle Problem",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"\ud83c\udf10 The Network",permalink:"/network"},next:{title:"Program Architecture",permalink:"/architecture"}},c={},u=[{value:"Our Solution",id:"our-solution",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{img:"/img/data/evolutionoforacle.png",sx:{display:"flex"},mdxType:"MarkdownImage"}),(0,a.kt)("p",null,"The oracle problem arises due to the inability of blockchains to interact\ndirectly with external systems. Blockchains are isolated networks that only rely\non data stored in their ledger for consensus. The deterministic nature of smart\ncontracts is a result of the narrow focus of blockchain consensus and their\nability to execute exactly as written with a higher degree of certainty than\ntraditional systems. Incorrect reporting of external data can lead to\ndevastating outcomes for on-chain applications dependent on these data feeds."),(0,a.kt)("p",null,"Below is a high-level overview of the evolution of oracles:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type of Oracle"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Security"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Trusted Signer"),(0,a.kt)("td",{parentName:"tr",align:null},"Single party trust - The first iteration of oracles used a trusted signer to update a price account on-chain. This model is vulnerable to a single keypair leak to pwn the entire system and should never be considered."),(0,a.kt)("td",{parentName:"tr",align:null},"Highly vulnerable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Round-Based Consensus"),(0,a.kt)("td",{parentName:"tr",align:null},"Multi party trust - Multiple oracles are polled and the final result is determined from the median of the responses."),(0,a.kt)("td",{parentName:"tr",align:null},"Oracles have no incentives to be honest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stake-Weighted Consensus"),(0,a.kt)("td",{parentName:"tr",align:null},"Incentive based trust - Stake is required to participate and oracles lose their stake for acting maliciously. Almost there! This system will naturally imbalance as the opportunity cost of acting maliciously outweighs the slashing penalty."),(0,a.kt)("td",{parentName:"tr",align:null},"High instrastructure cost and misalignment of incentives when TVL attack exceeds slashing penalty")))),(0,a.kt)("h3",{id:"our-solution"},"Our Solution"),(0,a.kt)("p",null,"Switchboard addresses the oracle problem by combining:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Verifiable Execution")," - Trusted Execution Environments (TEEs) are\nleveraged to enforce that off-chain oracles are operated within a secure\nenclave. TEEs provide cryptographic proof that the code being executed wasn't\ntampered with and provides a way to enforce a set of protocol rules. Code is\nlaw."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Economic Incentives")," - Oracles must have a minimum stake to join the\nnetwork and get rewarded for honest reporting. Oracles who fail to respond or\nrespond incorrectly will be slashed and lose part of their stake to\nincentivize honest behavior."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Independent Queues")," - Oracles join a set queue which defines the security\nsettings of its compute network. The queue authority could be controlled by a\nDAO creating an autonomous compute network governed by its participants. The\nqueue controls the reward and slashing behavior to entice new oracles to join\nthe network during congestion."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Permissionless / Customization")," - Developers can worry about coding not infrastructure and\nleave the execution to the Switchboard oracle network.")))}m.isMDXComponent=!0}}]);