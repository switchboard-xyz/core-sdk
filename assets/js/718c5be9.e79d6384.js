"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17645],{82764:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(45675),o=r(92897),n=r(49231),i=r(19841),s=r(32301),l=r(56133),d=r(32268),c=r(38026),m=r(1274),p=r(7523);function u(e){return(0,p.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var v=r(20264);const g=["className","raised"],h=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,c=(0,o.Z)(r,g),m=(0,a.Z)({},r,{raised:l}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(m);return(0,v.jsx)(h,(0,a.Z)({className:(0,i.Z)(p.root,n),elevation:l?8:void 0,ref:t,ownerState:m},c))}))},63607:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(45675),o=r(92897),n=r(49231),i=r(19841),s=r(32301),l=r(56133),d=r(32268),c=r(1274),m=r(7523);function p(e){return(0,m.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var u=r(20264);const v=["className","component"],g=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),h=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=r,c=(0,o.Z)(r,v),m=(0,a.Z)({},r,{component:l}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(m);return(0,u.jsx)(g,(0,a.Z)({as:l,className:(0,i.Z)(h.root,n),ownerState:m,ref:t},c))}))},27429:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(92897),o=r(45675),n=r(49231),i=r(19841),s=r(32301),l=r(69681),d=r(32268),c=r(56133),m=r(1274),p=r(7523);function u(e){return(0,p.Z)("MuiCardHeader",e)}const v=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=r(20264);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${v.title}`]:t.title,[`& .${v.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),y=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:c,className:m,component:p="div",disableTypography:v=!1,subheader:y,subheaderTypographyProps:k,title:w,titleTypographyProps:C}=r,M=(0,a.Z)(r,h),S=(0,o.Z)({},r,{component:p,disableTypography:v}),N=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(S);let T=w;null==T||T.type===l.Z||v||(T=(0,g.jsx)(l.Z,(0,o.Z)({variant:c?"body2":"h5",className:N.title,component:"span",display:"block"},C,{children:T})));let j=y;return null==j||j.type===l.Z||v||(j=(0,g.jsx)(l.Z,(0,o.Z)({variant:c?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:j}))),(0,g.jsxs)(f,(0,o.Z)({className:(0,i.Z)(N.root,m),as:p,ref:t,ownerState:S},M,{children:[c&&(0,g.jsx)(Z,{className:N.avatar,ownerState:S,children:c}),(0,g.jsxs)(x,{className:N.content,ownerState:S,children:[T,j]}),n&&(0,g.jsx)(b,{className:N.action,ownerState:S,children:n})]}))}))},26365:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(68868),o=r(49231),n=r(63607),i=r(69681),s=r(39687),l=r(27429),d=r(82764),c=r(15733),m=r(57236),p=r(65137);const u=(0,m.Z)(d.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),v=(0,m.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:r,imageDark:a,description:l,to:d,sx:m}=e;const{colorMode:g}=(0,p.I)();return o.createElement(c.Z,{href:d,style:{textDecoration:"none"}},o.createElement(u,{dark:"dark"===g?1:0,sx:m},o.createElement(n.Z,{sx:{height:"100%",width:"100%"}},o.createElement(v,{avatar:o.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?o.createElement(o.Fragment,null,o.createElement(s.Z,{sx:{marginBottom:"1rem"}}),o.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):o.createElement(o.Fragment,null))))}function h(e){let{items:t,cols:r,sx:n,direction:i,justifyContent:s,alignItems:l}=e;return o.createElement(a.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:l},t.map((e=>o.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},o.createElement(g,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n})))))}},18903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>v});var a=r(48041),o=(r(49231),r(54852)),n=r(26365),i=r(43939);const s={toc:[]},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{cols:2,items:[{to:"/sui/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/sui.js npm package",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}d.isMDXComponent=!0;const c={sidebar_position:1,slug:".",title:"SDK Overview"},m=void 0,p={unversionedId:"sui/dev/overview",id:"sui/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/sui/dev/overview.mdx",sourceDirName:"sui/dev",slug:"/sui/dev/",permalink:"/sui/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"sui",previous:{title:"Testnet",permalink:"/sui/program/testnet"},next:{title:"Javascript",permalink:"/sui/dev/javascript"}},u={},v=[{value:"SDK",id:"sdk",level:2}],g={toc:v},h="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To get started, clone the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-sui"},"sbv2-sui")," repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-sui\n")),(0,o.kt)("h2",{id:"sdk"},"SDK"),(0,o.kt)(d,{mdxType:"SuiSdkClients"}))}f.isMDXComponent=!0}}]);