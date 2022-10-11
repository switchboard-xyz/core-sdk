"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,v=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={title:"Up"},l=void 0,c={unversionedId:"dev/cli/aptos/oracle/up",id:"dev/cli/aptos/oracle/up",title:"Up",description:"start an aptos oracle in docker",source:"@site/docs/dev/cli/aptos/oracle/up.md",sourceDirName:"dev/cli/aptos/oracle",slug:"/dev/cli/aptos/oracle/up",permalink:"/dev/cli/aptos/oracle/up",draft:!1,tags:[],version:"current",frontMatter:{title:"Up"},sidebar:"dev",previous:{title:"Start",permalink:"/dev/cli/aptos/oracle/start"},next:{title:"Crank",permalink:"/dev/cli/aptos/pop/crank"}},i={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"start an aptos oracle in docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos oracle up [ORACLEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId\n    <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [-a <value>]\n\nARGUMENTS\n  ORACLEHEXSTRING  HexString address of the oracle\n\nFLAGS\n  -a, --authority=<value>  alternate named account that is the authority for the oracle\n  -h, --help               Show CLI help.\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file\n  --networkId=<option>     [default: devnet] Aptos network to connect to\n                           <options: devnet|testnet>\n  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                           load. If none provided, default will be used\n  --programId=<value>      [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard\n                           programId on the selected Aptos network\n  --stateAddress=<value>   [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard\n                           state address\n\nDESCRIPTION\n  start an aptos oracle in docker\n\nALIASES\n  $ sbv2 aptos oracle start\n")))}u.isMDXComponent=!0}}]);