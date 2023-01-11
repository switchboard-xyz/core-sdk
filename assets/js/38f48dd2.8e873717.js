"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56213],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?t.createElement(g,c(c({ref:r},u),{},{components:n})):t.createElement(g,c({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43833:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(83117),a=(n(67294),n(3905));const o={title:"Crank"},c=void 0,l={unversionedId:"cli/near/push/crank",id:"cli/near/push/crank",title:"Crank",description:"push an aggregator onto the crank",source:"@site/docs/cli/near/push/crank.md",sourceDirName:"cli/near/push",slug:"/cli/near/push/crank",permalink:"/cli/near/push/crank",draft:!1,tags:[],version:"current",frontMatter:{title:"Crank"},sidebar:"cli",previous:{title:"Escrow",permalink:"/cli/near/print/escrow"},next:{title:"Aggregators",permalink:"/cli/near/queue/aggregators"}},i={},s=[],u={toc:s};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"push an aggregator onto the crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near push crank [CRANKADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]\n\nARGUMENTS\n  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --aggregatorAddress=<value>  (required) address of the aggregator in Uint8 or Base58 encoding\n  -h, --help                       Show CLI help.\n  -s, --silent                     suppress cli prompts\n  -u, --rpcUrl=<value>             alternate RPC url\n  -v, --verbose                    log everything\n  --accountName=<value>            (required) Named account to load from your nearCredentialsDir\n  --nearCredentialsDir=<value>     [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                   Defaults to ~/.near-credentials\n  --networkId=<option>             [default: testnet] Near network ID to connect to\n                                   <options: testnet|mainnet|localnet>\n  --programId=<value>              Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  push an aggregator onto the crank\n\nALIASES\n  $ sbv2 near push crank\n")))}p.isMDXComponent=!0}}]);