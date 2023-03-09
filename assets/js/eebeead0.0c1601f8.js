"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78810],{54852:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,v=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(v,c(c({ref:r},p),{},{components:t})):n.createElement(v,c({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(48041),a=(t(49231),t(54852));const o={title:"Escrow"},c=void 0,l={unversionedId:"dev/cli/near/oracle/escrow",id:"dev/cli/near/oracle/escrow",title:"Escrow",description:"view an aggregators escrow state",source:"@site/docs/dev/cli/near/oracle/escrow.md",sourceDirName:"dev/cli/near/oracle",slug:"/dev/cli/near/oracle/escrow",permalink:"/dev/cli/near/oracle/escrow",draft:!1,tags:[],version:"current",frontMatter:{title:"Escrow"},sidebar:"dev",previous:{title:"Create",permalink:"/dev/cli/near/oracle/create"},next:{title:"UP",permalink:"/dev/cli/near/oracle/up"}},i={},s=[],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"view an aggregators escrow state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near oracle escrow [ORACLEADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]\n    [-u <value>] [--nearCredentialsDir <value>] [--json]\n\nARGUMENTS\n  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding\n\nFLAGS\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  view an aggregators escrow state\n")))}d.isMDXComponent=!0}}]);