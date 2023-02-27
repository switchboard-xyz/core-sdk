"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43725:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(86886),a=r(67294),o=r(44267),i=r(15861),s=r(21519),l=r(78445),c=r(44073),p=r(39960),m=r(13264),d=r(92949);const u=(0,m.Z)(c.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),f=(0,m.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:r,imageDark:n,description:l,to:c,sx:m}=e;const{colorMode:v}=(0,d.I)();return a.createElement(p.Z,{href:c,style:{textDecoration:"none"}},a.createElement(u,{dark:"dark"===v?1:0,sx:m},a.createElement(o.Z,{sx:{height:"100%",width:"100%"}},a.createElement(f,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===v&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?a.createElement(a.Fragment,null,a.createElement(s.Z,{sx:{marginBottom:"1rem"}}),a.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):a.createElement(a.Fragment,null))))}function b(e){let{items:t,cols:r,sx:o,direction:i,justifyContent:s,alignItems:l}=e;return a.createElement(n.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:l},t.map((e=>a.createElement(n.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},a.createElement(v,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},78054:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(83117),a=(r(67294),r(3905)),o=r(43725),i=r(44996);const s={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{cols:2,items:[{to:"/starknet/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/starknet.js npm package",image:(0,a.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},13984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905)),o=r(78054);const i={sidebar_position:1,slug:".",title:"SDK Overview"},s=void 0,l={unversionedId:"starknet/dev/overview",id:"starknet/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/starknet/dev/overview.mdx",sourceDirName:"starknet/dev",slug:"/starknet/dev/",permalink:"/starknet/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"starknet",previous:{title:"Testnet",permalink:"/starknet/program/testnet"},next:{title:"@switchboard-xyz/starknet.js",permalink:"/starknet/dev/javascript"}},c={},p=[{value:"Libraries",id:"libraries",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started, clone the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-aptos"},"sbv2-aptos")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-aptos\n")),(0,a.kt)("h2",{id:"libraries"},"Libraries"),(0,a.kt)(o.ZP,{mdxType:"StarknetLibraries"}))}d.isMDXComponent=!0}}]);