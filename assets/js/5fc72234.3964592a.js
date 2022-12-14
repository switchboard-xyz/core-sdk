"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35417:(e,t,a)=>{a.d(t,{Z:()=>D});var r=a(86886),n=a(67294),o=a(44267),i=a(15861),l=a(21519),s=a(80102),c=a(83117),p=a(86010),d=a(94780),m=a(33616),u=a(90948),g=a(34867);function h(e){return(0,g.Z)("MuiCardHeader",e)}const y=(0,a(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var b=a(85893);const v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,c.Z)({[`& .${y.title}`]:t.title,[`& .${y.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),w=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),k=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),P=n.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:n,className:o,component:l="div",disableTypography:u=!1,subheader:g,subheaderTypographyProps:y,title:P,titleTypographyProps:Z}=a,E=(0,s.Z)(a,v),T=(0,c.Z)({},a,{component:l,disableTypography:u}),N=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(T);let j=P;null==j||j.type===i.Z||u||(j=(0,b.jsx)(i.Z,(0,c.Z)({variant:n?"body2":"h5",className:N.title,component:"span",display:"block"},Z,{children:j})));let O=g;return null==O||O.type===i.Z||u||(O=(0,b.jsx)(i.Z,(0,c.Z)({variant:n?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:O}))),(0,b.jsxs)(f,(0,c.Z)({className:(0,p.Z)(N.root,o),as:l,ref:t,ownerState:T},E,{children:[n&&(0,b.jsx)(w,{className:N.avatar,ownerState:T,children:n}),(0,b.jsxs)(x,{className:N.content,ownerState:T,children:[j,O]}),r&&(0,b.jsx)(k,{className:N.action,ownerState:T,children:r})]}))}));var Z=a(44073),E=a(39960),T=a(13264),N=a(92949);const j=(0,T.Z)(Z.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),O=(0,T.Z)(P)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function S(e){let{title:t,image:a,imageDark:r,description:s,to:c}=e;const{colorMode:p}=(0,N.I)();return n.createElement(E.Z,{href:c,style:{textDecoration:"none"}},n.createElement(j,{dark:"dark"===p?1:0},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(O,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===p&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?n.createElement(n.Fragment,null,n.createElement(l.Z,{sx:{marginBottom:"1rem"}}),n.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):n.createElement(n.Fragment,null))))}function D(e){let{items:t,cols:a}=e;return n.createElement(r.ZP,{container:!0,spacing:3},t.map((e=>n.createElement(r.ZP,{item:!0,xs:12,md:6,lg:12/(null!=a?a:2)},n.createElement(S,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description})))))}},87543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(83117),n=(a(67294),a(3905)),o=a(35417),i=a(44996);const l={sidebar_position:10,slug:".",title:"switchboardpy",className:"sidebar__python"},s=void 0,c={unversionedId:"solana/dev/python/client",id:"solana/dev/python/client",title:"switchboardpy",description:"SwitchboardPy is the Python client for",source:"@site/docs/solana/dev/python/client.mdx",sourceDirName:"solana/dev/python",slug:"/solana/dev/python/",permalink:"/solana/dev/python/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"switchboardpy",className:"sidebar__python"},sidebar:"solana",previous:{title:"Lease Observer",permalink:"/solana/dev/javascript/examples/lease-observer"},next:{title:"switchboard-v2",permalink:"/solana/dev/rust/"}},p={},d=[{value:"Quick Links",id:"quick-links",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Anchorpy Client Gen",id:"anchorpy-client-gen",level:2}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SwitchboardPy is the Python client for\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/introduction"},"Switchboard"),". It provides wrappers\nto help you to interact with the Switchboard V2 program on-chain."),(0,n.kt)("p",null,"Internally it uses ",(0,n.kt)("a",{parentName:"p",href:"https://kevinheavey.github.io/anchorpy/"},"AnchorPy"),", an\nAnchor API implementation in Python."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/switchboardpy"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/pypi/v/switchboardpy",alt:"pypi"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(o.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/python/switchboardpy",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/switchboardpy",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"pip install switchboardpy\n")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nfrom solana.keypair import Keypair\nfrom solana.publickey import PublicKey\nfrom solana.rpc.async_api import AsyncClient\nfrom anchorpy import Program, Provider, Wallet\n\nfrom switchboardpy import AggregatorAccount, AccountParams\n\n# Devnet Program ID.\nSBV2_DEVNET_PID = PublicKey(\n    \'2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG\'\n)\n\nasync def main():\n    client = AsyncClient("https://api.devnet.solana.com/")\n    provider = Provider(client, Wallet(Keypair()))\n    program = await Program.at(\n        SBV2_DEVNET_PID, provider\n    )\n    agg = AggregatorAccount(AccountParams(program=program, public_key=PublicKey("88FX4tBstuwBPNhQU4EEBoPX35neSu4Le9zDSwtPRRQz")))\n\n    # getting aggregator data\n    data = await agg.load_data()\n\n    # getting most recent value (decimal.Decimal)\n    val = await agg.get_latest_value()\n\n    print(\'LATEST VALUE:\')\n    print(val)\n\n    await program.close()\n\nasyncio.run(main())\n\n"""\nOUTPUT\nLATEST VALUE:\n180.12115\n"""\n\n')),(0,n.kt)("h2",{id:"anchorpy-client-gen"},"Anchorpy Client Gen"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"anchorpy client-gen ./switchboard_v2.mainnet.parsed.json ./switchboardpy --program-id SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f\n")))}u.isMDXComponent=!0}}]);