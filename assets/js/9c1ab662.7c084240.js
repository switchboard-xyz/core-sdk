"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72206],{67547:(t,e,l)=>{l.d(e,{Z:()=>x});var n=l(92897),r=l(45675),a=l(49231),o=l(19841),u=l(65500),i=l(32301),s=l(21395),d=l(75336),p=l(43615),k=l(1274),c=l(7523);function m(t){return(0,c.Z)("MuiTypography",t)}(0,k.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=l(20264);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.variant&&e[l.variant],"inherit"!==l.align&&e[`align${(0,p.Z)(l.align)}`],l.noWrap&&e.noWrap,l.gutterBottom&&e.gutterBottom,l.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,r.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=a.forwardRef((function(t,e){const l=(0,d.Z)({props:t,name:"MuiTypography"}),a=(t=>v[t]||t)(l.color),s=(0,u.Z)((0,r.Z)({},l,{color:a})),{align:k="inherit",className:c,component:x,gutterBottom:T=!1,noWrap:Z=!1,paragraph:P=!1,variant:f="body1",variantMapping:K=y}=s,B=(0,n.Z)(s,g),w=(0,r.Z)({},s,{align:k,color:a,className:c,component:x,gutterBottom:T,noWrap:Z,paragraph:P,variant:f,variantMapping:K}),E=x||(P?"p":K[f]||y[f])||"span",C=(t=>{const{align:e,gutterBottom:l,noWrap:n,paragraph:r,variant:a,classes:o}=t,u={root:["root",a,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,l&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,i.Z)(u,m,o)})(w);return(0,b.jsx)(h,(0,r.Z)({as:E,ref:e,ownerState:w,className:(0,o.Z)(C.root,c)},B))}))},49675:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(87145),r=l(6510),a=l(67547),o=l(40888),u=l(49231);const i=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return u.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},u.createElement(r.Z,{variant:"text",size:"small",startIcon:u.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},u.createElement(a.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},44428:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=l(48041),r=(l(49231),l(54852)),a=l(49675);const o={sidebar_position:20},u="Testnet",i={unversionedId:"coredao/program/testnet",id:"coredao/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/coredao/program/testnet.mdx",sourceDirName:"coredao/program",slug:"/coredao/program/testnet",permalink:"/coredao/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"coredao",previous:{title:"Mainnet",permalink:"/coredao/program/mainnet"},next:{title:"SDK Overview",permalink:"/coredao/dev/"}},s={},d=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],p={toc:d},k="wrapper";function c(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testnet"},"Testnet"),(0,r.kt)("h2",{id:"program-id"},"Program ID"),(0,r.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Testnet"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program ID")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"0xe9F5Ecb00BC437F061DF59d899F00f260740dC48",mdxType:"PublicKeyButton"}))))),(0,r.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,r.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Public Keys"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Authority")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Testnet Permissioned Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null))))))),(0,r.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,r.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Public Keys"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Authority")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Testnet Permissionless Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null))))))))}c.isMDXComponent=!0}}]);