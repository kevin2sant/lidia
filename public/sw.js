if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/192-a163143ae73c4480.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/261-dd41a30b2aafc5d1.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/286-458e6839992c3259.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/294-0ff71213896065a1.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/298-c2dad81d31900360.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/main-953ef8211fd35280.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/_app-9cd1d19dd7237c4c.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/index-14bf86208c0a3f40.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/layouts/footer-014e6ff3d56569a3.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/layouts/header-f97dd3df6c70c679.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/login-7274b07e6fa89601.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/pages/routes/activeRoutes-9f7524f52f824c1b.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/chunks/webpack-fd1bc4a65a80e5c8.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/css/149b18973e5508c7.css",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/css/54d8bb075162d7ec.css",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/css/5d2c52e888164e26.css",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/css/6b9522326a99bd3b.css",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/css/86cc6ad2c4eec711.css",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/css/d9d3d9392ba2e034.css",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/eg34FXMTKbqLvi1jmROxv/_buildManifest.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/eg34FXMTKbqLvi1jmROxv/_middlewareManifest.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/eg34FXMTKbqLvi1jmROxv/_ssgManifest.js",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/_next/static/media/loginBG.78716540.png",revision:"eg34FXMTKbqLvi1jmROxv"},{url:"/bg-ios.jpg",revision:"bc34a5333ddc684305a540dfe9afd1b9"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/login-bg-ios.jpg",revision:"c7c4a53da5844a07da5d24752378b755"},{url:"/loginBG.png",revision:"bc2e452ac1b9223527e05f14cf7a4505"},{url:"/logo.png",revision:"c5e036aa1b23c9fb76995fe92944fa73"},{url:"/logo192.png",revision:"fadd102f15891302f4cd63c153c337b9"},{url:"/logo2.png",revision:"19af5810c96a005b007cbcf3400ebc4f"},{url:"/logo512.png",revision:"19af5810c96a005b007cbcf3400ebc4f"},{url:"/manifest.json",revision:"813e8257090475d4830bb9b53f444849"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
