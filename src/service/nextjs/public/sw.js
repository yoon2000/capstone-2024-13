if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const r=e=>a(e,n),u={module:{uri:n},exports:c,require:r};i[n]=Promise.all(s.map((e=>u[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cc5d89f1e5c8f6de1e1dedd859508914"},{url:"/_next/static/chunks/126-77bf41582168d4a3.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/173-aa536a03da00d03b.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/18-2d8209b044b05cbd.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/23-fec1b2459ce26aa2.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/231-fb456c6da5063f0a.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/460-9706faa5b8915a87.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/719-23281a66dfccf437.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/749-6fa243f35fb476f1.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/813-a20f7c9b8e4b2de0.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/album/%5Bid%5D/page-841638f52ca40e3f.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/album/diary/%5Bid%5D/page-e802d704d0794213.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/album/diary/page-aa005f0264f21225.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/album/page-90ba869a535233a8.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/diary/page-8df78933922ec9d8.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/layout-bf8a10c322730593.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/mypage/page-2b526ee5e4f7dc6f.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/search/diary/%5Bid%5D/page-8fca1975778bf9ca.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(private)/search/page-9e7db860f3ed030b.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(public)/auth/login/callback/page-5812646c6b84ae4f.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(public)/auth/login/page-1c747373b41b286f.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(public)/auth/register/page-1dbfd076e3bc5503.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/(public)/layout-dd0e8834ca905cb4.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/layout-c6aa58656cac791e.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/(route)/page-927c19e3ae9bf306.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/app/_not-found/page-87b0ae4bd1900e43.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/fd9d1056-90960e0a7e77703c.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/main-app-1988f10ac28d38c6.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/main-f8c22e59a3c44154.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b4001eb4361f2bd7.js",revision:"ykxku3ikTglzb0HBti7pR"},{url:"/_next/static/css/41e41cfb4fad702b.css",revision:"41e41cfb4fad702b"},{url:"/_next/static/css/4ec260ce4cfd1be4.css",revision:"4ec260ce4cfd1be4"},{url:"/_next/static/css/5ab639af889da55b.css",revision:"5ab639af889da55b"},{url:"/_next/static/css/5b8a160aef722223.css",revision:"5b8a160aef722223"},{url:"/_next/static/css/71895e9177fb8233.css",revision:"71895e9177fb8233"},{url:"/_next/static/css/b578fcc59c514ed4.css",revision:"b578fcc59c514ed4"},{url:"/_next/static/css/bcbf24ef56c03c99.css",revision:"bcbf24ef56c03c99"},{url:"/_next/static/css/be29e5f4359c9973.css",revision:"be29e5f4359c9973"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Pretendard-Black.2fdd7ecc.woff",revision:"2fdd7ecc"},{url:"/_next/static/media/Pretendard-Bold.2c1ad0e1.woff",revision:"2c1ad0e1"},{url:"/_next/static/media/Pretendard-ExtraBold.bf3b77f7.woff",revision:"bf3b77f7"},{url:"/_next/static/media/Pretendard-ExtraLight.4877192c.woff",revision:"4877192c"},{url:"/_next/static/media/Pretendard-Light.5e8f67e5.woff",revision:"5e8f67e5"},{url:"/_next/static/media/Pretendard-Medium.55b46aea.woff",revision:"55b46aea"},{url:"/_next/static/media/Pretendard-Regular.78df9e04.woff",revision:"78df9e04"},{url:"/_next/static/media/Pretendard-SemiBold.a963592c.woff",revision:"a963592c"},{url:"/_next/static/media/Pretendard-Thin.f17a53aa.woff",revision:"f17a53aa"},{url:"/_next/static/media/Roboto-Medium.25194e14.woff",revision:"25194e14"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/ykxku3ikTglzb0HBti7pR/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/ykxku3ikTglzb0HBti7pR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/background-image.png",revision:"d0f7ac680038ff55b41efe70868ecfb5"},{url:"/default-image-00.png",revision:"0c8751ad28f45de998a3356b4d33b330"},{url:"/default-image-01.png",revision:"ee93a2e40e6d64d06392ee2d144b69fd"},{url:"/default-image-02.png",revision:"767ff18945b15a4d9c5ba7939250f5ce"},{url:"/default-image-03.png",revision:"029d3fd05dbc6be85a53872f828f0162"},{url:"/default-image-04.png",revision:"db0e62e478f4f19d2f88f68ace6862e0"},{url:"/default-image-05.png",revision:"b1571288ba2c160f2b614d4e67d4ee3e"},{url:"/default-image-06.png",revision:"b845b5865db707e9138544586a8ff675"},{url:"/default-image-07.png",revision:"63896b1616666e788dce960333624836"},{url:"/default-image-08.png",revision:"52009bd8a298e3aa6bb82c8cee32075d"},{url:"/default-image-09.png",revision:"55786e787ac841b04ca609d38c6e6a98"},{url:"/default-profile-image.png",revision:"323e4c81656f4694aab25262cfebb9d6"},{url:"/icon-192.png",revision:"7d20225155c11d5be75ec54cd340a012"},{url:"/icon-512.png",revision:"3b3ce2f6ef84b6d76ac520075732f67d"},{url:"/manifest.webmanifest",revision:"949a9e9d2648579c32f97703786406f0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/test-image-00.png",revision:"f37fb6975fd8d23fd990d640e0a2cada"},{url:"/test-image-01.png",revision:"2b613fefd8799bb97d81588cde1497cd"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/you-know-what.png",revision:"02157a3ecb7855d0d2289a39d4aa0373"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
