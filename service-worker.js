const CACHE_NAME = "habit-tracker-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/HabitTracker/",
  "/HabitTracker/index.html",
  "/HabitTracker/style.css",
  "/HabitTracker/app.js",
  "/HabitTracker/manifest.json",
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
