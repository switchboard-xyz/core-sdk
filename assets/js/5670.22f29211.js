"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5670],{54852:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64149:(e,t,r)=>{var n=r(64403);t.Z=void 0;var a=n(r(20872)),o=r(20264),l=(0,a.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=l},15811:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(52347),a=r(95634),o=r(49231),l=r(19841),u=r(63701),c=r(73315),s=r(53169),i=r(94515),f=r(20264);const d=(0,i.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var p=r(79101);function m(e){return(0,p.Z)("MuiAvatar",e)}(0,r(90912).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),h=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),g=(0,c.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const y=o.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiAvatar"}),{alt:c,children:i,className:d,component:p="div",imgProps:y,sizes:w,src:E,srcSet:k,variant:O="circular"}=r,Z=(0,n.Z)(r,b);let S=null;const j=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[a,l]=o.useState(!1);return o.useEffect((()=>{if(!r&&!n)return;l(!1);let a=!0;const o=new Image;return o.onload=()=>{a&&l("loaded")},o.onerror=()=>{a&&l("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,n&&(o.srcset=n),()=>{a=!1}}),[e,t,r,n]),a}((0,a.Z)({},y,{src:E,srcSet:k})),x=E||k,I=x&&"error"!==j,V=(0,a.Z)({},r,{colorDefault:!I,component:p,variant:O}),P=(e=>{const{classes:t,variant:r,colorDefault:n}=e,a={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(a,m,t)})(V);return S=I?(0,f.jsx)(h,(0,a.Z)({alt:c,src:E,srcSet:k,sizes:w,ownerState:V,className:P.img},y)):null!=i?i:x&&c?c[0]:(0,f.jsx)(g,{className:P.fallback}),(0,f.jsx)(v,(0,a.Z)({as:p,ownerState:V,className:(0,l.Z)(P.root,d),ref:t},Z,{children:S}))}))},70651:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(49231),a=r(19841);const o={tabItem:"tabItem_cjqz"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},54405:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(95634),a=r(49231),o=r(19841),l=r(93682),u=r(17096),c=r(80852);const s={tabList:"tabList_URvL",tabItem:"tabItem_e5E2"};function i(e){let{className:t,block:r,selectedValue:u,selectValue:c,tabValues:i}=e;const f=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=f.indexOf(t),n=i[r].value;n!==u&&(d(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=f.indexOf(e.currentTarget)+1;t=f[r]??f[0];break}case"ArrowLeft":{const r=f.indexOf(e.currentTarget)-1;t=f[r]??f[f.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>f.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",s.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function f(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,u.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",s.tabList)},a.createElement(i,(0,n.Z)({},e,t)),a.createElement(f,(0,n.Z)({},e,t)))}function p(e){const t=(0,c.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},17096:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(49231),a=r(19409),o=r(18948),l=r(79862),u=r(42150);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function i(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const l=(0,a.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(l.location.search);t.set(u,e),l.replace({...l.location,search:t.toString()})}),[u,l])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=s(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!i({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,p]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=d??m;return i({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!i({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),b(e)}),[p,b,o]),tabValues:o}}}}]);