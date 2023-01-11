"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(83117),o=(n(67294),n(3905));const a={title:"Index"},p=void 0,i={unversionedId:"dev/cli/aptos/print/index",id:"dev/cli/aptos/print/index",title:"Index",description:"print an aptos account",source:"@site/docs/dev/cli/aptos/print/index.md",sourceDirName:"dev/cli/aptos/print",slug:"/dev/cli/aptos/print/",permalink:"/dev/cli/aptos/print/",draft:!1,tags:[],version:"current",frontMatter:{title:"Index"}},c={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"print an aptos account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos print [ACCOUNTTYPE] [ADDRESS] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId\n    <value>] [-u <value>] [--json]\n\nARGUMENTS\n  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job|state) account type to print\n  ADDRESS      HexString address of the account to print\n\nFLAGS\n  -h, --help            Show CLI help.\n  -s, --silent          suppress cli prompts\n  -u, --rpcUrl=<value>  alternate RPC url\n  -v, --verbose         log everything\n  --networkId=<option>  [default: testnet] Aptos network to connect to\n                        <options: devnet|testnet|mainnet>\n  --programId=<value>   Switchboard programId on the selected Aptos network\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  print an aptos account\n\nALIASES\n  $ sbv2 aptos print\n")))}u.isMDXComponent=!0}}]);