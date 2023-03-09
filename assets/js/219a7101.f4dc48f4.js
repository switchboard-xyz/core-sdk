"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1832],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,v=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(48041),a=(n(49231),n(54852));const o={title:"Update"},l=void 0,i={unversionedId:"dev/cli/solana/vrf/update",id:"dev/cli/solana/vrf/update",title:"Update",description:"request a new vrf result from a set of oracles",source:"@site/docs/dev/cli/solana/vrf/update.md",sourceDirName:"dev/cli/solana/vrf",slug:"/dev/cli/solana/vrf/update",permalink:"/dev/cli/solana/vrf/update",draft:!1,tags:[],version:"current",frontMatter:{title:"Update"},sidebar:"dev",previous:{title:"Request",permalink:"/dev/cli/solana/vrf/request"}},c={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"request a new vrf result from a set of oracles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana vrf update [VRFKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u\n    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>\n    --ledger] [--authority <value>]\n\nARGUMENTS\n  VRFKEY  public key of the VRF account\n\nFLAGS\n  -h, --help             Show CLI help.\n  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no\n                         alternate authority provided\n  -s, --silent           suppress cli prompts\n  -u, --rpcUrl=<value>   alternate RPC url\n  -v, --verbose          log everything\n  --authority=<value>    alternative keypair that is the VRF authority\n  --cluster=<option>     the solana cluster to connect to\n                         <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>  [default: confirmed] transaction commitment level to use\n                         <options: confirmed|finalized|processed>\n  --ledger               enable ledger support\n  --ledgerPath=<value>   HID path to the ledger\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n  --programId=<value>    alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  request a new vrf result from a set of oracles\n\nALIASES\n  $ sbv2 solana vrf update\n  $ sbv2 solana vrf open-round\n\nEXAMPLES\n  $ sbv2 solana vrf request\n")))}f.isMDXComponent=!0}}]);