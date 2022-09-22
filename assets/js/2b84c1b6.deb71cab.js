"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5518],{4008:(t,l,e)=>{e.d(l,{Z:()=>i});var n=e(7357),u=e(2949),a=e(4996),r=e(7294);const i=t=>{const{colorMode:l}=(0,u.I)();let e="inherit";t.lightBg&&"dark"!==l&&(e=t.lightBg),t.darkBg&&"dark"===l&&(e=t.darkBg);let i={};return t.sx&&(i={backgroundColor:e,m:"auto",display:"flex",...i,...t.sx}),r.createElement(n.Z,{component:"img",sx:i,src:(0,a.Z)(t.img)})}},5205:(t,l,e)=>{e.d(l,{Z:()=>k});var n=e(5327),u=e(3321),a=e(5861),r=e(1899),i=e(7294);const k=t=>{let l={textTransform:"none",color:"#4c6fff",fontWeight:800,margin:0};t.sx&&(l={...l,...t.sx});return i.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(u.Z,{variant:"text",size:"small",startIcon:i.createElement(r.Z,{sx:{fill:"#4c6fff"},fontSize:"small"}),onClick:()=>{const l=document.createElement("textarea");l.value=t.publicKey,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}},i.createElement(a.Z,{sx:l,color:"textSecondary"},t.publicKey)))}},2377:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>k,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=e(3117),u=(e(7294),e(3905));const a={},r=void 0,i={unversionedId:"solana/idl/accounts/SbState",id:"solana/idl/accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL",source:"@site/docs/solana/idl/accounts/SbState.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/SbState",permalink:"/sbv2-core/solana/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"PermissionAccountData",permalink:"/sbv2-core/solana/idl/accounts/PermissionAccountData"},next:{title:"VrfAccountData",permalink:"/sbv2-core/solana/idl/accounts/VrfAccountData"}},k={},d=[],o={toc:d};function s(t){let{components:l,...e}=t;return(0,u.kt)("wrapper",(0,n.Z)({},o,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("b",null,"Size: "),"1128 Bytes",(0,u.kt)("br",null),(0,u.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,u.kt)("br",null),(0,u.kt)("br",null),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Field"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"authority"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,u.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,u.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}s.isMDXComponent=!0},6874:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>k,toc:()=>o});var n=e(3117),u=(e(7294),e(3905)),a=(e(4008),e(9960),e(2377),e(5205));const r={sidebar_position:10},i="Mainnet",k={unversionedId:"solana/program/mainnet",id:"solana/program/mainnet",title:"Mainnet",description:"You can find a list of Devnet feeds in the",source:"@site/docs/solana/program/mainnet.mdx",sourceDirName:"solana/program",slug:"/solana/program/mainnet",permalink:"/sbv2-core/solana/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"solana",previous:{title:"Overview",permalink:"/sbv2-core/solana/"},next:{title:"Devnet",permalink:"/sbv2-core/solana/program/devnet"}},d={},o=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],s={toc:o};function c(t){let{components:l,...e}=t;return(0,u.kt)("wrapper",(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"mainnet"},"Mainnet"),(0,u.kt)("p",null,"You can find a list of Devnet feeds in the\n",(0,u.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/"},"Switchboard Explorer"),"."),(0,u.kt)("h2",{id:"program-id"},"Program ID"),(0,u.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Mainnet-Beta"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program ID")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Upgrade Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program State Account")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"CyZuD7RPDcrqCGbNvLCyqk6Py9cEZTKmNKujfPi3ynDd",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"DAO Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"11111111111111111111111111111111",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"tokenVault")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"J7nSEX8ADf3pVVicd6yKy2Skvg8iLePEmkLUisAAaioD",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"idlAddress")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"programDataAddress")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"7nYabs9dUhvxYwdTnrWVBL9MYviKSfrEbdWCUbcnwkpF",mdxType:"PublicKeyButton"}))))),(0,u.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,u.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"FZ3CAm8o5zf18Ua23jhrZJRYCMtGhFxFrTux8N5yrf2T",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))),(0,u.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,u.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"5JYwqvKkqp35w8Nq3ba4z1WYUeJQ1rB36V8XvaGp6zn1",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"FozqXFMS1nQKfPqwVdChr7RJ3y7ccSux39zU682kNYjJ",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"BKtF8yyQsj3Ft6jb2nkfpEKzARZVdGgdEPs6mFmZNmbA",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))),(0,u.kt)("hr",null))}c.isMDXComponent=!0}}]);