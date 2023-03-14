"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45518],{67547:(t,e,l)=>{l.d(e,{Z:()=>v});var n=l(92897),a=l(45675),r=l(49231),u=l(19841),o=l(65500),i=l(32301),d=l(21395),s=l(75336),k=l(43615),p=l(1274),c=l(7523);function m(t){return(0,c.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=l(20264);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.variant&&e[l.variant],"inherit"!==l.align&&e[`align${(0,k.Z)(l.align)}`],l.noWrap&&e.noWrap,l.gutterBottom&&e.gutterBottom,l.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=r.forwardRef((function(t,e){const l=(0,s.Z)({props:t,name:"MuiTypography"}),r=(t=>f[t]||t)(l.color),d=(0,o.Z)((0,a.Z)({},l,{color:r})),{align:p="inherit",className:c,component:v,gutterBottom:x=!1,noWrap:K=!1,paragraph:T=!1,variant:N="body1",variantMapping:P=h}=d,S=(0,n.Z)(d,y),Z=(0,a.Z)({},d,{align:p,color:r,className:c,component:v,gutterBottom:x,noWrap:K,paragraph:T,variant:N,variantMapping:P}),B=v||(T?"p":P[N]||h[N])||"span",M=(t=>{const{align:e,gutterBottom:l,noWrap:n,paragraph:a,variant:r,classes:u}=t,o={root:["root",r,"inherit"!==t.align&&`align${(0,k.Z)(e)}`,l&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,i.Z)(o,m,u)})(Z);return(0,b.jsx)(g,(0,a.Z)({as:B,ref:e,ownerState:Z,className:(0,u.Z)(M.root,c)},S))}))},93451:(t,e,l)=>{l.d(e,{Z:()=>o});var n=l(71146),a=l(65137),r=l(43939),u=l(49231);const o=t=>{const{colorMode:e}=(0,a.I)();let l=(0,r.Z)("dark"===e&&t.darkImg?t.darkImg:t.img),o="inherit";t.lightBg&&"dark"!==e&&(o=t.lightBg),t.darkBg&&"dark"===e&&(o=t.darkBg);let i={};return t.sx&&(i={backgroundColor:o,m:"auto",display:"flex",...i,...t.sx}),u.createElement(n.Z,{component:"img",sx:i,src:l})}},49675:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(87145),a=l(27753),r=l(67547),u=l(40888),o=l(49231);const i=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return o.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},o.createElement(a.Z,{variant:"text",size:"small",startIcon:o.createElement(u.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},o.createElement(r.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},7106:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=l(48041),a=(l(49231),l(54852));const r={},u=void 0,o={unversionedId:"solana/idl/accounts/SbState",id:"solana/idl/accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL",source:"@site/docs/solana/idl/accounts/SbState.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/SbState",permalink:"/solana/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"PermissionAccountData",permalink:"/solana/idl/accounts/PermissionAccountData"},next:{title:"SlidingResultAccountData",permalink:"/solana/idl/accounts/SlidingResultAccountData"}},i={},d=[],s={toc:d},k="wrapper";function p(t){let{components:e,...l}=t;return(0,a.kt)(k,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("b",null,"Size: "),"1128 Bytes",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved for future info.")))))}p.isMDXComponent=!0},15038:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var n=l(48041),a=(l(49231),l(54852)),r=(l(93451),l(15733),l(7106),l(49675));const u={sidebar_position:10},o="Mainnet",i={unversionedId:"solana/program/mainnet",id:"solana/program/mainnet",title:"Mainnet",description:"You can find a list of Mainnet feeds in the",source:"@site/docs/solana/program/mainnet.mdx",sourceDirName:"solana/program",slug:"/solana/program/mainnet",permalink:"/solana/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"solana",previous:{title:"Overview",permalink:"/solana/"},next:{title:"Devnet",permalink:"/solana/program/devnet"}},d={},s=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],k={toc:s},p="wrapper";function c(t){let{components:e,...l}=t;return(0,a.kt)(p,(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("p",null,"You can find a list of Mainnet feeds in the\n",(0,a.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/"},"Switchboard Explorer"),"."),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Mainnet-Beta"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"IDL Address")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program Data Address")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"7nYabs9dUhvxYwdTnrWVBL9MYviKSfrEbdWCUbcnwkpF",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program State Account")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"CyZuD7RPDcrqCGbNvLCyqk6Py9cEZTKmNKujfPi3ynDd",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Token Vault")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"J7nSEX8ADf3pVVicd6yKy2Skvg8iLePEmkLUisAAaioD",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,a.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Buffer")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"FZ3CAm8o5zf18Ua23jhrZJRYCMtGhFxFrTux8N5yrf2T",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedVrfEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"enableBufferRelayers")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"12500")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"5JYwqvKkqp35w8Nq3ba4z1WYUeJQ1rB36V8XvaGp6zn1",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Buffer")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"FozqXFMS1nQKfPqwVdChr7RJ3y7ccSux39zU682kNYjJ",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"BKtF8yyQsj3Ft6jb2nkfpEKzARZVdGgdEPs6mFmZNmbA",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedVrfEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"enableBufferRelayers")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"12500")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);