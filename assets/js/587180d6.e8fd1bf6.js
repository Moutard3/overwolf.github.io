"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5196],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},v=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,v=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return t?o.createElement(v,i(i({ref:n},p),{},{components:t})):o.createElement(v,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=v;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},46596:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"release-notes",image:"/img/embed/api-best-practices.jpg",title:"Release notes",sidebar_label:"Release notes"},l=void 0,p={unversionedId:"topics/developers-console/release-notes",id:"topics/developers-console/release-notes",title:"Release notes",description:"This article explains how to publish and display public release notes for each of your app versions.",source:"@site/pages/docs/topics/developers-console/release-notes.mdx",sourceDirName:"topics/developers-console",slug:"/topics/developers-console/release-notes",permalink:"/topics/developers-console/release-notes",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/developers-console/release-notes.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660734477,formattedLastUpdatedAt:"8/17/2022",frontMatter:{id:"release-notes",image:"/img/embed/api-best-practices.jpg",title:"Release notes",sidebar_label:"Release notes"},sidebar:"topics",previous:{title:"Rating and reviews",permalink:"/topics/developers-console/rating-and-reviews"},next:{title:"Submit a new version",permalink:"/topics/developers-console/submit-a-new-version"}},c={},m=[{value:"Public release notes",id:"public-release-notes",level:2},{value:"How to publish new release notes:",id:"how-to-publish-new-release-notes",level:3},{value:"How to request the relevant notes from the Overwolf release notes endpoint:",id:"how-to-request-the-relevant-notes-from-the-overwolf-release-notes-endpoint",level:3}],d={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This article explains how to publish and display public release notes for each of your app versions."),(0,a.mdx)("h2",{id:"public-release-notes"},"Public release notes"),(0,a.mdx)("h3",{id:"how-to-publish-new-release-notes"},"How to publish new release notes:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Upload a new OPK to the production environment on the Developers Console."),(0,a.mdx)("li",{parentName:"ol"},'Click on the "Add release notes" button.'),(0,a.mdx)("li",{parentName:"ol"},"Enter your release notes for this version in the markdown format (you can also use the predefined headers: ",(0,a.mdx)("inlineCode",{parentName:"li"},"(new)"),", ",(0,a.mdx)("inlineCode",{parentName:"li"},"(improved)")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"(bugs)"),")"),(0,a.mdx)("li",{parentName:"ol"},'Preview your release notes by clicking the "Preview" button.'),(0,a.mdx)("li",{parentName:"ol"},'Make sure that the "Publish" switch is on.'),(0,a.mdx)("li",{parentName:"ol"},"Save ")),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"It takes a few minutes from when release notes are updated until they will show up on the endpoint."))),(0,a.mdx)("h3",{id:"how-to-request-the-relevant-notes-from-the-overwolf-release-notes-endpoint"},"How to request the relevant notes from the Overwolf release notes endpoint:"),(0,a.mdx)("p",null,"Request:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"GET https://console-api.overwolf.com/v1/apps/<uid>/versions/<version>/release-notes/<page>`\n")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"uid")," - your app's UID"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"version")," - you will get release notes for this version and below"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"page")," - pagination (you get 3 versions / notes per page)"),(0,a.mdx)("p",null,"Response:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "versions": [\n    {\n      "important": Boolean,\n      "version": String,\n      "html": String,\n      "timestamp": Number\n    }\n  ],\n  "meta": {\n    "perPage": Number\n  }\n}\n')),(0,a.mdx)("p",null,"Example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"GET https://console-api.overwolf.com/v1/apps/npijmgiaiiemcnijaljcfddgeihcbifdbhpffihe/versions/3.1.5/release-notes/1\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "versions": [\n    {\n      "important": true,\n      "version": "3.1.5",\n      "html": "<p>release notes for 3.1.5</p>",\n      "timestamp": 1643024580643\n    },\n    {\n      "important": false,\n      "version": "3.0.33",\n      "html": "<p>release notes for 3.0.33</p>",\n      "timestamp": 1643036589211\n    },\n    {\n      "important": false,\n      "version": "2.0.0",\n      "html": "<p>release notes for 2.0.0</p>",\n      "timestamp": 1643036589211\n    }\n  ],\n  "meta": {\n    "perPage": 3\n  }\n}\n')))}u.isMDXComponent=!0}}]);