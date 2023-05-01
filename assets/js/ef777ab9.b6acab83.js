"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3318],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96148:(e,t,n)=>{var r=n(68001);t.Z=void 0;var o=r(n(44967)),a=n(20264),l=(0,o.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=l},44940:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(86543),o=n(92897),a=n(45675),l=n(49231),i=n(19841),s=n(75965),d=n(32301),c=n(81937),u=n(3396),p=n(7206),m=n(27982),b=n(2182),v=n(1274),h=n(7523);function k(e){return(0,h.Z)("MuiButton",e)}const g=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const y=l.createContext({});var f=n(20264);const x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,u.ZP)(m.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,b.Z)(n.color)}`],t[`size${(0,b.Z)(n.size)}`],t[`${n.variant}Size${(0,b.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,r;return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,b.Z)(n.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,b.Z)(n.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e)))),E=l.forwardRef((function(e,t){const n=l.useContext(y),r=(0,s.Z)(n,e),c=(0,p.Z)({props:r,name:"MuiButton"}),{children:u,color:m="primary",component:v="button",className:h,disabled:g=!1,disableElevation:S=!1,disableFocusRipple:E=!1,endIcon:Z,focusVisibleClassName:O,fullWidth:P=!1,size:I="medium",startIcon:T,type:$,variant:M="text"}=c,R=(0,o.Z)(c,x),j=(0,a.Z)({},c,{color:m,component:v,disabled:g,disableElevation:S,disableFocusRipple:E,fullWidth:P,size:I,type:$,variant:M}),N=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:l,classes:i}=e,s={root:["root",l,`${l}${(0,b.Z)(t)}`,`size${(0,b.Z)(o)}`,`${l}Size${(0,b.Z)(o)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,b.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,b.Z)(o)}`]},c=(0,d.Z)(s,k,i);return(0,a.Z)({},i,c)})(j),D=T&&(0,f.jsx)(z,{className:N.startIcon,ownerState:j,children:T}),F=Z&&(0,f.jsx)(C,{className:N.endIcon,ownerState:j,children:Z});return(0,f.jsxs)(w,(0,a.Z)({ownerState:j,className:(0,i.Z)(n.className,N.root,h),component:v,disabled:g,focusRipple:!E,focusVisibleClassName:(0,i.Z)(N.focusVisible,O),ref:t,type:$},R,{classes:N,children:[D,u,F]}))}));var Z=n(3411),O=n(96148);const P=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(r.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(E,{variant:"text",size:"small",startIcon:l.createElement(O.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(Z.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},51224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(48041),o=(n(49231),n(54852)),a=n(44940);const l={sidebar_position:10},i="Mainnet",s={unversionedId:"coredao/program/mainnet",id:"coredao/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/coredao/program/mainnet.mdx",sourceDirName:"coredao/program",slug:"/coredao/program/mainnet",permalink:"/coredao/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"coredao",previous:{title:"Overview",permalink:"/coredao/"},next:{title:"Testnet",permalink:"/coredao/program/testnet"}},d={},c=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mainnet"},"Mainnet"),(0,o.kt)("h2",{id:"program-id"},"Program ID"),(0,o.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Mainnet"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Program ID")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"0x73d6C66874e570f058834cAA666b2c352F1C792D",mdxType:"PublicKeyButton"}))))),(0,o.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,o.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,o.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Public Keys"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Oracle Queue")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"0x1e373Ac0a299E6CCfE6bd333025E5Ebef9Eca2Dd",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("div",{className:"centeredText"},(0,o.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("table",{className:"table_no_border"},(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"unpermissionedFeedsEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"slashingEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"reward")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"minStake")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"oracleTimeout")),(0,o.kt)("td",null))))))),(0,o.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,o.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,o.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Public Keys"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Oracle Queue")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"0x628D9A4109FD1B94348b7866923A4b7aae3D61c6",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("div",{className:"centeredText"},(0,o.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("table",{className:"table_no_border"},(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"unpermissionedFeedsEnabled")),(0,o.kt)("td",null,"True")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"slashingEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"reward")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"minStake")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"oracleTimeout")),(0,o.kt)("td",null))))))))}m.isMDXComponent=!0}}]);