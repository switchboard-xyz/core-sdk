"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9201],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2004:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(49231),r=n(19841);const o={tabItem:"tabItem_Z7jx"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},66081:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(48041),r=n(49231),o=n(19841),s=n(51556),i=n(19409),l=n(86449),u=n(80828),c=n(70621);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=b({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(68213);const v={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},81450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(48041),r=(n(49231),n(54852)),o=n(66081),s=n(2004);const i={sidebar_position:5,title:"Test Integration"},l=void 0,u={unversionedId:"solana/test-integration",id:"solana/test-integration",title:"Test Integration",description:"Switchboard provides some tools to streamline test integration. This requires",source:"@site/docs/solana/test-integration.mdx",sourceDirName:"solana",slug:"/solana/test-integration",permalink:"/solana/test-integration",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Test Integration"},sidebar:"solana",previous:{title:"VRF Integration",permalink:"/solana/vrf-integration"},next:{title:"SDK Overview",permalink:"/solana/dev/"}},c={},d=[{value:"Setup Localnet Environment",id:"setup-localnet-environment",level:2},{value:"Test Suite",id:"test-suite",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Switchboard provides some tools to streamline test integration. ",(0,r.kt)("strong",{parentName:"p"},"This requires\nDocker to be installed and running on the host machine.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is compatible with ",(0,r.kt)("strong",{parentName:"p"},"localnet")," and ",(0,r.kt)("strong",{parentName:"p"},"devnet"),".")),(0,r.kt)("h2",{id:"setup-localnet-environment"},"Setup Localnet Environment"),(0,r.kt)("p",null,"You may wish to run a localnet version of Switchboard to watch how your program\nreacts to data feed updates. You will need to copy some Switchboard accounts\nfrom devnet to your local validator on the initial startup sequence. This can be\ndone with Anchor by editing your Anchor.toml config or by starting the local\nvalidator with the accounts provided."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/solana/program/mainnet"},"Mainnet")," to get the list of respective mainnet\naccounts to copy."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Anchor",label:"Anchor",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[test.validator]\nurl = "https://api.devnet.solana.com"\n\n[test]\nstartup_wait = 15000\n\n[[test.validator.clone]] # sbv2 devnet programID\naddress = "2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG"\n\n[[test.validator.clone]] # sbv2 devnet IDL\naddress = "CKwZcshn4XDvhaWVH9EXnk3iu19t6t5xP2Sy2pD6TRDp"\n\n[[test.validator.clone]] # sbv2 devnet SbState\naddress = "BYM81n8HvTJuqZU1PmTVcwZ9G8uoji7FKM6EaPkwphPt"\n\n[[test.validator.clone]] # sbv2 devnet tokenVault\naddress = "FVLfR6C2ckZhbSwBzZY4CX7YBcddUSge5BNeGQv5eKhy"\n\n[[test.validator.clone]] # sbv2 SOL/USD Feed\naddress="GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Now start your tests with ",(0,r.kt)("inlineCode",{parentName:"p"},"anchor test --skip-local-validator")))),(0,r.kt)(s.Z,{value:"CLI",label:"solana-test-validator CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator -r --bind-address 0.0.0.0 --rpc-port 8899 \\\n  --url https://api.devnet.solana.com \\\n  --clone 2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG `# programId` \\\n  --clone J4CArpsbrZqu1axqQ4AnrqREs3jwoyA1M5LMiQQmAzB9 `# programDataAddress` \\\n  --clone CKwZcshn4XDvhaWVH9EXnk3iu19t6t5xP2Sy2pD6TRDp `# idlAddress` \\\n  --clone BYM81n8HvTJuqZU1PmTVcwZ9G8uoji7FKM6EaPkwphPt `# programState` \\\n  --clone FVLfR6C2ckZhbSwBzZY4CX7YBcddUSge5BNeGQv5eKhy `# switchboardVault`\n")))),(0,r.kt)("h2",{id:"test-suite"},"Test Suite"),(0,r.kt)("p",null,"Update your test file and add a before and after hook to create your Switchboard\nenvironment. You may omit the keypair arguements to create a brand new queue and\noracle with each run. If no keypair is found at the path provided, one will be\ncreated for you."),(0,r.kt)("p",null,"The start method lets you specify the version of the oracle to run along with a\ndocker config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {\n  AggregatorAccount,\n  SwitchboardTestContextV2,\n} from "@switchboard-xyz/solana.js";\n\ndescribe("anchor-feed-parser test", () => {\n  const provider = anchor.AnchorProvider.env();\n  anchor.setProvider(provider);\n\n  let switchboard: SwitchboardTestContextV2;\n  let aggregatorAccount: AggregatorAccount;\n\n  before(async () => {\n    switchboard = await SwitchboardTestContextV2.loadFromProvider(provider, {\n      // You can provide a keypair to so the PDA schemes dont change between test runs\n      name: "Test Queue",\n      keypair: SwitchboardTestContextV2.loadKeypair("~/.keypairs/queue.json"),\n      queueSize: 10,\n      reward: 0,\n      minStake: 0,\n      oracleTimeout: 900,\n      unpermissionedFeeds: true,\n      unpermissionedVrf: true,\n      enableBufferRelayers: true,\n      oracle: {\n        name: "Test Oracle",\n        enable: true,\n        stakingWalletKeypair: SwitchboardTestContextV2.loadKeypair(\n          "~/.keypairs/oracleWallet.json"\n        ),\n      },\n    });\n    await switchboard.start();\n  });\n\n  after(async () => {\n    if (switchboard) {\n      switchboard.stop();\n    }\n  });\n\n  it("Creates a static feed that resolves to 100", async () => {\n    [aggregatorAccount] = await switchboard.queue.createFeed({\n      batchSize: 1,\n      minRequiredOracleResults: 1,\n      minRequiredJobResults: 1,\n      minUpdateDelaySeconds: 10,\n      fundAmount: 0.15,\n      enable: true,\n      slidingWindow: true,\n      jobs: [\n        {\n          data: OracleJob.encodeDelimited(\n            OracleJob.fromObject({\n              tasks: [\n                {\n                  valueTask: {\n                    value: 100,\n                  },\n                },\n              ],\n            })\n          ).finish(),\n        },\n      ],\n    });\n\n    const aggregator = await aggregatorAccount.loadData();\n    const [updatedState] = await aggregatorAccount.openRoundAndAwaitResult();\n    const result = AggregatorAccount.decodeLatestValue(updatedState);\n    assert(result.toNumber() === 100, "Aggregator result mismatch");\n  });\n});\n')))}b.isMDXComponent=!0}}]);