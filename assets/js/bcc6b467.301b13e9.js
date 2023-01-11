"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99566],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>b});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)e=o[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)e=o[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a=l.createContext({}),k=function(t){var n=l.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=k(t.components);return l.createElement(a.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=k(e),b=r,d=p["".concat(a,".").concat(b)]||p[b]||c[b]||o;return e?l.createElement(d,i(i({ref:n},s),{},{components:e})):l.createElement(d,i({ref:n},s))}));function b(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=p;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var k=2;k<o;k++)i[k]=e[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},86602:(t,n,e)=>{e.d(n,{ZP:()=>i});var l=e(83117),r=(e(67294),e(3905));const o={toc:[]};function i(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,l.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - Filesystem Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Local filesystem path to keypair file that will pay for on-chain transactions and is the authority for the oracle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAYER_SECRETS or DOCKER_PAYER_SECRET"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - Docker Secret",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Docker Secret path to keypair file that will pay for on-chain transactions and is the authority for the oracle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Google cloud resource to manage your keypair securely.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AMAZON_PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - AWS ARN path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Amazon web services ARN path of secret.")))))}i.isMDXComponent=!0},1169:(t,n,e)=>{e.d(n,{ZP:()=>i});var l=e(83117),r=(e(67294),e(3905));const o={toc:[]};function i(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,l.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"METRICS_EXPORTER"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - prometheus / gcp / opentelemetry-collector*",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - prometheus",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Dictates which metric suite to aggregate resource metrics, as defined in:",(0,r.kt)("br",null),(0,r.kt)("a",{href:"./monitoring"},"Oracle - Monitoring"),(0,r.kt)("br",null),"*opentelemetry-collector only supports the default endpoint localhost:55681/v1/metric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAGERDUTY_EVENT_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Paging disabled",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Token provided by pagerduty for sending pages about various alerts.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"./monitoring#alerts"},"Oracle - Alerts"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VERBOSE"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Flag (0 or 1)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 0, normal logging",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Set to 1 to increase the level of logging")))))}i.isMDXComponent=!0},88842:(t,n,e)=>{e.d(n,{ZP:()=>i});var l=e(83117),r=(e(67294),e(3905));const o={toc:[]};function i(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,l.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"TASK_RUNNER_SOLANA_RPC"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana mainnet RPC URL to support fulfilling update requests for Switchboard tasks that are reliant on Solana on-chain data.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"NOTE:")," This is not required if CHAIN is set to solana and CLUSTER is mainnet-beta.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GCP_CONFIG_BUCKET"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Looks for configs.json in the current working directory. If not found, no config is loaded.",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Contains API keys for private API endpoints")))))}i.isMDXComponent=!0},13545:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>k,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var l=e(83117),r=(e(67294),e(3905)),o=e(88842),i=e(86602),u=e(1169);const a={sidebar_position:10,slug:"/oracles/aptos",title:"Aptos"},k=void 0,s={unversionedId:"operator/oracle/chains/aptos",id:"operator/oracle/chains/aptos",title:"Aptos",description:"Aptos Config",source:"@site/docs/operator/oracle/chains/aptos.mdx",sourceDirName:"operator/oracle/chains",slug:"/oracles/aptos",permalink:"/oracles/aptos",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/oracles/aptos",title:"Aptos"},sidebar:"operators",previous:{title:"Background",permalink:"/operator/oracle/"},next:{title:"Near",permalink:"/oracles/near"}},c={},p=[{value:"Aptos Config",id:"aptos-config",level:2},{value:"Oracle Config",id:"oracle-config",level:2},{value:"Task Runner Config",id:"task-runner-config",level:2},{value:"Keypair Config",id:"keypair-config",level:2},{value:"Monitoring Config",id:"monitoring-config",level:2}],b={toc:p};function d(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,l.Z)({},b,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'env title="aptos.env"',env:!0,title:'"aptos.env"'},'CHAIN="aptos"\n# Aptos Config\nAPTOS_RPC_URL=""\nAPTOS_PID=""\n# Oracle Config\nAPTOS_ORACLE_KEY=""\nHEARTBEAT_INTERVAL=15\n# Task Runner Config\nTASK_RUNNER_SOLANA_RPC=""\nGCP_CONFIG_BUCKET="" # Optional, for private queues\n# Keypair Config, one-of required\nFS_PAYER_SECRET_PATH=""\nDOCKER_PAYER_SECRET=""\nGOOGLE_PAYER_SECRET_PATH=""\nAMAZON_PAYER_SECRET_PATH=""\n# Monitoring Config\nMETRICS_EXPORTER="" # Optional\nPAGERDUTY_EVENT_KEY="" # Optional\nVERBOSE=1 # Optional\n')),(0,r.kt)("h2",{id:"aptos-config"},"Aptos Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"CHAIN"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required to be set to 'aptos'")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - aptos / near / solana*",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - solana",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Dictates which chain to listen for on-chain events",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"APTOS_RPC_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Aptos RPC URL. Must not be rate limited")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"APTOS_PID"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - HexString",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - On-chain address of the deployed Switchboard V2 program")))),(0,r.kt)("h2",{id:"oracle-config"},"Oracle Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"APTOS_ORACLE_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Public Key",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Public key of the oracle account that has been granted permissions to use an oracle queue ",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"HEARTBEAT_INTERVAL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number (seconds)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 30",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Seconds between oracle heartbeats. Queues have different oracle heartbeat requirements. Recommended value is 15")))),(0,r.kt)("h2",{id:"task-runner-config"},"Task Runner Config"),(0,r.kt)(o.ZP,{mdxType:"TaskRunnerEnv"}),(0,r.kt)("h2",{id:"keypair-config"},"Keypair Config"),(0,r.kt)("p",null,"You must provide one of the following environment variables, which is the same\nkeypair that is the authority for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"$ORACLE_KEY")," and will pay for any\non-chain transactions."),(0,r.kt)(i.ZP,{mdxType:"KeypairEnv"}),(0,r.kt)("h2",{id:"monitoring-config"},"Monitoring Config"),(0,r.kt)(u.ZP,{mdxType:"MonitoringEnv"}))}d.isMDXComponent=!0}}]);