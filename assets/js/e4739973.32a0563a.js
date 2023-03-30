"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25861],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93451:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(229),o=r(65137),l=r(43939),a=r(49231);const i=e=>{const{colorMode:t}=(0,o.I)();let r=(0,l.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),i="inherit";e.lightBg&&"dark"!==t&&(i=e.lightBg),e.darkBg&&"dark"===t&&(i=e.darkBg);let c={};return e.sx&&(c={backgroundColor:i,m:"auto",display:"flex",...c,...e.sx}),a.createElement(n.Z,{component:"img",sx:c,src:r})}},65245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(48041),o=(r(49231),r(54852)),l=r(93451),a=r(68868),i=r(69681);r(15733);const c={sidebar_position:5,title:"Connect Wallet"},p=void 0,s={unversionedId:"publisher/connect-wallet",id:"publisher/connect-wallet",title:"Connect Wallet",description:"Connect",source:"@site/docs/publisher/connect-wallet.mdx",sourceDirName:"publisher",slug:"/publisher/connect-wallet",permalink:"/publisher/connect-wallet",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Connect Wallet"},sidebar:"publisher",previous:{title:"Overview",permalink:"/publisher"},next:{title:"My Feeds",permalink:"/publisher/my-feeds"}},u={},d=[{value:"Connect",id:"connect",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect"},"Connect"),(0,o.kt)(a.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,o.kt)(a.ZP,{item:!0,md:4,mdxType:"Grid"},(0,o.kt)(l.Z,{img:"/img/publisher/Connect_Wallet.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,o.kt)(a.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(i.Z,{mdxType:"Typography"},"The publisher site contains a ",(0,o.kt)("i",null,"Connect Wallet")," button in the top right corner that allows you to connect your web wallet to Devnet or Mainnet."),(0,o.kt)("br",null),(0,o.kt)(i.Z,{mdxType:"Typography"},"The publisher site currently supports the following wallets:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://phantom.app/",target:"_blank"},"Phantom")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://slope.finance/",target:"_blank"},"Slope")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://wallet.coin98.com/",target:"_blank"},"Coin98")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://solflare.com/",target:"_blank"},"Solflare")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://www.sollet.io/",target:"_blank"},"Sollet"))))))}b.isMDXComponent=!0}}]);