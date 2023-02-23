"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43725:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(86886),o=r(67294),a=r(44267),i=r(15861),s=r(21519),c=r(78445),l=r(44073),p=r(39960),m=r(13264),d=r(92949);const g=(0,m.Z)(l.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,m.Z)(c.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function h(e){let{title:t,image:r,imageDark:n,description:c,to:l,sx:m}=e;const{colorMode:h}=(0,d.I)();return o.createElement(p.Z,{href:l,style:{textDecoration:"none"}},o.createElement(g,{dark:"dark"===h?1:0,sx:m},o.createElement(a.Z,{sx:{height:"100%",width:"100%"}},o.createElement(u,{avatar:o.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),c?o.createElement(o.Fragment,null,o.createElement(s.Z,{sx:{marginBottom:"1rem"}}),o.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},c)):o.createElement(o.Fragment,null))))}function b(e){let{items:t,cols:r,sx:a,direction:i,justifyContent:s,alignItems:c}=e;return o.createElement(n.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:c},t.map((e=>o.createElement(n.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},o.createElement(h,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:a})))))}},98880:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(83117),o=(r(67294),r(3905)),a=r(43725),i=r(44996);const s={toc:[]};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{cols:2,justifyContent:"center",items:[{to:"/solana/dev/rust/",title:"Rust",description:"View the switchboard-v2 crate",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/rust/crab.svg")})},{to:"/solana/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/solana.js npm package",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})},{to:"/solana/dev/cli",title:"CLI",description:"View the @switchboard-xyz/cli npm package",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/develop/light.svg")}),imageDark:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/develop/teal.svg")})},{to:"/solana/dev/python",title:"Python",description:"View the switchboardpy module",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/python/light.svg")})}],mdxType:"RoundedCardGroup"}))}c.isMDXComponent=!0},1373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var n=r(83117),o=(r(67294),r(3905)),a=r(43725),i=r(44996),s=r(98880);const c={toc:[]};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{cols:2,justifyContent:"center",items:[{to:"https://github.com/switchboard-xyz/vrf-flip",title:"VRF Flip (Advanced)",description:"View an example program depicting how to simulate a coin toss",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})},{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-feed-parser",title:"Feed Parser",description:"View an example program depicting how to read a Switchboard Data Feed on-chain",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})},{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-history-parser",title:"History Parser",description:"View an example program depicting how to read a Switchboard history buffer on-chain",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})},{to:"https://github.com/switchboard-xyz/vrf-demo-walkthrough",title:"VRF Walkthrough",description:"View the example program depicting how to read a Switchboard Verifiable Randomn Function on-chain",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})},{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-buffer-parser",title:"Buffer Parser",description:"View the example program depicting how to read a Switchboard Buffer Relayer on-chain",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0;const p={sidebar_position:1,slug:".",title:"SDK Overview"},m=void 0,d={unversionedId:"solana/dev/overview",id:"solana/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/solana/dev/overview.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/",permalink:"/solana/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"solana",previous:{title:"Test Integration",permalink:"/solana/test-integration"},next:{title:"Sbv2 CLI",permalink:"/solana/dev/cli"}},g={},u=[{value:"Libraries",id:"libraries",level:2},{value:"Example Programs",id:"example-programs",level:2}],h={toc:u};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To get started, clone the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana"},"sbv2-solana")," repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-solana\n")),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)(s.ZP,{mdxType:"SolanaLibraries"}),(0,o.kt)("h2",{id:"example-programs"},"Example Programs"),(0,o.kt)(l,{mdxType:"SolanaExamplePrograms"}))}b.isMDXComponent=!0}}]);