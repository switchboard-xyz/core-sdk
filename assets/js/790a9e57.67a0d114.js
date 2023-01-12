"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(83117),n=r(67294),o=r(86010),l=r(72389),i=r(67392),s=r(7094),c=r(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r;const{lazy:l,block:p,defaultValue:h,values:m,groupId:b,className:v}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:w.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===h?h:null!=(t=null!=h?h:null==(r=w.find((e=>e.props.default)))?void 0:r.props.value)?t:w[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[N,S]=(0,n.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&S(e)}const O=e=>{const t=e.currentTarget,r=x.indexOf(t),a=f[r].value;a!==N&&(E(t),S(a),null!=b&&T(b,String(a)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;r=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var n;const t=x.indexOf(e.currentTarget)-1;r=null!=(n=x[t])?n:x[x.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(w.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,l.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},96040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(83117),n=(r(67294),r(3905)),o=r(65488),l=r(85162);const i={sidebar_position:5,title:"Localnet Integration"},s=void 0,c={unversionedId:"solana/dev/localnet",id:"solana/dev/localnet",title:"Localnet Integration",description:"You may wish to run a localnet version of Switchboard to watch how your program",source:"@site/docs/solana/dev/localnet.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/localnet",permalink:"/solana/dev/localnet",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Localnet Integration"},sidebar:"solana",previous:{title:"SDK Overview",permalink:"/solana/dev/"},next:{title:"Sbv2 CLI",permalink:"/solana/dev/cli"}},u={},d=[{value:"Setup Switchboard Test Environment",id:"setup-switchboard-test-environment",level:2},{value:"Switchboard Test Context",id:"switchboard-test-context",level:2},{value:"Starting Test",id:"starting-test",level:3},{value:"loadFromEnv",id:"loadfromenv",level:3},{value:"createStaticFeed",id:"createstaticfeed",level:3}],p={toc:d};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You may wish to run a localnet version of Switchboard to watch how your program\nreacts to data feed updates. The following will walk through how to create your\nown Oracle Queue and Oracle on devnet, then output some helper scripts to\nquickly load the environment in your localnet cluster to run integration tests\nagainst your program."),(0,n.kt)("h2",{id:"setup-switchboard-test-environment"},"Setup Switchboard Test Environment"),(0,n.kt)("p",null,"The following will create an Oracle Queue and Oracle with the provided keypair\nas the authority"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"CLI",label:"CLI",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sbv2 solana localnet env --keypair "../payer-keypair.json"\n'))),(0,n.kt)(l.Z,{value:"Typescript",label:"Typescript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SwitchboardTestEnvironment } from "@switchboard-xyz/sbv2-utils";\nconst testEnvironment = await SwitchboardTestEnvironment.create(\n  "../payer-keypair.json"\n);\ntestEnvironment.writeAll(".switchboard");\n')))),(0,n.kt)("p",null,"In the specified ",(0,n.kt)("inlineCode",{parentName:"p"},"outputDir"),", you will find:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"start-local-validator.sh"),": Bash script which starts a local Solana\nvalidator with the Switchboard program, IDL, and our devnet environment\npre-loaded"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"start-oracle.sh"),": Bash script which starts a Switchboard oracle and start\nheartbeating on the localnet queue"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"docker-compose.switchboard.yml"),": docker file with the Switchboard oracle\nenvironment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"switchboard.env"),": Env file with your Switchboard account public keys"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"switchboard.json"),": JSON file with your Switchboard account public keys")),(0,n.kt)("h2",{id:"switchboard-test-context"},"Switchboard Test Context"),(0,n.kt)("p",null,"In your tests, you will need to load the ",(0,n.kt)("inlineCode",{parentName:"p"},"switchboard.env")," file to build the\nSwitchboardTestContext."),(0,n.kt)("h3",{id:"starting-test"},"Starting Test"),(0,n.kt)("p",null,"Before you run your test you will need a localnet Solana validator running with\nthe Switchboard-V2 program loaded and your Switchboard oracle running and\nheartbeating."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"In Shell #1"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./.switchboard/start-local-validator.sh\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"In Shell #2"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./.switchboard/start-oracle.sh\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"In Shell #3"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor test --skip-local-validator\n")),(0,n.kt)("h3",{id:"loadfromenv"},"loadFromEnv"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SwitchboardTestContext.loadFromEnv")," will look for ",(0,n.kt)("inlineCode",{parentName:"p"},"switchboard.env")," or a\n",(0,n.kt)("inlineCode",{parentName:"p"},".switchboard")," directory in the current directory or three levels up before\nthrowing an error."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as anchor from "@project-serum/anchor";\nimport { SwitchboardTestContext } from "@switchboard-xyz/sbv2-utils";\nimport chai from "chai";\nimport "mocha";\ndescribe("switchboard integration test", async () => {\n  const provider = anchor.AnchorProvider.env();\n  anchor.setProvider(provider);\n  let switchboard: SwitchboardTestContext;\n  before(async () => {\n    // Optional, attempt to load the switchboard devnet PID\n    // If successful, then we can assume we\'re on devnet and can use the public permissionless queue\n    try {\n      switchboard = await SwitchboardTestContext.loadDevnetQueue(provider);\n      console.log("devnet detected");\n      return;\n    } catch (error: any) {\n      console.log("Error: SBV2 Devnet - ", error.message);\n    }\n    // Attempt to load switchboard.env or .switchboard directory\n    // Will look 3 levels up before failing\n    try {\n      switchboard = await SwitchboardTestContext.loadFromEnv(provider);\n      console.log("localnet detected");\n      return;\n    } catch (error: any) {\n      console.log("Error: SBV2 Localnet - ", error.message);\n    }\n    // If fails, throw error\n    throw new Error(\n      "Failed to load the SwitchboardTestContext from devnet or from a switchboard.env file"\n    );\n  });\n  it("Your test here", async () => {});\n});\n')))),(0,n.kt)("h3",{id:"createstaticfeed"},"createStaticFeed"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as anchor from "@project-serum/anchor";\nimport { SwitchboardTestContext } from "@switchboard-xyz/sbv2-utils";\nimport { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";\n// load the Switchboard env to dictate which queue to create feed for\nconst switchboard = await SwitchboardTestContext.loadFromEnv(\n  anchor.AnchorProvider.env()\n);\n// create a static feed that will always resolve to 100\n// then call openRound and wait for the oracle to process the update\nconst aggregatorAccount: AggregatorAccount = await switchboard.createStaticFeed(\n  100\n);\n')))))}h.isMDXComponent=!0}}]);