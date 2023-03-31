"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72206],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35371:(e,t,n)=>{var r=n(68001);t.Z=void 0;var o=r(n(28627)),l=n(20264),a=(0,o.default)((0,l.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=a},94731:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(92897),o=n(45675),l=n(49231),a=n(19841),i=n(75965),s=n(32301),d=n(10803),u=n(56133),c=n(32268),p=n(46568),m=n(92899),b=n(1274),k=n(7523);function v(e){return(0,k.Z)("MuiButton",e)}const h=(0,b.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const y=l.createContext({});var g=n(20264);const x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,u.ZP)(p.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,m.Z)(n.color)}`],t[`size${(0,m.Z)(n.size)}`],t[`${n.variant}Size${(0,m.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,r;return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${h.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${h.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},f(e)))),z=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},f(e)))),Z=l.forwardRef((function(e,t){const n=l.useContext(y),d=(0,i.Z)(n,e),u=(0,c.Z)({props:d,name:"MuiButton"}),{children:p,color:b="primary",component:k="button",className:h,disabled:f=!1,disableElevation:Z=!1,disableFocusRipple:C=!1,endIcon:P,focusVisibleClassName:E,fullWidth:T=!1,size:O="medium",startIcon:I,type:$,variant:R="text"}=u,K=(0,r.Z)(u,x),M=(0,o.Z)({},u,{color:b,component:k,disabled:f,disableElevation:Z,disableFocusRipple:C,fullWidth:T,size:O,type:$,variant:R}),j=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:l,variant:a,classes:i}=e,d={root:["root",a,`${a}${(0,m.Z)(t)}`,`size${(0,m.Z)(l)}`,`${a}Size${(0,m.Z)(l)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(l)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(l)}`]},u=(0,s.Z)(d,v,i);return(0,o.Z)({},i,u)})(M),B=I&&(0,g.jsx)(w,{className:j.startIcon,ownerState:M,children:I}),F=P&&(0,g.jsx)(z,{className:j.endIcon,ownerState:M,children:P});return(0,g.jsxs)(S,(0,o.Z)({ownerState:M,className:(0,a.Z)(n.className,j.root,h),component:k,disabled:f,focusRipple:!C,focusVisibleClassName:(0,a.Z)(j.focusVisible,E),ref:t,type:$},K,{classes:j,children:[B,p,F]}))}))},49675:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(69787),o=n(94731),l=n(69681),a=n(35371),i=n(49231);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return i.createElement(r.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(o.Z,{variant:"text",size:"small",startIcon:i.createElement(a.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},i.createElement(l.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},44428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(48041),o=(n(49231),n(54852)),l=n(49675);const a={sidebar_position:20},i="Testnet",s={unversionedId:"coredao/program/testnet",id:"coredao/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/coredao/program/testnet.mdx",sourceDirName:"coredao/program",slug:"/coredao/program/testnet",permalink:"/coredao/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"coredao",previous:{title:"Mainnet",permalink:"/coredao/program/mainnet"},next:{title:"SDK Overview",permalink:"/coredao/dev/"}},d={},u=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testnet"},"Testnet"),(0,o.kt)("h2",{id:"program-id"},"Program ID"),(0,o.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Testnet"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Program ID")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"0xe9F5Ecb00BC437F061DF59d899F00f260740dC48",mdxType:"PublicKeyButton"}))))),(0,o.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,o.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,o.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Public Keys"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Oracle Queue")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Authority")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Mint")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Crank #1")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("div",{className:"centeredText"},(0,o.kt)("b",null,"Testnet Permissioned Queue Settings")))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("table",{className:"table_no_border"},(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"unpermissionedFeedsEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"slashingEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"reward")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"minStake")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"oracleTimeout")),(0,o.kt)("td",null))))))),(0,o.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,o.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,o.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Public Keys"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Oracle Queue")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Authority")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Mint")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Crank #1")),(0,o.kt)("td",null,(0,o.kt)(l.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("div",{className:"centeredText"},(0,o.kt)("b",null,"Testnet Permissionless Queue Settings")))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("table",{className:"table_no_border"},(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"unpermissionedFeedsEnabled")),(0,o.kt)("td",null,"True")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"slashingEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"reward")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"minStake")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"oracleTimeout")),(0,o.kt)("td",null))))))))}m.isMDXComponent=!0}}]);