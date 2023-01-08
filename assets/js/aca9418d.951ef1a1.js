"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6918],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>l});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),l=function(e){return function(n){var t=c(n.components);return a.createElement(e,r({},n,{components:t}))}},c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},w=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),m=o,u=l["".concat(i,".").concat(m)]||l[m]||f[m]||r;return t?a.createElement(u,s(s({ref:n},d),{},{components:t})):a.createElement(u,s({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=w;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}w.displayName="MDXCreateElement"},12250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={id:"components",image:"/img/embed/getting-started.jpg",title:"Sample App Components",sidebar_label:"Components",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,s={unversionedId:"start/basic-app/components",id:"start/basic-app/components",title:"Sample App Components",description:"You can download the latest version from our GitHub here, and read how to setup it here.",source:"@site/pages/docs/start/basic-app/components.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/components",permalink:"/start/basic-app/components",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/basic-app/components.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"components",image:"/img/embed/getting-started.jpg",title:"Sample App Components",sidebar_label:"Components",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Basic App Creation",permalink:"/start/basic-app/"},next:{title:"UX/UI Best Practices",permalink:"/start/basic-app/front-app"}},p={},d=[{value:"manifest.json",id:"manifestjson",level:2},{value:"windows",id:"windows",level:2},{value:"windows/background",id:"windowsbackground",level:3},{value:"windows/in_game",id:"windowsin_game",level:3},{value:"windows/desktop",id:"windowsdesktop",level:3},{value:"windows/AppWindow",id:"windowsappwindow",level:3},{value:"types package",id:"types-package",level:2},{value:"icons",id:"icons",level:2},{value:"css and images",id:"css-and-images",level:2}],l={toc:d};function c(e){let{components:n,...t}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"You can download the latest version from our GitHub ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/sample-app/tree/master/ts"},"here"),", and read how to setup it ",(0,o.mdx)("a",{parentName:"p",href:"sample-app"},"here"),"."),(0,o.mdx)("p",null,"You will find several files and folders in the sample app repository:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"  +---- css\n  +---- img\n  +---- windows\n  +---- icons\n  +---- odk-ts\n  +---- types\n  +---- manifest.json\n  +---- consts.ts\n  +---- package.json\n  +---- tsconfig.json\n  +---- webpack.config.js\n")),(0,o.mdx)("h2",{id:"manifestjson"},"manifest.json"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest"},"manifest")," file is responsible for describing the different aspects of your app. This is a mandatory file for all apps and has to be present in the root folder for your app to function."),(0,o.mdx)("p",null,"In our manifest.json file, we have ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#start_window"},"{start_window:background}")," defined.",(0,o.mdx)("br",{parentName:"p"}),"\n","This sets our ",(0,o.mdx)("a",{parentName:"p",href:"#windows-background"},"background")," window as the app's starting point."),(0,o.mdx)("p",null,"All of this app's windows' properties can be found under the ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#window-data"},"windows")," object."),(0,o.mdx)("h2",{id:"windows"},"windows"),(0,o.mdx)("p",null,"Each app window is based on an HTML file. This folder contains these files for each of your pages."),(0,o.mdx)("h3",{id:"windowsbackground"},"windows/background"),(0,o.mdx)("p",null,"The background folder holds the background window, which serves as the application's starting point and window orchestrator.",(0,o.mdx)("br",{parentName:"p"}),"\n","The window's ",(0,o.mdx)("inlineCode",{parentName:"p"},"run()")," method detects whether a Fortnite game is currently running, decides which window to launch accordingly, and listens for changes."),(0,o.mdx)("p",null,"The background window has no visual representation, which can be gleaned from the empty background.html file or from the ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#is_background_page"},"{is_background_page:true}")," property the background window has in our manifest.json."),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"You can read more about the background controller concept in our ",(0,o.mdx)("a",{parentName:"p",href:"/topics/using-windows-api/communicating-between-windows#using-a-background-controller"},"Communicating between windows")," guide.")),(0,o.mdx)("h3",{id:"windowsin_game"},"windows/in_game"),(0,o.mdx)("p",null,"The in_game window listens to ",(0,o.mdx)("a",{parentName:"p",href:"/api/games/events#oninfoupdates2"},"Info Events")," and ",(0,o.mdx)("a",{parentName:"p",href:"/api/games/events#onnewevents"},"Game Events")," emitted by the game. Furthermore, it defines the behavior for the show/hide hotkey."),(0,o.mdx)("p",null,"Read all about hotkeys ",(0,o.mdx)("a",{parentName:"p",href:"/topics/best-practices/hotkeys-best-practices"},"here"),"."),(0,o.mdx)("h3",{id:"windowsdesktop"},"windows/desktop"),(0,o.mdx)("p",null,"This window serves a purely visual purpose and has no special logic."),(0,o.mdx)("h3",{id:"windowsappwindow"},"windows/AppWindow"),(0,o.mdx)("p",null,"This is a base class that holds the logic shared by the in_game and desktop windows, such as minimize/close, drag, etc."),(0,o.mdx)("h2",{id:"types-package"},"types package"),(0,o.mdx)("p",null,"Currently, the Overwolf SDK is written in javascript. The ",(0,o.mdx)("a",{parentName:"p",href:"/topics/best-practices/type-definition-file"},"type definition file")," holds typescript type definitions for the SDK methods used in this app."),(0,o.mdx)("p",null,"We released the types file as a ",(0,o.mdx)("a",{parentName:"p",href:"https://bit.ly/overwolf-types-npm"},"npm package"),", and the sample app used this package."),(0,o.mdx)("h2",{id:"icons"},"icons"),(0,o.mdx)("p",null,"Mandatory files showing up in the Overwolf dock and other locations:",(0,o.mdx)("br",{parentName:"p"}),"\n","Tile.jpg, IconMouseNormal.png, IconMouseOver.png, desktop-icon.ico."),(0,o.mdx)("h2",{id:"css-and-images"},"css and images"),(0,o.mdx)("p",null,"All of the visual resources used by the app."))}c.isMDXComponent=!0}}]);