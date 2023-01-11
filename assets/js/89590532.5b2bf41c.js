"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54209],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(m,c(c({ref:n},u),{},{components:r})):t.createElement(m,c({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71309:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(83117),a=(r(67294),r(3905));const o={title:"Push"},c=void 0,l={unversionedId:"dev/cli/near/crank/push",id:"dev/cli/near/crank/push",title:"Push",description:"push an aggregator onto the crank",source:"@site/docs/dev/cli/near/crank/push.md",sourceDirName:"dev/cli/near/crank",slug:"/dev/cli/near/crank/push",permalink:"/dev/cli/near/crank/push",draft:!1,tags:[],version:"current",frontMatter:{title:"Push"}},i={},s=[],u={toc:s};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"push an aggregator onto the crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near crank push [CRANKADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]\n\nARGUMENTS\n  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --aggregatorAddress=<value>  (required) address of the aggregator in Uint8 or Base58 encoding\n  -h, --help                       Show CLI help.\n  -s, --silent                     suppress cli prompts\n  -u, --rpcUrl=<value>             alternate RPC url\n  -v, --verbose                    log everything\n  --accountName=<value>            (required) Named account to load from your nearCredentialsDir\n  --nearCredentialsDir=<value>     [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                   Defaults to ~/.near-credentials\n  --networkId=<option>             [default: testnet] Near network ID to connect to\n                                   <options: testnet|mainnet|localnet>\n  --programId=<value>              Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  push an aggregator onto the crank\n\nALIASES\n  $ sbv2 near push crank\n")))}p.isMDXComponent=!0}}]);