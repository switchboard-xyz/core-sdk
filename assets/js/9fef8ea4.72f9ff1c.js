"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[527],{9005:(e,t,n)=>{const r=n(9231).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"main",minimal:!1,pluginId:"default",scopes:[]},reflections:{},commands:{},protobufs:{}});t.ApiDataContext=r},3412:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(9231);const a=n(7567),i=n(4660),c=n(1485),l=n(6539),u=n(8292),d=n(7677),m=n(52),f=n(5091),p=n(7711),b=n(9977),h=n(264),g=e=>e&&e.__esModule?e:{default:e},j=g(i),x=g(c),v=g(l),w=g(u),y=g(d),O=g(m);e.exports=function(e){let{children:t,heading:n,pageMetadata:r,pagingMetadata:s,toc:i,disableToc:c}=e;const l=a.useWindowSize(),u=f.useBreadcrumbs(),d=i.length>0,m=d&&("desktop"===l||"ssr"===l);return h.jsxs(h.Fragment,{children:[r,h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:c?"col":"col apiItemCol",children:[h.jsx(b.VersionBanner,{}),h.jsxs("div",{className:"apiItemContainer",children:[h.jsxs("article",{children:[u&&h.jsx(j.default,{}),!c&&d&&h.jsx(O.default,{className:`${a.ThemeClassNames.docs.docTocMobile??""} apiTocMobile`,maxHeadingLevel:6,minHeadingLevel:1,toc:i}),h.jsxs("div",{className:`${a.ThemeClassNames.docs.docMarkdown??""} markdown`,children:[h.jsx("header",{children:h.jsx(v.default,{as:"h1",children:n})}),h.jsx(w.default,{children:t})]}),h.jsx(p.Footer,{})]}),s&&h.jsx(x.default,o({},s))]})]}),!c&&m&&h.jsx("div",{className:"col col--3",children:h.jsx(y.default,{className:a.ThemeClassNames.docs.docTocDesktop,maxHeadingLevel:6,minHeadingLevel:1,toc:i})})]})]})}},5554:(e,t,n)=>{const r=n(1766);n(9231);const o=n(7433),s=n(3412),a=n(264),i=(e=>e&&e.__esModule?e:{default:e})(r);e.exports=function(e){let{route:t}=e;const n=t.id,r=o.useCommand(n);return a.jsx(s,{heading:r?.command??"Unknown",route:t,toc:[],children:a.jsx(i.default,{language:"markdown",children:r?.markdown??"N/A"})})}},7711:(e,t,n)=>{n(9231);const r=n(264);t.Footer=function(){return r.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",r.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",r.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},9977:(e,t,n)=>{const r=n(9231),o=n(1336),s=n(7567),a=n(828),i=n(264);t.VersionBanner=function(){const e=a.useDocsVersion(),t=e.banner,n=e.docs,c=e.pluginId,l=(e.version,o.useDocVersionSuggestions(c).latestVersionSuggestion),u=s.useDocsPreferredVersion(c).savePreferredVersionName;return r.useCallback((()=>{u(l.name)}),[l.name,u]),t&&l?(n[l.label],i.jsx(i.Fragment,{})):null}},5091:(e,t,n)=>{const r=n(9231),o=n(9005);t.useBreadcrumbs=function(){return r.useContext(o.ApiDataContext).options.breadcrumbs}},7433:(e,t,n)=>{const r=n(9231),o=n(9005);t.useCommand=function(e){const t=r.useContext(o.ApiDataContext).commands;if(void 0===e)return null;if(t[e])return t[e];throw new Error(`Unable to find command with ID ${e}`)}}}]);