const CACHE_NAME = 'pwa-reza-hartono';

const urlsToCache = [
    '/',
    '/index.html',
    '/assets/js/jquery-3.6.4.min.js',
    '/assets/js/util.js',
    '/assets/js/common.js',
    '/assets/images/favicon.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // If the request is in the cache, return it
                if (response) {
                    return response;
                }
                // Otherwise, fetch the request and cache it
                return fetch(event.request)
                    .then(response => {
                        return caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, response.clone());
                                return response;
                            });
                    });
            })
    );
});
