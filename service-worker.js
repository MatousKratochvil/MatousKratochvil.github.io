!function(){"use strict";const e=["client/SvgTopWave.0a8aead8.js","client/SvgBottomWave.925a1bc6.js","client/index.d9fcd3de.js","client/index.831882d3.js","client/about.797569ee.js","client/index.af8c009b.js","client/[slug].6ee8dc4e.js","client/[slug].839b4f41.js","client/client.e36a05df.js"].concat(["service-worker-index.html","avatar.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","successkid.jpg","unit-testing.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1597567948957").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1597567948957"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1597567948957").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
