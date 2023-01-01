"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5847],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>c,mdx:()=>w,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){return function(t){var n=p(t.components);return a.createElement(e,d({},t,{components:n}))}},p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||d;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<d;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const d={id:"ads-sdk-interaction",image:"/img/embed/getting-started.jpg",title:"Managing Ads",sidebar_label:"Managing Ads",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,i={unversionedId:"start/monetize-with-ads/ads-sdk-interaction",id:"start/monetize-with-ads/ads-sdk-interaction",title:"Managing Ads",description:"The Ads object",source:"@site/pages/docs/start/monetize-with-ads/ads-sdk-interaction.mdx",sourceDirName:"start/monetize-with-ads",slug:"/start/monetize-with-ads/ads-sdk-interaction",permalink:"/start/monetize-with-ads/ads-sdk-interaction",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-with-ads/ads-sdk-interaction.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1671959877,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{id:"ads-sdk-interaction",image:"/img/embed/getting-started.jpg",title:"Managing Ads",sidebar_label:"Managing Ads",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Ads Monetization Basics",permalink:"/start/monetize-with-ads/ads-monetization-basics"},next:{title:"Configuring your Ads",permalink:"/start/monetize-with-ads/ads-sdk-options"}},s={},l=[{value:"The Ads object",id:"the-ads-object",level:2},{value:"Functions",id:"functions",level:3},{value:"Notes",id:"notes",level:3},{value:"Events",id:"events",level:3},{value:"Showing multiple ads",id:"showing-multiple-ads",level:3},{value:"Checking the window state change",id:"checking-the-window-state-change",level:2},{value:"In-game windows with Ads",id:"in-game-windows-with-ads",level:3},{value:"Ads Type Definitions",id:"ads-type-definitions",level:2},{value:"Sample code for handling ads with minimized/restored window",id:"sample-code-for-handling-ads-with-minimizedrestored-window",level:4}],m={toc:l};function p(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"the-ads-object"},"The Ads object"),(0,r.mdx)("p",null,"Calling a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"OwAd()")," will return a javascript object which you can use to control the displayed ad."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"To prevent ads being called but not shown, use ",(0,r.mdx)("strong",{parentName:"p"},"removeAd()")," on minimizing/hiding and ",(0,r.mdx)("strong",{parentName:"p"},"refreshAd()")," on restoring.")),(0,r.mdx)("h3",{id:"functions"},"Functions"),(0,r.mdx)("p",null,"This object has the following functions you can call on-demand:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"center"},"Function"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"center"},"removeAd"),(0,r.mdx)("td",{parentName:"tr",align:null},"Removes current ad from the DOM")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"center"},"refreshAd"),(0,r.mdx)("td",{parentName:"tr",align:null},"Refreshes ad and loads a new one ",(0,r.mdx)("br",null)," Note that this will cause the ad to scroll into view if not already visible")))),(0,r.mdx)("h3",{id:"notes"},"Notes"),(0,r.mdx)("p",null,"When calling a ",(0,r.mdx)("strong",{parentName:"p"},"new OwAd()"),", please do not use ",(0,r.mdx)("strong",{parentName:"p"},"refreshAd()"),".\nOn minimizing/hiding an OW window with Ads, no need to delete or destroy the ",(0,r.mdx)("strong",{parentName:"p"},"owAd")," object.",(0,r.mdx)("br",{parentName:"p"}),"\n","Instead, call the ",(0,r.mdx)("strong",{parentName:"p"},"removeAd()")," method.",(0,r.mdx)("br",{parentName:"p"}),"\n","When the window is restored, call the same ",(0,r.mdx)("strong",{parentName:"p"},"owAd")," instance\u2019s ",(0,r.mdx)("strong",{parentName:"p"},"refreshAd()")," method."),(0,r.mdx)("h3",{id:"events"},"Events"),(0,r.mdx)("p",null,"You can use Overwolf ad objects created by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"new OwAd()"),") to listen to events related to the displayed ad. Registering an event can be done by calling the function ",(0,r.mdx)("strong",{parentName:"p"},"addEventListener")," on the ad object. Like other libraries, the first parameter sent to ",(0,r.mdx)("strong",{parentName:"p"},"addEventListener")," is the name of the event, and the second is a handler function for the event."),(0,r.mdx)("p",null,"The following events are supported:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"th"},"Event Name")),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"th"},"Fired When")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"player_loaded"),(0,r.mdx)("td",{parentName:"tr",align:null},"Ad video player successfully loaded on page*")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"display_ad_loaded"),(0,r.mdx)("td",{parentName:"tr",align:null},"Display ad was served instead of a video ad")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"play"),(0,r.mdx)("td",{parentName:"tr",align:null},"Ad started playing / Display ad presented")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"impression"),(0,r.mdx)("td",{parentName:"tr",align:null},"Video \u201cimpression\u201d \u2013 Depends on the advertiser, the impression event gets triggered after 0-6 seconds *")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"complete"),(0,r.mdx)("td",{parentName:"tr",align:null},"Video ad played fully until completed *")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"error"),(0,r.mdx)("td",{parentName:"tr",align:null},"Error occurred while trying to load ad *")))),(0,r.mdx)("p",null,"*"," Only relevant for video ads"),(0,r.mdx)("h3",{id:"showing-multiple-ads"},"Showing multiple ads"),(0,r.mdx)("p",null,"If you wish to show more than one ad on your app, you can easily do so by creating multiple instances of ",(0,r.mdx)("inlineCode",{parentName:"p"},"OwAd"),". Just make sure you pass a different container element for each instance."),(0,r.mdx)("h2",{id:"checking-the-window-state-change"},"Checking the window state change"),(0,r.mdx)("p",null,"To check when the window is minimized or restored, you can use the ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#onstatechanged"},"overwolf.windows.onStateChanged")," event."),(0,r.mdx)("p",null,"Note that the ",(0,r.mdx)("em",{parentName:"p"},"onStateChanged")," event is being fired for all the declared windows listening to this event (background, in-game, desktop, etc.). Make sure to test the window name/id arguments that are passed to the event to see if the window with the Ad Is the window that triggered the state change. "),(0,r.mdx)("p",null,"Otherwise, you might end up with unnecessary wrong calls to the ",(0,r.mdx)("strong",{parentName:"p"},"refreshAd()")," and ",(0,r.mdx)("strong",{parentName:"p"},"removeAd()"),"."),(0,r.mdx)("h3",{id:"in-game-windows-with-ads"},"In-game windows with Ads"),(0,r.mdx)("p",null,"As we mentioned above, when you change a window state (minimize, hide, restore), the ",(0,r.mdx)("strong",{parentName:"p"},"onStateChanged")," event is fired. But that is not the case if you minimize the GAME WINDOW itself, Alt+Tab from it, use Win+D to minimize all your open apps, or even click outside of the windowed game."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"When your game window loses focus, the in-game window state inside it will not change, and the ",(0,r.mdx)("strong",{parentName:"p"},"onStateChanged")," event will not be fired.")),(0,r.mdx)("p",null,"That means if your in-game window contains an Ad, and the containing GAME WINDOW is minimized/restored, you will not be able to know when to call ",(0,r.mdx)("strong",{parentName:"p"},"removeAd()")," and ",(0,r.mdx)("strong",{parentName:"p"},"refreshAd()"),". "),(0,r.mdx)("p",null,"If you want to handle that scenario, you can listen to ",(0,r.mdx)("a",{parentName:"p",href:"/api/games#ongameinfoupdated"},"onGameInfoUpdated")," event and stop the ad if ",(0,r.mdx)("strong",{parentName:"p"},"gameInfo.isInFocus")," is false, and refresh it when ",(0,r.mdx)("strong",{parentName:"p"},"gameInfo.isInFocus")," changes to ",(0,r.mdx)("em",{parentName:"p"},"true"),".  (note that LoL might have different behavior, so double-check it)."),(0,r.mdx)("h2",{id:"ads-type-definitions"},"Ads Type Definitions"),(0,r.mdx)("p",null,"Type definitions for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"OwAd")," class and the various interfaces it uses can be found at our ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/types/blob/master/owads.d.ts"},"types")," github.\nImport this file to your app to get autocompletion and type inference with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"OwAd"),"."),(0,r.mdx)("h4",{id:"sample-code-for-handling-ads-with-minimizedrestored-window"},"Sample code for handling ads with minimized/restored window"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'// define the event handler\nfunction onWindowStateChanged(state) {\n  console.log(`Window state changed: ${JSON.stringify(state)}`);\n\n  if(state) {\n    // when state changes to minimized, call removeAd()\n    if (state.window_state === "minimized") {\n      owAdInstance.removeAd();\n    }\n    // when state changes from minimized to normal, call refreshAd()\n    else if(state.window_previous_state === "minimized" && state.window_state === "normal"){\n      owAdInstance.refreshAd();\n    }\n  }\n}\n\n// call the Overwolf api\noverwolf.windows.onStateChanged.removeListener(onWindowStateChanged);\noverwolf.windows.onStateChanged.addListener(onWindowStateChanged);\n')))}p.isMDXComponent=!0}}]);