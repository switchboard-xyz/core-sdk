"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5284],{68079:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(95907),o=a(76178),i=a(49231),n=a(19841),l=a(32301),s=a(155),d=a(14427),c=a(60487);const v=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var p=a(1274),h=a(7523);function u(e){return(0,h.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=a(20264);const g=["className","component","elevation","square","variant"],f=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t[`elevation${a.elevation}`]]}})((({theme:e,ownerState:t})=>{var a;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,c.Fq)("#fff",v(t.elevation))}, ${(0,c.Fq)("#fff",v(t.elevation))})`},e.vars&&{backgroundImage:null==(a=e.vars.overlays)?void 0:a[t.elevation]}))})),Z=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:c=1,square:v=!1,variant:p="elevation"}=a,h=(0,o.Z)(a,g),Z=(0,r.Z)({},a,{component:s,elevation:c,square:v,variant:p}),b=(e=>{const{square:t,elevation:a,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${a}`]};return(0,l.Z)(i,u,o)})(Z);return(0,m.jsx)(f,(0,r.Z)({as:s,ownerState:Z,className:(0,n.Z)(b.root,i),ref:t},h))}));function b(e){return(0,h.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);const w=["className","raised"],x=(0,s.ZP)(Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),C=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=a,c=(0,o.Z)(a,w),v=(0,r.Z)({},a,{raised:s}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},b,t)})(v);return(0,m.jsx)(x,(0,r.Z)({className:(0,n.Z)(p.root,i),elevation:s?8:void 0,ref:t,ownerState:v},c))}))},22073:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(95907),o=a(76178),i=a(49231),n=a(19841),l=a(32301),s=a(155),d=a(14427),c=a(1274),v=a(7523);function p(e){return(0,v.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var h=a(20264);const u=["className","component"],m=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=a,c=(0,o.Z)(a,u),v=(0,r.Z)({},a,{component:s}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(v);return(0,h.jsx)(m,(0,r.Z)({as:s,className:(0,n.Z)(g.root,i),ownerState:v,ref:t},c))}))},62122:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(76178),o=a(95907),i=a(49231),n=a(19841),l=a(32301),s=a(34082),d=a(14427),c=a(155),v=a(1274),p=a(7523);function h(e){return(0,p.Z)("MuiCardHeader",e)}const u=(0,v.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var m=a(20264);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${u.title}`]:t.title,[`& .${u.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),x=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:c,className:v,component:p="div",disableTypography:u=!1,subheader:x,subheaderTypographyProps:C,title:y,titleTypographyProps:R}=a,M=(0,r.Z)(a,g),S=(0,o.Z)({},a,{component:p,disableTypography:u}),N=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(S);let A=y;null==A||A.type===s.Z||u||(A=(0,m.jsx)(s.Z,(0,o.Z)({variant:c?"body2":"h5",className:N.title,component:"span",display:"block"},R,{children:A})));let P=x;return null==P||P.type===s.Z||u||(P=(0,m.jsx)(s.Z,(0,o.Z)({variant:c?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:P}))),(0,m.jsxs)(f,(0,o.Z)({className:(0,n.Z)(N.root,v),as:p,ref:t,ownerState:S},M,{children:[c&&(0,m.jsx)(Z,{className:N.avatar,ownerState:S,children:c}),(0,m.jsxs)(w,{className:N.content,ownerState:S,children:[A,P]}),i&&(0,m.jsx)(b,{className:N.action,ownerState:S,children:i})]}))}))},81128:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(76178),o=a(95907),i=a(49231),n=a(19841),l=a(32301),s=a(60487),d=a(155),c=a(14427),v=a(1274),p=a(7523);function h(e){return(0,p.Z)("MuiDivider",e)}(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var u=a(20264);const m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),Z=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:d,component:v=(s?"div":"hr"),flexItem:p=!1,light:Z=!1,orientation:b="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:x="center",variant:C="fullWidth"}=a,y=(0,r.Z)(a,m),R=(0,o.Z)({},a,{absolute:i,component:v,flexItem:p,light:Z,orientation:b,role:w,textAlign:x,variant:C}),M=(e=>{const{absolute:t,children:a,classes:r,flexItem:o,light:i,orientation:n,textAlign:s,variant:d}=e,c={root:["root",t&&"absolute",d,i&&"light","vertical"===n&&"vertical",o&&"flexItem",a&&"withChildren",a&&"vertical"===n&&"withChildrenVertical","right"===s&&"vertical"!==n&&"textAlignRight","left"===s&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]};return(0,l.Z)(c,h,r)})(R);return(0,u.jsx)(g,(0,o.Z)({as:v,className:(0,n.Z)(M.root,d),role:w,ref:t,ownerState:R},y,{children:s?(0,u.jsx)(f,{className:M.wrapper,ownerState:R,children:s}):null}))}))}}]);