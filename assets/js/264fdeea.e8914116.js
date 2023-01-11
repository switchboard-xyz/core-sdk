"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const o={title:"Create"},l=void 0,i={unversionedId:"dev/cli/solana/job/create",id:"dev/cli/solana/job/create",title:"Create",description:"create a job account",source:"@site/docs/dev/cli/solana/job/create.md",sourceDirName:"dev/cli/solana/job",slug:"/dev/cli/solana/job/create",permalink:"/dev/cli/solana/job/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a job account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana job create --jobDefinition <value> [-h] [-v] [-s] [--mainnetBeta | --cluster\n    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--jobKeypair <value>] [-a\n    <value>] [-n <value>]\n\nFLAGS\n  -a, --authority=<value>  alternate keypair that will be the buffer relayer authority\n  -h, --help               Show CLI help.\n  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no\n                           alternate authority provided\n  -n, --name=<value>       name of the buffer account\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --cluster=<option>       the solana cluster to connect to\n                           <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>    [default: confirmed] transaction commitment level to use\n                           <options: confirmed|finalized|processed>\n  --jobDefinition=<value>  (required) filesystem path to job definition\n  --jobKeypair=<value>     keypair to use for the job account. This will be the account's publicKey\n  --ledger                 enable ledger support\n  --ledgerPath=<value>     HID path to the ledger\n  --mainnetBeta            WARNING: use mainnet-beta solana cluster\n  --programId=<value>      alternative Switchboard program ID to interact with\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a job account\n")))}p.isMDXComponent=!0}}]);