"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},s="Intro",o={unversionedId:"intro",id:"intro",title:"Intro",description:"B2HANDLE is the distributed service for storing, managing and accessing persistent identifiers (PIDs) and essential metadata (PID records) as well as managing PID namespaces. The implementation of the service relies on the DONA/Handle persistent identifier solution. B2HANDLE can be used by middleware applications, end-user tools and other service to reliably identify data objects over longer timespans and through changes in object location or ownership. The B2HANDLE service encompasses management of identifier namespaces (Handle prefixes), establishment of policies and business workflows, operation of Handle servers and technical services, and a user-friendly Python library for general interaction with Handle servers and EUDAT-specific extensions. B2HANDLE is mostly transparent to end-users, shielding them from the complexity of infrastructure details. B2HANDLE supports a dedicated Handle record structure (a PID profile) for the safe data management within an infrastructure with a given topology.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"B2HANDLE - Tutorial",permalink:"/docs/category/b2handle---tutorial"}},l={},d=[{value:"Features",id:"features",level:2},{value:"How It Works",id:"how-it-works",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"B2HANDLE is the distributed service for storing, managing and accessing persistent identifiers (PIDs) and essential metadata (PID records) as well as managing PID namespaces. The implementation of the service relies on the DONA/Handle persistent identifier solution. B2HANDLE can be used by middleware applications, end-user tools and other service to reliably identify data objects over longer timespans and through changes in object location or ownership. The B2HANDLE service encompasses management of identifier namespaces (Handle prefixes), establishment of policies and business workflows, operation of Handle servers and technical services, and a user-friendly Python library for general interaction with Handle servers and EUDAT-specific extensions. B2HANDLE is mostly transparent to end-users, shielding them from the complexity of infrastructure details. B2HANDLE supports a dedicated Handle record structure (a PID profile) for the safe data management within an infrastructure with a given topology."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Globally resolvable identifiers via the Global Handle Network (DONA, ",(0,a.kt)("a",{parentName:"li",href:"https://hdl.handle.net"},"https://hdl.handle.net"),")"),(0,a.kt)("li",{parentName:"ul"},"Communities and organisations can obtain Handle Prefixes (ePIC, 21.######) for their own use"),(0,a.kt)("li",{parentName:"ul"},"PIDs can be hosted at EUDAT service providers"),(0,a.kt)("li",{parentName:"ul"},"B2HANDLE operates as a federation of EUDAT service providers based on policies"),(0,a.kt)("li",{parentName:"ul"},"PIDs are mirrored across multiple providers for high resolution and high availability"),(0,a.kt)("li",{parentName:"ul"},"Handle records can be customised to community and organisational needs (for example include checksums and timestamps to ensure authenticity of the data objects)"),(0,a.kt)("li",{parentName:"ul"},"Support for reverse look-ups of Handle records"),(0,a.kt)("li",{parentName:"ul"},"REST API for easy registration and minting of PIDs")),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"B2HANDLE is EUDAT's main Persistent Identifier (PID) service. B2HANDLE is a distributed service, designed to contribute to data persistence by maintaining opaque, globally unique persistent identifiers. PIDs are used to reliably identify and cite data objects throughout their lifecycle and they are thus a vital part of long-term data management. Moreover, data can be directly retrieved by PIDs and corresponding key metadata can be stored together with them in the so-called PID entry."),(0,a.kt)("p",null,"B2HANDLE is based on the Handle System, which is a reliable, redundant and scalable system built on an open architecture and designed to allow end-users to manage PIDs with ease. The B2HANDLE service encompasses management of identifier namespaces (Handle prefixes), establishment of policies and business workflows, operation of Handle servers and technical services, and a user-friendly Python library for general interaction with Handle servers and EUDAT-specific extensions."),(0,a.kt)("p",null,"In order to access a data object stored in EUDAT, an associated PID is needed. B2HANDLE enables EUDAT services and user communities to assign PIDs to different kinds of managed objects stored in the EUDAT CDI. The advantage of the service is that the underlying technology is mostly transparent to the end-user (users need not know the complexity of infrastructure details)."),(0,a.kt)("p",null,"B2HANDLE service resolution is based on the Handle System which offers a very reliable resolution service. It forwards the user to the current location of the object. "),(0,a.kt)("p",null,"\u039fne of the key advantages of B2HANDLE is the B2HANDLE Python library. It is a client library to enable easy interaction with Handle services using the native REST interface offered by the Handle system. The library offers the main functionalities to create, update and delete PIDs as well as advanced functionality such as searching over Handles using an additional search servlet and managing multiple location entries per PID. The library is available for all services that want to enable PIDs. "),(0,a.kt)("p",null,"In the EUDAT ecosystem, EUDAT services make use of B2HANDLE to enable data access, guarantee long lasting references to data and facilitate data publishing. B2SAFE and B2SHARE use the service to create and manage PIDs for their hosted data objects, whereas B2FIND and B2STAGE use the resolving mechanism of B2HANDLE to retrieve objects and to refer to them."))}u.isMDXComponent=!0}}]);