"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90699],{67547:(t,e,l)=>{l.d(e,{Z:()=>f});var n=l(92897),a=l(45675),r=l(49231),u=l(19841),o=l(65500),i=l(32301),d=l(21395),s=l(75336),k=l(43615),p=l(1274),c=l(7523);function m(t){return(0,c.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=l(20264);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.variant&&e[l.variant],"inherit"!==l.align&&e[`align${(0,k.Z)(l.align)}`],l.noWrap&&e.noWrap,l.gutterBottom&&e.gutterBottom,l.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=r.forwardRef((function(t,e){const l=(0,s.Z)({props:t,name:"MuiTypography"}),r=(t=>v[t]||t)(l.color),d=(0,o.Z)((0,a.Z)({},l,{color:r})),{align:p="inherit",className:c,component:f,gutterBottom:x=!1,noWrap:Z=!1,paragraph:T=!1,variant:B="body1",variantMapping:K=h}=d,N=(0,n.Z)(d,g),S=(0,a.Z)({},d,{align:p,color:r,className:c,component:f,gutterBottom:x,noWrap:Z,paragraph:T,variant:B,variantMapping:K}),P=f||(T?"p":K[B]||h[B])||"span",w=(t=>{const{align:e,gutterBottom:l,noWrap:n,paragraph:a,variant:r,classes:u}=t,o={root:["root",r,"inherit"!==t.align&&`align${(0,k.Z)(e)}`,l&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,i.Z)(o,m,u)})(S);return(0,b.jsx)(y,(0,a.Z)({as:P,ref:e,ownerState:S,className:(0,u.Z)(w.root,c)},N))}))},93451:(t,e,l)=>{l.d(e,{Z:()=>o});var n=l(71146),a=l(65137),r=l(43939),u=l(49231);const o=t=>{const{colorMode:e}=(0,a.I)();let l=(0,r.Z)("dark"===e&&t.darkImg?t.darkImg:t.img),o="inherit";t.lightBg&&"dark"!==e&&(o=t.lightBg),t.darkBg&&"dark"===e&&(o=t.darkBg);let i={};return t.sx&&(i={backgroundColor:o,m:"auto",display:"flex",...i,...t.sx}),u.createElement(n.Z,{component:"img",sx:i,src:l})}},49675:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(87145),a=l(27753),r=l(67547),u=l(40888),o=l(49231);const i=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return o.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},o.createElement(a.Z,{variant:"text",size:"small",startIcon:o.createElement(u.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},o.createElement(r.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},7106:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=l(48041),a=(l(49231),l(54852));const r={},u=void 0,o={unversionedId:"solana/idl/accounts/SbState",id:"solana/idl/accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL.",source:"@site/docs/solana/idl/accounts/SbState.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/SbState",permalink:"/solana/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"RealmSpawnRecordAccountData",permalink:"/solana/idl/accounts/RealmSpawnRecordAccountData"},next:{title:"SlidingResultAccountData",permalink:"/solana/idl/accounts/SlidingResultAccountData"}},i={},d=[],s={toc:d},k="wrapper";function p(t){let{components:e,...l}=t;return(0,a.kt)(k,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("b",null,"Size: "),"1128 Bytes",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),".",(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved for future info. Reserved.")))))}p.isMDXComponent=!0},70682:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var n=l(48041),a=(l(49231),l(54852)),r=(l(93451),l(15733),l(7106),l(49675));const u={sidebar_position:20},o="Devnet",i={unversionedId:"solana/program/devnet",id:"solana/program/devnet",title:"Devnet",description:"You can find a list of Devnet feeds in the",source:"@site/docs/solana/program/devnet.mdx",sourceDirName:"solana/program",slug:"/solana/program/devnet",permalink:"/solana/program/devnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"solana",previous:{title:"Mainnet",permalink:"/solana/program/mainnet"},next:{title:"Data Feed Integration",permalink:"/solana/feed-integration"}},d={},s=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],k={toc:s},p="wrapper";function c(t){let{components:e,...l}=t;return(0,a.kt)(p,(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"devnet"},"Devnet"),(0,a.kt)("p",null,"You can find a list of Devnet feeds in the\n",(0,a.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/"},"Switchboard Explorer"),"."),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Devnet"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"IDL Address")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"CKwZcshn4XDvhaWVH9EXnk3iu19t6t5xP2Sy2pD6TRDp",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program Data Address")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"J4CArpsbrZqu1axqQ4AnrqREs3jwoyA1M5LMiQQmAzB9",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program State Account")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"BYM81n8HvTJuqZU1PmTVcwZ9G8uoji7FKM6EaPkwphPt",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Token Vault")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"FVLfR6C2ckZhbSwBzZY4CX7YBcddUSge5BNeGQv5eKhy",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,a.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Buffer")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"DQXUDDcDoQ2FjzjYRi45gjdRqe1EsLwoqNhW2hf488gf",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Devnet Permissioned Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedVrfEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"enableBufferRelayers")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"12500")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Buffer")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"7yJ3sSifpmUFB5BcXy6yMDje15xw2CovJjfXfBKsCfT5",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"GN9jjCy2THzZxhYqZETmPM3my8vg4R5JyNkgULddUMa5",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedVrfEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"enableBufferRelayers")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"12500")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))))}c.isMDXComponent=!0}}]);