"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44354],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,d=p["".concat(u,".").concat(g)]||p[g]||f[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(48041),a=(n(49231),n(54852));const o={title:"Transfer"},i=void 0,l={unversionedId:"dev/cli/solana/aggregator/transfer",id:"dev/cli/solana/aggregator/transfer",title:"Transfer",description:"transfer an aggregator to a new queue",source:"@site/docs/dev/cli/solana/aggregator/transfer.md",sourceDirName:"dev/cli/solana/aggregator",slug:"/dev/cli/solana/aggregator/transfer",permalink:"/dev/cli/solana/aggregator/transfer",draft:!1,tags:[],version:"current",frontMatter:{title:"Transfer"},sidebar:"dev",previous:{title:"Set",permalink:"/dev/cli/solana/aggregator/set"},next:{title:"Update",permalink:"/dev/cli/solana/aggregator/update"}},u={},s=[],c={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"transfer an aggregator to a new queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana aggregator transfer [AGGREGATORKEY] --newQueue <value> [-h] [-v] [-s] [--mainnetBeta | --cluster\n    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--newCrank <value>]\n    [--loadAmount <value>] [--enable] [--queueAuthority <value>] [--force]\n\nARGUMENTS\n  AGGREGATORKEY  public key of the aggregator account\n\nFLAGS\n  -a, --authority=<value>   alternate keypair that is the authority for the aggregator\n  -h, --help                Show CLI help.\n  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no\n                            alternate authority provided\n  -s, --silent              suppress cli prompts\n  -u, --rpcUrl=<value>      alternate RPC url\n  -v, --verbose             log everything\n  --cluster=<option>        the solana cluster to connect to\n                            <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>     [default: confirmed] transaction commitment level to use\n                            <options: confirmed|finalized|processed>\n  --enable                  enable permissions on the new queue\n  --force                   skip permission checks\n  --ledger                  enable ledger support\n  --ledgerPath=<value>      HID path to the ledger\n  --loadAmount=<value>      [default: 0.0] amount of funds to load into the new lease, in addition to the funds\n                            remaining in the old lease account\n  --mainnetBeta             WARNING: use mainnet-beta solana cluster\n  --newCrank=<value>        publicKey of the crank to transfer to\n  --newQueue=<value>        (required) publicKey of the new queue to transfer to\n  --programId=<value>       alternative Switchboard program ID to interact with\n  --queueAuthority=<value>  alternate keypair that is the authority for the queue. only used if enabling permissions in\n                            one transaction\n\nDESCRIPTION\n  transfer an aggregator to a new queue\n\nEXAMPLES\n  $ sbv2 solana aggregator transfer GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --mainnetBeta --loadAmount 0.1 --newQueue 3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn --newCrank GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd --keypair ~/.config/solana/id.json\n")))}f.isMDXComponent=!0}}]);