"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18899],{67547:(t,e,r)=>{r.d(e,{Z:()=>Z});var n=r(92897),a=r(45675),l=r(49231),o=r(19841),i=r(65500),s=r(32301),u=r(21395),p=r(75336),d=r(43615),m=r(1274),c=r(7523);function k(t){return(0,c.Z)("MuiTypography",t)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(20264);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=l.forwardRef((function(t,e){const r=(0,p.Z)({props:t,name:"MuiTypography"}),l=(t=>v[t]||t)(r.color),u=(0,i.Z)((0,a.Z)({},r,{color:l})),{align:m="inherit",className:c,component:Z,gutterBottom:x=!1,noWrap:f=!1,paragraph:w=!1,variant:T="body1",variantMapping:P=y}=u,B=(0,n.Z)(u,h),M=(0,a.Z)({},u,{align:m,color:l,className:c,component:Z,gutterBottom:x,noWrap:f,paragraph:w,variant:T,variantMapping:P}),K=Z||(w?"p":P[T]||y[T])||"span",S=(t=>{const{align:e,gutterBottom:r,noWrap:n,paragraph:a,variant:l,classes:o}=t,i={root:["root",l,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,s.Z)(i,k,o)})(M);return(0,g.jsx)(b,(0,a.Z)({as:K,ref:e,ownerState:M,className:(0,o.Z)(S.root,c)},B))}))},49675:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(87145),a=r(6510),l=r(67547),o=r(40888),i=r(49231);const s=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return i.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(a.Z,{variant:"text",size:"small",startIcon:i.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},i.createElement(l.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},48650:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(48041),a=(r(49231),r(54852)),l=r(49675);const o={sidebar_position:20},i="Testnet",s={unversionedId:"near/program/testnet",id:"near/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/near/program/testnet.mdx",sourceDirName:"near/program",slug:"/near/program/testnet",permalink:"/near/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"near",previous:{title:"Mainnet",permalink:"/near/program/mainnet"},next:{title:"Developer Resources",permalink:"/near/dev/"}},u={},p=[{value:"Program ID",id:"program-id",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],d={toc:p},m="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testnet"},"Testnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Mainnet"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"switchboard-v2.testnet",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"HFSJrvA1w2uhciLGLUfE4sADGwGBpUiAjxZPgeFSs61M",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"sbv2-authority.testnet",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"wrap.testnet",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"9Vzzu1Z74oPLctxwjRHwkKSd5H32AiQe32iMesuQwKnQ",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Testnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))))}c.isMDXComponent=!0}}]);