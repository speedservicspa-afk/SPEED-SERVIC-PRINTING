const CACHE_NAME = 'speed-servic-produccion-v6';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => Promise.all(['./', './index.html'].map(async path => { const response = await fetch(path, {cache: 'reload'}); if (!response.ok) throw new Error('No se pudo actualizar la aplicación'); await cache.put(path, response); }))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME && (key.startsWith('speed-cervic-') || key.startsWith('speed-servic-'))).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
