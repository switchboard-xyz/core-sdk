"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1523],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(95634),a=(n(49231),n(54852));const r={title:"Switchboard V2 (pt. 1)\u200a\u2014\u200aRoles and Responsibilities",description:"",authors:["gallynaut"],tags:[],hide_table_of_contents:!0},i="Switchboard V2 (pt. 1) \u2014 Roles and Responsibilities",s={permalink:"/blog/2021/09/30/Switchboard-V2-Roles-and-Responsibilities",source:"@site/blog/2021/09-30-Switchboard-V2-Roles-and-Responsibilities.mdx",title:"Switchboard V2 (pt. 1)\u200a\u2014\u200aRoles and Responsibilities",description:"",date:"2021-09-30T00:00:00.000Z",formattedDate:"September 30, 2021",tags:[],readingTime:2.445,hasTruncateMarker:!0,authors:[{name:"gallynaut",title:"Developer Relations",url:"https://twitter.com/gallynaut",imageURL:"https://pbs.twimg.com/profile_images/1649642820993679365/buRwDkVY_400x400.jpg",key:"gallynaut"}],frontMatter:{title:"Switchboard V2 (pt. 1)\u200a\u2014\u200aRoles and Responsibilities",description:"",authors:["gallynaut"],tags:[],hide_table_of_contents:!0},prevItem:{title:"Switchboard x GRAPE Network",permalink:"/blog/2021/10/04/Switchboard-x-GRAPE-Network"},nextItem:{title:"Intro to Switchboard",permalink:"/blog/2021/09/22/Intro-to-Switchboard"}},l={authorsImageUrls:[void 0]},c=[],d={toc:c},h="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Switchboard V1 let us show the community how data can be routed on-chain and\nprovided to smart contracts. Since inception, Switchboard has been adopted by\nmany projects across the Solana ecosystem including Mango Markets, Saber, LIQ,\nand Solend, but we\u2019re not done there. Switchboard V2 will build upon these\nconcepts and give more power to the community to determine the direction of the\nproject. Over the next few weeks we will be rolling out more information on the\ndesign of V2 and look to the community for feedback. Without further ado, here\nis an overview of some of the roles and responsibilities for Switchboard V2."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How Data Feeds Are Added to the Network",src:n(37811).Z,width:"653",height:"456"})),(0,a.kt)("p",null,"Switchboard V2 allows the community to decide which data should live on-chain.\nBelow are the main roles of the Switchboard ecosystem, and the functions each\nrole performs:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42421).Z,width:"593",height:"420"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Curators")," are the visionaries of the network and are responsible for finding\noff-chain data the community may like to see on-chain and submitting proposals\nto a registry. Curators are then rewarded with a percentage of revenue generated\nfrom a data feed to incentivize community curation. The registry acts as a \u201cData\nStore\u201d where people can view proposed on-chain data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Publishers")," are responsible for browsing the registry and building data feeds\nfrom a collection of \u201cjobs\u201d (endpoints). Publishers then finalize the data feed\nconfiguration including its update interval, provide the upfront capital to fund\nthe data feed over a specified interval, and submit the data feed to the DAO for\nthe community to vote on."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"DAO")," has a few key responsibilities which include voting on adding\npotential data feeds to the network. The DAO lets the community decide what data\nshould be published on chain."),(0,a.kt)("p",null,"If a submitted data feed has a low refresh rate such that it does not tax the\nexisting queue, it will be automatically granted permission to the network. Once\na data feed has been accepted to the network, it will be added to the oracle\nqueue and updated at its specified interval set by the publisher."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How Oracles Are Added to the Network",src:n(18475).Z,width:"500",height:"435"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Oracles")," are nodes who are responsible for fulfilling network requests and\nact as the intermediary between the Solana blockchain and the internet. Oracles\nwith a set amount of capital staked are automatically granted approval to the\nnetwork. Oracles can also be added to the network by submitting a DAO proposal\nand letting the community vote. An oracle is then ready to fulfill job requests\nafter a specified warm up period. Future articles will go into further details\nwith the incentives nodes have to remain honest."),(0,a.kt)("p",null,"As you can see Switchboard V2 puts more power into the hands of the community.\nThe DAO is responsible for what data is available on-chain and which nodes can\nfulfill those requests. We are excited to roll out the next iteration of\nSwitchboard and can\u2019t wait to see what the community builds with Switchboard!"))}p.isMDXComponent=!0},42421:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2021-09-30-Switchboard-V2-Roles-and-Responsibilities_AllTheData-790161914d134eaee64f873df6a2adf4.png"},18475:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2021-09-30-Switchboard-V2-Roles-and-Responsibilities_Nodes-8eb824e519519ffc9dc0694572302c4d.png"},37811:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2021-09-30-Switchboard-V2-Roles-and-Responsibilities_Roles-13710f566c1d5547916a917d929f1e4d.png"}}]);