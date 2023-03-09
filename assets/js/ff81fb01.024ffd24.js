"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79060],{54852:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(v,l(l({ref:r},s),{},{components:t})):n.createElement(v,l({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68638:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(48041),a=(t(49231),t(54852));const o={title:"UP"},l=void 0,c={unversionedId:"dev/cli/near/oracle/up",id:"dev/cli/near/oracle/up",title:"UP",description:"start a near docker oracle",source:"@site/docs/dev/cli/near/oracle/up.md",sourceDirName:"dev/cli/near/oracle",slug:"/dev/cli/near/oracle/up",permalink:"/dev/cli/near/oracle/up",draft:!1,tags:[],version:"current",frontMatter:{title:"UP"},sidebar:"dev",previous:{title:"Escrow",permalink:"/dev/cli/near/oracle/escrow"},next:{title:"Create",permalink:"/dev/cli/near/permission/create"}},i={},u=[],s={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"start a near docker oracle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near oracle up [ORACLEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]\n    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-d <value>] [--nodeImage <value>]\n    [--arm]\n\nARGUMENTS\n  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding\n\nFLAGS\n  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress docker logging\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --arm                         apple silicon needs to use a docker image for linux/arm64\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --nodeImage=<value>           [default: dev-v2-RC_02_24_23_18_43] public key of the oracle to start-up\n  --programId=<value>           Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  start a near docker oracle\n")))}d.isMDXComponent=!0}}]);