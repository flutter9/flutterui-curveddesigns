'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"/assets/assets/plate6.png": "a9caf544e96691b39893bb48c08c65bb",
"/assets/assets/plate4.png": "ede3d36563c052ccbd5c0a02d976cc52",
"/assets/assets/plate5.png": "3f172b023ef27d72f3b8784685aae87c",
"/assets/assets/plate3.png": "74149eaf5b5c1a214220f8fe909df1ba",
"/assets/assets/plate1.png": "3d0a5ebe07467e186a103b5879022c40",
"/assets/assets/plate2.png": "264fcaef40763b6bfa90fa05a6242db5",
"/assets/FontManifest.json": "53fbb5832f6cef2c17c5cc5cb205241d",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "f1b8f6b87e724f623681420fc0de6ccb",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "5005ad1dc94140b1bf9de18cf1837eb8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
