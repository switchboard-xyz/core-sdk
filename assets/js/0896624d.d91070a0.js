"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9288],{24008:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(87357),a=r(92949),o=r(44996),i=r(67294);const l=e=>{const{colorMode:t}=(0,a.I)();let r="inherit";e.lightBg&&"dark"!==t&&(r=e.lightBg),e.darkBg&&"dark"===t&&(r=e.darkBg);let l={};return e.sx&&(l={backgroundColor:r,m:"auto",display:"flex",...l,...e.sx}),i.createElement(n.Z,{component:"img",sx:l,src:(0,o.Z)(e.img)})}},55205:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(15327),a=r(54882),o=r(15861),i=r(41899),l=r(67294);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(a.Z,{variant:"text",size:"small",startIcon:l.createElement(i.Z,{sx:{fill:"#4c6fff"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(o.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},73874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));r(24008),r(39960),r(55205);const o={sidebar_position:10},i="Mainnet",l={unversionedId:"near/program/mainnet",id:"near/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/near/program/mainnet.mdx",sourceDirName:"near/program",slug:"/near/program/mainnet",permalink:"/sbv2-core/near/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"near",previous:{title:"Overview",permalink:"/sbv2-core/near/"},next:{title:"Testnet",permalink:"/sbv2-core/near/program/testnet"}},s={},c=[{value:"Program ID",id:"program-id",level:2}],m={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Account"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{width:"100vw",minWidth:"300px"},colspan:"2"},"The switchboard program is currently not deployed on Near mainnet.")))))}d.isMDXComponent=!0}}]);