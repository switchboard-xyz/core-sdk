"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9643],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,u(u({ref:r},s),{},{components:t})):n.createElement(f,u({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71373:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(83117),a=(t(67294),t(3905));const o={title:"Queue"},u=void 0,l={unversionedId:"dev/cli/near/create/queue",id:"dev/cli/near/create/queue",title:"Queue",description:"create a new oracle queue",source:"@site/docs/dev/cli/near/create/queue.md",sourceDirName:"dev/cli/near/create",slug:"/dev/cli/near/create/queue",permalink:"/sbv2-core/dev/cli/near/create/queue",draft:!1,tags:[],version:"current",frontMatter:{title:"Queue"},sidebar:"dev",previous:{title:"Oracle Permission",permalink:"/sbv2-core/dev/cli/near/create/oracle_permission"},next:{title:"Create",permalink:"/sbv2-core/dev/cli/near/escrow/create"}},i={},c=[],s={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new oracle queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near create queue --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|betanet|localnet]\n    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata\n    <value>] [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled]\n    [--unpermissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers]\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the queue\n  -h, --help                    Show CLI help.\n  -r, --reward=<value>          oracle rewards for successfully responding to an update request\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --enableBufferRelayers        enable oracles to fulfill buffer relayer requests\n  --metadata=<value>            metadata of the queue for easier identification\n  --minStake=<value>            minimum stake required by an oracle to join the queue\n  --name=<value>                name of the queue for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --oracleTimeout=<value>       [default: 180] number of oracles to add to the queue\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n  --queueSize=<value>           [default: 100] maximum number of oracles the queue can support\n  --slashingEnabled             permit slashing malicous oracles\n  --unpermissionedFeeds         permit unpermissioned feeds\n  --unpermissionedVrf           permit unpermissioned VRF accounts\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new oracle queue\n\nALIASES\n  $ sbv2 near create queue\n")))}p.isMDXComponent=!0}}]);