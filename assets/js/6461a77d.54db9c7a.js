"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{85162:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:a,hidden:n,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(83117),r=n(67294),o=n(86010),l=n(72389),s=n(67392),c=n(7094),i=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var a,n;const{lazy:l,block:m,defaultValue:p,values:b,groupId:g,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:f.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),v=(0,s.l)(y,((e,a)=>e.value===a.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(a=null!=p?p:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?a:f[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:A}=(0,c.U)(),[T,j]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&y.some((a=>a.value===e))&&j(e)}const N=e=>{const a=e.currentTarget,n=E.indexOf(a),t=y[n].value;t!==T&&(S(a),j(t),null!=g&&A(g,String(t)))},C=e=>{var a;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{var t;const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{var r;const a=E.indexOf(e.currentTarget)-1;n=null!=(r=E[a])?r:E[E.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},y.map((e=>{let{value:a,label:n,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>E.push(e),onKeyDown:C,onClick:N},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===a})}),null!=n?n:a)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function p(e){const a=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(a)},e))}},58109:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var t=n(83117),r=(n(67294),n(3905)),o=n(90814);var l=n(65488),s=n(85162);const c={sidebar_position:10},i="Create a Feed",u={unversionedId:"solana/feeds/create",id:"solana/feeds/create",title:"Create a Feed",description:"Switchboard allows you to create permissionless data feeds using",source:"@site/docs/solana/feeds/create.mdx",sourceDirName:"solana/feeds",slug:"/solana/feeds/create",permalink:"/solana/feeds/create",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"solana",previous:{title:"Integration Checklist",permalink:"/solana/feeds/"},next:{title:"Read a Feed",permalink:"/solana/feeds/read"}},d={},m=[{value:"Javascript",id:"javascript",level:2},{value:"Command Line",id:"command-line",level:2}],p={toc:m};function b(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-feed"},"Create a Feed"),(0,r.kt)("p",null,"Switchboard allows you to create permissionless data feeds using"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/publisher"},"Publisher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#javascript"},"Javascript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#command-line"},"Command Line"))),(0,r.kt)("h2",{id:"javascript"},"Javascript"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"ts",mdxType:"CodeBlock"},'const queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\n\nconst aggregatorAccount = await AggregatorAccount.create(program, {\n  name: Buffer.from("MY SOL/USD Feed"),\n  batchSize: 1,\n  minRequiredOracleResults: 1,\n  minRequiredJobResults: 1,\n  minUpdateDelaySeconds: 10,\n  queueAccount,\n  authority: authority.publicKey,\n});\nconsole.log(aggregatorAccount.publicKey.toString());')),(0,r.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"ts",mdxType:"CodeBlock"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n  SwitchboardPermission,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet authority: Keypair; // queue authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\n\n// aggregator\nconst aggregatorAccount = await AggregatorAccount.create(program, {\n  name: Buffer.from("MY SOL/USD Feed"),\n  batchSize: 1,\n  minRequiredOracleResults: 1,\n  minRequiredJobResults: 1,\n  minUpdateDelaySeconds: 10,\n  queueAccount,\n  authority: authority.publicKey,\n});\n\n// permission\nconst permissionAccount = await PermissionAccount.create(program, {\n  authority: authority.publicKey,\n  granter: queueAccount.publicKey,\n  grantee: aggregatorAccount.publicKey,\n});\nawait aggregatorPermission.set({\n  authority,\n  permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,\n  enable: true,\n});\n\n// lease\nconst leaseContract = await LeaseAccount.create(program, {\n  loadAmount: new anchor.BN(0),\n  funder: tokenAccount,\n  funderAuthority: authority,\n  oracleQueueAccount: queueAccount,\n  aggregatorAccount,\n});\n\n// job\nconst tasks: OracleJob.Task[] = [\n  OracleJob.Task.create({\n    httpTask: OracleJob.HttpTask.create({\n      url: `https://ftx.us/api/markets/SOL_USD`,\n    }),\n  }),\n  OracleJob.Task.create({\n    jsonParseTask: OracleJob.JsonParseTask.create({ path: "$.result.price" }),\n  }),\n];\nconst jobData = Buffer.from(\n  OracleJob.encodeDelimited(\n    OracleJob.create({\n      tasks,\n    })\n  ).finish()\n);\nconst jobKeypair = anchor.web3.Keypair.generate();\nconst jobAccount = await JobAccount.create(program, {\n  data: jobData,\n  keypair: jobKeypair,\n  authority: authority.publicKey,\n});\n\n// add job to aggregator\nawait aggregatorAccount.addJob(jobAccount, authority);\n'))),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 solana:aggregator:create $QUEUE_PUBKEY \\\n    --keypair ~/.config/solana/id.json \\\n    --crankKey $CRANK_PUBKEY \\\n    --name "My_Test_Feed" \\\n    --updateInterval 10 \\\n    --minOracles 1 \\\n    --batchSize 1 \\\n    --leaseAmount 1.337 \\\n    --job ./directory/jobs/btc/binanceCom.jsonc \\\n    --job ./directory/jobs/btc/kraken.jsonc \\\n    --job ./directory/jobs/btc/bitfinex.jsonc \\\n    --json \\\n    --verbose\n')))}b.isMDXComponent=!0}}]);