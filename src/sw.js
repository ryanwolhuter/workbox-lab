importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Sweet, it's working.`);
  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Sorry mate, no luck with the service worker.`);
}

workbox.routing.registerRoute(
  /(.*)articles(.*)\.(?:png|gif|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      })
    ]
  })
);

workbox.routing.registerRoute(
  new RegExp('/images/icon/*'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'icon-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 5
      })
    ]
  })
);