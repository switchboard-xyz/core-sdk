"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28296],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},66766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(83117),a=(t(67294),t(3905));const o={title:"Aggregator"},l=void 0,i={unversionedId:"cli/near/fund/aggregator",id:"cli/near/fund/aggregator",title:"Aggregator",description:"",source:"@site/docs/cli/near/fund/aggregator.md",sourceDirName:"cli/near/fund",slug:"/cli/near/fund/aggregator",permalink:"/cli/near/fund/aggregator",draft:!1,tags:[],version:"current",frontMatter:{title:"Aggregator"},sidebar:"cli",previous:{title:"Aggregators",permalink:"/cli/near/fetch/aggregators"},next:{title:"Create",permalink:"/cli/near/job/create"}},c={},u=[],s={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near fund aggregator [AGGREGATORADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]\n\nARGUMENTS\n  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --amount=<value>          (required) amount to deposit into the aggregator's lease\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nALIASES\n  $ sbv2 near fund aggregator\n")))}p.isMDXComponent=!0}}]);