const CACHE='mingde-v5';
const ASSETS=['./','./index.html','./styles.css?v=5','./app.js?v=5','./questions.js?v=5','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const fresh=['document','script','style'].includes(e.request.destination);e.respondWith(fresh?fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))):caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const copy=n.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return n}))) });
