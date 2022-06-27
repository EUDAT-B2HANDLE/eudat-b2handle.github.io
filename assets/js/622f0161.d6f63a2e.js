"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=h(e,["components","mdxType","originalType","parentName"]),p=d(n),c=l,m=p["".concat(o,".").concat(c)]||p[c]||s[c]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var h={};for(var o in t)hasOwnProperty.call(t,o)&&(h[o]=t[o]);h.originalType=e,h.mdxType="string"==typeof e?e:l,r[1]=h;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:3},r="Start using the library",h={unversionedId:"b2handle-tutorial/using-the-library",id:"b2handle-tutorial/using-the-library",title:"Start using the library",description:"Examples on how to use the library:",source:"@site/docs/b2handle-tutorial/using-the-library.md",sourceDirName:"b2handle-tutorial",slug:"/b2handle-tutorial/using-the-library",permalink:"/docs/b2handle-tutorial/using-the-library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b2handle-tutorial/using-the-library.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/b2handle-tutorial/authenticate-with-the-library"},next:{title:"Searching",permalink:"/docs/b2handle-tutorial/searching"}},o={},d=[{value:"Libraries to import",id:"libraries-to-import",level:2},{value:"Instantiate your client",id:"instantiate-your-client",level:2},{value:"Manage your handle",id:"manage-your-handle",level:2},{value:"The Example",id:"the-example",level:3},{value:"The data of the test handle",id:"the-data-of-the-test-handle",level:3},{value:"Creata a test handle",id:"creata-a-test-handle",level:3},{value:"Read test handle",id:"read-test-handle",level:3},{value:"Modify test handle",id:"modify-test-handle",level:3},{value:"Delete test handle",id:"delete-test-handle",level:3},{value:"Quick Links to Technical Documentation",id:"quick-links-to-technical-documentation",level:3}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"start-using-the-library"},"Start using the library"),(0,l.kt)("p",null,"Examples on how to ",(0,l.kt)("strong",{parentName:"p"},"use")," the library:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"libraries to use "),(0,l.kt)("li",{parentName:"ul"},"instantiate a client "),(0,l.kt)("li",{parentName:"ul"},"manage your handle")),(0,l.kt)("p",null,"With this example you can start using the B2HANDLE library in 5 minutes. "),(0,l.kt)("h2",{id:"libraries-to-import"},"Libraries to import"),(0,l.kt)("p",null,"At the beginning of your python code just import "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"#!/usr/bin/env python\n\nimport sys\nimport b2handle\nfrom b2handle.clientcredentials import PIDClientCredentials\nfrom b2handle.handleclient import EUDATHandleClient\nfrom b2handle.handleexceptions import *\nfrom requests.exceptions import SSLError\n\n")),(0,l.kt)("h2",{id:"instantiate-your-client"},"Instantiate your client"),(0,l.kt)("p",null,"The first thing you have to do is to instantiate your client. "),(0,l.kt)("p",null,"But before that you have to create a json file with the necessary data to connect to the handle server.\nThe file uses certificates in order to authenticate with the Handle server.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"mycredentials.json","mycredentials.json":!0},'\n{\n  "handle_server_url": "https://myserver.com",\n  "private_key": "privkey.pem",\n  "certificate_only": "certificate_only.pem",\n  "prefix": "21.11111",\n  "handleowner": "301:11239/ADMINUSER",\n  "HTTPS_verify": "True"\n}\n\n')),(0,l.kt)("p",null,"Then instantiate your client "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    print \"Creating credentials\"\n    cred = PIDClientCredentials.load_from_JSON('mycredentials.json')\n    client = EUDATHandleClient.instantiate_with_credentials(cred)\n\n    print('PID prefix ' + cred.get_prefix())\n    print('Server ' + cred.get_server_URL())\n\n")),(0,l.kt)("h2",{id:"manage-your-handle"},"Manage your handle"),(0,l.kt)("h3",{id:"the-example"},"The Example"),(0,l.kt)("p",null,"The example we are going to follow is to create is as follows "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a test handle with the name MYTEST-HANDLE with the URL ",(0,l.kt)("a",{parentName:"li",href:"http://www.example.com/1"},"http://www.example.com/1"),". "),(0,l.kt)("li",{parentName:"ul"},"Read the test handle "),(0,l.kt)("li",{parentName:"ul"},"Update the test handle by updating the URL to ",(0,l.kt)("a",{parentName:"li",href:"http://www.example.com/2"},"http://www.example.com/2")),(0,l.kt)("li",{parentName:"ul"},"Delete the handle ")),(0,l.kt)("h3",{id:"the-data-of-the-test-handle"},"The data of the test handle"),(0,l.kt)("p",null,"In this section we set the data for the test handle. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    TEST_SUFFIX='MYTEST-HANDLE'\n    VALUE_ORIG='http://www.example.com/1'\n    VALUE_AFTER='http://www.example.com/2'\n    handle = cred.get_prefix() + '/' + TEST_SUFFIX\n")),(0,l.kt)("p",null,"Now that we have the data lets start managing the handle. "),(0,l.kt)("h3",{id:"creata-a-test-handle"},"Creata a test handle"),(0,l.kt)("p",null,"The creation of a handle is the first available action which is supported with  ",(0,l.kt)("inlineCode",{parentName:"p"},"register_handle"),". ",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"You may either register a new Handle with a unique random name (random UUID) or with a predefine value. "),(0,l.kt)("p",null,"In this example we are creating a handle with the name\nTEST_SUFFIX='MYTEST-HANDLE'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Create test\n    print "Creating handle " + handle\n    create_result = client.register_handle(handle, VALUE_ORIG)\n\n    if create_result == handle:\n        print "OK: Create handle successful."\n    else:\n        print "PROBLEM: Create handle returned unexpected response."\n')),(0,l.kt)("h3",{id:"read-test-handle"},"Read test handle"),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_value_from_handle")," you may retrieve a single value from a single Handle. If several entries with this key exist, the methods returns the first one. If the handle does not exist, the method will raise an exception .",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"In this example we are reading the predefined handle with key=URL. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Read test\n    key = \'URL\'\n    read_value = client.get_value_from_handle(handle, key)\n        \n    if read_value == VALUE_ORIG:\n        print "OK: Read handle successful."\n    else:\n        print "PROBLEM: Read handle returned unexpected response."\n     \n')),(0,l.kt)("h3",{id:"modify-test-handle"},"Modify test handle"),(0,l.kt)("p",null,"The library supports the modification of a value in the handle. ",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"modify_handle_value()")," a user can modify any number of values in a specific Handle record. "),(0,l.kt)("p",null,"In this example we are going to update the URL of the handle record with the value VALUE_AFTER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Modify test\n    key = \'URL\'\n    client.modify_handle_value(handle, **{key: VALUE_AFTER} )\n    get_value_result = client.get_value_from_handle(handle, key)\n\n    if get_value_result == VALUE_AFTER:\n        print "OK: Modify handle successful."\n    else:\n        print "CRITICAL: Modify handle value returned unexpected value."\n        print "Expected : " + VALUE_AFTER\n        print "Returned : " + get_value_result\n')),(0,l.kt)("h3",{id:"delete-test-handle"},"Delete test handle"),(0,l.kt)("p",null,"The library supports the Deletion of the handle and its handle record with the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete_function"),". ",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"In this example we are going to delete the handle we previously created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Delete test\n    delete_result = client.delete_handle(handle)\n    print "OK: Delete handle successfully."\n\n')),(0,l.kt)("h3",{id:"quick-links-to-technical-documentation"},"Quick Links to Technical Documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#instantiation"},"Instantiate Client")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication"},"Authentication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication-using-client-certificates"},"Authentication using client certificates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication-using-username-and-password"},"Authentication using username and password")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction"},"Basic Handle interaction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#managing-multiple-urls-with-10320-loc"},"Managing multiple URLs with 10320/loc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#full-method-documentation"},"Full method documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#constructors"},"Constructors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#handle-record-methods"},"Handle record methods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#methods-for-managing-10320-loc-entries"},"Methods for managing 10320/loc entries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#helper-methods"},"Helper methods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.utilhandle"},"Utilities")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.clientcredentials"},"Client credentials")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.handleexceptions"},"Exceptions"))))}s.isMDXComponent=!0}}]);