"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73965],{26565:(e,t,a)=>{a.d(t,{zY:()=>l,l1:()=>m,Au:()=>s});var n=a(67294),r=a(39960);const l=e=>{const{enumb:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),r=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(a,null),n.createElement(r,null)))},u=e=>{const{fields:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const a=n.createElement("code",null,t.longType);return void 0===t.typeLink?a:n.createElement(r.Z,{to:t.typeLink},a)},u=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(l,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(a,null),n.createElement(u,null))},s=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(u,{fields:t.fields}))};var i=a(2734),o=a(90814);const m=e=>{(0,i.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(o.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},98451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>m});var n=a(83117),r=(a(67294),a(3905)),l=a(26565);const u={title:"BufferLayoutParseTask",hide_title:!0},s=void 0,i={unversionedId:"tasks/BufferLayoutParseTask",id:"tasks/BufferLayoutParseTask",title:"BufferLayoutParseTask",description:"BufferLayoutParseTask",source:"@site/docs/tasks/BufferLayoutParseTask.mdx",sourceDirName:"tasks",slug:"/tasks/BufferLayoutParseTask",permalink:"/tasks/BufferLayoutParseTask",draft:!1,tags:[],version:"current",frontMatter:{title:"BufferLayoutParseTask",hide_title:!0},sidebar:"publisher",previous:{title:"BoundTask",permalink:"/tasks/BoundTask"},next:{title:"CacheTask",permalink:"/tasks/CacheTask"}},o={},m=[{value:"<code>BufferLayoutParseTask</code>",id:"bufferlayoutparsetask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>BufferLayoutParseTask</code>",id:"bufferlayoutparsetask-1",level:3},{value:"Enums",id:"enums",level:2},{value:"<code>BufferLayoutParseTask.BufferParseType</code>",id:"bufferlayoutparsetaskbufferparsetype",level:3},{value:"<code>BufferLayoutParseTask.Endian</code>",id:"bufferlayoutparsetaskendian",level:3}],f={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bufferlayoutparsetask"},(0,r.kt)("inlineCode",{parentName:"h2"},"BufferLayoutParseTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"path")," BufferLayoutParseTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"package")," BufferLayoutParseTask")),(0,r.kt)("p",null,"Return the deserialized value from a stringified buffer."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"bufferlayoutparsetask-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"BufferLayoutParseTask")),(0,r.kt)(l.Au,{key:0,message:{name:"BufferLayoutParseTask",longName:"BufferLayoutParseTask",fullName:".BufferLayoutParseTask",description:"Return the deserialized value from a stringified buffer.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"offset",description:"The buffer offset to start deserializing from.",label:"optional",type:"uint32",longType:"uint32",fullType:"uint32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"endian",description:"The endianness of the stored value.",label:"optional",type:"Endian",longType:"BufferLayoutParseTask.Endian",fullType:"BufferLayoutParseTask.Endian",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"type",description:"The type of value to deserialize.",label:"optional",type:"BufferParseType",longType:"BufferLayoutParseTask.BufferParseType",fullType:"BufferLayoutParseTask.BufferParseType",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("h3",{id:"bufferlayoutparsetaskbufferparsetype"},(0,r.kt)("inlineCode",{parentName:"h3"},"BufferLayoutParseTask.BufferParseType")),(0,r.kt)(l.zY,{key:0,enumb:{name:"BufferParseType",longName:"BufferLayoutParseTask.BufferParseType",fullName:".BufferLayoutParseTask.BufferParseType",description:"",values:[{name:"pubkey",number:"1",description:"A public key."},{name:"bool",number:"2",description:"A boolean."},{name:"u8",number:"3",description:"An 8-bit unsigned value."},{name:"i8",number:"4",description:"An 8-bit signed value."},{name:"u16",number:"5",description:"A 16-bit unsigned value."},{name:"i16",number:"6",description:"A 16-bit signed value."},{name:"u32",number:"7",description:"A 32-bit unsigned value."},{name:"i32",number:"8",description:"A 32-bit signed value."},{name:"f32",number:"9",description:"A 32-bit IEEE floating point value."},{name:"u64",number:"10",description:"A 64-bit unsigned value."},{name:"i64",number:"11",description:"A 64-bit signed value."},{name:"f64",number:"12",description:"A 64-bit IEEE floating point value."},{name:"u128",number:"13",description:"A 128-bit unsigned value."},{name:"i128",number:"14",description:"A 128-bit signed value."}]},mdxType:"ProtoEnum"}),(0,r.kt)("h3",{id:"bufferlayoutparsetaskendian"},(0,r.kt)("inlineCode",{parentName:"h3"},"BufferLayoutParseTask.Endian")),(0,r.kt)(l.zY,{key:1,enumb:{name:"Endian",longName:"BufferLayoutParseTask.Endian",fullName:".BufferLayoutParseTask.Endian",description:"",values:[{name:"LITTLE_ENDIAN",number:"0",description:""},{name:"BIG_ENDIAN",number:"1",description:""}]},mdxType:"ProtoEnum"}),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);