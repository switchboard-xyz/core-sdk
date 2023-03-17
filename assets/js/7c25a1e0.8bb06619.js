"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75643],{67547:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(92897),a=r(45675),l=r(49231),o=r(19841),i=r(65500),s=r(32301),u=r(21395),d=r(75336),p=r(43615),c=r(1274),m=r(7523);function k(t){return(0,m.Z)("MuiTypography",t)}(0,c.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(20264);const b=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,p.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=l.forwardRef((function(t,e){const r=(0,d.Z)({props:t,name:"MuiTypography"}),l=(t=>f[t]||t)(r.color),u=(0,i.Z)((0,a.Z)({},r,{color:l})),{align:c="inherit",className:m,component:v,gutterBottom:x=!1,noWrap:Z=!1,paragraph:w=!1,variant:B="body1",variantMapping:T=y}=u,P=(0,n.Z)(u,b),M=(0,a.Z)({},u,{align:c,color:l,className:m,component:v,gutterBottom:x,noWrap:Z,paragraph:w,variant:B,variantMapping:T}),E=v||(w?"p":T[B]||y[B])||"span",C=(t=>{const{align:e,gutterBottom:r,noWrap:n,paragraph:a,variant:l,classes:o}=t,i={root:["root",l,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,s.Z)(i,k,o)})(M);return(0,g.jsx)(h,(0,a.Z)({as:E,ref:e,ownerState:M,className:(0,o.Z)(C.root,m)},P))}))},93451:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(71146),a=r(65137),l=r(43939),o=r(49231);const i=t=>{const{colorMode:e}=(0,a.I)();let r=(0,l.Z)("dark"===e&&t.darkImg?t.darkImg:t.img),i="inherit";t.lightBg&&"dark"!==e&&(i=t.lightBg),t.darkBg&&"dark"===e&&(i=t.darkBg);let s={};return t.sx&&(s={backgroundColor:i,m:"auto",display:"flex",...s,...t.sx}),o.createElement(n.Z,{component:"img",sx:s,src:r})}},49675:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(87145),a=r(6510),l=r(67547),o=r(40888),i=r(49231);const s=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return i.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(a.Z,{variant:"text",size:"small",startIcon:i.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},i.createElement(l.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},20822:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(48041),a=(r(49231),r(54852)),l=(r(93451),r(15733),r(49675));const o={sidebar_position:20},i="Testnet",s={unversionedId:"aptos/program/testnet",id:"aptos/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/aptos/program/testnet.mdx",sourceDirName:"aptos/program",slug:"/aptos/program/testnet",permalink:"/aptos/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"aptos",previous:{title:"Mainnet",permalink:"/aptos/program/mainnet"},next:{title:"Developer Resources",permalink:"/aptos/dev/"}},u={},d=[{value:"Program ID",id:"program-id",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],p={toc:d},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testnet"},"Testnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Account"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"State Address")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Addresses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0x9190d0fad0520ef650caa1ef8bd89da660d6eb617feabd618039b9c6bf11e802",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0xd08a5107feb5f2df15c913702b0969ae4e22b3653a98c14fcd5e9e00cf8a039d",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Testnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"30000")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"925000")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"open_round_reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"save_confirmation_reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"save_reward")),(0,a.kt)("td",null,"0"))))))))}m.isMDXComponent=!0}}]);