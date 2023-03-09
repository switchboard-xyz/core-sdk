"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50701],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(48041),a=(n(49231),n(54852));const o={title:"Create"},l=void 0,c={unversionedId:"dev/cli/solana/oracle/create",id:"dev/cli/solana/oracle/create",title:"Create",description:"create a new oracle account for a given queue",source:"@site/docs/dev/cli/solana/oracle/create.md",sourceDirName:"dev/cli/solana/oracle",slug:"/dev/cli/solana/oracle/create",permalink:"/dev/cli/solana/oracle/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Start",permalink:"/dev/cli/solana/network/start"},next:{title:"Print",permalink:"/dev/cli/solana/oracle/print"}},i={},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new oracle account for a given queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana oracle create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]\n    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>\n    --ledger] [--json] [-n <value>] [-a <value>] [--enable] [--queueAuthority <value>] [--stakeAmount <value>]\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue account\n\nFLAGS\n  -a, --authority=<value>   keypair to delegate authority to for managing the oracle account\n  -h, --help                Show CLI help.\n  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no\n                            alternate authority provided\n  -n, --name=<value>        name of the oracle for easier identification\n  -s, --silent              suppress cli prompts\n  -u, --rpcUrl=<value>      alternate RPC url\n  -v, --verbose             log everything\n  --cluster=<option>        the solana cluster to connect to\n                            <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>     [default: confirmed] transaction commitment level to use\n                            <options: confirmed|finalized|processed>\n  --enable                  enable oracle heartbeat permissions\n  --ledger                  enable ledger support\n  --ledgerPath=<value>      HID path to the ledger\n  --mainnetBeta             WARNING: use mainnet-beta solana cluster\n  --programId=<value>       alternative Switchboard program ID to interact with\n  --queueAuthority=<value>  alternative keypair to use for queue authority\n  --stakeAmount=<value>     token amount to load into the oracle's staking wallet.\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new oracle account for a given queue\n\nEXAMPLES\n  $ sbv2 solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1\n")))}m.isMDXComponent=!0}}]);