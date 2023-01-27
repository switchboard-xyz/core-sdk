"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3350],{10686:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(44267),o=a(15861),i=a(21519),n=a(78445),s=a(44073),l=a(67294),c=a(39960),d=a(13264),m=a(92949);const g=(0,d.Z)(s.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,d.Z)(n.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function p(e){let{title:t,image:a,imageDark:n,description:s,to:d,sx:p}=e;const{colorMode:h}=(0,m.I)();return l.createElement(c.Z,{href:d,style:{textDecoration:"none"}},l.createElement(g,{dark:"dark"===h?1:0,sx:p},l.createElement(r.Z,{sx:{height:"100%",width:"100%"}},l.createElement(u,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&n?n:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(i.Z,{sx:{marginBottom:"1rem"}}),l.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(86886),o=a(67294),i=a(10686);function n(e){let{items:t,cols:a,sx:n,direction:s,justifyContent:l,alignItems:c}=e;return o.createElement(r.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return o.createElement(r.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},o.createElement(i.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n}))})))}},7355:(e,t,a)=>{a(67294)},33905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=a(83117),o=(a(67294),a(3905)),i=a(17547),n=(a(7355),a(44996));const s={sidebar_position:1,id:"introduction",slug:"/",hide_table_of_contents:!0,title:"Introduction",keywords:["Switchboard","web3","oracle","data feeds","vrf","randomness","solana","aptos","near"]},l=void 0,c={unversionedId:"about/introduction",id:"about/introduction",title:"Introduction",description:"Switchboard is a multi-chain, permissionless oracle protocol for general purpose",source:"@site/docs/about/introduction.mdx",sourceDirName:"about",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"introduction",slug:"/",hide_table_of_contents:!0,title:"Introduction",keywords:["Switchboard","web3","oracle","data feeds","vrf","randomness","solana","aptos","near"]},sidebar:"about",next:{title:"FAQ",permalink:"/faq"}},d={},m=[{value:"What is an Oracle?",id:"what-is-an-oracle",level:2},{value:"What makes Switchboard different?",id:"what-makes-switchboard-different",level:2},{value:"Use Cases",id:"use-cases",level:2}],g={toc:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Switchboard is a multi-chain, permissionless oracle protocol for general purpose\ndata feeds and verifiable random function (VRF)."),(0,o.kt)("p",null,"Switchboard gets its name from the early days of phone networks, where operators\nwould shuffle telephone lines around a 'switchboard' to complete a circuit and\nforward a dialer\u2019s call to the next hop in the circuit. Similarly, Switchboard,\nour oracle network is responsible for how external data gets updated and routed\nthrough a blockchain until it reaches its appropriate destination."),(0,o.kt)("hr",null),(0,o.kt)(i.Z,{cols:2,justifyContent:"center",sx:{border:"1px solid var(--ifm-color-primary-dark)",boxShadow:"2px 2px 5px var(--ifm-color-primary-dark)",borderRadius:"10px"},items:[{to:"/network",title:"Learn",description:"Learn about Switchboard and how it enables the community to dictate what data lives on-chain.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/design/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/design/dark.svg")})},{to:"/publisher",title:"Publisher",description:"Learn how to use the Publisher to bring your own data on-chain.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/publish/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/publish/dark.svg")})},{to:"/dev",title:"Developer",description:"Learn how to integrate Switchboard into your application.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/oracle/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/oracle/dark.svg")})},{to:"/operator",title:"Operator",description:"Learn how to contribute to the network and process data feed updates.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/oracle/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/oracle/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,o.kt)("hr",null),(0,o.kt)(i.Z,{cols:3,justifyContent:"center",sx:{border:"1px solid var(--ifm-color-primary-dark)",boxShadow:"2px 2px 5px var(--ifm-color-primary-dark)",borderRadius:"10px"},items:[{to:"/aptos",title:"Aptos",description:"Integrate Switchboard on Aptos.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/aptos/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/aptos/dark.svg")})},{to:"/coredao",title:"CoreDAO",description:"Integrate Switchboard on CoreDAO.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/coredao/logo.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/coredao/logo.svg")})},{to:"/near",title:"Near",description:"Integrate Switchboard on Near.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/near/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/near/dark.svg")})},{to:"/solana",title:"Solana",description:"Integrate Switchboard on Solana.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/solana/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/solana/logo.svg")})},{to:"/starknet",title:"StarkNet",description:"Integrate Switchboard on StarkNet.",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/starknet/teal.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/starknet/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-is-an-oracle"},"What is an Oracle?"),(0,o.kt)("p",null,"Blockchains do not have the capability of directly relaying information from\noff-chain to on-chain. Hence, enter oracles, a gateway between blockchain and\nreal world data."),(0,o.kt)("p",null,"An oracle is not the data source, it is an infrastructure layer for querying,\nverifying and authenticating external data sources; which is relayed to the\nblockchain for a smart contract to read and carry out necessary course of action\nfor its intended product."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-makes-switchboard-different"},"What makes Switchboard different?"),(0,o.kt)("p",null,"Switchboard is permissionless. From a developer's perspective, you customize,\nbuild and manage your own data feeds where all of which can be done from\nSwitchboard's ",(0,o.kt)("a",{parentName:"p",href:"https://app.switchboard.xyz"},"Publisher"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"No friction, no contact, build permissionlessly.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"With the power of off-chain data being brought on-chain, Switchboard has plugged\ninto mulitple verticals to build blockchain based applications today, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Determining the current price of an asset for collateralized lending"),(0,o.kt)("li",{parentName:"ul"},"Determining the state of a tracking number to auto settle funds on arrival"),(0,o.kt)("li",{parentName:"ul"},"Determining the current standings of the MLB for fantasy sports rankings")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Find out more use cases and integrations\n",(0,o.kt)("a",{parentName:"em",href:"/faq#use-cases-and-integrations"},"here"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We are only scraping the surface of blockchain technology and we're excited to\nsee the future use cases",(0,o.kt)("br",{parentName:"p"}),"\n","plugged in by Switchboard!")))}u.isMDXComponent=!0}}]);