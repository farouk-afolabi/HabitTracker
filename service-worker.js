const CACHE_NAME = "to-do-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/HabitTracker/",
  "/HabitTracker /index.html",
  "/HabitTracker /style.css",
  "/HabitTracker /script.js",
  "/HabitTracker /manifest.json",
  "/HabitTracker /icons/icon-128.png",
  "/HabitTracker /icons/icon-512.png",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
