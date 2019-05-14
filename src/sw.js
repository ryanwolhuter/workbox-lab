importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Sweet, it's working.`);
  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Sorry mate, no luck with the service worker.`);
}