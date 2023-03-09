"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23933],{54852:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>h});var m=t(49231);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);e&&(m=m.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,m)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,m,n=function(a,e){if(null==a)return{};var t,m,n={},s=Object.keys(a);for(m=0;m<s.length;m++)t=s[m],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(m=0;m<s.length;m++)t=s[m],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=m.createContext({}),o=function(a){var e=m.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=o(a.components);return m.createElement(i.Provider,{value:e},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return m.createElement(m.Fragment,{},e)}},k=m.forwardRef((function(a,e){var t=a.components,n=a.mdxType,s=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=o(t),k=n,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||s;return t?m.createElement(h,r(r({ref:e},l),{},{components:t})):m.createElement(h,r({ref:e},l))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var s=t.length,r=new Array(s);r[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[N]="string"==typeof a?a:n,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return m.createElement.apply(null,r)}return m.createElement.apply(null,t)}k.displayName="MDXCreateElement"},28277:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var m=t(48041),n=(t(49231),t(54852));const s={sidebar_position:20,title:"Crank",slug:"/crank"},r=void 0,p={unversionedId:"network/crank",id:"network/crank",title:"Crank",description:"A queue can choose to create one or many cranks. A crank is a scheduling",source:"@site/docs/network/crank.mdx",sourceDirName:"network",slug:"/crank",permalink:"/crank",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Crank",slug:"/crank"},sidebar:"learn",previous:{title:"Permissions",permalink:"/permissions"},next:{title:"What are Data Feeds?",permalink:"/feeds/"}},i={},o=[],l={toc:o},N="wrapper";function c(a){let{components:e,...t}=a;return(0,n.kt)(N,(0,m.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A queue can choose to create one or many cranks. A crank is a scheduling\nmechanism that allows data feeds to request periodic updates. A crank can be\nturned by anyone, and if successful, the crank turner will be rewarded for jump\nstarting the system."),(0,n.kt)("p",null,"A data feed is only permitted to join a crank if it has sufficient permissions\n(as detailed above) and the crank has available capacity. Data feeds on a crank\nare ordered by their next available update time with some level of jitter to\nmitigate oracles being assigned to the same update request upon each iteration\nof the queue, which makes them susceptible to a malicous oracle. The maximum\nupdate interval for a feed on a crank is based on its\n",(0,n.kt)("inlineCode",{parentName:"p"},"aggregator.minUpdateDelaySeconds")," and can be calculated by:"),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"I"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"x"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"I"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"U"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"D"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mi",{parentName:"mrow"},"S"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"s"))),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("mn",{parentName:"mrow"},"5"),(0,n.kt)("mspace",{parentName:"mrow",width:"1em"}),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,n.kt)("mspace",{parentName:"mrow",width:"1em"}),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"I"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"U"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"D"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mi",{parentName:"mrow"},"S"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"s"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I_{Max} (seconds) = I_{minUpdateDelaySeconds} + [5\\quad\\% \\quad I_{minUpdateDelaySeconds}]")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"seco"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"min"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"eDe"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"eco"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},"5"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"1em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"%"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"1em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"min"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"eDe"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"eco"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]")))))),(0,n.kt)("p",null,"An aggregator pushed onto a crank will have a maximum jitter of 5 seconds."))}c.isMDXComponent=!0}}]);