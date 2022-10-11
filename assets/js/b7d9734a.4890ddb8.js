"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=h(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,m=u["".concat(d,".").concat(c)]||u[c]||p[c]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var h={};for(var d in t)hasOwnProperty.call(t,d)&&(h[d]=t[d]);h.originalType=e,h.mdxType="string"==typeof e?e:l,i[1]=h;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>h,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},i="Start using the library",h={unversionedId:"pyhandle-tutorial/using-the-library",id:"pyhandle-tutorial/using-the-library",title:"Start using the library",description:"Examples on how to use the library:",source:"@site/docs/pyhandle-tutorial/using-the-library.md",sourceDirName:"pyhandle-tutorial",slug:"/pyhandle-tutorial/using-the-library",permalink:"/docs/pyhandle-tutorial/using-the-library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pyhandle-tutorial/using-the-library.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/pyhandle-tutorial/authenticate-with-the-library"},next:{title:"B2HANDLE - Tutorial",permalink:"/docs/category/b2handle---tutorial"}},d={},o=[{value:"Libraries to import",id:"libraries-to-import",level:2},{value:"Instantiate your client",id:"instantiate-your-client",level:2},{value:"Manage your handle",id:"manage-your-handle",level:2},{value:"The Example",id:"the-example",level:3},{value:"The data of the test handle",id:"the-data-of-the-test-handle",level:3},{value:"Create a test handle",id:"create-a-test-handle",level:3},{value:"Read test handle",id:"read-test-handle",level:3},{value:"Read full Handle record",id:"read-full-handle-record",level:3},{value:"Modify test handle",id:"modify-test-handle",level:3},{value:"Delete test handle",id:"delete-test-handle",level:3},{value:"Quick Links to Technical Documentation",id:"quick-links-to-technical-documentation",level:2}],s={toc:o};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"start-using-the-library"},"Start using the library"),(0,l.kt)("p",null,"Examples on how to ",(0,l.kt)("strong",{parentName:"p"},"use")," the library:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"libraries to use "),(0,l.kt)("li",{parentName:"ul"},"instantiate a client "),(0,l.kt)("li",{parentName:"ul"},"manage your handle")),(0,l.kt)("p",null,"With this example you can start using the pyhandle library in 5 minutes. "),(0,l.kt)("h2",{id:"libraries-to-import"},"Libraries to import"),(0,l.kt)("p",null,"At the beginning of your python code just import "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"#!/usr/bin/env python\n\nimport sys\nimport b2handle\nfrom pyhandle.clientcredentials import PIDClientCredentials\nfrom pyhandle.handleclient import EUDATHandleClient\nfrom pyhandle.handleexceptions import *\nfrom requests.exceptions import SSLError\n\n")),(0,l.kt)("h2",{id:"instantiate-your-client"},"Instantiate your client"),(0,l.kt)("p",null,"The first thing you have to do is to instantiate your client. "),(0,l.kt)("p",null,"But before that you have to create a json file with the necessary data to connect to the handle server.\nThe file uses certificates in order to authenticate with the Handle server.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"mycredentials.json","mycredentials.json":!0},'\n{\n  "handle_server_url": "https://myserver.com",\n  "private_key": "privkey.pem",\n  "certificate_only": "certificate_only.pem",\n  "prefix": "21.11111",\n  "handleowner": "301:11239/ADMINUSER",\n  "HTTPS_verify": "True"\n}\n\n')),(0,l.kt)("p",null,"Then instantiate your client "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    print \"Creating credentials\"\n    cred = PIDClientCredentials.load_from_JSON('my_credentials.json')\n    client = PyHandleClient('rest').instantiate_with_credentials(cred)\n    \n    print('PID prefix ' + cred.get_prefix())\n    print('Server ' + cred.get_server_URL())\n\n")),(0,l.kt)("h2",{id:"manage-your-handle"},"Manage your handle"),(0,l.kt)("h3",{id:"the-example"},"The Example"),(0,l.kt)("p",null,"The example we are going to follow is to create is as follows "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a test handle with the name MYTEST-HANDLE with the URL ",(0,l.kt)("a",{parentName:"li",href:"http://www.example.com/1"},"http://www.example.com/1"),". "),(0,l.kt)("li",{parentName:"ul"},"Read the test handle "),(0,l.kt)("li",{parentName:"ul"},"Update the test handle by updating the URL to ",(0,l.kt)("a",{parentName:"li",href:"http://www.example.com/2"},"http://www.example.com/2")),(0,l.kt)("li",{parentName:"ul"},"Delete the handle ")),(0,l.kt)("h3",{id:"the-data-of-the-test-handle"},"The data of the test handle"),(0,l.kt)("p",null,"In this section we set the data for the test handle. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    TEST_SUFFIX='MYTEST-HANDLE'\n    VALUE_ORIG='http://www.example.com/1'\n    VALUE_AFTER='http://www.example.com/2'\n    handle = cred.get_prefix() + '/' + TEST_SUFFIX\n")),(0,l.kt)("p",null,"Now that we have the data lets start managing the handle. "),(0,l.kt)("h3",{id:"create-a-test-handle"},"Create a test handle"),(0,l.kt)("p",null,"The creation of a handle is the first available action which is supported with  ",(0,l.kt)("inlineCode",{parentName:"p"},"register_handle"),". ",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"You may either register a new Handle with a unique random name (random UUID) or with a predefine value. "),(0,l.kt)("p",null,"In this example we are creating a handle with the name\nTEST_SUFFIX='MYTEST-HANDLE'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Create test\n    print "Creating handle " + handle\n    create_result = client.register_handle(handle, VALUE_ORIG)\n\n    if create_result == handle:\n        print "OK: Create handle successful."\n    else:\n        print "PROBLEM: Create handle returned unexpected response."\n')),(0,l.kt)("h3",{id:"read-test-handle"},"Read test handle"),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_value_from_handle")," you may retrieve a single value from a single Handle. If several entries with this key exist, the methods returns the first one. If the handle does not exist, the method will raise an exception .",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"In this example we are reading the predefined handle with key=URL. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Read test\n    key = \'URL\'\n    read_value = client.get_value_from_handle(handle, key)\n        \n    if read_value == VALUE_ORIG:\n        print "OK: Read handle successful."\n    else:\n        print "PROBLEM: Read handle returned unexpected response."\n     \n')),(0,l.kt)("h3",{id:"read-full-handle-record"},"Read full Handle record"),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"}," retrieve_handle_record()")," you may retrieve a full handle record. If several entries with this key exist, the methods returns the first one. If the handle does not exist, the method will raise an exception .",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"In this example we are reading the predefined handle with key=URL. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Read test\n    read_value = client.retrieve_handle_record(handle) \n        \n    if read_value != \u039d\u039f\u039d\u0395:\n        print "OK: Handle exists."\n    else:\n        print "PROBLEM: Read handle returned unexpected response."\n     \n')),(0,l.kt)("h3",{id:"modify-test-handle"},"Modify test handle"),(0,l.kt)("p",null,"The library supports the modification of a value in the handle. ",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"modify_handle_value()")," a user can modify any number of values in a specific Handle record. "),(0,l.kt)("p",null,"In this example we are going to update the URL of the handle record with the value VALUE_AFTER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Modify test\n    key = \'URL\'\n    client.modify_handle_value(handle, **{key: VALUE_AFTER} )\n    get_value_result = client.get_value_from_handle(handle, key)\n\n    if get_value_result == VALUE_AFTER:\n        print "OK: Modify handle successful."\n    else:\n        print "CRITICAL: Modify handle value returned unexpected value."\n        print "Expected : " + VALUE_AFTER\n        print "Returned : " + get_value_result\n')),(0,l.kt)("h3",{id:"delete-test-handle"},"Delete test handle"),(0,l.kt)("p",null,"The library supports the Deletion of the handle and its handle record with the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete_function"),". ",(0,l.kt)("a",{parentName:"p",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic interactions")),(0,l.kt)("p",null,"In this example we are going to delete the handle we previously created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    # Delete test\n    delete_result = client.delete_handle(handle)\n    print "OK: Delete handle successfully."\n\n')),(0,l.kt)("h2",{id:"quick-links-to-technical-documentation"},"Quick Links to Technical Documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#instantiation"},"Instantiate Client")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication"},"Authentication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication-using-client-certificates"},"Authentication using client certificates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#authentication-using-username-and-password"},"Authentication using username and password")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#basic-handle-interaction"},"Basic Handle interaction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#full-method-documentation"},"Full method documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#constructors"},"Constructors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#handle-record-methods"},"Handle record methods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#helper-methods"},"Helper methods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.utilhandle"},"Utilities")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.clientcredentials"},"Client credentials")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eudat-b2handle.github.io/PYHANDLE/pyhandleclientrest.html#module-pyhandle.handleexceptions"},"Exceptions"))))}p.isMDXComponent=!0}}]);