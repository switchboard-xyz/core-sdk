"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(83117),a=t(67294),o=t(86010),l=t(72389),c=t(67392),i=t(7094),s=t(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t;const{lazy:l,block:p,defaultValue:f,values:m,groupId:b,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),_=(0,c.l)(g,((e,n)=>e.value===n.value));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:k}=(0,i.U)(),[O,x]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==O&&g.some((n=>n.value===e))&&x(e)}const C=e=>{const n=e.currentTarget,t=E.indexOf(n),r=g[t].value;r!==O&&(T(n),x(r),null!=b&&k(b,String(r)))},D=e=>{var n;let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{var r;const n=E.indexOf(e.currentTarget)+1;t=null!=(r=E[n])?r:E[0];break}case"ArrowLeft":{var a;const n=E.indexOf(e.currentTarget)-1;t=null!=(a=E[n])?a:E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>E.push(e),onKeyDown:D,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function f(e){const n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},85930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=t(83117),a=(t(67294),t(3905)),o=t(90814),l=t(85383),c=t(78134),i=t(65488),s=t(85162);const u={sidebar_position:1,title:"On-Chain"},d=void 0,p={unversionedId:"solana/feeds/on-chain",id:"solana/feeds/on-chain",title:"On-Chain",description:"",source:"@site/docs/solana/feeds/on-chain.mdx",sourceDirName:"solana/feeds",slug:"/solana/feeds/on-chain",permalink:"/solana/feeds/on-chain",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"On-Chain"}},f={},m=[],b={toc:m};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},c.Z)),(0,a.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},l.Z))))}v.isMDXComponent=!0},78134:(e,n,t)=>{t.d(n,{Z:()=>r});const r="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},85383:(e,n,t)=>{t.d(n,{Z:()=>r});const r='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);