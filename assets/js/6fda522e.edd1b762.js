"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22589],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>p});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43725:(e,n,r)=>{r.d(n,{Z:()=>f});var t=r(86886),a=r(67294),i=r(44267),o=r(15861),s=r(21519),l=r(78445),c=r(44073),u=r(39960),d=r(13264),m=r(92949);const p=(0,d.Z)(c.Z)((e=>{let{theme:n,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[n.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,d.Z)(l.Z)((e=>{let{theme:n}=e;return{display:"flex",maxHeight:"96px"}}));function b(e){let{title:n,image:r,imageDark:t,description:l,to:c,sx:d}=e;const{colorMode:b}=(0,m.I)();return a.createElement(u.Z,{href:c,style:{textDecoration:"none"}},a.createElement(p,{dark:"dark"===b?1:0,sx:d},a.createElement(i.Z,{sx:{height:"100%",width:"100%"}},a.createElement(g,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&t?t:r),title:n,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?a.createElement(a.Fragment,null,a.createElement(s.Z,{sx:{marginBottom:"1rem"}}),a.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):a.createElement(a.Fragment,null))))}function f(e){let{items:n,cols:r,sx:i,direction:o,justifyContent:s,alignItems:l}=e;return a.createElement(t.ZP,{container:!0,spacing:3,direction:o??"row",justifyContent:s,alignItems:l},n.map((e=>a.createElement(t.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},a.createElement(b,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:i})))))}},17130:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(83117),a=(r(67294),r(3905)),i=r(43725),o=r(44996);const s={sidebar_position:10,title:"sbv2-near"},l=void 0,c={unversionedId:"near/dev/rust",id:"near/dev/rust",title:"sbv2-near",description:"<img",source:"@site/docs/near/dev/rust.mdx",sourceDirName:"near/dev",slug:"/near/dev/rust",permalink:"/near/dev/rust",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"sbv2-near"},sidebar:"near",previous:{title:"Sbv2 CLI",permalink:"/near/dev/cli"},next:{title:"@switchboard-xyz/near.js",permalink:"/near/dev/javascript"}},u={},d=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],m={toc:d};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"https://crates.io/crates/sbv2-near"},(0,a.kt)("img",{alt:"Crates.io",src:"https://img.shields.io/crates/v/sbv2-near?label=sbv2-near&logo=rust"})),(0,a.kt)("p",null,"A Rust crate to deserialize and read a Switchboard data feed within a NEAR\ncontract."),(0,a.kt)("h2",{id:"quick-links"},"Quick Links"),(0,a.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-near/tree/main/rust/sbv2-near",title:"Github",description:"View the Github repo",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Add the following to your your Cargo.toml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nnear-sdk = "4.0.0"\nsbv2-near = "0.1.0\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::env::log_str;\nuse near_sdk::log;\nuse near_sdk::near_bindgen;\nuse near_sdk::serde_json::json;\nuse near_sdk::Promise;\nuse near_sdk::PromiseResult::Successful;\nuse serde::{Deserialize, Serialize};\nuse serde_json;\nuse std::convert::TryInto;\n\nuse sbv2_near::{AggregatorRound, Uuid, SWITCHBOARD_PROGRAM_ID};\n\nmacro_rules! json_buf {\n    ($x:tt) => {\n        json!($x).to_string().as_bytes().to_vec()\n    };\n}\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    #[payable]\n    pub fn aggregator_read(&mut self, ix: Ix) -> Promise {\n        Promise::new(SWITCHBOARD_PROGRAM_ID.parse().unwrap())\n            .function_call(\n                "aggregator_read".into(),\n                json_buf!({\n                    "ix": {\n                        "address": ix.address,\n                        "payer": ix.address,\n                    }\n                }),\n                near_sdk::ONE_YOCTO,\n                near_sdk::Gas(30000000000000), // WHAT IF GAS RUNS OUT?? need to make sure enough?\n            )\n            .then(\n                Promise::new(near_sdk::env::current_account_id()).function_call(\n                    "callback".into(),\n                    json_buf!({}),\n                    near_sdk::ONE_YOCTO,\n                    near_sdk::Gas(30000000000000), // WHAT IF GAS RUNS OUT?? need to make sure enough?\n                ),\n            )\n    }\n    #[payable]\n    pub fn callback(&mut self) {\n        let maybe_round = near_sdk::env::promise_result(0);\n        if let Successful(serialized_round) = maybe_round {\n            let round: AggregatorRound = serde_json::from_slice(&serialized_round).unwrap();\n            let val: f64 = round.result.try_into().unwrap();\n            log!("Feed value: {:?}", val);\n        } else {\n            log_str("error");\n        }\n    }\n}\n\n#[derive(Deserialize, Serialize)]\npub struct Ix {\n    pub address: [u8; 32],\n}\n\n')))}p.isMDXComponent=!0}}]);