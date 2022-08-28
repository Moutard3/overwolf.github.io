"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3558],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=o,f=d["".concat(i,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(f,p(p({ref:t},s),{},{components:n})):a.createElement(f,p({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],p={id:"basic-app",image:"/img/embed/getting-started.jpg",title:"Creating a basic one window app",sidebar_label:"Basic App Creation"},l=void 0,s={unversionedId:"start/basic-app/basic-app",id:"start/basic-app/basic-app",title:"Creating a basic one window app",description:"To give you a feel for Overwolf's development platform, here's a short explanation on how to create a simple app that displays a single basic Overwolf app window.",source:"@site/pages/docs/start/basic-app/basic-app.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/",permalink:"/start/basic-app/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/basic-app/basic-app.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"basic-app",image:"/img/embed/getting-started.jpg",title:"Creating a basic one window app",sidebar_label:"Basic App Creation"},sidebar:"start",previous:{title:"Using The Dev Tools",permalink:"/start/getting-started/using-dev-tools"},next:{title:"Components",permalink:"/start/basic-app/components"}},d={},m=[{value:"Get the Overwolf client",id:"get-the-overwolf-client",level:2},{value:"Building a demo app from scratch",id:"building-a-demo-app-from-scratch",level:2},{value:"Real world Sample app",id:"real-world-sample-app",level:2}],c={toc:m};function u(e){var t=e.components,p=(0,o.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"To give you a feel for Overwolf's development platform, here's a short explanation on how to create a simple app that displays a single basic Overwolf app window."),(0,r.mdx)("p",null,"In this example, we will develop a one-window app from scratch. This sample window will not interact with game events and not even get injected into any game, it's just a demonstration of how to build and pack a window as an Overwolf app that can be launched from the Overwolf dock."),(0,r.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"To learn how a modern, real-world Overwolf app should look like, refer to ",(0,r.mdx)("a",{parentName:"p",href:"basic-app/sample-app"},"sample app guide"),"."))),(0,r.mdx)("h2",{id:"get-the-overwolf-client"},"Get the Overwolf client"),(0,r.mdx)("p",null,"To build Overwolf apps, you first need to download the Overwolf client.\nYou can find the latest version ",(0,r.mdx)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download?Channel=developers"},"Here"),"."),(0,r.mdx)("h2",{id:"building-a-demo-app-from-scratch"},"Building a demo app from scratch"),(0,r.mdx)("p",null,"This example details the steps in creating a simple, single window Overwolf app. The source code and files that used in this example can be found in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),"."),(0,r.mdx)("p",null,"Let's get to it! To build a one-window app:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create a folder, name it whatever you like.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},'Create a file named "manifest.json" in that folder.')),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},'Copy and paste the manifest code snippet found below into the "manifest.json" file.\nYou can read the ',(0,r.mdx)("a",{parentName:"p",href:"/api/manifest"},"Manifest.json")," section to learn about additional features you can use to make your app even more awesome."))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version":1,\n    "type":"WebApp",\n    "meta":{\n        "name":"Demo App",\n        "version":"1.0.0",\n        "minimum-overwolf-version":"0.199.0.15",\n        "author":"Developer Name",\n        "icon":"IconMouseOver.png",\n        "icon_gray":"IconMouseNormal.png",\n        "description":"Demo App"\n    },\n    "data": {\n        "start_window":"MainWindow",\n        "windows":{\n            "MainWindow":{\n                    "file":"index.html",\n                    "transparent": false,\n                    "resizable": true,\n                    "use_os_windowing": true,\n                    "size": {\n                        "width":700,\n                        "height":400\n                        },\n                    "min_size": {\n                        "width":400,\n                        "height":400\n                    }\n                }\n        }\n    }\n}\n')),(0,r.mdx)("ol",{start:4},(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},'Choose icons for your app and place them in the folder you created. Remember to reference it in the "icon" field of your app\'s manifest.json.\nFor this example you can download sample icons from the ',(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create an ",(0,r.mdx)("inlineCode",{parentName:"p"},"index.html")," file in the main folder and paste this snippet there:  "))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Basic sample app</h1>\n<p>This is a native desktop window that cannot be injected into the game.</p>\n\n</body>\n</html>\n")),(0,r.mdx)("ol",{start:6},(0,r.mdx)("li",{parentName:"ol"},"Pack all the files and icons in the folder as an Overwolf app installer A.K.A ",(0,r.mdx)("a",{parentName:"li",href:"https://discuss.overwolf.com/t/what-is-an-opk-package/23"},'"OPK" package'),":",(0,r.mdx)("br",{parentName:"li"}),"basically zip everything, and change the file extension from ZIP to OPK after you're done.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"You now have a working Overwolf app installer!"),(0,r.mdx)("br",{parentName:"p"}),"\n","You can double click the icon to install the app into the Overwolf dock.  "),(0,r.mdx)("p",null,"To check your app, launch it from the dock, it should show:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"alt-text",src:n(8676).Z,width:"727",height:"400"})),(0,r.mdx)("p",null,"Congratulations! You can now use standard web development techniques to create, debug, and complete your application. The source code and files that used in this example can be found in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),"."),(0,r.mdx)("h2",{id:"real-world-sample-app"},"Real world Sample app"),(0,r.mdx)("p",null,"As mentioned, the app you built is technically working, but does nothing. To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please continue to study our official sample app showcasing what you can do and how.\nContinue to the ",(0,r.mdx)("a",{parentName:"p",href:"basic-app/sample-app"},"sample app guide"),"."))}u.isMDXComponent=!0},8676:function(e,t,n){t.Z=n.p+"assets/images/basic-sample-app-994aa773203629a59262fc517d755874.png"}}]);