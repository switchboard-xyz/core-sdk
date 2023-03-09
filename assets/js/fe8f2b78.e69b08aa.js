"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95981],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,v=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(48041),a=(n(49231),n(54852));const o={title:"Create"},i=void 0,l={unversionedId:"dev/cli/aptos/job/create",id:"dev/cli/aptos/job/create",title:"Create",description:"create a new job",source:"@site/docs/dev/cli/aptos/job/create.md",sourceDirName:"dev/cli/aptos/job",slug:"/dev/cli/aptos/job/create",permalink:"/dev/cli/aptos/job/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Queue",permalink:"/dev/cli/aptos/create/queue"},next:{title:"Crank",permalink:"/dev/cli/aptos/list/crank"}},c={},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new job"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos job create [QUEUEHEXSTRING] [JOBDEFINITION] --keypair <value> [-h] [-v] [-s] [--networkId\n    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name\n    <value>] [--metadata <value>] [--new] [--weight <value>]\n\nARGUMENTS\n  QUEUEHEXSTRING  HexString address of the queue\n  JOBDEFINITION   filesystem path to job definition\n\nFLAGS\n  -a, --authority=<value>  alternate named account that will be the authority for the job account\n  -h, --help               Show CLI help.\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file\n  --metadata=<value>       metadata of the job for easier identification\n  --name=<value>           name of the job for easier identification\n  --networkId=<option>     [default: testnet] Aptos network to connect to\n                           <options: devnet|testnet|mainnet>\n  --new                    create account at new AptosAccount with authority set to --account\n  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                           load. If none provided, default will be used\n  --programId=<value>      Switchboard programId on the selected Aptos network\n  --weight=<value>         [default: 1] job weight to assign\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new job\n\nALIASES\n  $ sbv2 aptos create job\n")))}d.isMDXComponent=!0}}]);