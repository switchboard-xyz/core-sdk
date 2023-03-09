"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20833],{54852:(t,n,l)=>{l.d(n,{Zo:()=>s,kt:()=>d});var e=l(49231);function r(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function o(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function a(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){r(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function u(t,n){if(null==t)return{};var l,e,r=function(t,n){if(null==t)return{};var l,e,r={},o=Object.keys(t);for(e=0;e<o.length;e++)l=o[e],n.indexOf(l)>=0||(r[l]=t[l]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)l=o[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=e.createContext({}),k=function(t){var n=e.useContext(i),l=n;return t&&(l="function"==typeof t?t(n):a(a({},n),t)),l},s=function(t){var n=k(t.components);return e.createElement(i.Provider,{value:n},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},b=e.forwardRef((function(t,n){var l=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=k(l),b=r,d=c["".concat(i,".").concat(b)]||c[b]||p[b]||o;return l?e.createElement(d,a(a({ref:n},s),{},{components:l})):e.createElement(d,a({ref:n},s))}));function d(t,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=l.length,a=new Array(o);a[0]=b;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=t,u[c]="string"==typeof t?t:r,a[1]=u;for(var k=2;k<o;k++)a[k]=l[k];return e.createElement.apply(null,a)}return e.createElement.apply(null,l)}b.displayName="MDXCreateElement"},40686:(t,n,l)=>{l.d(n,{ZP:()=>u});var e=l(48041),r=(l(49231),l(54852));const o={toc:[]},a="wrapper";function u(t){let{components:n,...l}=t;return(0,r.kt)(a,(0,e.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - Filesystem Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Local filesystem path to keypair file that will pay for on-chain transactions and is the authority for the oracle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAYER_SECRETS or DOCKER_PAYER_SECRET"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - Docker Secret",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Docker Secret path to keypair file that will pay for on-chain transactions and is the authority for the oracle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Google cloud resource to manage your keypair securely.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AMAZON_PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - AWS ARN path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Amazon web services ARN path of secret.")))))}u.isMDXComponent=!0},33e3:(t,n,l)=>{l.d(n,{ZP:()=>i});var e=l(48041),r=(l(49231),l(54852)),o=l(43939);const a={toc:[]},u="wrapper";function i(t){let{components:n,...l}=t;return(0,r.kt)(u,(0,e.Z)({},a,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"METRICS_EXPORTER"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - prometheus / gcp / opentelemetry-collector*",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - prometheus",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Dictates which metric suite to aggregate resource metrics, as defined in:",(0,r.kt)("br",null),(0,r.kt)("a",{href:(0,o.Z)("/operator/oracle/monitoring")},"Oracle - Monitoring"),(0,r.kt)("br",null),"*opentelemetry-collector only supports the default endpoint localhost:55681/v1/metric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAGERDUTY_EVENT_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Paging disabled",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Token provided by pagerduty for sending pages about various alerts.",(0,r.kt)("br",null),(0,r.kt)("a",{href:(0,o.Z)("/operator/oracle/monitoring#alerts")},"Oracle - Alerts"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VERBOSE"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Flag (0 or 1)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 0, normal logging",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Set to 1 to increase the level of logging")))))}i.isMDXComponent=!0},96372:(t,n,l)=>{l.d(n,{ZP:()=>u});var e=l(48041),r=(l(49231),l(54852));const o={toc:[]},a="wrapper";function u(t){let{components:n,...l}=t;return(0,r.kt)(a,(0,e.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"TASK_RUNNER_SOLANA_RPC"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana mainnet RPC URL to support fulfilling update requests for Switchboard tasks that are reliant on Solana on-chain data.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"NOTE:")," This is not required if CHAIN is set to solana and CLUSTER is mainnet-beta.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GCP_CONFIG_BUCKET"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Looks for configs.json in the current working directory. If not found, no config is loaded.",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Contains API keys for private API endpoints")))))}u.isMDXComponent=!0},91366:(t,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>k,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var e=l(48041),r=(l(49231),l(54852)),o=l(96372),a=l(40686),u=l(33e3);const i={sidebar_position:30,title:"Solana"},k=void 0,s={unversionedId:"operator/oracle/chains/solana",id:"operator/oracle/chains/solana",title:"Solana",description:"On Solana, RPC providers will need to have --full-rpc-api enabled in their",source:"@site/docs/operator/oracle/chains/solana.mdx",sourceDirName:"operator/oracle/chains",slug:"/operator/oracle/chains/solana",permalink:"/operator/oracle/chains/solana",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Solana"},sidebar:"operator",previous:{title:"Near",permalink:"/operator/oracle/chains/near"},next:{title:"Docker",permalink:"/operator/oracle/docker"}},c={},p=[{value:"Solana Config",id:"solana-config",level:2},{value:"Oracle Config",id:"oracle-config",level:2},{value:"Task Runner Config",id:"task-runner-config",level:2},{value:"Keypair Config",id:"keypair-config",level:2},{value:"Monitoring Config",id:"monitoring-config",level:2}],b={toc:p},d="wrapper";function f(t){let{components:n,...l}=t;return(0,r.kt)(d,(0,e.Z)({},b,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On Solana, RPC providers will need to have ",(0,r.kt)("inlineCode",{parentName:"p"},"--full-rpc-api")," enabled in their\nvalidator config, along with the ability to support fetching 100 program\naccounts in a single getProgramAccounts request."),(0,r.kt)("p",null,"During the initial startup, the Solana oracle will create 1000 NonceAccounts\n(~1.5 SOL) in order to fulfill VRF requests. You can increase this number by\nsetting ",(0,r.kt)("inlineCode",{parentName:"p"},"NONCE_QUEUE_SIZE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'env title="solana.env"',env:!0,title:'"solana.env"'},'CHAIN="solana"\n# Solana Config\nCLUSTER=""\nRPC_URL=""\nWS_URL="" # Optional\nUNWRAP_STAKE_THRESHOLD="" # Optional\nNONCE_QUEUE_SIZE="" # Optional\n# Oracle Config\nORACLE_KEY=""\nHEARTBEAT_INTERVAL=15\n# Task Runner Config\nTASK_RUNNER_SOLANA_RPC="" # Optional if cluster is mainnet-beta\nGCP_CONFIG_BUCKET="" # Optional, for private queues\n# Keypair Config, one-of required\nFS_PAYER_SECRET_PATH=""\nDOCKER_PAYER_SECRET=""\nGOOGLE_PAYER_SECRET_PATH=""\nAMAZON_PAYER_SECRET_PATH=""\n# Monitoring Config\nMETRICS_EXPORTER="" # Optional\nPAGERDUTY_EVENT_KEY="" # Optional\nVERBOSE=1 # Optional\n')),(0,r.kt)("h2",{id:"solana-config"},"Solana Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"CHAIN"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required to be set to 'solana'")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - aptos / near / solana*",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - solana",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Dictates which chain to listen for on-chain events",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SOLANA_CLUSTER or CLUSTER"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String (devnet / mainnet-beta)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana cluster you will be running an oracle on (mainnet-beta/devnet)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RPC_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana RPC URL that must be capable of supporting websockets. The default RPC pools should be avoided at all cost as you will quickly hit the rate limits and risk being slashed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"WS_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - RPC_URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Websocket URL to connect to a Solana RPC server. If not provided, oracle will fallback to RPC_URL")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"UNWRAP_STAKE_THRESHOLD"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number (SOL amount, Ex. 1.55)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 0, disabled.",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - The Solana balance amount to trigger an unwrap stake action. When an oracle's Solana balance falls below the set threshold, the node will automatically unwrap funds from the oracle's staking wallet, leaving at least 0.1 wSOL or 10% more than the queue's minimum stake requirement.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"NONCE_QUEUE_SIZE"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 1000",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Override the default nonce queue size of 1000.",(0,r.kt)("br",null),(0,r.kt)("b",null,"NOTE:")," Increasing this will incur a cost on the oracle authority in order to rent exempt the NonceAccount's. This rent can be recouped anytime by the oracle operator. Any closed accounts will be recreated on subsequent oracle restarts.")))),(0,r.kt)("h2",{id:"oracle-config"},"Oracle Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"ORACLE_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Public Key",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Public key of the oracle account that has been granted permissions to use an oracle queue ",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"HEARTBEAT_INTERVAL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number (seconds)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 30",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Seconds between oracle heartbeats. Queues have different oracle heartbeat requirements. Recommended value is 15")))),(0,r.kt)("h2",{id:"task-runner-config"},"Task Runner Config"),(0,r.kt)(o.ZP,{mdxType:"TaskRunnerEnv"}),(0,r.kt)("h2",{id:"keypair-config"},"Keypair Config"),(0,r.kt)("p",null,"You must provide one of the following environment variables, which is the same\nkeypair that is the authority for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"$ORACLE_KEY")," and will pay for any\non-chain transactions."),(0,r.kt)(a.ZP,{mdxType:"KeypairEnv"}),(0,r.kt)("h2",{id:"monitoring-config"},"Monitoring Config"),(0,r.kt)(u.ZP,{mdxType:"MonitoringEnv"}))}f.isMDXComponent=!0}}]);