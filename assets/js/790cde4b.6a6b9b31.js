"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75870],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(83117),n=a(67294),o=a(86010),s=a(12466),l=a(76775),u=a(91980),i=a(67392),c=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const n=null!=(t=r.find((e=>e.default)))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,i]=f({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=null!=u?u:d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var g=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function _(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==l&&(d(t),u(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;a=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var n;const t=c.indexOf(e.currentTarget)-1;a=null!=(n=c[t])?n:c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(_,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},10686:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(44267),n=a(15861),o=a(21519),s=a(78445),l=a(44073),u=a(67294),i=a(39960),c=a(13264),d=a(92949);const m=(0,c.Z)(l.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),p=(0,c.Z)(s.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function f(e){let{title:t,image:a,imageDark:s,description:l,to:c,sx:f}=e;const{colorMode:h}=(0,d.I)();return u.createElement(i.Z,{href:c,style:{textDecoration:"none"}},u.createElement(m,{dark:"dark"===h?1:0,sx:f},u.createElement(r.Z,{sx:{height:"100%",width:"100%"}},u.createElement(p,{avatar:u.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&s?s:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?u.createElement(u.Fragment,null,u.createElement(o.Z,{sx:{marginBottom:"1rem"}}),u.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):u.createElement(u.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(86886),n=a(67294),o=a(10686);function s(e){let{items:t,cols:a,sx:s,direction:l,justifyContent:u,alignItems:i}=e;return n.createElement(r.ZP,{container:!0,spacing:3,direction:null!=l?l:"row",justifyContent:u,alignItems:i},t.map((e=>{var t;return n.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},n.createElement(o.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:s}))})))}},92871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var r=a(83117),n=(a(67294),a(3905)),o=a(90814),s=a(74866),l=a(85162),u=a(17547),i=a(44996),c=a(85383),d=a(78134);const m={sidebar_position:10,title:"Rust"},p=void 0,f={unversionedId:"solana/dev/rust",id:"solana/dev/rust",title:"Rust",description:"cargo&nbsp;&nbsp;",source:"@site/docs/solana/dev/rust.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/rust",permalink:"/solana/dev/rust",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Rust"},sidebar:"solana",previous:{title:"Sbv2 CLI",permalink:"/solana/dev/cli"},next:{title:"Javascript",permalink:"/solana/dev/javascript/"}},h={},g=[{value:"Features",id:"features",level:2},{value:"Define Your Own Devnet Feature",id:"define-your-own-devnet-feature",level:3},{value:"Data Feeds",id:"data-feeds",level:2},{value:"Read Latest Result",id:"read-latest-result",level:3},{value:"Read Aggregator History",id:"read-aggregator-history",level:3},{value:"VRF Account",id:"vrf-account",level:2},{value:"Read Latest Result",id:"read-latest-result-1",level:3},{value:"RequestRandomness CPI",id:"requestrandomness-cpi",level:3},{value:"Buffer Relayer Account",id:"buffer-relayer-account",level:2},{value:"Read Latest Result",id:"read-latest-result-2",level:3}],b={toc:g};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/switchboard-v2"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/crates/v/switchboard-v2",alt:"cargo"})),"\xa0","\xa0","\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,n.kt)("p",null,"A Rust library to interact with Switchboard V2 accounts."),(0,n.kt)("p",null,"To get started, add the\n",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/switchboard-v2"},"switchboard-v2")," crate to your\nmanifest."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'[dependencies]\nswitchboard-v2 = { version = "~0.1.19" }\n')),(0,n.kt)(u.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/rust/switchboard-v2",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.rs/switchboard-v2/latest/switchboard_v2/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/rust/crab.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/rust/crab.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"devnet"),(0,n.kt)("td",{parentName:"tr",align:null},"The devnet feature enables using the Switchboard Devnet Program ID instead of the Mainnet Program ID.")))),(0,n.kt)("p",null,"Enable it in your Cargo.toml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nswitchboard-v2 = { version = "~0.1.19", features = ["devnet"] }\n')),(0,n.kt)("h3",{id:"define-your-own-devnet-feature"},"Define Your Own Devnet Feature"),(0,n.kt)("p",null,"You can also define your own devnet feature to dynamically swap the program IDs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[features]\ndefault = []\ndevnet = ["switchboard-v2/devnet"]\n')),(0,n.kt)("p",null,"This allows you to build your program with a feature flag to automate devnet and\nmainnet builds."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Build with Mainnet Switchboard Program ID\ncargo build-bpf\n# Build with Devnet Switchboard Program ID\ncargo build-bpf --features devnet\n")),(0,n.kt)("h2",{id:"data-feeds"},"Data Feeds"),(0,n.kt)("h3",{id:"read-latest-result"},"Read Latest Result"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},d.Z)),(0,n.kt)(l.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},c.Z))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-feed-parser/src/lib.rs"},"anchor-feed-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/native-feed-parser/src/lib.rs"},"native-feed-parser"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"read-aggregator-history"},"Read Aggregator History"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note: The Aggregator must have a history buffer initialized before using"))),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},'let history_buffer = AggregatorHistoryBuffer::new(&ctx.accounts.history_buffer)?;\n\nlet timestamp: i64 = Clock::get()?.unix_timestamp - 3600;\n\nlet value_at_timestamp: f64 = history_buffer\n    .lower_bound(timestamp)\n    .unwrap()\n    .value\n    .try_into()?;\n\nmsg!("Result {:?}!", value_at_timestamp);')),(0,n.kt)(l.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},'use anchor_lang::prelude::*;\nuse std::convert::TryInto;\npub use switchboard_v2::{\n    AggregatorAccountData, AggregatorHistoryBuffer, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID,\n};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadHistoryParams)]\npub struct ReadHistory<\'info> {\n    #[account(\n        has_one = history_buffer @ ErrorCode::InvalidHistoryBuffer\n    )]\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n    /// CHECK: verified in the aggregator has_one check\n    pub history_buffer: AccountInfo<\'info>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadHistoryParams {\n    pub timestamp: Option<i64>,\n}\n\n#[program]\npub mod anchor_history_parser {\n    use super::*;\n\n    pub fn read_history(\n        ctx: Context<ReadHistory>,\n        params: ReadHistoryParams,\n    ) -> anchor_lang::Result<()> {\n        let history_buffer = AggregatorHistoryBuffer::new(&ctx.accounts.history_buffer)?;\n\n        let timestamp: i64 = Clock::get()?.unix_timestamp - 3600;\n\n        let value_at_timestamp: f64 = history_buffer\n            .lower_bound(timestamp)\n            .unwrap()\n            .value\n            .try_into()?;\n\n        msg!("Result {:?}!", value_at_timestamp);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum ErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("History buffer mismatch")]\n    InvalidHistoryBuffer,\n}\n'))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-history-parser/src/lib.rs"},"anchor-history-parser"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"vrf-account"},"VRF Account"),(0,n.kt)("h3",{id:"read-latest-result-1"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::VrfAccountData;\n\n// deserialize the account info\nlet vrf = ctx.accounts.vrf.load()?;\n// OR\nlet vrf = VrfAccountData::new(vrf_account_info)?;\n\n// read the result\nlet result_buffer = vrf.get_result()?;\nlet value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);\nlet result = value[0] % 256000 as u128;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-vrf-parser/src/actions/update_result.rs"},"anchor-vrf-parser"))),(0,n.kt)("h3",{id:"requestrandomness-cpi"},"RequestRandomness CPI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'pub use switchboard_v2::{VrfAccountData, VrfRequestRandomness};\n\nlet switchboard_program = ctx.accounts.switchboard_program.to_account_info();\n\nlet vrf_request_randomness = VrfRequestRandomness {\n    authority: ctx.accounts.state.to_account_info(),\n    vrf: ctx.accounts.vrf.to_account_info(),\n    oracle_queue: ctx.accounts.oracle_queue.to_account_info(),\n    queue_authority: ctx.accounts.queue_authority.to_account_info(),\n    data_buffer: ctx.accounts.data_buffer.to_account_info(),\n    permission: ctx.accounts.permission.to_account_info(),\n    escrow: ctx.accounts.escrow.clone(),\n    payer_wallet: ctx.accounts.payer_wallet.clone(),\n    payer_authority: ctx.accounts.payer_authority.to_account_info(),\n    recent_blockhashes: ctx.accounts.recent_blockhashes.to_account_info(),\n    program_state: ctx.accounts.program_state.to_account_info(),\n    token_program: ctx.accounts.token_program.to_account_info(),\n};\n\nlet vrf_key = ctx.accounts.vrf.key.clone();\nlet authority_key = ctx.accounts.authority.key.clone();\n\nlet state_seeds: &[&[&[u8]]] = &[&[\n    &STATE_SEED,\n    vrf_key.as_ref(),\n    authority_key.as_ref(),\n    &[bump],\n]];\nmsg!("requesting randomness");\nvrf_request_randomness.invoke_signed(\n    switchboard_program,\n    params.switchboard_state_bump,\n    params.permission_bump,\n    state_seeds,\n)?;\n\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-vrf-parser/src/actions/request_result.rs"},"anchor-vrf-parser"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"buffer-relayer-account"},"Buffer Relayer Account"),(0,n.kt)("h3",{id:"read-latest-result-2"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{BufferRelayerAccountData, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet buffer = BufferRelayerAccountData::new(feed_account_info)?;\n\n// get result\nlet buffer_result = buffer.get_result();\n\n// check if feed has been updated in the last 5 minutes\nbuffer.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// convert buffer to a string\nlet result_string = String::from_utf8(buffer.result)\n    .map_err(|_| error!(ErrorCode::StringConversionFailed))?;\nmsg!("Buffer string {:?}!", result_string);\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-buffer-parser/src/lib.rs"},"anchor-buffer-parser"))))}v.isMDXComponent=!0},78134:(e,t,a)=>{a.d(t,{Z:()=>r});const r="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},85383:(e,t,a)=>{a.d(t,{Z:()=>r});const r='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);