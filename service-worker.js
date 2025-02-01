const CACHE_NAME = 'my-cache-v1'; // Version the cache name

// Files to cache
const FILES_TO_CACHE = [
    '/pwa-test/',
    '/pwa-test/index.html',
    '/pwa-test/styles.css',
    '/pwa-test/script.js',
    '/pwa-test/manifest.json',
    '/pwa-test/icon.png',
    '/pwa-test/mobile.png',
    '/pwa-test/desktop.png'
];

// Install event: Cache necessary files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Fetch event: Serve cached files or fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});

// Activate event: Clean up old caches (based on the cache version)
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME]; // Only keep the latest cache
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName); // Delete old caches
                    }
                })
            );
        })
    );
});