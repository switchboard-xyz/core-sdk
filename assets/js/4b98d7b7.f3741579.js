"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77386],{85162:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(83117),n=r(67294),l=r(86010),u=r(12466),o=r(76775),s=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=f(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,i]=m({queryString:r,groupId:a}),[d,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),g=(()=>{const e=s??d;return b({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),p(e)}),[i,p,l]),tabValues:l}}var g=r(72389);const h="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),f=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==o&&(d(t),s(a))},b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:u}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:f},u,{className:(0,l.Z)("tabs__item",v,u?.className,{"tabs__item--active":o===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=p(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},24008:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(99226),n=r(92949),l=r(44996),u=r(67294);const o=e=>{const{colorMode:t}=(0,n.I)();let r=(0,l.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),o="inherit";e.lightBg&&"dark"!==t&&(o=e.lightBg),e.darkBg&&"dark"===t&&(o=e.darkBg);let s={};return e.sx&&(s={backgroundColor:o,m:"auto",display:"flex",...s,...e.sx}),u.createElement(a.Z,{component:"img",sx:s,src:r})}},818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(83117),n=(r(67294),r(3905));r(24008),r(39960),r(90814),r(74866),r(85162);const l={sidebar_position:10,title:"Integration",slug:"."},u=void 0,o={unversionedId:"solana/buffer-relayers/integration",id:"solana/buffer-relayers/integration",title:"Integration",description:"Configuration",source:"@site/docs/solana/buffer-relayers/integration.mdx",sourceDirName:"solana/buffer-relayers",slug:"/solana/buffer-relayers/",permalink:"/solana/buffer-relayers/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Integration",slug:"."}},s={},i=[{value:"Configuration",id:"configuration",level:2}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"configuration"},"Configuration"))}d.isMDXComponent=!0}}]);