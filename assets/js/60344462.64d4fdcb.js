"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22455],{54852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26365:(e,t,r)=>{r.d(t,{Z:()=>b});var o=r(73013),n=r(49231),a=r(66318),i=r(67547),c=r(42941),l=r(31063),s=r(71821),p=r(15733),m=r(27957),d=r(65137);const u=(0,m.Z)(s.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,m.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function f(e){let{title:t,image:r,imageDark:o,description:l,to:s,sx:m}=e;const{colorMode:f}=(0,d.I)();return n.createElement(p.Z,{href:s,style:{textDecoration:"none"}},n.createElement(u,{dark:"dark"===f?1:0,sx:m},n.createElement(a.Z,{sx:{height:"100%",width:"100%"}},n.createElement(g,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===f&&o?o:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?n.createElement(n.Fragment,null,n.createElement(c.Z,{sx:{marginBottom:"1rem"}}),n.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):n.createElement(n.Fragment,null))))}function b(e){let{items:t,cols:r,sx:a,direction:i,justifyContent:c,alignItems:l}=e;return n.createElement(o.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:c,alignItems:l},t.map((e=>n.createElement(o.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},n.createElement(f,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:a})))))}},22676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var o=r(48041),n=(r(49231),r(54852)),a=r(26365),i=r(43939);const c={sidebar_position:1,slug:".",hide_table_of_contents:!0},l="Switchboard Operator",s={unversionedId:"operator/overview",id:"operator/overview",title:"Switchboard Operator",description:"<RoundedCardGroup",source:"@site/docs/operator/overview.mdx",sourceDirName:"operator",slug:"/operator/",permalink:"/operator/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",hide_table_of_contents:!0},sidebar:"operator",next:{title:"Queue",permalink:"/operator/queue/"}},p={},m=[],d={toc:m},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"switchboard-operator"},"Switchboard Operator"),(0,n.kt)(a.Z,{cols:2,items:[{to:"/operator/queue",title:"Network",description:"Learn how to operate your own Switchboard network and fulfill updates from private API sources",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/switchboard/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/switchboard/logo.svg")})},{to:"/operator/oracle",title:"Oracle",description:"Learn how to operate an Oracle and fulfill update requests on-chain",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/oracle/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/oracle/dark.svg")})},{to:"/operator/crank",title:"Crank",description:"Learn how to operate a crank and get rewarded for invoking data feed update requests",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/crank/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/crank/dark.svg")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);