"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2210],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){return function(n){var t=m(n.components);return a.createElement(e,i({},n,{components:t}))}},m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},w="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,w=p["".concat(o,".").concat(u)]||p[u]||c[u]||i;return t?a.createElement(w,l(l({ref:n},s),{},{components:t})):a.createElement(w,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[w]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>w,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={id:"windows-types",image:"/img/embed/api-best-practices.jpg",title:"Windows Types",sidebar_label:"Windows Types",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,l={unversionedId:"topics/using-windows-api/windows-types",id:"topics/using-windows-api/windows-types",title:"Windows Types",description:"Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows.",source:"@site/pages/docs/topics/using-windows-api/windows-types.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/windows-types",permalink:"/topics/using-windows-api/windows-types",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-windows-api/windows-types.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"windows-types",image:"/img/embed/api-best-practices.jpg",title:"Windows Types",sidebar_label:"Windows Types",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"General Tips",permalink:"/topics/using-windows-api/windows-tips"}},d={},s=[{value:"Non-Transparent Window",id:"non-transparent-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson",level:4},{value:"Transparent window",id:"transparent-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson-1",level:4},{value:"Native window",id:"native-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson-2",level:4},{value:"Comparison table",id:"comparison-table",level:2},{value:"Sample app",id:"sample-app",level:2}],p=(m="ImageSlider",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var m;const u={toc:s};function w(e){let{components:n,...i}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows."),(0,r.mdx)("h2",{id:"non-transparent-window"},"Non-Transparent Window"),(0,r.mdx)("p",null,"A non-Transparent Window is the ",(0,r.mdx)("strong",{parentName:"p"},"standard")," Overwolf window. A window with borders, control buttons and opacity slider.  "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become white.')),(0,r.mdx)("h4",{id:"example-from-the-manifestjson"},"Example from the manifest.json:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"In order to create this window you should set the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#window-transparent"},"transparent")," property in your manifest.json to 'false'."),(0,r.mdx)("li",{parentName:"ul"},"In order to enable a ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#show_maximize"},"maximize")," / ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#windows-show_minimize"},"minimize"),' buttons, you should set the right flags in the manifest to "true".')),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"windows": {\n    "windowName": {\n      "file": "name.html",\n      "transparent": false,\n      "show_maximize": true, //only relevant for non-transparent windows\n      "show_minimize": true //only relevant for non-transparent windows\n     }\n}\n')),(0,r.mdx)("p",null,"Example for a standard, non-transparent window:"),(0,r.mdx)("p",null,"!",(0,r.mdx)("img",{alt:"standard window",src:t(7512).Z,width:"480",height:"380"})),(0,r.mdx)("h2",{id:"transparent-window"},"Transparent window"),(0,r.mdx)("admonition",{type:"important"},(0,r.mdx)("p",{parentName:"admonition"},"The term transparent might be a bit misleading. This window has no borders, window control buttons or default background \u2013 create those elements by yourself in your HTML/CSS.")),(0,r.mdx)("p",null,"A Transparent Window is a window ",(0,r.mdx)("strong",{parentName:"p"},"without")," borders, control buttons and opacity slider.  "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop behind it.'),(0,r.mdx)("li",{parentName:"ul"},"You should implement the window header with the control elements (like maximize, minimize) independently, by yourself in the HTML/CSS. (you can use our ",(0,r.mdx)("a",{parentName:"li",href:"/start/basic-app/ui-components"},"UI components samples"),")"),(0,r.mdx)("li",{parentName:"ul"},"You should implement dragging behavior independently, by yourself. (you can use our ",(0,r.mdx)("a",{parentName:"li",href:"/start/basic-app/sample-app"},"sample app")," that already implemented this feature)"),(0,r.mdx)("li",{parentName:"ul"},"Avoid full-screen transparent windows. ",(0,r.mdx)("a",{parentName:"li",href:"windows-tips#avoid-full-screen-transparent-windows"},"More info here"),".")),(0,r.mdx)("h4",{id:"example-from-the-manifestjson-1"},"Example from the manifest.json:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"In order to create this window you should set the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#window-transparent"},"transparent")," property in your manifest.json to 'true'.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"windows": {\n    "windowName": {\n      "file": "name.html",\n      "transparent": true\n     }\n}\n')),(0,r.mdx)("p",null,"Here you can see some examples for transparent windows:"),(0,r.mdx)(p,{mdxType:"ImageSlider"},(0,r.mdx)("img",{src:t(89473).Z,alt:'"transparent" window that is being used in our sample app.'}),(0,r.mdx)("img",{src:t(89619).Z,alt:'"transparent" window that is being used in the Spawning Tool Build Advisor.'}),(0,r.mdx)("img",{src:t(82072).Z,alt:'"transparent" window being used in the Legendary Builds app.'})),(0,r.mdx)("h2",{id:"native-window"},"Native window"),(0,r.mdx)("p",null,"If your app includes a window that will only be visible on desktop, either before, after or on a 2nd screen during game (desktop_only:true), you should define this window as a ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#native_window"},'"native"'),".  "),(0,r.mdx)("p",null,"It will dramatically improve your app performance and help design an efficient, elegant product."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A native window is always a non-transparent window."),(0,r.mdx)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become black.'),(0,r.mdx)("li",{parentName:"ul"},"You should implement the window header with the control elements (like maximize, minimize) independently, by yourself in the HTML/CSS. (you can use our ",(0,r.mdx)("a",{parentName:"li",href:"/start/basic-app/ui-components"},"UI components samples"),")"),(0,r.mdx)("li",{parentName:"ul"},"You should implement dragging behavior independently, by yourself. (you can use our ",(0,r.mdx)("a",{parentName:"li",href:"/start/basic-app/sample-app"},"sample app")," that already implemented this feature)"),(0,r.mdx)("li",{parentName:"ul"},"Native windows change their size according to the users' DPI automagically. (to disable that use the disable_auto_dpi_sizing flag)"),(0,r.mdx)("li",{parentName:"ul"},"On native window, ",(0,r.mdx)("inlineCode",{parentName:"li"},"window.screen")," returns the dimensions of the desktop with calculating DPI. (on non-native window, it returns without calculating DPI)")),(0,r.mdx)("h4",{id:"example-from-the-manifestjson-2"},"Example from the manifest.json:"),(0,r.mdx)("p",null,"add the following flags to that window's data in the app\u2019s manifest.json file:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"desktop_only": true,\n"native_window":true,\n')),(0,r.mdx)("h2",{id:"comparison-table"},"Comparison table"),(0,r.mdx)("p",null,"To summarize, these are the main differences between the transparent, non-transparent, and native windows:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Feature"),(0,r.mdx)("th",{parentName:"tr",align:null},"transparent"),(0,r.mdx)("th",{parentName:"tr",align:null},"non-transparent"),(0,r.mdx)("th",{parentName:"tr",align:null},"native"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"desktop_only support"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"in_game_only support"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"-")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"built-in controls (maximize,minimize)"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"-")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"built-in dragging"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"-")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"built-in resizing"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"See-through background"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"- (white bg)"),(0,r.mdx)("td",{parentName:"tr",align:null},"- (black bg)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"DPI-Aware mechanic"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"+")))),(0,r.mdx)("h2",{id:"sample-app"},"Sample app"),(0,r.mdx)("p",null,"You should download our ",(0,r.mdx)("a",{parentName:"p",href:"/start/basic-app/sample-app"},"sample app"),", it covers transparent/non-transparent window creation and much more."))}w.isMDXComponent=!0},89619:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/transparent-overwolf-window-2-d12d01bf88bedc9543197112977b268c.jpg"},82072:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/transparent-overwolf-window-3-38affd711281836410eeff470a7d4b98.jpg"},89473:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/transparent-window-89080117de5d9c8fefe6927a4d6792a5.png"},7512:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/standard-window-ff57751a94c953ae00a6606a1b836886.png"}}]);