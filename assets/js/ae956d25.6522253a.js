"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68734],{54852:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82764:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(45675),o=r(92897),n=r(49231),i=r(19841),s=r(32301),l=r(56133),c=r(32268),d=r(38026),p=r(1274),u=r(7523);function m(e){return(0,u.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var f=r(20264);const v=["className","raised"],g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=n.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,d=(0,o.Z)(r,v),p=(0,a.Z)({},r,{raised:l}),u=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(p);return(0,f.jsx)(g,(0,a.Z)({className:(0,i.Z)(u.root,n),elevation:l?8:void 0,ref:t,ownerState:p},d))}))},63607:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(45675),o=r(92897),n=r(49231),i=r(19841),s=r(32301),l=r(56133),c=r(32268),d=r(1274),p=r(7523);function u(e){return(0,p.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=r(20264);const f=["className","component"],v=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=n.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=r,d=(0,o.Z)(r,f),p=(0,a.Z)({},r,{component:l}),g=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(p);return(0,m.jsx)(v,(0,a.Z)({as:l,className:(0,i.Z)(g.root,n),ownerState:p,ref:t},d))}))},27429:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(92897),o=r(45675),n=r(49231),i=r(19841),s=r(32301),l=r(69681),c=r(32268),d=r(56133),p=r(1274),u=r(7523);function m(e){return(0,u.Z)("MuiCardHeader",e)}const f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var v=r(20264);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),h=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),x=n.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:d,className:p,component:u="div",disableTypography:f=!1,subheader:x,subheaderTypographyProps:k,title:w,titleTypographyProps:C}=r,j=(0,a.Z)(r,g),P=(0,o.Z)({},r,{component:u,disableTypography:f}),O=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)})(P);let E=w;null==E||E.type===l.Z||f||(E=(0,v.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"h5",className:O.title,component:"span",display:"block"},C,{children:E})));let M=x;return null==M||M.type===l.Z||f||(M=(0,v.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"body1",className:O.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:M}))),(0,v.jsxs)(b,(0,o.Z)({className:(0,i.Z)(O.root,p),as:u,ref:t,ownerState:P},j,{children:[d&&(0,v.jsx)(h,{className:O.avatar,ownerState:P,children:d}),(0,v.jsxs)(Z,{className:O.content,ownerState:P,children:[E,M]}),n&&(0,v.jsx)(y,{className:O.action,ownerState:P,children:n})]}))}))},26365:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(68868),o=r(49231),n=r(63607),i=r(69681),s=r(39687),l=r(27429),c=r(82764),d=r(15733),p=r(57236),u=r(65137);const m=(0,p.Z)(c.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),f=(0,p.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:r,imageDark:a,description:l,to:c,sx:p}=e;const{colorMode:v}=(0,u.I)();return o.createElement(d.Z,{href:c,style:{textDecoration:"none"}},o.createElement(m,{dark:"dark"===v?1:0,sx:p},o.createElement(n.Z,{sx:{height:"100%",width:"100%"}},o.createElement(f,{avatar:o.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===v&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?o.createElement(o.Fragment,null,o.createElement(s.Z,{sx:{marginBottom:"1rem"}}),o.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):o.createElement(o.Fragment,null))))}function g(e){let{items:t,cols:r,sx:n,direction:i,justifyContent:s,alignItems:l}=e;return o.createElement(a.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:l},t.map((e=>o.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},o.createElement(v,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n})))))}},65141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(48041),o=(r(49231),r(54852)),n=r(26365),i=r(43939);const s={sidebar_position:10,title:"Feed Parser"},l=void 0,c={unversionedId:"aptos/dev/feed-parser",id:"aptos/dev/feed-parser",title:"Feed Parser",description:"Quick Links",source:"@site/docs/aptos/dev/feed-parser.mdx",sourceDirName:"aptos/dev",slug:"/aptos/dev/feed-parser",permalink:"/aptos/dev/feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Feed Parser"},sidebar:"aptos",previous:{title:"@switchboard-xyz/aptos.js",permalink:"/aptos/dev/javascript"},next:{title:"Table of Contents",permalink:"/aptos/idl/"}},d={},p=[{value:"Quick Links",id:"quick-links",level:2},{value:"Setup",id:"setup",level:2},{value:"Run",id:"run",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"quick-links"},"Quick Links"),(0,o.kt)(n.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-aptos/tree/main/programs/feed-parser",title:"Github",description:"View the Github repo",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-aptos\ncd sbv2-aptos/programs/feed-parser\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aptos move compile --named-addresses switchboard_feed_parser=default\n")))}f.isMDXComponent=!0}}]);