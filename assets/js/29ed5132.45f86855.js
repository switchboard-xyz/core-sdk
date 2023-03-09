"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16334],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(v,p(p({ref:t},s),{},{components:r})):n.createElement(v,p({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(48041),a=(r(49231),r(54852));const o={title:"Push"},p=void 0,i={unversionedId:"dev/cli/aptos/crank/push",id:"dev/cli/aptos/crank/push",title:"Push",description:"push an aggregator onto the crank",source:"@site/docs/dev/cli/aptos/crank/push.md",sourceDirName:"dev/cli/aptos/crank",slug:"/dev/cli/aptos/crank/push",permalink:"/dev/cli/aptos/crank/push",draft:!1,tags:[],version:"current",frontMatter:{title:"Push"},sidebar:"dev",previous:{title:"Pop",permalink:"/dev/cli/aptos/crank/pop"},next:{title:"Aggregator",permalink:"/dev/cli/aptos/create/aggregator"}},l={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"push an aggregator onto the crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos crank push [CRANKHEXSTRING] --keypair <value> -a <value> [-h] [-v] [-s] [--networkId\n    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json]\n\nARGUMENTS\n  CRANKHEXSTRING  HexString address of the crank\n\nFLAGS\n  -a, --aggregatorHexString=<value>  (required) HexString address of the aggregator\n  -h, --help                         Show CLI help.\n  -s, --silent                       suppress cli prompts\n  -u, --rpcUrl=<value>               alternate RPC url\n  -v, --verbose                      log everything\n  --keypair=<value>                  (required) Path to AptosAccount keypair or config.yaml file\n  --networkId=<option>               [default: testnet] Aptos network to connect to\n                                     <options: devnet|testnet|mainnet>\n  --profileName=<value>              [default: default] If --keypair is pointing to a yaml file, provide an optional\n                                     profile to load. If none provided, default will be used\n  --programId=<value>                Switchboard programId on the selected Aptos network\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  push an aggregator onto the crank\n\nALIASES\n  $ sbv2 aptos push crank\n")))}d.isMDXComponent=!0}}]);