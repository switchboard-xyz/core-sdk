"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11163],{49675:(t,l,e)=>{e.d(l,{Z:()=>i});var n=e(69787),u=e(94731),r=e(69681),k=e(35371),s=e(49231);const i=t=>{let l={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(l={...l,...t.sx});return s.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},s.createElement(u.Z,{variant:"text",size:"small",startIcon:s.createElement(k.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const l=document.createElement("textarea");l.value=t.publicKey,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}},s.createElement(r.Z,{sx:l,color:"textSecondary"},t.publicKey)))}},31434:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>a,contentTitle:()=>s,default:()=>b,frontMatter:()=>k,metadata:()=>i,toc:()=>o});var n=e(48041),u=(e(49231),e(54852)),r=e(49675);const k={sidebar_position:20},s="Testnet",i={unversionedId:"starknet/program/testnet",id:"starknet/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/starknet/program/testnet.mdx",sourceDirName:"starknet/program",slug:"/starknet/program/testnet",permalink:"/starknet/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"starknet",previous:{title:"Overview",permalink:"/starknet/"},next:{title:"SDK Overview",permalink:"/starknet/dev/"}},a={},o=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],d={toc:o},c="wrapper";function b(t){let{components:l,...e}=t;return(0,u.kt)(c,(0,n.Z)({},d,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"testnet"},"Testnet"),(0,u.kt)("h2",{id:"program-id"},"Program ID"),(0,u.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"goerli-alpha"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program ID")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"0x043e3ac5daf823088291cf98a71eb0187f1db77ae767333f11003a9a2da66f92",mdxType:"PublicKeyButton"}))))),(0,u.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,u.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Devnet Permissioned Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null))))))),(0,u.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,u.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Buffer")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null))))))))}b.isMDXComponent=!0}}]);