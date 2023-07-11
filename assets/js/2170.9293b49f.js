"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2170],{82995:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(49231),n=a(19841),r=a(55985),o=a(1608),s=a(45997),i=a(81128);const c={sidebar:"sidebar_c4Ff",sidebarItemTitle:"sidebarItemTitle_OJbW",sidebarItemList:"sidebarItemList_rJmN",sidebarItem:"sidebarItem_ggLo",sidebarItemLink:"sidebarItemLink_RsMh",sidebarItemLinkActive:"sidebarItemLinkActive_HzCT"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(64402);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},97986:(e,t,a)=>{a.d(t,{Z:()=>R});var l=a(49231),n=a(19841),r=a(19833),o=a(48300);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(45997);const c={title:"title_VdRA"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(c.title,t),itemProp:"headline"},o?m:l.createElement(i.default,{itemProp:"url",to:s},m))}var u=a(81128),d=a(98229);const g={container:"container_rKo6"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",t)},l.createElement(p,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(h,{readingTime:i})))}function b(e){return e.href?l.createElement(i.default,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(b,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const N={authorCol:"authorCol_Qk7t",imageOnlyAuthorRow:"imageOnlyAuthorRow_Ktx4",imageOnlyAuthorCol:"imageOnlyAuthorCol_okS9"};function P(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(m,null),l.createElement(f,null),l.createElement(P,null))}var k=a(58856),Z=a(2771);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(Z.default,null,t))}var T=a(50446),w=a(84637),I=a(95634);function F(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.default,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(F,null))}const y={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_i1q2"};function M(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&y.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},l.createElement(w.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(T.Z,{editUrl:s})),c&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},l.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(o,a)},l.createElement(_,null),l.createElement(C,null,t),l.createElement(M,null))}},50446:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(49231),n=a(81128),r=a(47407),o=a(95634),s=a(19841);const i={iconEdit:"iconEdit_xFeu"};function c(e){let{className:t,...a}=e;return l.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},25:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(49231),n=a(19841),r=a(45997);const o={tag:"tag_wz0O",tagRegular:"tagRegular_Mc_O",tagWithCount:"tagWithCount_MEF9"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.default,{href:t,className:(0,n.Z)(o.tag,s?o.tagWithCount:o.tagRegular)},a,s&&l.createElement("span",null,s))}},84637:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(49231),n=a(19841),r=a(81128),o=a(25);const s={tags:"tags_tBfA",tag:"tag_jLM4"};function i(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s.tag},l.createElement(o.Z,{label:t,permalink:a}))}))))}},19833:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(49231),n=a(57875);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},98229:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(49231),n=a(26107);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);