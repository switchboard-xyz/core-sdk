"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1740],{49194:(e,t,r)=>{r.d(t,{C:()=>l,n:()=>s});var o=r(49231),a=r(76067);const n=o.createContext(null);function s(e){let{children:t,content:r,isBlogPostPage:a=!1}=e;const s=function(e){let{content:t,isBlogPostPage:r}=e;return(0,o.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:a});return o.createElement(n.Provider,{value:s},t)}function l(){const e=(0,o.useContext)(n);if(null===e)throw new a.i6("BlogPostProvider");return e}},71258:(e,t,r)=>{r.d(t,{D:()=>l,f:()=>u});var o=r(49231),a=r(76067);const n=Symbol("EmptyContext"),s=o.createContext(n);function l(e){let{children:t}=e;const[r,a]=(0,o.useState)(null),n=(0,o.useMemo)((()=>({expandedItem:r,setExpandedItem:a})),[r]);return o.createElement(s.Provider,{value:n},t)}function u(){const e=(0,o.useContext)(s);if(e===n)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}},92783:(e,t,r)=>{r.d(t,{a:()=>s});var o=r(49231),a=r(74274),n=r(27817);function s(e){let{threshold:t}=e;const[r,s]=(0,o.useState)(!1),l=(0,o.useRef)(!1),{startScroll:u,cancelScroll:i}=(0,a.Ct)();return(0,a.RF)(((e,r)=>{let{scrollY:o}=e;const a=r?.scrollY;a&&(l.current?l.current=!1:o>=a?(i(),s(!1)):o<t?s(!1):o+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,n.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:r,scrollToTop:()=>u(0)}}},18878:(e,t,r)=>{r.r(t),r.d(t,{Collapsible:()=>u.z,ErrorBoundaryError:()=>w.aG,ErrorBoundaryTryAgainButton:()=>w.Cw,ErrorCauseBoundary:()=>w.QW,HtmlClassNameProvider:()=>d.FG,NavbarSecondaryMenuFiller:()=>f.Zo,PageMetadata:()=>d.d,ReactContextError:()=>c.i6,SkipToContentFallbackId:()=>T.u,SkipToContentLink:()=>T.l,ThemeClassNames:()=>i.k,composeProviders:()=>c.Qc,createStorageSlot:()=>a.WA,duplicates:()=>S.l,filterDocCardListItems:()=>s.MN,isMultiColumnFooterLinks:()=>b.a,isRegexpStringMatch:()=>C.F,listStorageKeys:()=>a._f,listTagsByLetters:()=>g.P,processAdmonitionProps:()=>y,translateTagsPageTitle:()=>g.M,uniq:()=>S.j,useCollapsible:()=>u.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>n._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>P.J,useEvent:()=>c.zX,useIsomorphicLayoutEffect:()=>c.LI,usePluralForm:()=>l.c,usePrevious:()=>c.D9,usePrismTheme:()=>v.p,useSearchLinkCreator:()=>h.M,useSearchQueryString:()=>h.K,useStorageSlot:()=>a.Nk,useThemeConfig:()=>o.L,useWindowSize:()=>p.i});var o=r(37681),a=r(77148),n=r(56485),s=r(31808),l=r(86627),u=r(24260),i=r(54456),c=r(76067),d=r(66791),m=r(92407),f=r(37751),p=r(93661),g=r(46025),h=r(42130),b=r(87114),C=r(33727),S=r(64194),v=r(58217),P=r(76237),E=r(49231);function y(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=E.Children.toArray(e),r=t.find((e=>E.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=E.createElement(E.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r?.props.children,rest:o}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:r}}var T=r(68875),w=r(7080)},85803:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>c.pl,BlogPostProvider:()=>u.n,Collapsible:()=>o.Collapsible,ColorModeProvider:()=>p.S,DEFAULT_SEARCH_TAG:()=>b.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>a.D,DocsPreferredVersionContextProvider:()=>i.L5,DocsSidebarProvider:()=>s.b,DocsVersionProvider:()=>n.q,ErrorBoundaryError:()=>o.ErrorBoundaryError,ErrorBoundaryTryAgainButton:()=>o.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>o.ErrorCauseBoundary,HtmlClassNameProvider:()=>o.HtmlClassNameProvider,NavbarProvider:()=>D.V,NavbarSecondaryMenuFiller:()=>o.NavbarSecondaryMenuFiller,PageMetadata:()=>o.PageMetadata,PluginHtmlClassNameProvider:()=>k.VC,ReactContextError:()=>o.ReactContextError,ScrollControllerProvider:()=>T.OC,SkipToContentFallbackId:()=>o.SkipToContentFallbackId,SkipToContentLink:()=>o.SkipToContentLink,ThemeClassNames:()=>o.ThemeClassNames,composeProviders:()=>o.composeProviders,containsLineNumbers:()=>h.nt,createStorageSlot:()=>o.createStorageSlot,docVersionSearchTag:()=>b.os,duplicates:()=>o.duplicates,filterDocCardListItems:()=>o.filterDocCardListItems,findFirstCategoryLink:()=>C.Wl,findSidebarCategory:()=>C.em,getPrismCssVariables:()=>h.QC,isActiveSidebarItem:()=>C._F,isDocsPluginEnabled:()=>C.cE,isMultiColumnFooterLinks:()=>o.isMultiColumnFooterLinks,isRegexpStringMatch:()=>o.isRegexpStringMatch,isSamePath:()=>w.Mg,keyboardFocusedClassName:()=>M.h,listStorageKeys:()=>o.listStorageKeys,listTagsByLetters:()=>o.listTagsByLetters,parseCodeBlockTitle:()=>h.bc,parseLanguage:()=>h.Vo,parseLines:()=>h.nZ,processAdmonitionProps:()=>o.processAdmonitionProps,splitNavbarItems:()=>D.A,translateTagsPageTitle:()=>o.translateTagsPageTitle,uniq:()=>o.uniq,useAlternatePageUtils:()=>g.l,useAnnouncementBar:()=>c.nT,useBackToTopButton:()=>V.a,useBlogPost:()=>u.C,useCodeWordWrap:()=>L.F,useCollapsible:()=>o.useCollapsible,useColorMode:()=>o.useColorMode,useContextualSearchFilters:()=>o.useContextualSearchFilters,useCurrentSidebarCategory:()=>o.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>C.xz,useDocRouteMetadata:()=>C.hI,useDocSidebarItemsExpandedState:()=>a.f,useDocsPreferredVersion:()=>o.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>i.Oh,useDocsSidebar:()=>s.V,useDocsVersion:()=>n.E,useDocsVersionCandidates:()=>C.lO,useEvent:()=>o.useEvent,useFilteredAndTreeifiedTOC:()=>y.b,useHideableNavbar:()=>I.c,useHistoryPopHandler:()=>E.Rb,useHistorySelector:()=>E.xL,useHomePageRoute:()=>w.Ns,useIsomorphicLayoutEffect:()=>o.useIsomorphicLayoutEffect,useKeyboardNavigation:()=>M.t,useLayoutDoc:()=>C.vY,useLayoutDocsSidebar:()=>C.oz,useLocalPathname:()=>P.b,useLocationChange:()=>v.S,useLockBodyScroll:()=>F.N,useNavbarMobileSidebar:()=>m.e,useNavbarSecondaryMenu:()=>f.Y,usePluralForm:()=>o.usePluralForm,usePrevious:()=>o.usePrevious,usePrismTheme:()=>o.usePrismTheme,useQueryStringValue:()=>E._X,useScrollController:()=>T.sG,useScrollPosition:()=>T.RF,useScrollPositionBlocker:()=>T.o5,useSearchLinkCreator:()=>o.useSearchLinkCreator,useSearchQueryString:()=>o.useSearchQueryString,useSidebarBreadcrumbs:()=>C.s1,useSmoothScrollTo:()=>T.Ct,useStorageSlot:()=>o.useStorageSlot,useTOCHighlight:()=>x.S,useTabs:()=>d.Y,useThemeConfig:()=>o.useThemeConfig,useTitleFormatter:()=>S.p,useTreeifiedTOC:()=>y.a,useWindowSize:()=>o.useWindowSize});var o=r(18878),a=r(71258),n=r(11550),s=r(98242),l=r(24558),u=r(49194),i=r(76237),c=r(99246),d=r(52692),m=r(87701),f=r(41130),p=r(92407),g=r(19036),h=r(85267),b=r(56485),C=r(31808),S=r(47667),v=r(27817),P=r(65383),E=r(73433),y=r(10422),T=r(74274),w=r(22797),k=r(66791),D=r(45341),x=r(62428),I=r(38857),M=r(62335),F=r(14892),L=r(25135),V=r(92783)},52692:(e,t,r)=>{r.d(t,{Y:()=>m});var o=r(49231),a=r(19409),n=r(73433),s=r(64194),l=r(77148);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:a}}=e;return{value:t,label:r,attributes:o,default:a}}))}function i(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,n._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=i(e),[s,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[m,f]=d({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,l.Nk)(r);return[a,(0,o.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),h=(()=>{const e=m??p;return c({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),f(e),g(e)}),[f,g,n]),tabValues:n}}},46025:(e,t,r)=>{r.d(t,{M:()=>a,P:()=>n});var o=r(81684);const a=()=>(0,o.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[o]=t;return r.localeCompare(o)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},86627:(e,t,r)=>{r.d(t,{c:()=>i});var o=r(49231),a=r(11951);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,a.default)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function i(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return o[Math.min(n,o.length-1)]}(r,t,e)}}},52296:(e,t,r)=>{const o=r(49231).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"main",minimal:!1,pluginId:"default",scopes:[]},reflections:{},commands:{},protobufs:{}});t.ApiDataContext=o},18928:(e,t,r)=>{const o=r(49231),a=r(18878),n=r(23780),s=r(67211),l=r(55607),u=r(3406),i=r(42457),c=r(25105),d=r(34153),m=r(8308),f=r(14263),p=e=>e&&e.__esModule?e:{default:e},g=p(o),h=p(n),b=p(s),C=p(l),S=p(u),v=p(i),P=p(c);e.exports=function(e){let{children:t,heading:r,pageMetadata:o,pagingMetadata:n,toc:s,disableToc:l}=e;const u=a.useWindowSize(),i=d.useBreadcrumbs(),c=s.length>0,p=c&&("desktop"===u||"ssr"===u);return g.default.createElement(g.default.Fragment,null,o,g.default.createElement("div",{className:"row"},g.default.createElement("div",{className:l?"col":"col apiItemCol"},g.default.createElement(f.VersionBanner,null),g.default.createElement("div",{className:"apiItemContainer"},g.default.createElement("article",null,i&&g.default.createElement(h.default,null),!l&&c&&g.default.createElement(P.default,{className:`${a.ThemeClassNames.docs.docTocMobile??""} apiTocMobile`,maxHeadingLevel:6,minHeadingLevel:1,toc:s}),g.default.createElement("div",{className:`${a.ThemeClassNames.docs.docMarkdown??""} markdown`},g.default.createElement("header",null,g.default.createElement(C.default,{as:"h1"},r)),g.default.createElement(S.default,null,t)),g.default.createElement(m.Footer,null)),n&&g.default.createElement(b.default,n))),!l&&p&&g.default.createElement("div",{className:"col col--3"},g.default.createElement(v.default,{className:a.ThemeClassNames.docs.docTocDesktop,maxHeadingLevel:6,minHeadingLevel:1,toc:s}))))}},74748:(e,t,r)=>{const o=r(49231),a=r(18928),n=r(16299),s=r(65892),l=e=>e&&e.__esModule?e:{default:e},u=l(o),i=l(n);e.exports=function(e){let{route:t}=e;const r=t.id,o=s.useCommand(r);return u.default.createElement(a,{heading:u.default.createElement("h1",null,o?.command??"Unknown"),route:t,toc:[]},u.default.createElement(i.default,{language:"markdown"},o?.markdown??"N/A"))}},8308:(e,t,r)=>{const o=(e=>e&&e.__esModule?e:{default:e})(r(49231));t.Footer=function(){return o.default.createElement("footer",{className:"tsd-footer"},"Powered by"," ",o.default.createElement("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api"},"docusaurus-plugin-typedoc-api")," ","and ",o.default.createElement("a",{href:"https://typedoc.org/"},"TypeDoc"))}},14263:(e,t,r)=>{const o=r(49231),a=r(11382),n=r(18878),s=r(85803),l=(e=>e&&e.__esModule?e:{default:e})(o);t.VersionBanner=function(){const e=s.useDocsVersion(),t=e.banner,r=e.docs,u=e.pluginId,i=(e.version,a.useDocVersionSuggestions(u).latestVersionSuggestion),c=n.useDocsPreferredVersion(u).savePreferredVersionName;return o.useCallback((()=>{c(i.name)}),[i.name,c]),t&&i?(r[i.label],l.default.createElement(l.default.Fragment,null)):null}},34153:(e,t,r)=>{const o=r(49231),a=r(52296);t.useBreadcrumbs=function(){return o.useContext(a.ApiDataContext).options.breadcrumbs}},65892:(e,t,r)=>{const o=r(49231),a=r(52296);t.useCommand=function(e){const t=o.useContext(a.ApiDataContext).commands;if(void 0===e)return null;if(t[e])return t[e];throw new Error(`Unable to find command with ID ${e}`)}}}]);