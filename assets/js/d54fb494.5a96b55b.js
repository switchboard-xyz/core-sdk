"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,v=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return r?o.createElement(v,i(i({ref:t},d),{},{components:r})):o.createElement(v,i({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53219:(e,t,r)=>{r.d(t,{Z:()=>h});var o=r(83117),n=r(80102),a=r(67294),i=r(86010),l=r(94780),s=r(98216),c=r(33616),d=r(90948),m=r(34867);function u(e){return(0,m.Z)("MuiSvgIcon",e)}(0,r(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=r(85893);const v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,s.Z)(r.color)}`],t[`fontSize${(0,s.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,o,n,a,i,l,s,c,d,m,u,p,v,g,f,h,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(n=e.transitions)||null==(a=n.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(d=e.typography)||null==(m=d.pxToRem)?void 0:m.call(d,35))||"2.1875"}[t.fontSize],color:null!=(u=null==(p=(e.vars||e).palette)||null==(v=p[t.color])?void 0:v.main)?u:{action:null==(g=(e.vars||e).palette)||null==(f=g.action)?void 0:f.active,disabled:null==(h=(e.vars||e).palette)||null==(y=h.action)?void 0:y.disabled,inherit:void 0}[t.color]}})),f=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:d,color:m="inherit",component:f="svg",fontSize:h="medium",htmlColor:y,inheritViewBox:b=!1,titleAccess:x,viewBox:w="0 0 24 24"}=r,Z=(0,n.Z)(r,v),k=(0,o.Z)({},r,{color:m,component:f,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:w}),S={};b||(S.viewBox=w);const O=(e=>{const{color:t,fontSize:r,classes:o}=e,n={root:["root","inherit"!==t&&`color${(0,s.Z)(t)}`,`fontSize${(0,s.Z)(r)}`]};return(0,l.Z)(n,u,o)})(k);return(0,p.jsxs)(g,(0,o.Z)({as:f,className:(0,i.Z)(O.root,d),ownerState:k,focusable:"false",color:y,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:t},S,Z,{children:[a,x?(0,p.jsx)("title",{children:x}):null]}))}));f.muiName="SvgIcon";const h=f},27433:(e,t,r)=>{r.d(t,{Z:()=>C});var o=r(44267),n=r(15861),a=r(21519),i=r(80102),l=r(83117),s=r(67294),c=r(86010),d=r(94780),m=r(33616),u=r(90948),p=r(34867);function v(e){return(0,p.Z)("MuiCardHeader",e)}const g=(0,r(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var f=r(85893);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,l.Z)({[`& .${g.title}`]:t.title,[`& .${g.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=s.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:a,className:s,component:u="div",disableTypography:p=!1,subheader:g,subheaderTypographyProps:Z,title:k,titleTypographyProps:S}=r,O=(0,i.Z)(r,h),P=(0,l.Z)({},r,{component:u,disableTypography:p}),T=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)})(P);let j=k;null==j||j.type===n.Z||p||(j=(0,f.jsx)(n.Z,(0,l.Z)({variant:a?"body2":"h5",className:T.title,component:"span",display:"block"},S,{children:j})));let C=g;return null==C||C.type===n.Z||p||(C=(0,f.jsx)(n.Z,(0,l.Z)({variant:a?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:C}))),(0,f.jsxs)(y,(0,l.Z)({className:(0,c.Z)(T.root,s),as:u,ref:t,ownerState:P},O,{children:[a&&(0,f.jsx)(b,{className:T.avatar,ownerState:P,children:a}),(0,f.jsxs)(w,{className:T.content,ownerState:P,children:[j,C]}),o&&(0,f.jsx)(x,{className:T.action,ownerState:P,children:o})]}))}));var k=r(44073),S=r(39960),O=r(13264),P=r(92949);const T=(0,O.Z)(k.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),j=(0,O.Z)(Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function C(e){let{title:t,image:r,imageDark:i,description:l,to:c,sx:d}=e;const{colorMode:m}=(0,P.I)();return s.createElement(S.Z,{href:c,style:{textDecoration:"none"}},s.createElement(T,{dark:"dark"===m?1:0,sx:d},s.createElement(o.Z,{sx:{height:"100%",width:"100%"}},s.createElement(j,{avatar:s.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===m&&i?i:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?s.createElement(s.Fragment,null,s.createElement(a.Z,{sx:{marginBottom:"1rem"}}),s.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):s.createElement(s.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(86886),n=r(67294),a=r(27433);function i(e){let{items:t,cols:r,sx:i}=e;return n.createElement(o.ZP,{container:!0,spacing:3},t.map((e=>{var t;return n.createElement(o.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},n.createElement(a.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:i}))})))}},91174:(e,t,r)=>{r.d(t,{Q:()=>i});var o=r(53219),n=r(83117),a=r(67294);function i(e){return a.createElement(o.Z,(0,n.Z)({},e,{viewBox:"0 0 90.1 90"}),a.createElement("path",{d:"M72.2,4.6L53.4,32.5c-1.3,1.9,1.2,4.2,3,2.6L74.9,19c0.5-0.4,1.2-0.1,1.2,0.6v50.3c0,0.7-0.9,1-1.3,0.5l-56-67 C17,1.2,14.4,0,11.5,0h-2C4.3,0,0,4.3,0,9.6v70.8C0,85.7,4.3,90,9.6,90c3.3,0,6.4-1.7,8.2-4.6l18.8-27.9c1.3-1.9-1.2-4.2-3-2.6 l-18.5,16c-0.5,0.4-1.2,0.1-1.2-0.6V20.1c0-0.7,0.9-1,1.3-0.5l56,67c1.8,2.2,4.5,3.4,7.3,3.4h2c5.3,0,9.6-4.3,9.6-9.6V9.6 c0-5.3-4.3-9.6-9.6-9.6C77.1,0,74,1.7,72.2,4.6z"}))}},73873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=r(83117),n=(r(67294),r(3905)),a=r(17547),i=r(44996);r(91174);const l={sidebar_position:10,title:"Overview",slug:"."},s=void 0,c={unversionedId:"near/overview",id:"near/overview",title:"Overview",description:"The Switchboard V2 Near implementation is still in beta.",source:"@site/docs/near/overview.mdx",sourceDirName:"near",slug:"/near/",permalink:"/near/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Overview",slug:"."},sidebar:"near",next:{title:"Mainnet",permalink:"/near/program/mainnet"}},d={},m=[{value:"Networks",id:"networks",level:2},{value:"Products",id:"products",level:2},{value:"Resources",id:"resources",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Switchboard V2 Near implementation is still in beta."),(0,n.kt)("h2",{id:"networks"},"Networks"),(0,n.kt)(a.Z,{items:[{to:"/near/program/mainnet",title:"Mainnet",description:"View the Mainnet deployment accounts",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/near/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/near/dark.svg")})},{to:"/near/program/testnet",title:"Testnet",description:"View the Testnet deployment accounts",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/near/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/near/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"products"},"Products"),(0,n.kt)(a.Z,{items:[{to:"/near/feeds",title:"Data Feeds",description:"Learn about Switchboard's data feeds on Near",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/feeds/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/feeds/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)(a.Z,{items:[{to:"/near/dev",title:"Developer Resources",description:"Learn how to develop with Switchboard on Near",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/develop/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/develop/dark.svg")})}],mdxType:"RoundedCardGroup"}))}p.isMDXComponent=!0}}]);