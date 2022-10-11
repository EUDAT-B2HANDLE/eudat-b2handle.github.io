"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Authentication",l={unversionedId:"b2handle-tutorial/create-a-blog-post",id:"b2handle-tutorial/create-a-blog-post",title:"Authentication",description:"For creating and modifying handles* you need to authenticate at the Handle Server you\u2019d like to write to. Authentication using b2handle is straightforward. There are two possibilities:",source:"@site/docs/b2handle-tutorial/create-a-blog-post.md",sourceDirName:"b2handle-tutorial",slug:"/b2handle-tutorial/create-a-blog-post",permalink:"/docs/b2handle-tutorial/create-a-blog-post",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b2handle-tutorial/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/b2handle-tutorial/authenticate-with-the-library"},next:{title:"Start using the library",permalink:"/docs/b2handle-tutorial/using-the-library"}},s={},c=[{value:"Authentication using client certificates",id:"authentication-using-client-certificates",level:2},{value:"Authentication using username and password",id:"authentication-using-username-and-password",level:2},{value:"Credentials JSON file",id:"credentials-json-file",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"For creating and modifying handles* you need to authenticate at the Handle Server you\u2019d like to write to. Authentication using b2handle is straightforward. There are two possibilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authenticating using username and password"),(0,r.kt)("li",{parentName:"ul"},"Authenticating using client certificates")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Notice")),(0,r.kt)("p",null,"Here we assume that you know your username and password or have your private key file and your certificate file ready. If you need to set these up, please see ",(0,r.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/B2HANDLE/authentication.html"},"Authenticate at a Handle Server")),(0,r.kt)("h2",{id:"authentication-using-client-certificates"},"Authentication using client certificates"),(0,r.kt)("p",null,"Using client certificates, you need to provide paths to the file containing your private key and to the certificate in a JSON file. The class PIDClientCredentials provides a method load_from_JSON(). This can be read as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"cred = PIDClientCredentials.load_from_JSON('my_credentials.json')\nclient = EUDATHandleClient.instantiate_with_credentials(cred)\n")),(0,r.kt)("p",null,"The JSON file should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'{\n  "baseuri": "https://my.handle.server",\n  "private_key": "my_private_key.pem",\n  "certificate_only": "my_certificate.pem"\n}\n')),(0,r.kt)("h2",{id:"authentication-using-username-and-password"},"Authentication using username and password"),(0,r.kt)("p",null,"If you have a username (something that looks like 300:foo/bar) and a password, we recommend using this constructor: instantiate_with_username_and_password():"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"client = EUDATHandleClient.instantiate_with_username_and_password(\n  'https://my.handle.server',\n  '300:foo/bar',\n  'mypassword123'\n)\n")),(0,r.kt)("p",null,"Alternatively, you can store your username and password in a JSON file, instead of paths to certificate and key::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"    { \u201cbaseuri\u201d: \u201chttps://my.handle.server\u201d, \u201cusername\u201d: \u201c300:foo/bar\u201d, \u201cpassword\u201d: \u201cmypassword123\u201d }\n")),(0,r.kt)("p",null,"Like above, you can read the JSON like as shown above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"cred = PIDClientCredentials.load_from_JSON('my_credentials.json')\nclient = EUDATHandleClient.instantiate_with_credentials(cred)\n")),(0,r.kt)("h2",{id:"credentials-json-file"},"Credentials JSON file"),(0,r.kt)("p",null,"The JSON file can contain more information. All items it contains are passed to the client constructor as config. Please see ",(0,r.kt)("strong",{parentName:"p"},"init"),"() to find out which configuration items the client constructor understands."))}d.isMDXComponent=!0}}]);