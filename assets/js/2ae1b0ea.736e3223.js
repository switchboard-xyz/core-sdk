"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={title:"Queue"},u=void 0,l={unversionedId:"dev/cli/aptos/create/queue",id:"dev/cli/aptos/create/queue",title:"Queue",description:"create a new oracle queue",source:"@site/docs/dev/cli/aptos/create/queue.md",sourceDirName:"dev/cli/aptos/create",slug:"/dev/cli/aptos/create/queue",permalink:"/dev/cli/aptos/create/queue",draft:!1,tags:[],version:"current",frontMatter:{title:"Queue"},sidebar:"dev",previous:{title:"Oracle",permalink:"/dev/cli/aptos/create/oracle"},next:{title:"Create",permalink:"/dev/cli/aptos/job/create"}},i={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new oracle queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos create queue --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]\n    [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--minStake\n    <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled] [--unpermissionedFeeds]\n    [--unpermissionedVrf] [--enableBufferRelayers] [--lockLeaseFunding] [--new]\n\nFLAGS\n  -a, --authority=<value>  alternate account HexString that will be the authority for the queue\n  -h, --help               Show CLI help.\n  -r, --reward=<value>     oracle rewards for successfully responding to an update request\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --enableBufferRelayers   enable oracles to fulfill buffer relayer requests\n  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file\n  --lockLeaseFunding       lock lease funding\n  --metadata=<value>       metadata of the queue for easier identification\n  --minStake=<value>       minimum stake required by an oracle to join the queue\n  --name=<value>           name of the queue for easier identification\n  --networkId=<option>     [default: testnet] Aptos network to connect to\n                           <options: devnet|testnet|mainnet>\n  --new                    create account at new AptosAccount with authority set to --account\n  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue\n  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                           load. If none provided, default will be used\n  --programId=<value>      Switchboard programId on the selected Aptos network\n  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support\n  --slashingEnabled        permit slashing malicous oracles\n  --unpermissionedFeeds    permit unpermissioned feeds\n  --unpermissionedVrf      permit unpermissioned VRF accounts\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new oracle queue\n\nALIASES\n  $ sbv2 aptos create queue\n")))}p.isMDXComponent=!0}}]);