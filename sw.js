const NAME='mon-training-static-v1';
const CORE=['./','./index.html','./style.css','./program.js','./app.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;
 const u=new URL(event.request.url);
 if(u.hostname==='raw.githubusercontent.com' && u.pathname.includes('/free-exercise-db/')){
   event.respondWith(caches.open(NAME).then(async cache=>{const hit=await cache.match(event.request);if(hit)return hit;try{const res=await fetch(event.request);if(res.ok||res.type==='opaque')cache.put(event.request,res.clone());return res;}catch(e){return new Response('',{status:503});}}));return;
 }
 if(u.origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(NAME).then(cache=>cache.put(event.request,copy));}return res;})));
});