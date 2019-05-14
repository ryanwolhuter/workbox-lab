importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Sweet, it's working.`);
  workbox.precaching.precacheAndRoute([
  {
    "url": "style/main.css",
    "revision": "5cc6b8b0154003ba255926700342a1b0"
  },
  {
    "url": "index.html",
    "revision": "4718878d4857640e87d972966cda2370"
  },
  {
    "url": "js/animation.js",
    "revision": "732b3d64bda4cf4594650a7dbbfca326"
  },
  {
    "url": "images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "images/icon/icon.svg",
    "revision": "0d077eac3b5028d3543f7e35908d6ecb"
  }
]);
} else {
  console.log(`Sorry mate, no luck with the service worker.`);
}