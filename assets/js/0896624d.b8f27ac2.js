"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99288],{24008:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(87357),a=r(92949),o=r(44996),l=r(67294);const i=e=>{const{colorMode:t}=(0,a.I)();let r="inherit";e.lightBg&&"dark"!==t&&(r=e.lightBg),e.darkBg&&"dark"===t&&(r=e.darkBg);let i={};return e.sx&&(i={backgroundColor:r,m:"auto",display:"flex",...i,...e.sx}),l.createElement(n.Z,{component:"img",sx:i,src:(0,o.Z)(e.img)})}},55205:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(15327),a=r(54882),o=r(15861),l=r(41899),i=r(67294);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return i.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(a.Z,{variant:"text",size:"small",startIcon:i.createElement(l.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},i.createElement(o.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},73874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=r(83117),a=(r(67294),r(3905)),o=(r(24008),r(39960),r(55205));const l={sidebar_position:10},i="Mainnet",s={unversionedId:"near/program/mainnet",id:"near/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/near/program/mainnet.mdx",sourceDirName:"near/program",slug:"/near/program/mainnet",permalink:"/near/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"near",previous:{title:"Overview",permalink:"/near/"},next:{title:"Testnet",permalink:"/near/program/testnet"}},c={},m=[{value:"Program ID",id:"program-id",level:2}],d={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Account"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"switchboard-v2.near",mdxType:"PublicKeyButton"}))))))}p.isMDXComponent=!0}}]);