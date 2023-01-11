"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68e3],{85162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>f});var t=a(83117),r=a(67294),o=a(86010),l=a(72389),s=a(67392),c=a(7094),i=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,a;const{lazy:l,block:m,defaultValue:f,values:p,groupId:h,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:v.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),_=(0,s.l)(g,((e,n)=>e.value===n.value));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===f?f:null!=(n=null!=f?f:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?n:v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,c.U)(),[C,T]=(0,r.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:R}=(0,i.o5)();if(null!=h){const e=w[h];null!=e&&e!==C&&g.some((n=>n.value===e))&&T(e)}const y=e=>{const n=e.currentTarget,a=A.indexOf(n),t=g[a].value;t!==C&&(R(n),T(t),null!=h&&x(h,String(t)))},E=e=>{var n;let a=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{var t;const n=A.indexOf(e.currentTarget)+1;a=null!=(t=A[n])?t:A[0];break}case"ArrowLeft":{var r;const n=A.indexOf(e.currentTarget)-1;a=null!=(r=A[n])?r:A[A.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},g.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>A.push(e),onKeyDown:E,onClick:y},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=a?a:n)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function f(e){const n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},85930:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var t=a(83117),r=(a(67294),a(3905)),o=a(90814),l=a(85383),s=a(78134),c=a(65488),i=a(85162);const u={sidebar_position:1,title:"On-Chain"},d=void 0,m={unversionedId:"solana/feeds/on-chain",id:"solana/feeds/on-chain",title:"On-Chain",description:"",source:"@site/docs/solana/feeds/on-chain.mdx",sourceDirName:"solana/feeds",slug:"/solana/feeds/on-chain",permalink:"/solana/feeds/on-chain",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"On-Chain"}},f={},p=[],h={toc:p};function b(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},s.Z)),(0,r.kt)(i.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},l.Z))))}b.isMDXComponent=!0},78134:(e,n,a)=>{a.d(n,{Z:()=>t});const t="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},85383:(e,n,a)=>{a.d(n,{Z:()=>t});const t='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);