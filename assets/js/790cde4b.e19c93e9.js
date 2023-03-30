"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75870],{82764:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(45675),n=a(92897),o=a(49231),s=a(19841),l=a(32301),i=a(56133),c=a(32268),u=a(38026),d=a(1274),m=a(7523);function p(e){return(0,m.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var f=a(20264);const h=["className","raised"],g=(0,i.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:i=!1}=a,u=(0,n.Z)(a,h),d=(0,r.Z)({},a,{raised:i}),m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(d);return(0,f.jsx)(g,(0,r.Z)({className:(0,s.Z)(m.root,o),elevation:i?8:void 0,ref:t,ownerState:d},u))}))},63607:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(45675),n=a(92897),o=a(49231),s=a(19841),l=a(32301),i=a(56133),c=a(32268),u=a(1274),d=a(7523);function m(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var p=a(20264);const f=["className","component"],h=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:i="div"}=a,u=(0,n.Z)(a,f),d=(0,r.Z)({},a,{component:i}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m,t)})(d);return(0,p.jsx)(h,(0,r.Z)({as:i,className:(0,s.Z)(g.root,o),ownerState:d,ref:t},u))}))},27429:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(92897),n=a(45675),o=a(49231),s=a(19841),l=a(32301),i=a(69681),c=a(32268),u=a(56133),d=a(1274),m=a(7523);function p(e){return(0,m.Z)("MuiCardHeader",e)}const f=(0,d.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=a(20264);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),_=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),k=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:m="div",disableTypography:f=!1,subheader:y,subheaderTypographyProps:w,title:x,titleTypographyProps:R}=a,Z=(0,r.Z)(a,g),C=(0,n.Z)({},a,{component:m,disableTypography:f}),A=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(C);let I=x;null==I||I.type===i.Z||f||(I=(0,h.jsx)(i.Z,(0,n.Z)({variant:u?"body2":"h5",className:A.title,component:"span",display:"block"},R,{children:I})));let E=y;return null==E||E.type===i.Z||f||(E=(0,h.jsx)(i.Z,(0,n.Z)({variant:u?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:E}))),(0,h.jsxs)(b,(0,n.Z)({className:(0,s.Z)(A.root,d),as:m,ref:t,ownerState:C},Z,{children:[u&&(0,h.jsx)(v,{className:A.avatar,ownerState:C,children:u}),(0,h.jsxs)(k,{className:A.content,ownerState:C,children:[I,E]}),o&&(0,h.jsx)(_,{className:A.action,ownerState:C,children:o})]}))}))},2004:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(49231),n=a(19841);const o={tabItem:"tabItem_Z7jx"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},66081:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(48041),n=a(49231),o=a(19841),s=a(51556),l=a(19409),i=a(86449),c=a(80828),u=a(70621);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var g=a(68213);const b={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(_,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},26365:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(68868),n=a(49231),o=a(63607),s=a(69681),l=a(39687),i=a(27429),c=a(82764),u=a(15733),d=a(57236),m=a(65137);const p=(0,d.Z)(c.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),f=(0,d.Z)(i.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function h(e){let{title:t,image:a,imageDark:r,description:i,to:c,sx:d}=e;const{colorMode:h}=(0,m.I)();return n.createElement(u.Z,{href:c,style:{textDecoration:"none"}},n.createElement(p,{dark:"dark"===h?1:0,sx:d},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(f,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),i?n.createElement(n.Fragment,null,n.createElement(l.Z,{sx:{marginBottom:"1rem"}}),n.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},i)):n.createElement(n.Fragment,null))))}function g(e){let{items:t,cols:a,sx:o,direction:s,justifyContent:l,alignItems:i}=e;return n.createElement(r.ZP,{container:!0,spacing:3,direction:s??"row",justifyContent:l,alignItems:i},t.map((e=>n.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/a??2)},n.createElement(h,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},52237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>y,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var r=a(48041),n=(a(49231),a(54852)),o=a(17558),s=a(66081),l=a(2004),i=a(26365),c=a(43939),u=a(75784),d=a(65646);const m='use anchor_lang::prelude::*;\nuse std::convert::TryInto;\npub use switchboard_v2::{\n    AggregatorAccountData, AggregatorHistoryBuffer, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID,\n};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadHistoryParams)]\npub struct ReadHistory<\'info> {\n    #[account(\n        has_one = history_buffer @ ErrorCode::InvalidHistoryBuffer\n    )]\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n    /// CHECK: verified in the aggregator has_one check\n    pub history_buffer: AccountInfo<\'info>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadHistoryParams {\n    pub timestamp: Option<i64>,\n}\n\n#[program]\npub mod anchor_history_parser {\n    use super::*;\n\n    pub fn read_history(\n        ctx: Context<ReadHistory>,\n        params: ReadHistoryParams,\n    ) -> anchor_lang::Result<()> {\n        let history_buffer = AggregatorHistoryBuffer::new(&ctx.accounts.history_buffer)?;\n\n        let timestamp: i64 = Clock::get()?.unix_timestamp - 3600;\n\n        let value_at_timestamp: f64 = history_buffer\n            .lower_bound(timestamp)\n            .unwrap()\n            .value\n            .try_into()?;\n\n        msg!("Result {:?}!", value_at_timestamp);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum ErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("History buffer mismatch")]\n    InvalidHistoryBuffer,\n}\n',p='let history_buffer = AggregatorHistoryBuffer::new(&ctx.accounts.history_buffer)?;\n\nlet timestamp: i64 = Clock::get()?.unix_timestamp - 3600;\n\nlet value_at_timestamp: f64 = history_buffer\n    .lower_bound(timestamp)\n    .unwrap()\n    .value\n    .try_into()?;\n\nmsg!("Result {:?}!", value_at_timestamp);',f={sidebar_position:10,title:"Rust"},h=void 0,g={unversionedId:"solana/dev/rust",id:"solana/dev/rust",title:"Rust",description:"<img",source:"@site/docs/solana/dev/rust.mdx",sourceDirName:"solana/dev",slug:"/solana/dev/rust",permalink:"/solana/dev/rust",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Rust"},sidebar:"solana",previous:{title:"Sbv2 CLI",permalink:"/solana/dev/cli"},next:{title:"@switchboard-xyz/solana.js",permalink:"/solana/dev/javascript"}},b={},v=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Data Feeds",id:"data-feeds",level:2},{value:"Read Latest Result",id:"read-latest-result",level:3},{value:"Read Aggregator History",id:"read-aggregator-history",level:3},{value:"VRF Account",id:"vrf-account",level:2},{value:"Read Latest Result",id:"read-latest-result-1",level:3},{value:"RequestRandomness CPI",id:"requestrandomness-cpi",level:3},{value:"Buffer Relayer Account",id:"buffer-relayer-account",level:2},{value:"Read Latest Result",id:"read-latest-result-2",level:3}],_={toc:v},k="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:"https://crates.io/crates/switchboard-v2"},(0,n.kt)("img",{alt:"Crates.io",src:"https://img.shields.io/crates/v/switchboard-v2?label=switchboard-v2&logo=rust"})),(0,n.kt)("p",null,"A Rust library to interact with Switchboard V2 accounts on Solana."),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/rust/switchboard-v2",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,c.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,c.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.rs/switchboard-v2/latest/switchboard_v2/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,c.Z)("/img/icons/rust/crab.svg")}),imageDark:(0,n.kt)("img",{src:(0,c.Z)("/img/icons/rust/crab.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Run the following Cargo command in your project directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add switchboard-v2\n")),(0,n.kt)("p",null,"Or add the following line to your Cargo.toml:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nswitchboard-v2 = "0.1.23"\n')),(0,n.kt)("h2",{id:"data-feeds"},"Data Feeds"),(0,n.kt)("h3",{id:"read-latest-result"},"Read Latest Result"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},d.Z)),(0,n.kt)(l.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},u.Z))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-feed-parser/src/lib.rs"},"anchor-feed-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/native-feed-parser/src/lib.rs"},"native-feed-parser"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"read-aggregator-history"},"Read Aggregator History"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note: The Aggregator must have a history buffer initialized before using"))),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},p)),(0,n.kt)(l.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},m))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-history-parser/src/lib.rs"},"anchor-history-parser"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"vrf-account"},"VRF Account"),(0,n.kt)("h3",{id:"read-latest-result-1"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::VrfAccountData;\n\n// deserialize the account info\nlet vrf = ctx.accounts.vrf.load()?;\n// OR\nlet vrf = VrfAccountData::new(vrf_account_info)?;\n\n// read the result\nlet result_buffer = vrf.get_result()?;\nlet value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);\nlet result = value[0] % 256000 as u128;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-vrf-parser/src/actions/update_result.rs"},"anchor-vrf-parser"))),(0,n.kt)("h3",{id:"requestrandomness-cpi"},"RequestRandomness CPI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'pub use switchboard_v2::{VrfAccountData, VrfRequestRandomness};\n\nlet switchboard_program = ctx.accounts.switchboard_program.to_account_info();\n\nlet vrf_request_randomness = VrfRequestRandomness {\n    authority: ctx.accounts.state.to_account_info(),\n    vrf: ctx.accounts.vrf.to_account_info(),\n    oracle_queue: ctx.accounts.oracle_queue.to_account_info(),\n    queue_authority: ctx.accounts.queue_authority.to_account_info(),\n    data_buffer: ctx.accounts.data_buffer.to_account_info(),\n    permission: ctx.accounts.permission.to_account_info(),\n    escrow: ctx.accounts.escrow.clone(),\n    payer_wallet: ctx.accounts.payer_wallet.clone(),\n    payer_authority: ctx.accounts.payer_authority.to_account_info(),\n    recent_blockhashes: ctx.accounts.recent_blockhashes.to_account_info(),\n    program_state: ctx.accounts.program_state.to_account_info(),\n    token_program: ctx.accounts.token_program.to_account_info(),\n};\n\nlet vrf_key = ctx.accounts.vrf.key.clone();\nlet authority_key = ctx.accounts.authority.key.clone();\n\nlet state_seeds: &[&[&[u8]]] = &[&[\n    &STATE_SEED,\n    vrf_key.as_ref(),\n    authority_key.as_ref(),\n    &[bump],\n]];\nmsg!("requesting randomness");\nvrf_request_randomness.invoke_signed(\n    switchboard_program,\n    params.switchboard_state_bump,\n    params.permission_bump,\n    state_seeds,\n)?;\n\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-vrf-parser/src/actions/request_result.rs"},"anchor-vrf-parser"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"buffer-relayer-account"},"Buffer Relayer Account"),(0,n.kt)("h3",{id:"read-latest-result-2"},"Read Latest Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{BufferRelayerAccountData, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet buffer = BufferRelayerAccountData::new(feed_account_info)?;\n\n// get result\nlet buffer_result = buffer.get_result();\n\n// check if feed has been updated in the last 5 minutes\nbuffer.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// convert buffer to a string\nlet result_string = String::from_utf8(buffer.result)\n    .map_err(|_| error!(ErrorCode::StringConversionFailed))?;\nmsg!("Buffer string {:?}!", result_string);\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-buffer-parser/src/lib.rs"},"anchor-buffer-parser"))))}y.isMDXComponent=!0},65646:(e,t,a)=>{a.d(t,{Z:()=>r});const r="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},75784:(e,t,a)=>{a.d(t,{Z:()=>r});const r='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);