"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22925],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,u=m["".concat(c,".").concat(g)]||m[g]||d[g]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},26365:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(73013),a=n(49231),i=n(66318),o=n(67547),l=n(42941),c=n(31063),s=n(98077),p=n(15733),m=n(27957),d=n(65137);const g=(0,m.Z)(s.Z)((e=>{let{theme:t,dark:n}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:n?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(n?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:n?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,m.Z)(c.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function y(e){let{title:t,image:n,imageDark:r,description:c,to:s,sx:m}=e;const{colorMode:y}=(0,d.I)();return a.createElement(p.Z,{href:s,style:{textDecoration:"none"}},a.createElement(g,{dark:"dark"===y?1:0,sx:m},a.createElement(i.Z,{sx:{height:"100%",width:"100%"}},a.createElement(u,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===y&&r?r:n),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),c?a.createElement(a.Fragment,null,a.createElement(l.Z,{sx:{marginBottom:"1rem"}}),a.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},c)):a.createElement(a.Fragment,null))))}function h(e){let{items:t,cols:n,sx:i,direction:o,justifyContent:l,alignItems:c}=e;return a.createElement(r.ZP,{container:!0,spacing:3,direction:o??"row",justifyContent:l,alignItems:c},t.map((e=>a.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/n??2)},a.createElement(y,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:i})))))}},13881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(48041),a=(n(49231),n(54852)),i=n(26365),o=n(43939);const l={sidebar_position:25,title:"switchboardpy"},c=void 0,s={unversionedId:"solana/dev/python",id:"solana/dev/python",title:"switchboardpy",description:"pypi&nbsp;&nbsp;",source:"@site/docs/solana/dev/python.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/python",permalink:"/solana/dev/python",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"switchboardpy"},sidebar:"solana",previous:{title:"@switchboard-xyz/solana.js",permalink:"/solana/dev/javascript"},next:{title:"Table of Contents",permalink:"/solana/idl/"}},p={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Anchorpy Client Gen",id:"anchorpy-client-gen",level:2}],d={toc:m},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/switchboardpy"},(0,a.kt)("img",{parentName:"a",src:"https://badgen.net/pypi/v/switchboardpy",alt:"pypi"})),"\xa0","\xa0"),(0,a.kt)("p",null,"SwitchboardPy is the Python client for\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/introduction"},"Switchboard"),". It provides wrappers\nto help you to interact with the Switchboard V2 program on-chain."),(0,a.kt)("p",null,"Internally it uses ",(0,a.kt)("a",{parentName:"p",href:"https://kevinheavey.github.io/anchorpy/"},"AnchorPy"),", an\nAnchor API implementation in Python."),(0,a.kt)("h2",{id:"quick-links"},"Quick Links"),(0,a.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/python/switchboardpy",title:"Github",description:"View the Github repo",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/switchboardpy",title:"Typedocs",description:"View the Typedocs",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pip install switchboardpy\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nfrom solana.keypair import Keypair\nfrom solana.publickey import PublicKey\nfrom solana.rpc.async_api import AsyncClient\nfrom anchorpy import Program, Provider, Wallet\n\nfrom switchboardpy import AggregatorAccount, AccountParams\n\n# Devnet Program ID.\nSBV2_DEVNET_PID = PublicKey(\n    \'2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG\'\n)\n\nasync def main():\n    client = AsyncClient("https://api.devnet.solana.com/")\n    provider = Provider(client, Wallet(Keypair()))\n    program = await Program.at(\n        SBV2_DEVNET_PID, provider\n    )\n    agg = AggregatorAccount(AccountParams(program=program, public_key=PublicKey("88FX4tBstuwBPNhQU4EEBoPX35neSu4Le9zDSwtPRRQz")))\n\n    # getting aggregator data\n    data = await agg.load_data()\n\n    # getting most recent value (decimal.Decimal)\n    val = await agg.get_latest_value()\n\n    print(\'LATEST VALUE:\')\n    print(val)\n\n    await program.close()\n\nasyncio.run(main())\n\n"""\nOUTPUT\nLATEST VALUE:\n180.12115\n"""\n\n')),(0,a.kt)("h2",{id:"anchorpy-client-gen"},"Anchorpy Client Gen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"anchorpy client-gen ./switchboard_v2.mainnet.parsed.json ./switchboardpy --program-id SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f\n")))}u.isMDXComponent=!0}}]);