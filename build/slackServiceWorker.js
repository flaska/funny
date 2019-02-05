// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const cacheName = 'precache-manifest.eccf1f6ede064900235737c59a1e440e.js';
importScripts("precache-manifest.eccf1f6ede064900235737c59a1e440e.js");
const urlsToCache = self.__precacheManifest.map(e=>e.url);

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(urlsToCache))
            .then(self.skipWaiting())
    );
});

function deleteOldCache(){
    return caches.keys().then(cacheNames => {
        return cacheNames.filter(name => name!=cacheName);
    }).then(cachesToDelete => {
        return Promise.all(cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
        }));
    }).then(() => self.clients.claim());
}

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    event.waitUntil(deleteOldCache());
});

self.addEventListener('fetch', event => {
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
    if (!event.request.url.startsWith(self.location.origin)) return;
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );

});