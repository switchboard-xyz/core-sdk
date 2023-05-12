"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2190],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(95907),o=(n(49231),n(54852));const a={title:"Job"},i=void 0,c={unversionedId:"cli/aptos/create/job",id:"cli/aptos/create/job",title:"Job",description:"create a new job",source:"@site/docs/cli/aptos/create/job.md",sourceDirName:"cli/aptos/create",slug:"/cli/aptos/create/job",permalink:"/cli/aptos/create/job",draft:!1,tags:[],version:"current",frontMatter:{title:"Job"}},l={},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"create a new job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos create job [QUEUEHEXSTRING] [JOBDEFINITION] --keypair <value> [-h] [-v] [-s] [--networkId\n    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name\n    <value>] [--metadata <value>] [--new] [--weight <value>]\n\nARGUMENTS\n  QUEUEHEXSTRING  HexString address of the queue\n  JOBDEFINITION   filesystem path to job definition\n\nFLAGS\n  -a, --authority=<value>  alternate named account that will be the authority for the job account\n  -h, --help               Show CLI help.\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file\n  --metadata=<value>       metadata of the job for easier identification\n  --name=<value>           name of the job for easier identification\n  --networkId=<option>     [default: testnet] Aptos network to connect to\n                           <options: devnet|testnet|mainnet>\n  --new                    create account at new AptosAccount with authority set to --account\n  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                           load. If none provided, default will be used\n  --programId=<value>      Switchboard programId on the selected Aptos network\n  --weight=<value>         [default: 1] job weight to assign\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new job\n\nALIASES\n  $ sbv2 aptos create job\n")))}f.isMDXComponent=!0}}]);