"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3976],{1512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),i=n(8453);const a={sidebar_position:1},r="Intro",o={id:"intro",title:"Intro",description:"B2HANDLE is the distributed service for storing, managing and accessing persistent identifiers (PIDs) and essential metadata (PID records) as well as managing PID namespaces. The implementation of the service relies on the DONA/Handle persistent identifier solution. B2HANDLE can be used by middleware applications, end-user tools and other service to reliably identify data objects over longer timespans and through changes in object location or ownership. The B2HANDLE service encompasses management of identifier namespaces (Handle prefixes), establishment of policies and business workflows, operation of Handle servers and technical services, and a user-friendly Python library for general interaction with Handle servers and EUDAT-specific extensions. B2HANDLE is mostly transparent to end-users, shielding them from the complexity of infrastructure details. B2HANDLE supports a dedicated Handle record structure (a PID profile) for the safe data management within an infrastructure with a given topology.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Request an account",permalink:"/docs/account"}},d={},l=[{value:"Features",id:"features",level:2},{value:"How It Works",id:"how-it-works",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"intro",children:"Intro"}),"\n",(0,s.jsx)(t.p,{children:"B2HANDLE is the distributed service for storing, managing and accessing persistent identifiers (PIDs) and essential metadata (PID records) as well as managing PID namespaces. The implementation of the service relies on the DONA/Handle persistent identifier solution. B2HANDLE can be used by middleware applications, end-user tools and other service to reliably identify data objects over longer timespans and through changes in object location or ownership. The B2HANDLE service encompasses management of identifier namespaces (Handle prefixes), establishment of policies and business workflows, operation of Handle servers and technical services, and a user-friendly Python library for general interaction with Handle servers and EUDAT-specific extensions. B2HANDLE is mostly transparent to end-users, shielding them from the complexity of infrastructure details. B2HANDLE supports a dedicated Handle record structure (a PID profile) for the safe data management within an infrastructure with a given topology."}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Globally resolvable identifiers via the Global Handle Network (DONA, ",(0,s.jsx)(t.a,{href:"https://hdl.handle.net",children:"https://hdl.handle.net"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Communities and organisations can obtain Handle Prefixes (ePIC, 21.######) for their own use"}),"\n",(0,s.jsx)(t.li,{children:"PIDs can be hosted at EUDAT service providers"}),"\n",(0,s.jsx)(t.li,{children:"B2HANDLE operates as a federation of EUDAT service providers based on policies"}),"\n",(0,s.jsx)(t.li,{children:"PIDs are mirrored across multiple providers for high resolution and high availability"}),"\n",(0,s.jsx)(t.li,{children:"Handle records can be customised to community and organisational needs (for example include checksums and timestamps to ensure authenticity of the data objects)"}),"\n",(0,s.jsx)(t.li,{children:"Support for reverse look-ups of Handle records"}),"\n",(0,s.jsx)(t.li,{children:"REST API for easy registration and minting of PIDs"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsx)(t.p,{children:"B2HANDLE is EUDAT's main Persistent Identifier (PID) service. B2HANDLE is a distributed service, designed to contribute to data persistence by maintaining opaque, globally unique persistent identifiers. PIDs are used to reliably identify and cite data objects throughout their lifecycle and they are thus a vital part of long-term data management. Moreover, data can be directly retrieved by PIDs and corresponding key metadata can be stored together with them in the so-called PID entry."}),"\n",(0,s.jsx)(t.p,{children:"B2HANDLE is based on the Handle System, which is a reliable, redundant and scalable system built on an open architecture and designed to allow end-users to manage PIDs with ease. The B2HANDLE service encompasses management of identifier namespaces (Handle prefixes), establishment of policies and business workflows, operation of Handle servers and technical services, and a user-friendly Python library for general interaction with Handle servers and EUDAT-specific extensions."}),"\n",(0,s.jsx)(t.p,{children:"In order to access a data object stored in EUDAT, an associated PID is needed. B2HANDLE enables EUDAT services and user communities to assign PIDs to different kinds of managed objects stored in the EUDAT CDI. The advantage of the service is that the underlying technology is mostly transparent to the end-user (users need not know the complexity of infrastructure details)."}),"\n",(0,s.jsx)(t.p,{children:"B2HANDLE service resolution is based on the Handle System which offers a very reliable resolution service. It forwards the user to the current location of the object."}),"\n",(0,s.jsx)(t.p,{children:"\u039fne of the key advantages of B2HANDLE is the B2HANDLE Python library. It is a client library to enable easy interaction with Handle services using the native REST interface offered by the Handle system. The library offers the main functionalities to create, update and delete PIDs as well as advanced functionality such as searching over Handles using an additional search servlet and managing multiple location entries per PID. The library is available for all services that want to enable PIDs."}),"\n",(0,s.jsx)(t.p,{children:"In the EUDAT ecosystem, EUDAT services make use of B2HANDLE to enable data access, guarantee long lasting references to data and facilitate data publishing. B2SAFE and B2SHARE use the service to create and manage PIDs for their hosted data objects, whereas B2FIND and B2STAGE use the resolving mechanism of B2HANDLE to retrieve objects and to refer to them."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);