"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7818],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(95907),a=(r(49231),r(54852));const o={title:"Add History"},i=void 0,l={unversionedId:"cli/solana/aggregator/add_history",id:"cli/solana/aggregator/add_history",title:"Add History",description:"add a history buffer to an aggregator",source:"@site/docs/cli/solana/aggregator/add_history.md",sourceDirName:"cli/solana/aggregator",slug:"/cli/solana/aggregator/add_history",permalink:"/cli/solana/aggregator/add_history",draft:!1,tags:[],version:"current",frontMatter:{title:"Add History"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"add a history buffer to an aggregator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana aggregator add history [AGGREGATORKEY] --historyLimit <value> [-h] [-v] [-s] [--mainnetBeta | --cluster\n    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--force] [-a <value>]\n\nARGUMENTS\n  AGGREGATORKEY  public key of the aggregator account\n\nFLAGS\n  -a, --authority=<value>  alternate keypair that is the authority for the aggregator\n  -h, --help               Show CLI help.\n  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no\n                           alternate authority provided\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --cluster=<option>       the solana cluster to connect to\n                           <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>    [default: confirmed] transaction commitment level to use\n                           <options: confirmed|finalized|processed>\n  --force                  overwrite an existing history buffer if one already exists\n  --historyLimit=<value>   (required) the number of samples to store before overwriting old samples\n  --ledger                 enable ledger support\n  --ledgerPath=<value>     HID path to the ledger\n  --mainnetBeta            WARNING: use mainnet-beta solana cluster\n  --programId=<value>      alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  add a history buffer to an aggregator\n\nEXAMPLES\n  $ sbv2 solana:aggregator:add:history\n")))}d.isMDXComponent=!0}}]);