"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9214],{7357:(t,a,e)=>{e.d(a,{Z:()=>g});var n=e(3117),r=e(102),l=e(7294),i=e(6010),o=e(9731),s=e(6523),u=e(9707),d=e(6682),p=e(5893);const m=["className","component"];var c=e(7078);const k=function(t={}){const{defaultTheme:a,defaultClassName:e="MuiBox-root",generateClassName:c,styleFunctionSx:k=s.Z}=t,g=(0,o.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(k);return l.forwardRef((function(t,l){const o=(0,d.Z)(a),s=(0,u.Z)(t),{className:k,component:N="div"}=s,f=(0,r.Z)(s,m);return(0,p.jsx)(g,(0,n.Z)({as:N,ref:l,className:(0,i.Z)(k,c?c(e):e),theme:o},f))}))}({defaultTheme:(0,e(1265).Z)(),defaultClassName:"MuiBox-root",generateClassName:c.Z.generate}),g=k},5861:(t,a,e)=>{e.d(a,{Z:()=>b});var n=e(102),r=e(3117),l=e(7294),i=e(6010),o=e(9707),s=e(4435),u=e(948),d=e(3616),p=e(8216),m=e(4867);function c(t){return(0,m.Z)("MuiTypography",t)}(0,e(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var k=e(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],N=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,e.variant&&a[e.variant],"inherit"!==e.align&&a[`align${(0,p.Z)(e.align)}`],e.noWrap&&a.noWrap,e.gutterBottom&&a.gutterBottom,e.paragraph&&a.paragraph]}})((({theme:t,ownerState:a})=>(0,r.Z)({margin:0},a.variant&&t.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},h={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=l.forwardRef((function(t,a){const e=(0,d.Z)({props:t,name:"MuiTypography"}),l=(t=>h[t]||t)(e.color),u=(0,o.Z)((0,r.Z)({},e,{color:l})),{align:m="inherit",className:b,component:y,gutterBottom:v=!1,noWrap:w=!1,paragraph:Z=!1,variant:R="body1",variantMapping:C=f}=u,x=(0,n.Z)(u,g),V=(0,r.Z)({},u,{align:m,color:l,className:b,component:y,gutterBottom:v,noWrap:w,paragraph:Z,variant:R,variantMapping:C}),A=y||(Z?"p":C[R]||f[R])||"span",T=(t=>{const{align:a,gutterBottom:e,noWrap:n,paragraph:r,variant:l,classes:i}=t,o={root:["root",l,"inherit"!==t.align&&`align${(0,p.Z)(a)}`,e&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,s.Z)(o,c,i)})(V);return(0,k.jsx)(N,(0,r.Z)({as:A,ref:a,ownerState:V,className:(0,i.Z)(T.root,b)},x))}))},9707:(t,a,e)=>{e.d(a,{Z:()=>s});var n=e(3117),r=e(102),l=e(9766),i=e(5578);const o=["sx"];function s(t){const{sx:a}=t,e=(0,r.Z)(t,o),{systemProps:s,otherProps:u}=(t=>{const a={systemProps:{},otherProps:{}};return Object.keys(t).forEach((e=>{i.Gc[e]?a.systemProps[e]=t[e]:a.otherProps[e]=t[e]})),a})(e);let d;return d=Array.isArray(a)?[s,...a]:"function"==typeof a?(...t)=>{const e=a(...t);return(0,l.P)(e)?(0,n.Z)({},s,e):s}:(0,n.Z)({},s,a),(0,n.Z)({},u,{sx:d})}},4008:(t,a,e)=>{e.d(a,{Z:()=>o});var n=e(7357),r=e(2949),l=e(4996),i=e(7294);const o=t=>{const{colorMode:a}=(0,r.I)();let e="inherit";t.lightBg&&"dark"!==a&&(e=t.lightBg),t.darkBg&&"dark"===a&&(e=t.darkBg);let o={};return t.sx&&(o={backgroundColor:e,m:"auto",display:"flex",...o,...t.sx}),i.createElement(n.Z,{component:"img",sx:o,src:(0,l.Z)(t.img)})}},3471:(t,a,e)=>{e.d(a,{N:()=>i});var n=e(3219),r=e(3117),l=e(7294);function i(t){return l.createElement(n.Z,(0,r.Z)({},t,{viewBox:"0 0 251 283.9"}),l.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"125.5",y1:"52.0877",x2:"125.5",y2:"253.0878",gradientTransform:"matrix(1 0 0 -1 0 285.9755)"},l.createElement("stop",{offset:"0"}),l.createElement("stop",{offset:"1"})),l.createElement("path",{d:"M125.5,233.9c-43.1,0-78.1-35-78.1-78.1c0-41.9,70.7-115.9,73.7-119l3.7-3.9l3.8,3.8c3.1,3.1,75,77.1,75,119 C203.6,198.9,168.6,233.9,125.5,233.9L125.5,233.9z M124.9,48c-6.2,6.7-19.2,21.2-32.1,38.2c-22.9,30.2-35,54.2-35,69.5 c0,37.3,30.4,67.7,67.7,67.7s67.7-30.4,67.7-67.7c0-15.3-12.3-39.3-35.6-69.5C144.5,69.3,131.2,54.7,124.9,48z"}),l.createElement("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:"125.6",y1:"27.0877",x2:"125.6",y2:"269.3627",gradientTransform:"matrix(1 0 0 -1 0 285.9755)"},l.createElement("stop",{offset:"0"}),l.createElement("stop",{offset:"1"})),l.createElement("path",{d:"M125.5,258.9c-56.9,0-103.1-46.3-103.1-103.1c0-55.6,77.6-133.2,80.9-136.4c2-2,5.4-2,7.4,0s2,5.4,0,7.4 c-0.8,0.8-77.8,77.8-77.8,129c0,51.1,41.6,92.7,92.7,92.7s92.7-41.6,92.7-92.7c0-21-13.6-50-39.4-84.1 c-19.8-26.1-39.7-45.9-39.9-46.1c-2.1-2-2.1-5.3,0-7.4c2-2.1,5.3-2.1,7.4,0c3.4,3.3,82.4,81.9,82.4,137.6 C228.6,212.6,182.4,258.9,125.5,258.9L125.5,258.9z"}),l.createElement("linearGradient",{id:"SVGID_3_",gradientUnits:"userSpaceOnUse",x1:"125.5",y1:"2.0877",x2:"125.5",y2:"285.9755",gradientTransform:"matrix(1 0 0 -1 0 285.9755)"},l.createElement("stop",{offset:"0"}),l.createElement("stop",{offset:"1"})),l.createElement("path",{d:"M125.5,283.9C56.3,283.9,0,227.6,0,158.4c0-28.6,14.4-63.8,42.7-104.5C63.6,23.9,84.1,2.5,85,1.6 c2-2.1,5.3-2.1,7.4-0.1s2.1,5.3,0.1,7.4C92.3,9.1,71.6,30.7,51.2,60c-26.7,38.3-40.8,72.3-40.8,98.4c0,63.4,51.6,115.1,115.1,115.1 s115.1-51.6,115.1-115.1c0-26.1-14.2-60.1-41.1-98.4C178.9,30.7,158,9.1,157.8,8.9c-2-2.1-2-5.4,0.1-7.4s5.4-2,7.4,0.1 c3.5,3.6,85.7,89,85.7,156.8C251,227.6,194.7,283.9,125.5,283.9z"}))}},6768:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=e(3117),r=(e(7294),e(3905));e(4008),e(7414),e(9960),e(3967),e(4780),e(5535),e(2358),e(400);const l={sidebar_position:1,slug:"about",title:"What is Randomness",description:"Learn how to use Switchboard's Verifiable Random Functions",keywords:["Switchboard","Solana","VRF","randomness","verifiable","proof"]},i=void 0,o={unversionedId:"randomness/overview",id:"randomness/overview",title:"What is Randomness",description:"Learn how to use Switchboard's Verifiable Random Functions",source:"@site/docs/randomness/overview.mdx",sourceDirName:"randomness",slug:"/randomness/about",permalink:"/sbv2-core/randomness/about",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"about",title:"What is Randomness",description:"Learn how to use Switchboard's Verifiable Random Functions",keywords:["Switchboard","Solana","VRF","randomness","verifiable","proof"]},sidebar:"randomness"},s={},u=[],d={toc:u};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While Switchboard V2's oracle network is fully audited, the VRF implementation\nis currently unaudited software. Please use at your own risk.")),(0,r.kt)("p",null,"While true-randomness on some computers can be made possible via atmospheric\nnoise and special hardware modules, such solutions on blockchains are not\npossible since they are virtual machines without physical hardware. Thus,\npseudorandom-functions are needed to close this gap. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You should be skeptical\nof teams claiming they offer true randomness."))),(0,r.kt)("p",null,"Random numbers are crucial for many DeFi applications whether its fair NFT\nlaunches, gambling, gaming, or assigning user roles in a DAO. Without an element\nof randomness, each of the above could be exploited and the final outcome\npredicted."),(0,r.kt)("p",null,"A Verifiable Random Function (VRF) is a public-key pseudorandom function that\nprovides proofs that its outputs were calculated correctly. This means we can\nuse a cryptographic keypair to generate a random number with a proof, which can\nthen be validated by anyone to ensure the value was calculated correctly without\nthe possibility of leaking the producer\u2019s secret key. You can read more about\nVRF from the Algorand team, whose founder was one of the authors on the original\nVRF paper -\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/algorand/algorand-releases-first-open-source-code-of-verifiable-random-function-93c2960abd61"},"Algorand Releases First Open Source Code of Verifiable Random Functions"),"."),(0,r.kt)("p",null,"Switchboard's VRF implementation uses the oracle authority secret key to publish\nthe VRF proof on-chain. The on-chain proof verification is very computationally\nexpensive and requires 276 instructions on-chain to fully verify. Once the proof\nis submitted on-chain anyone can turn the VRF crank to produce the pseduorandom\nresult, although for simplicity and speed the Switchboard oracle that submitted\nthe proof also submits the verification instructions."),(0,r.kt)("p",null,"The final proof verification instruction invokes the VRF Account's specified\ncallback, which allows developers to integrate pseduorandomness into their\napplications and be confident they are consuming the latest pseduorandom result."))}p.isMDXComponent=!0},7414:(t,a,e)=>{e(3117),e(7294),e(3905),e(7735),e(3471),e(5861)},3967:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=e(3117),r=(e(7294),e(3905));const l={},i=void 0,o={unversionedId:"solana/idl/accounts/VrfAccountData",id:"solana/idl/accounts/VrfAccountData",title:"VrfAccountData",description:"Size 0.203134560SOL",source:"@site/docs/solana/idl/accounts/VrfAccountData.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/VrfAccountData",permalink:"/sbv2-core/solana/idl/accounts/VrfAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"SbState",permalink:"/sbv2-core/solana/idl/accounts/SbState"},next:{title:"Overview",permalink:"/sbv2-core/solana/idl/instructions/"}},s={},u=[],d={toc:u};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Size: "),"29058 Bytes",(0,r.kt)("br",null),(0,r.kt)("b",null,"Rent Exemption: "),"0.203134560SOL",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/VrfStatus"},"VrfStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"The current status of the VRF account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null},"Incremental counter for tracking VRF rounds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"On-chain account delegated for making account changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/solana/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")," that is assigned to fulfill VRF update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The token account used to hold funds for VRF update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/CallbackZC"},"CallbackZC")),(0,r.kt)("td",{parentName:"tr",align:null},"The callback that is invoked when an update request is successfully verified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of oracles assigned to a VRF update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"builders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/VrfBuilder"},"VrfBuilder"),"[8]"),(0,r.kt)("td",{parentName:"tr",align:null},"Struct containing the intermediate state between VRF crank actions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buildersLen"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of builders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testMode"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentRound"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/VrfRound"},"VrfRound")),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle results from the current round of update request that has not been accepted as valid yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[1024]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}p.isMDXComponent=!0},4780:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=e(3117),r=(e(7294),e(3905));const l={},i=void 0,o={unversionedId:"solana/idl/instructions/vrfInit",id:"solana/idl/instructions/vrfInit",title:"vrfInit",description:"Accounts",source:"@site/docs/solana/idl/instructions/vrfInit.md",sourceDirName:"solana/idl/instructions",slug:"/solana/idl/instructions/vrfInit",permalink:"/sbv2-core/solana/idl/instructions/vrfInit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"vaultTransfer",permalink:"/sbv2-core/solana/idl/instructions/vaultTransfer"},next:{title:"vrfProveAndVerify",permalink:"/sbv2-core/solana/idl/instructions/vrfProveAndVerify"}},s={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Args",id:"args",level:2}],d={toc:u};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isMut"),(0,r.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vrf"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"programState"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"args"},"Args"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/Callback"},"Callback")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateBump"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},5535:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=e(3117),r=(e(7294),e(3905));const l={},i=void 0,o={unversionedId:"solana/idl/instructions/vrfProveAndVerify",id:"solana/idl/instructions/vrfProveAndVerify",title:"vrfProveAndVerify",description:"Accounts",source:"@site/docs/solana/idl/instructions/vrfProveAndVerify.md",sourceDirName:"solana/idl/instructions",slug:"/solana/idl/instructions/vrfProveAndVerify",permalink:"/sbv2-core/solana/idl/instructions/vrfProveAndVerify",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"vrfInit",permalink:"/sbv2-core/solana/idl/instructions/vrfInit"},next:{title:"vrfRequestRandomness",permalink:"/sbv2-core/solana/idl/instructions/vrfRequestRandomness"}},s={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Args",id:"args",level:2}],d={toc:u};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isMut"),(0,r.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vrf"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackPid"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"programState"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleAuthority"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleWallet"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instructionsSysvar"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"args"},"Args"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"Option","<","u32",">"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateBump"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idx"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proof"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},2358:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=e(3117),r=(e(7294),e(3905));const l={},i=void 0,o={unversionedId:"solana/idl/instructions/vrfRequestRandomness",id:"solana/idl/instructions/vrfRequestRandomness",title:"vrfRequestRandomness",description:"Accounts",source:"@site/docs/solana/idl/instructions/vrfRequestRandomness.md",sourceDirName:"solana/idl/instructions",slug:"/solana/idl/instructions/vrfRequestRandomness",permalink:"/sbv2-core/solana/idl/instructions/vrfRequestRandomness",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"vrfProveAndVerify",permalink:"/sbv2-core/solana/idl/instructions/vrfProveAndVerify"},next:{title:"Overview",permalink:"/sbv2-core/solana/idl/events/"}},s={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Args",id:"args",level:2}],d={toc:u};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isMut"),(0,r.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vrf"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queueAuthority"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataBuffer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permission"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escrow"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payerWallet"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payerAuthority"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recentBlockhashes"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"programState"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"args"},"Args"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permissionBump"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateBump"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},400:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=e(3117),r=(e(7294),e(3905));const l={},i=void 0,o={unversionedId:"solana/idl/types/CallbackZC",id:"solana/idl/types/CallbackZC",title:"CallbackZC",description:"| Field       | Type                                                 | Description                                           |",source:"@site/docs/solana/idl/types/CallbackZC.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/CallbackZC",permalink:"/sbv2-core/solana/idl/types/CallbackZC",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"Callback",permalink:"/sbv2-core/solana/idl/types/Callback"},next:{title:"CompletedPointZC",permalink:"/sbv2-core/solana/idl/types/CompletedPointZC"}},s={},u=[],d={toc:u};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"programId"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The program ID of the callback program being invoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accounts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/solana/idl/types/AccountMetaZC"},"AccountMetaZC"),"[32]"),(0,r.kt)("td",{parentName:"tr",align:null},"The accounts being used in the callback instruction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accountsLen"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of accounts in the accounts array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ixData"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[1024]"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized instruction data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ixDataLen"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The length of the instruction buffer.")))))}p.isMDXComponent=!0}}]);