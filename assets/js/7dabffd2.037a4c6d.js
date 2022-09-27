"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(r),g=n,u=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35417:(e,t,r)=>{r.d(t,{Z:()=>D});var a=r(86886),n=r(67294),o=r(44267),i=r(15861),s=r(21519),l=r(80102),c=r(83117),d=r(86010),p=r(94780),m=r(33616),g=r(90948),u=r(34867);function h(e){return(0,u.Z)("MuiCardHeader",e)}const v=(0,r(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var f=r(85893);const b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],y=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,c.Z)({[`& .${v.title}`]:t.title,[`& .${v.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),x=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),w=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),k=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=n.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:n,className:o,component:s="div",disableTypography:g=!1,subheader:u,subheaderTypographyProps:v,title:Z,titleTypographyProps:O}=r,P=(0,l.Z)(r,b),j=(0,c.Z)({},r,{component:s,disableTypography:g}),E=(e=>{const{classes:t}=e;return(0,p.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(j);let C=Z;null==C||C.type===i.Z||g||(C=(0,f.jsx)(i.Z,(0,c.Z)({variant:n?"body2":"h5",className:E.title,component:"span",display:"block"},O,{children:C})));let T=u;return null==T||T.type===i.Z||g||(T=(0,f.jsx)(i.Z,(0,c.Z)({variant:n?"body2":"body1",className:E.subheader,color:"text.secondary",component:"span",display:"block"},v,{children:T}))),(0,f.jsxs)(y,(0,c.Z)({className:(0,d.Z)(E.root,o),as:s,ref:t,ownerState:j},P,{children:[n&&(0,f.jsx)(x,{className:E.avatar,ownerState:j,children:n}),(0,f.jsxs)(k,{className:E.content,ownerState:j,children:[C,T]}),a&&(0,f.jsx)(w,{className:E.action,ownerState:j,children:a})]}))}));var O=r(44073),P=r(39960),j=r(13264),E=r(92949);const C=(0,j.Z)(O.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),T=(0,j.Z)(Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function R(e){let{title:t,image:r,imageDark:a,description:l,to:c}=e;const{colorMode:d}=(0,E.I)();return n.createElement(P.Z,{href:c,style:{textDecoration:"none"}},n.createElement(C,{dark:"dark"===d?1:0},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(T,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===d&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?n.createElement(n.Fragment,null,n.createElement(s.Z,{sx:{marginBottom:"1rem"}}),n.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):n.createElement(n.Fragment,null))))}function D(e){let{items:t,cols:r}=e;return n.createElement(a.ZP,{container:!0,spacing:3},t.map((e=>n.createElement(a.ZP,{item:!0,xs:12,md:6,lg:12/(null!=r?r:2)},n.createElement(R,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description})))))}},83251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(83117),n=(r(67294),r(3905)),o=r(35417),i=r(44996);const s={sidebar_position:1,slug:".",title:"Developers Resources"},l=void 0,c={unversionedId:"solana/dev/index",id:"solana/dev/index",title:"Developers Resources",description:"Clients",source:"@site/docs/solana/dev/index.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/",permalink:"/sbv2-core/solana/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Developers Resources"},sidebar:"solana",previous:{title:"Errors",permalink:"/sbv2-core/solana/idl/errors"},next:{title:"Localnet Integration",permalink:"/sbv2-core/solana/dev/localnet"}},d={},p=[{value:"Clients",id:"clients",level:2},{value:"On-Chain Example Programs",id:"on-chain-example-programs",level:2},{value:"Off-Chain Examples",id:"off-chain-examples",level:2}],m={toc:p};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clients"},"Clients"),(0,n.kt)(o.Z,{cols:3,items:[{to:"/solana/dev/rust/",title:"Rust",description:"View the switchboard-v2 crate",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/rust/crab.svg")})},{to:"/solana/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/switchboard-v2 npm package",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})},{to:"/solana/dev/python",title:"Python",description:"View the switchboardpy module",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/python/light.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"on-chain-example-programs"},"On-Chain Example Programs"),(0,n.kt)(o.Z,{cols:3,items:[{to:"/solana",title:"Feed Parser",description:"View an example program depicting how to read a Switchboard Data Feed on-chain",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})},{to:"/solana",title:"VRF Walkthrough",description:"View the example program depicting how to read a Switchboard Verifiable Randomn Function on-chain",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})},{to:"/solana",title:"Buffer Parser",description:"View the example program depicting how to read a Switchboard Buffer Relayer on-chain",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/anchor/light.png")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"off-chain-examples"},"Off-Chain Examples"),(0,n.kt)(o.Z,{cols:3,items:[{to:"/solana",title:"Feed Parser",description:"Learn how to parse a data feed off-chain",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})},{to:"/solana",title:"Feed Walkthrough",description:"Learn how to create your own Switchboard network and fulfill your own data feed update requests",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})},{to:"/solana",title:"Lease Observer",description:"Learn how to monitor a data feed's lease and send PagerDuty alerts when it reaches a given balance",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);