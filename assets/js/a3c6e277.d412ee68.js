"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},l="Authentication",o={unversionedId:"pyhandle-tutorial/authenticate-with-the-library",id:"pyhandle-tutorial/authenticate-with-the-library",title:"Authentication",description:"For creating and modifying handles* you need to authenticate at the Handle Server you\u2019d like to write to. Authentication using pyhandle is straightforward. There are two possibilities:",source:"@site/docs/pyhandle-tutorial/authenticate-with-the-library.md",sourceDirName:"pyhandle-tutorial",slug:"/pyhandle-tutorial/authenticate-with-the-library",permalink:"/docs/pyhandle-tutorial/authenticate-with-the-library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pyhandle-tutorial/authenticate-with-the-library.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/pyhandle-tutorial/install-pyhandle"},next:{title:"Start using the library",permalink:"/docs/pyhandle-tutorial/using-the-library"}},s={},c=[{value:"Authentication using client certificates",id:"authentication-using-client-certificates",level:2},{value:"Authentication using username and password",id:"authentication-using-username-and-password",level:2},{value:"Credentials JSON file",id:"credentials-json-file",level:2},{value:"Quick Links to Technical Documentation",id:"quick-links-to-technical-documentation",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"For creating and modifying handles* you need to authenticate at the Handle Server you\u2019d like to write to. Authentication using pyhandle is straightforward. There are two possibilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authenticating using username and password"),(0,i.kt)("li",{parentName:"ul"},"Authenticating using client certificates")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Important Notice"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Here we assume that you know your username and password or have your private key file and your certificate file ready. If you need to set these up, please see ",(0,i.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication"},"Authentication")))),(0,i.kt)("h2",{id:"authentication-using-client-certificates"},"Authentication using client certificates"),(0,i.kt)("p",null,"Using client certificates, you need to provide paths to the file containing your private key and to the certificate in a JSON file. The class PIDClientCredentials provides a method load_from_JSON(). This can be read as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'{\n  "client":"rest",\n  "baseuri": "https://my.handle.server",\n  "private_key": "my_private_key.pem",\n  "certificate_only": "my_certificate.pem"\n}\n')),(0,i.kt)("p",null,"The JSON file should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'{\n  "baseuri": "https://my.handle.server",\n  "private_key": "my_private_key.pem",\n  "certificate_only": "my_certificate.pem"\n}\n')),(0,i.kt)("h2",{id:"authentication-using-username-and-password"},"Authentication using username and password"),(0,i.kt)("p",null,"If you have a username (something that looks like 300:foo/bar) and a password, we recommend using this constructor: instantiate_with_username_and_password():"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"client = PyHandleClient('rest').instantiate_with_username_and_password(\n  'https://my.handle.server',\n  '300:foo/bar',\n  'mypassword123'\n)\n")),(0,i.kt)("p",null,"Alternatively, you can store your username and password in a JSON file, instead of paths to certificate and key::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"    { \u201cbaseuri\u201d: \u201chttps://my.handle.server\u201d, \u201cusername\u201d: \u201c300:foo/bar\u201d, \u201cpassword\u201d: \u201cmypassword123\u201d }\n")),(0,i.kt)("p",null,"Like above, you can read the JSON like as shown above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"cred = PIDClientCredentials.load_from_JSON('my_credentials.json')\nclient = PyHandleClient('rest').instantiate_with_credentials(cred)\n")),(0,i.kt)("h2",{id:"credentials-json-file"},"Credentials JSON file"),(0,i.kt)("p",null,"The JSON file can contain more information. All items it contains are passed to the client constructor as config. Please see ",(0,i.kt)("strong",{parentName:"p"},"init"),"() to find out which configuration items the client constructor understands."),(0,i.kt)("h2",{id:"quick-links-to-technical-documentation"},"Quick Links to Technical Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#instantiation"},"Instantiate Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication-using-client-certificates"},"Authentication using client certificates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication-using-username-and-password"},"Authentication using username and password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic Handle interaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#full-method-documentation"},"Full method documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#constructors"},"Constructors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#handle-record-methods"},"Handle record methods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#helper-methods"},"Helper methods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.utilhandle"},"Utilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.clientcredentials"},"Client credentials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.handleexceptions"},"Exceptions"))))}d.isMDXComponent=!0}}]);