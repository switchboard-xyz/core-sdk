"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[845],{4852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4177:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>o,toc:()=>i});var n=r(5634),a=(r(9231),r(4852));const o={},c=void 0,i=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Load Switchboard Contract and Switchboard Push Receiver Contract Functions",id:"load-switchboard-contract-and-switchboard-push-receiver-contract-functions",level:3}],s={toc:i},l="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,a.kt)("h1",{id:"switchboard-xyzevmjs"},"@switchboard-xyz/evm.js"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A Typescript client to interact with Switchboard on EVM based chains.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/evm.js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/package-json/v/switchboard-xyz/evm-sdk?color=red&filename=javascript%2Fevm.js%2Fpackage.json&label=%40switchboard-xyz%2Fevm.js&logo=npm",alt:"NPM Badge"})))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @switchboard-xyz/evm.js\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Directory")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#load-switchboard-contract-and-switchboard-push-receiver-contract-functions"},"Load Switchboard Contract and Switchboard Push Receiver Contract Functions"))),(0,a.kt)("h3",{id:"load-switchboard-contract-and-switchboard-push-receiver-contract-functions"},"Load Switchboard Contract and Switchboard Push Receiver Contract Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import ethers from "ethers";\nimport {\n  getSwitchboard,\n  getSwitchboardPushReceiver,\n  getSwitchboardPushReceiverFeeds,\n} from "@switchboard-xyz/evm.js";\n\nconst signer = new ethers.Wallet(privateKey);\n\n// get switchboard contract functions\nconst switchboardProgram = await getSwitchboard(\n  process.env.SWITCHBOARD_ADDRESS, // Switchboard contract address (from environment)\n  signer // Signer instance\n);\n\n// get switchboard feeds contract functions\nconst switchboardPushReceiver = await getSwitchboardPushReceiver(\n  process.env.SWITCHBOARD_PUSH_ADDRESS,\n  signer\n);\n\n// log all feeds\nconst allFeeds = await getSwitchboardPushReceiverFeeds(switchboardPushReceiver);\nconsole.log(allFeeds); // Feed[];\n')))}p.isMDXComponent=!0}}]);