const cacheName = 'precache-manifest.69fb55ef9eba54b1c30c52be8c10d644.js';
importScripts("precache-manifest.69fb55ef9eba54b1c30c52be8c10d644.js");

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
    if (event.request.url.startsWith(self.location.origin)) {
        let url = event.request.url.replace(/^.+\/\/.+\//,'');
        if (url==='') url = 'index.html';
        event.respondWith(
            //TODO - ask only my PRECACHE cache
            caches.match(url).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request);
            })
        );
    }
});