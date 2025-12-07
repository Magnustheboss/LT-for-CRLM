// Service Worker for CRLM LT Clinical Resource
// This ensures users always get the latest version

const CACHE_NAME = 'crlm-lt-v' + new Date().getTime();
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/js/search.js',
  '/js/search-index.js',
  '/pages/overview.html',
  '/pages/selection-criteria.html',
  '/pages/outcomes.html',
  '/pages/tools.html',
  '/pages/faq.html',
  '/pages/glossary.html',
  '/pages/case-studies.html',
  '/pages/bridging-therapy.html',
  '/pages/lt-vs-resection.html',
  '/pages/survival-curves.html',
  '/pages/pdf-resources.html',
  '/pages/patient-flowchart.html',
  '/pages/resources.html',
  '/pages/about-research-group.html'
];

// Install event - cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Cache addAll error:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - always try network first, fall back to cache
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    // Try network first
    fetch(event.request)
      .then(response => {
        // If successful, update the cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, use cache
        return caches.match(event.request).then(response => {
          return response || new Response('Offline - Page not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});
