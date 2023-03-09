"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70705],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67547:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(92897),n=r(45675),o=r(49231),i=r(19841),l=r(65500),p=r(32301),c=r(21395),s=r(75336),d=r(43615),u=r(1274),h=r(7523);function m(e){return(0,h.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=r(20264);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=o.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiTypography"}),o=(e=>v[e]||e)(r.color),c=(0,l.Z)((0,n.Z)({},r,{color:o})),{align:u="inherit",className:h,component:k,gutterBottom:x=!1,noWrap:w=!1,paragraph:T=!1,variant:Z="body1",variantMapping:O=f}=c,C=(0,a.Z)(c,g),P=(0,n.Z)({},c,{align:u,color:o,className:h,component:k,gutterBottom:x,noWrap:w,paragraph:T,variant:Z,variantMapping:O}),j=k||(T?"p":O[Z]||f[Z])||"span",M=(e=>{const{align:t,gutterBottom:r,noWrap:a,paragraph:n,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,p.Z)(l,m,i)})(P);return(0,y.jsx)(b,(0,n.Z)({as:j,ref:t,ownerState:P,className:(0,i.Z)(M.root,h)},C))}))},93451:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(71146),n=r(65137),o=r(43939),i=r(49231);const l=e=>{const{colorMode:t}=(0,n.I)();let r=(0,o.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),l="inherit";e.lightBg&&"dark"!==t&&(l=e.lightBg),e.darkBg&&"dark"===t&&(l=e.darkBg);let p={};return e.sx&&(p={backgroundColor:l,m:"auto",display:"flex",...p,...e.sx}),i.createElement(a.Z,{component:"img",sx:p,src:r})}},61628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=r(48041),n=(r(49231),r(54852)),o=r(93451),i=r(73013),l=r(67547);r(15733);const p={sidebar_position:15,title:"Create a Feed"},c=void 0,s={unversionedId:"publisher/create-feed",id:"publisher/create-feed",title:"Create a Feed",description:"Checkout",source:"@site/docs/publisher/create-feed.mdx",sourceDirName:"publisher",slug:"/publisher/create-feed",permalink:"/publisher/create-feed",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Create a Feed"},sidebar:"publisher",previous:{title:"My Feeds",permalink:"/publisher/my-feeds"},next:{title:"OracleJob",permalink:"/tasks/"}},d={},u=[{value:"Checkout",id:"checkout",level:2},{value:"Lease",id:"lease",level:3},{value:"Account Creation",id:"account-creation",level:3}],h={toc:u},m="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"checkout"},"Checkout"),(0,n.kt)("p",null,"During checkout, the publisher will create the necessary accounts for your data\nfeed."),(0,n.kt)("h3",{id:"lease"},"Lease"),(0,n.kt)(i.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,n.kt)(i.ZP,{item:!0,md:5,sm:12,mdxType:"Grid"},(0,n.kt)("b",null,(0,n.kt)("u",null,"Automatic Updates")),(0,n.kt)(l.Z,{mdxType:"Typography"},"The ",(0,n.kt)("i",null,"Enable automatic updates")," checkbox determines whether your data feed will be added to a crank. A crank allows data feeds to be updated at regular intervals. Event based feeds should uncheck this box."),(0,n.kt)("br",null),(0,n.kt)("b",null,(0,n.kt)("u",null,"Update Interval")),(0,n.kt)(l.Z,{mdxType:"Typography"},"The update interval lets you configure how often and how long a data feed should be updated for. This derives the total cost deposited into the lease contract escrow account, which is used to fund oracles each time a feed is updated. You can extend or terminate a lease at anytime."),(0,n.kt)("br",null)),(0,n.kt)(i.ZP,{item:!0,md:6,mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/publisher/Lease_Contract_Modal.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:5},mdxType:"MarkdownImage"}))),(0,n.kt)("h3",{id:"account-creation"},"Account Creation"),(0,n.kt)(i.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,n.kt)(i.ZP,{item:!0,md:6,order:{xs:2,md:1},mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/publisher/Account_Creation.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,n.kt)(i.ZP,{item:!0,md:6,order:{xs:1,md:2},mdxType:"Grid"},(0,n.kt)(l.Z,{mdxType:"Typography"},"The ",(0,n.kt)("i",null,"Account Creation")," modal gives you a summary of your balance changes before any on-chain transactions occur. Once you have verified the total cost, hit ",(0,n.kt)("i",null,"Create Feed")," to submit the transactions."),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Typography"},"After the accounts have been created, you will be redirected to the My Feeds page to view your newly created data feeds."),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Typography"},"By default, data feeds are added to the permissionless queue, where they can begin updating immediately. Data feeds can be upgraded to the permissioned queue by submitting a request to the Switchboard DAO."))))}y.isMDXComponent=!0}}]);