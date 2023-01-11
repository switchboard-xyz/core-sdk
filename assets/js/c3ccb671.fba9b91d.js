"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3937],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(m,c(c({ref:n},s),{},{components:r})):t.createElement(m,c({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10366:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=r(83117),a=(r(67294),r(3905));const o={title:"Crank"},c=void 0,i={unversionedId:"dev/cli/near/create/crank",id:"dev/cli/near/create/crank",title:"Crank",description:"create a new crank",source:"@site/docs/dev/cli/near/create/crank.md",sourceDirName:"dev/cli/near/create",slug:"/dev/cli/near/create/crank",permalink:"/dev/cli/near/create/crank",draft:!1,tags:[],version:"current",frontMatter:{title:"Crank"}},l={},u=[],s={toc:u};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near create crank [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]\n    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--name <value>] [--metadata <value>]\n    [--maxRows <value>]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --maxRows=<value>             [default: 100] maximum number of rows on the crank\n  --metadata=<value>            metadata of the crank for easier identification\n  --name=<value>                name of the crank for easier identification\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new crank\n\nALIASES\n  $ sbv2 near create crank\n")))}p.isMDXComponent=!0}}]);