"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2396],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(48041),a=(n(49231),n(54852));const o={title:"Start"},l=void 0,i={unversionedId:"dev/cli/solana/network/start",id:"dev/cli/solana/network/start",title:"Start",description:"start a switchboard network from a JSON file",source:"@site/docs/dev/cli/solana/network/start.md",sourceDirName:"dev/cli/solana/network",slug:"/dev/cli/solana/network/start",permalink:"/dev/cli/solana/network/start",draft:!1,tags:[],version:"current",frontMatter:{title:"Start"},sidebar:"dev",previous:{title:"Save",permalink:"/dev/cli/solana/network/save"},next:{title:"Create",permalink:"/dev/cli/solana/oracle/create"}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"start a switchboard network from a JSON file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana network start [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]\n    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]\n    [--json] [--configFile <value>] [--schemaFile <value>] [--nodeImage <value>] [--arm] [-t <value>] [--mainnetRpcUrl\n    <value>]\n\nFLAGS\n  -h, --help               Show CLI help.\n  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no\n                           alternate authority provided\n  -s, --silent             suppress docker logging\n  -t, --timeout=<value>    [default: 300] number of seconds before ending the docker process\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --arm                    apple silicon needs to use a docker image for linux/arm64\n  --cluster=<option>       the solana cluster to connect to\n                           <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>    [default: confirmed] transaction commitment level to use\n                           <options: confirmed|finalized|processed>\n  --configFile=<value>\n  --ledger                 enable ledger support\n  --ledgerPath=<value>     HID path to the ledger\n  --mainnetBeta            WARNING: use mainnet-beta solana cluster\n  --mainnetRpcUrl=<value>  [default: https://api.mainnet-beta.solana.com/] Solana mainnet RPC URL to use for the oracle\n                           task runner\n  --nodeImage=<value>      [default: dev-v2-RC_02_24_23_18_43] public key of the oracle to start-up\n  --programId=<value>      alternative Switchboard program ID to interact with\n  --schemaFile=<value>\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  start a switchboard network from a JSON file\n")))}m.isMDXComponent=!0}}]);