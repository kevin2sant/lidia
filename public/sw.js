if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/XhV-h3qbg38Co8-Tey4pd/_buildManifest.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/XhV-h3qbg38Co8-Tey4pd/_middlewareManifest.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/XhV-h3qbg38Co8-Tey4pd/_ssgManifest.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/186-7615caf931013190.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/192-a163143ae73c4480.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/614-93c0beb64f4f0ba1.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/675-c401592ec4892416.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/760-0b9a270aa7814141.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/main-953ef8211fd35280.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/_app-9cd1d19dd7237c4c.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/index-ef1216c105eba5c7.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/layouts/footer-51d93e0c06043fbf.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/layouts/header-4b726a3ba35829a5.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/login-a04f2fa6b285ea2b.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/pages/routes/activeRoutes-799d56d1c2d6a22a.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/chunks/webpack-fd1bc4a65a80e5c8.js",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/css/149b18973e5508c7.css",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/css/54d8bb075162d7ec.css",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/css/5d2c52e888164e26.css",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/css/6b9522326a99bd3b.css",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/css/86cc6ad2c4eec711.css",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/css/d9d3d9392ba2e034.css",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/_next/static/media/loginBG.78716540.png",revision:"XhV-h3qbg38Co8-Tey4pd"},{url:"/bg-ios.jpg",revision:"bc34a5333ddc684305a540dfe9afd1b9"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/login-bg-ios.jpg",revision:"c7c4a53da5844a07da5d24752378b755"},{url:"/loginBG.png",revision:"bc2e452ac1b9223527e05f14cf7a4505"},{url:"/logo.png",revision:"c5e036aa1b23c9fb76995fe92944fa73"},{url:"/logo192.png",revision:"fadd102f15891302f4cd63c153c337b9"},{url:"/logo2.png",revision:"19af5810c96a005b007cbcf3400ebc4f"},{url:"/logo512.png",revision:"19af5810c96a005b007cbcf3400ebc4f"},{url:"/manifest.json",revision:"813e8257090475d4830bb9b53f444849"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
