"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2619],{35318:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},i.apply(this,arguments)}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),c=function(e){return function(t){var o=u(t.components);return a.createElement(e,i({},t,{components:o}))}},u=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(o),p=n,m=c["".concat(r,".").concat(p)]||c[p]||h[p]||i;return o?a.createElement(m,s(s({ref:t},d),{},{components:o})):a.createElement(m,s({ref:t},d))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=w;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}w.displayName="MDXCreateElement"},71590:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=o(25773),n=(o(27378),o(35318));const i={id:"exclusive-mode",image:"/img/embed/api-best-practices.jpg",title:"Exclusive Mode Overlay",sidebar_label:"Exclusive Mode Overlay",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,s={unversionedId:"topics/best-practices/exclusive-mode",id:"topics/best-practices/exclusive-mode",title:"Exclusive Mode Overlay",description:"Overwolf apps are supported in many games. Each one behaves in its own unique way, and requires to be treated differently.",source:"@site/pages/docs/topics/best-practices/exclusive-mode.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/exclusive-mode",permalink:"/topics/best-practices/exclusive-mode",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/exclusive-mode.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"exclusive-mode",image:"/img/embed/api-best-practices.jpg",title:"Exclusive Mode Overlay",sidebar_label:"Exclusive Mode Overlay",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Enable Developer Tools",permalink:"/topics/best-practices/enable-dev-tools"},next:{title:"First time user experience",permalink:"/topics/best-practices/first-time-user-experience"}},l={},d=[{value:"What is exclusive mode",id:"what-is-exclusive-mode",level:2},{value:"How to enable exclusive mode",id:"how-to-enable-exclusive-mode",level:2},{value:"Ctrl + Tab",id:"ctrl--tab",level:3},{value:"Using Hotkey",id:"using-hotkey",level:3},{value:"Automatically on window launch",id:"automatically-on-window-launch",level:3},{value:"Special Overlays",id:"special-overlays",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Overwolf apps are supported in many games. Each one behaves in its own unique way, and requires to be treated differently."),(0,n.mdx)("p",null,"In games which have a state without a mouse cursor (usually FPS), we\u2019ll need to provide users a way to activate the Overwolf app, and a way to control and interact with the app\u2019s window."),(0,n.mdx)("p",null,"One way to do so is by changing Overwolf\u2019s overlay options to exclusive mode. In this article we\u2019re going to explain how to activate it, and how to detect and deal with cases that can disable it (e.g, full screen without borders setting)."),(0,n.mdx)("h2",{id:"what-is-exclusive-mode"},"What is exclusive mode"),(0,n.mdx)("p",null,"As mentioned above, in FPS games such as CSGO, World of Tanks, Fortnite, Warzone and more - there\u2019s no mouse cursor. The user can't control the Overwolf app window. The only way to interact with the OW apps window is to set the app window into \"exclusive mode\" \u2013 the game window becomes semi-transparent, input doesn't pass to the game, and a cursor interacts with the OW app available."),(0,n.mdx)("h2",{id:"how-to-enable-exclusive-mode"},"How to enable exclusive mode"),(0,n.mdx)("p",null,"There are two options to enable the exclusive mode while you are in a game:"),(0,n.mdx)("h3",{id:"ctrl--tab"},"Ctrl + Tab"),(0,n.mdx)("p",null,"Hitting Ctrl + tab while you are in a game set OW in exclusive mode - the game window get semi-transparent background, the OW dock is shown, and you can interact with your OW app's windows (if any windows are open).  "),(0,n.mdx)("p",null,'Hitting ctrl+tab again or clicking outside of the OW app\'s window will "release" the exclusive mode.'),(0,n.mdx)("h3",{id:"using-hotkey"},"Using Hotkey"),(0,n.mdx)("p",null,"If you have a window that is bundled to a hotkey, and you want to enter into an exclusive mode when the hotkey is fired, you should:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Set the flag ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#focus_game_takeover"},"focus_game_takeover")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"ReleaseOnHidden"),"."),(0,n.mdx)("li",{parentName:"ul"},"Set the ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#focus_game_takeover_release_hotkey"},"focus_game_takeover_release_hotkey")," to the hotkey name. ")),(0,n.mdx)("p",null,"When the hotkey is fired, the window will show up and enter exclusive mode (enabling user interaction and accepting input from the user). When the hotkey is clicked again - the window will hide and exit the exclusive mode."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"hotkey",src:o(55016).Z,width:"1920",height:"1080"})),(0,n.mdx)("p",null,'In the above screenshot, you can see that the background is semi-transparent, and at the top of the screen a notification that guides the user which hotkey release the exclusive mode: "Ctrl + F to hide this app and return to the game". Of course, the key combination will change according to the current hotkey.'),(0,n.mdx)("h3",{id:"automatically-on-window-launch"},"Automatically on window launch"),(0,n.mdx)("p",null,"If you have a window that displayed automatically (a startup window, for example) and you want to enter exclusive mode automatically when the window is shown, you should:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Set the flag ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#focus_game_takeover"},"focus_game_takeover")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"ReleaseOnLostFocus"),".")),(0,n.mdx)("p",null,"When the window is launched, it automatically enters exclusive mode (and enables user interaction and accepts input from the user).\nOnce the user clicks outside the window, the window will exit the exclusive mode."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"ctrl-tab",src:o(47475).Z,width:"1907",height:"1069"})),(0,n.mdx)("p",null,'In the above screenshot, you can see at the top of the screen a general notification that guides the user "hide all apps to return to the game".'),(0,n.mdx)("h2",{id:"special-overlays"},"Special Overlays"),(0,n.mdx)("p",null,"Several specific games: CSGO, Warzone, and Destiny 2, have some additional limitations in addition to the exclusive that is required to interact with the OW windows: "),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"When one of these games is running in non-borderless fullscreen mode (other modes are fullscreen borderless and windowed mode), the exclusive mode is completely disabled, and there's no option to interact with your app's window at all.  The only thing that you can do is to notify the user and ask them to change game mode to fullscreen borderless or windowed mode.",(0,n.mdx)("br",{parentName:"p"}),"\n",(0,n.mdx)("strong",{parentName:"p"},"To detect if the game is running in non-borderless fullscreen, read the ",(0,n.mdx)("a",{parentName:"strong",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo.exclusiveModeDisabled")," property. If it's ",(0,n.mdx)("inlineCode",{parentName:"strong"},"true"),", it means that the exclusive mode is disabled, and you should display the user notification about it.")," (suggest him to change the mode to fullscreen borderless or windowed mode. Otherwise he will not be able to interact with your app's windows )")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Overwolf allowed capturing these games only when it's in fullscreen-borderless mode. If the game is in fullscreen non-borderless or windowed mode (we'll support it also very soon), the capture will not work correctly."))))}u.isMDXComponent=!0},47475:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ctrl-tab-6f2de02ca525b2b8f8178989735879b1.png"},55016:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/hotkey-27f77a93c9b54c03f74d4bc6c5c5d08a.png"}}]);