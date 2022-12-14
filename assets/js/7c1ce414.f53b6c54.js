"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2126],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(83117),r=(t(67294),t(3905));const o={title:"Up"},l=void 0,i={unversionedId:"dev/cli/solana/localnet/up",id:"dev/cli/solana/localnet/up",title:"Up",description:"start a local solana validator with a switchboard environment and oracle running alongside it",source:"@site/docs/dev/cli/solana/localnet/up.md",sourceDirName:"dev/cli/solana/localnet",slug:"/dev/cli/solana/localnet/up",permalink:"/dev/cli/solana/localnet/up",draft:!1,tags:[],version:"current",frontMatter:{title:"Up"},sidebar:"dev",previous:{title:"Env",permalink:"/dev/cli/solana/localnet/env"},next:{title:"Create",permalink:"/dev/cli/solana/network/create"}},s={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"start a local solana validator with a switchboard environment and oracle running alongside it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana localnet up [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]\n    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]\n    [--oracleStakingWalletKeypair <value> --queueKeypair <value>] [--nodeImage <value>] [--arm] [-t <value>] [--reward\n    <value>] [--minStake <value>] [--oracleTimeout <value>] [--slashingEnabled] [--permissionedFeeds]\n    [--unpermissionedVrf] [--enableBufferRelayers]\n\nFLAGS\n  -h, --help                            Show CLI help.\n  -k, --keypair=<value>                 keypair that will pay for onchain transactions. defaults to new account\n                                        authority if no alternate authority provided\n  -s, --silent                          suppress docker logging\n  -t, --timeout=<value>                 [default: 120] number of seconds before ending the docker process\n  -u, --rpcUrl=<value>                  alternate RPC url\n  -v, --verbose                         log everything\n  --arm                                 apple silicon needs to use a docker image for linux/arm64\n  --cluster=<option>                    the solana cluster to connect to\n                                        <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>                 [default: confirmed] transaction commitment level to use\n                                        <options: confirmed|finalized|processed>\n  --enableBufferRelayers                enabling this setting will allow buffer relayer accounts to call openRound.\n  --ledger                              enable ledger support\n  --ledgerPath=<value>                  HID path to the ledger\n  --mainnetBeta                         WARNING: use mainnet-beta solana cluster\n  --minStake=<value>                    [default: 0] the reward payed out to oracles for responding to an update request\n                                        on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking wallet before\n                                        heartbeating\n  --nodeImage=<value>                   [default: dev-v2-RC_11_10_22__19_19] public key of the oracle to start-up\n  --oracleStakingWalletKeypair=<value>  keypair to use for the oracle staking wallet. Using a static staking wallet with\n                                        the same queue will produce the same oracle pubkey each time.\n  --oracleTimeout=<value>               [default: 180] time period (in seconds) we should remove an oracle after if no\n                                        response\n  --permissionedFeeds                   enabling this setting means data feeds need explicit permission to join the\n                                        queue.\n  --programId=<value>                   alternative Switchboard program ID to interact with\n  --queueKeypair=<value>                keypair to use for the oracle queue account. This will be the account's\n                                        publicKey\n  --reward=<value>                      [default: 0] the reward payed out to oracles for responding to an update request\n                                        on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would\n                                        deduct (4 * 0.0000075) wSOL from an aggregators lease each round.\n  --slashingEnabled                     whether slashing is enabled on this queue.\n  --unpermissionedVrf                   enabling this setting means data feeds do not need explicit permission to\n                                        request VRF proofs and verifications from this queue.\n\nDESCRIPTION\n  start a local solana validator with a switchboard environment and oracle running alongside it\n")))}d.isMDXComponent=!0}}]);