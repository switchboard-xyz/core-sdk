"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=u(r),f=n,y=v["".concat(c,".").concat(f)]||v[f]||p[f]||o;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},41870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(83117),n=(r(67294),r(3905));const o={title:"Create"},i=void 0,l={unversionedId:"dev/cli/solana/vrf/create",id:"dev/cli/solana/vrf/create",title:"Create",description:"create a Switchboard VRF Account",source:"@site/docs/dev/cli/solana/vrf/create.md",sourceDirName:"dev/cli/solana/vrf",slug:"/dev/cli/solana/vrf/create",permalink:"/sbv2-core/dev/cli/solana/vrf/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Set Vrf",permalink:"/sbv2-core/dev/cli/solana/queue/set_vrf"},next:{title:"Create Example",permalink:"/sbv2-core/dev/cli/solana/vrf/create_example"}},c={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"create a Switchboard VRF Account"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-asciidoc"},'USAGE\n  $ sbv2 solana vrf create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--vrfKeypair <value>] [--enable] [--authority <value>]\n    [--queueAuthority <value>] [--callback <value> | --accountMeta <value> | --callbackPid <value> | --ixData <value>]\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue to create VRF account for\n\nFLAGS\n  -h, --help                Show CLI help.\n  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no\n                            alternate authority provided\n  -s, --silent              suppress cli prompts\n  -u, --rpcUrl=<value>      alternate RPC url\n  -v, --verbose             log everything\n  --accountMeta=<value>...  account metas for VRF callback\n  --authority=<value>       alternative keypair to use for VRF authority\n  --callback=<value>        filesystem path to callback json\n  --callbackPid=<value>     callback program ID\n  --commitment=<option>     [default: confirmed] transaction commitment level to use\n                            <options: confirmed|finalized|processed>\n  --enable                  enable vrf permissions\n  --ixData=<value>          serialized instruction data in bytes\n  --mainnetBeta             WARNING: use mainnet-beta solana cluster\n  --programId=<value>       alternative Switchboard program ID to interact with\n  --queueAuthority=<value>  alternative keypair to use for queue authority\n  --vrfKeypair=<value>      filesystem path of existing keypair to use for VRF Account\n\nDESCRIPTION\n  create a Switchboard VRF Account\n\nEXAMPLES\n  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HpQoFL5kxPp2JCFvjsVTvBd7navx4THLefUU68SXAyd6","isSigner": false,"isWritable": true}" -a "{"pubkey": "8VdBtS8ufkXMCa6Yr9E4KVCfX2inVZVwU4KGg2CL1q7P","isSigner": false,"isWritable": false}"\n\n  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority oracle-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HYKi1grticLXPe5vqapUHhm976brwqRob8vqRnWMKWL5","isSigner": false,"isWritable": true}" -a "{"pubkey": "6vG9QLMgSvsfjvSpDxWfZ2MGPYGzEYoBxviLG7cr4go","isSigner": false,"isWritable": false}"\n\n  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callback callback-example.json\n')))}p.isMDXComponent=!0}}]);