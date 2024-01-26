"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6382],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71176:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(49231);const o=e=>{let{type:t,header:r,children:o}=e;const a=r||t.toUpperCase();return n.createElement("div",{className:`custom-admonition ${t}`},a&&n.createElement("div",{className:"custom-admonition-header"},a),n.createElement("div",{className:"custom-admonition-content"},o))}},86911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(432),o=(r(49231),r(54852)),a=r(71176);const i={slug:"./overview",title:"Overview",pagination_prev:null,keywords:["Solana","Solana SDK","Oracles","Web3","Off-chain","Randomness"]},l=void 0,c={unversionedId:"node-operator/overview",id:"node-operator/overview",title:"Overview",description:"Welcome to the Switchboard Oracle Protocol, this page",source:"@site/docs/800-node-operator/00-overview.mdx",sourceDirName:"800-node-operator",slug:"/node-operator/overview",permalink:"/node-operator/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"./overview",title:"Overview",pagination_prev:null,keywords:["Solana","Solana SDK","Oracles","Web3","Off-chain","Randomness"]},sidebar:"sidebar",next:{title:"Getting Started",permalink:"/node-operator/getting-started"}},p={},u=[],s={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Switchboard Oracle Protocol, this page\ngives you an overview of the prerequisites before\nonboarding as a Switchbaord Node Operator."),(0,o.kt)(a.Z,{type:"info",header:"Architecture & Whitepaper",mdxType:"CustomAdmonition"},(0,o.kt)("p",null,"If you're new to Switchboard, do check out the unique properties of our oracle\narchitecture before onboarding as a Switchboard Node Operator!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read our whitepaper ",(0,o.kt)("a",{parentName:"p",href:"../.."},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read our program and queue architecture ",(0,o.kt)("a",{parentName:"p",href:"../../architecture/switchboard-v3/oracle-problem"},"here"),".")))),(0,o.kt)(a.Z,{type:"info",header:"Getting Started",mdxType:"CustomAdmonition"},(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"./getting-started"},"guide")," will walk you through the process of using ",(0,o.kt)("inlineCode",{parentName:"p"},"k3sup"),"\nto create a Kubernetes cluster on a virtual machine with SGX\nenabled, and then install the Kubernetes SGX plugin.")),(0,o.kt)(a.Z,{type:"info",header:"Deployment",mdxType:"CustomAdmonition"},(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"./deployment"},"guide")," will walk you through the final deployment to\nthe respective chain or queue implementations.")))}m.isMDXComponent=!0}}]);