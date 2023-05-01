"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97523],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96148:(e,t,n)=>{var r=n(68001);t.Z=void 0;var a=r(n(44967)),o=n(20264),l=(0,a.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=l},62350:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(79741),a=n(27567),o=n(97530),l=n(49231);const i=e=>{const{colorMode:t}=(0,a.I)();let n=(0,o.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),i="inherit";e.lightBg&&"dark"!==t&&(i=e.lightBg),e.darkBg&&"dark"===t&&(i=e.darkBg);let s={};return e.sx&&(s={backgroundColor:i,m:"auto",display:"flex",...s,...e.sx}),l.createElement(r.Z,{component:"img",sx:s,src:n})}},44940:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(86543),a=n(92897),o=n(45675),l=n(49231),i=n(19841),s=n(75965),d=n(32301),c=n(81937),u=n(3396),p=n(7206),b=n(27982),m=n(2182),k=n(1274),v=n(7523);function f(e){return(0,v.Z)("MuiButton",e)}const h=(0,k.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const g=l.createContext({});var y=n(20264);const x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,u.ZP)(b.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,m.Z)(n.color)}`],t[`size${(0,m.Z)(n.size)}`],t[`${n.variant}Size${(0,m.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,r;return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${h.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${h.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),Z=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e)))),C=l.forwardRef((function(e,t){const n=l.useContext(g),r=(0,s.Z)(n,e),c=(0,p.Z)({props:r,name:"MuiButton"}),{children:u,color:b="primary",component:k="button",className:v,disabled:h=!1,disableElevation:S=!1,disableFocusRipple:C=!1,endIcon:E,focusVisibleClassName:O,fullWidth:P=!1,size:I="medium",startIcon:T,type:$,variant:M="text"}=c,R=(0,a.Z)(c,x),_=(0,o.Z)({},c,{color:b,component:k,disabled:h,disableElevation:S,disableFocusRipple:C,fullWidth:P,size:I,type:$,variant:M}),j=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:a,variant:l,classes:i}=e,s={root:["root",l,`${l}${(0,m.Z)(t)}`,`size${(0,m.Z)(a)}`,`${l}Size${(0,m.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(a)}`]},c=(0,d.Z)(s,f,i);return(0,o.Z)({},i,c)})(_),B=T&&(0,y.jsx)(z,{className:j.startIcon,ownerState:_,children:T}),N=E&&(0,y.jsx)(Z,{className:j.endIcon,ownerState:_,children:E});return(0,y.jsxs)(w,(0,o.Z)({ownerState:_,className:(0,i.Z)(n.className,j.root,v),component:k,disabled:h,focusRipple:!C,focusVisibleClassName:(0,i.Z)(j.focusVisible,O),ref:t,type:$},R,{classes:j,children:[B,u,N]}))}));var E=n(3411),O=n(96148);const P=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(r.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(C,{variant:"text",size:"small",startIcon:l.createElement(O.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(E.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},47045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(48041),a=(n(49231),n(54852)),o=(n(62350),n(86583),n(44940));const l={sidebar_position:10},i="Mainnet",s={unversionedId:"aptos/program/mainnet",id:"aptos/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/aptos/program/mainnet.mdx",sourceDirName:"aptos/program",slug:"/aptos/program/mainnet",permalink:"/aptos/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"aptos",previous:{title:"Overview",permalink:"/aptos/"},next:{title:"Testnet",permalink:"/aptos/program/testnet"}},d={},c=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],u={toc:c},p="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Account"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"State Address")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,a.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Addresses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"0x11fbd91e4a718066891f37958f0b68d10e720f2edf8d57854fb20c299a119a8c",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"0xbc9576fedda51d33e8129b5f122ef4707c2079dfb11cd836e86adcb168cbd473",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"open_round_reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"save_confirmation_reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"rewasave_rewardrd")),(0,a.kt)("td",null,"0"))))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Addresses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"0xc887072e37f17f9cc7afc0a00e2b283775d703c610acca3997cb26e74bc53f3b",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(o.Z,{publicKey:"0x7d5ced8797f212c2eeb36486d5e5f30c1043530a340fe9debf4fc958559f3ec4",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"open_round_reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"save_confirmation_reward")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"save_reward")),(0,a.kt)("td",null,"0"))))))))}b.isMDXComponent=!0}}]);