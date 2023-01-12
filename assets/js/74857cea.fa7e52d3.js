"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[699],{24008:(t,l,e)=>{e.d(l,{Z:()=>o});var n=e(99226),u=e(92949),a=e(44996),r=e(67294);const o=t=>{const{colorMode:l}=(0,u.I)();let e="inherit";t.lightBg&&"dark"!==l&&(e=t.lightBg),t.darkBg&&"dark"===l&&(e=t.darkBg);let o={};return t.sx&&(o={backgroundColor:e,m:"auto",display:"flex",...o,...t.sx}),r.createElement(n.Z,{component:"img",sx:o,src:(0,a.Z)(t.img)})}},55205:(t,l,e)=>{e.d(l,{Z:()=>k});var n=e(15327),u=e(4665),a=e(15861),r=e(41899),o=e(67294);const k=t=>{let l={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(l={...l,...t.sx});return o.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},o.createElement(u.Z,{variant:"text",size:"small",startIcon:o.createElement(r.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const l=document.createElement("textarea");l.value=t.publicKey,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}},o.createElement(a.Z,{sx:l,color:"textSecondary"},t.publicKey)))}},92377:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>k,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var n=e(83117),u=(e(67294),e(3905));const a={},r=void 0,o={unversionedId:"solana/idl/accounts/SbState",id:"solana/idl/accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL.",source:"@site/docs/solana/idl/accounts/SbState.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/SbState",permalink:"/solana/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"RealmSpawnRecordAccountData",permalink:"/solana/idl/accounts/RealmSpawnRecordAccountData"},next:{title:"SlidingResultAccountData",permalink:"/solana/idl/accounts/SlidingResultAccountData"}},k={},i=[],d={toc:i};function s(t){let{components:l,...e}=t;return(0,u.kt)("wrapper",(0,n.Z)({},d,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("b",null,"Size: "),"1128 Bytes",(0,u.kt)("br",null),(0,u.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,u.kt)("br",null),(0,u.kt)("br",null),".",(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Field"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"authority"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,u.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,u.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,u.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,u.kt)("td",{parentName:"tr",align:null},"Reserved for future info. Reserved.")))))}s.isMDXComponent=!0},26301:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>k,toc:()=>d});var n=e(83117),u=(e(67294),e(3905)),a=(e(24008),e(39960),e(92377),e(55205));const r={sidebar_position:20},o="Devnet",k={unversionedId:"solana/program/devnet",id:"solana/program/devnet",title:"Devnet",description:"You can find a list of Devnet feeds in the",source:"@site/docs/solana/program/devnet.mdx",sourceDirName:"solana/program",slug:"/solana/program/devnet",permalink:"/solana/program/devnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"solana",previous:{title:"Mainnet",permalink:"/solana/program/mainnet"},next:{title:"SDK Overview",permalink:"/solana/dev/"}},i={},d=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],s={toc:d};function c(t){let{components:l,...e}=t;return(0,u.kt)("wrapper",(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"devnet"},"Devnet"),(0,u.kt)("p",null,"You can find a list of Devnet feeds in the\n",(0,u.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/"},"Switchboard Explorer"),"."),(0,u.kt)("h2",{id:"program-id"},"Program ID"),(0,u.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Devnet"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program ID")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Upgrade Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program State Account")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"BYM81n8HvTJuqZU1PmTVcwZ9G8uoji7FKM6EaPkwphPt",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"DAO Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"11111111111111111111111111111111",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"tokenVault")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"FVLfR6C2ckZhbSwBzZY4CX7YBcddUSge5BNeGQv5eKhy",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"idlAddress")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"CKwZcshn4XDvhaWVH9EXnk3iu19t6t5xP2Sy2pD6TRDp",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"programDataAddress")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"J4CArpsbrZqu1axqQ4AnrqREs3jwoyA1M5LMiQQmAzB9",mdxType:"PublicKeyButton"}))))),(0,u.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,u.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"DQXUDDcDoQ2FjzjYRi45gjdRqe1EsLwoqNhW2hf488gf",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Devnet Permissioned Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))),(0,u.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,u.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"7yJ3sSifpmUFB5BcXy6yMDje15xw2CovJjfXfBKsCfT5",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(a.Z,{publicKey:"GN9jjCy2THzZxhYqZETmPM3my8vg4R5JyNkgULddUMa5",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedVrfEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"enableBufferRelayers")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null,"12500")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null,"0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null,"180"))))))))}c.isMDXComponent=!0}}]);