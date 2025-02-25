const CACHE_NAME = "habit-tracker-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/HabitTracker/",
  "/HabitTracker/assets/html/index.html",
  "/HabitTracker/assets/html/habits.html",
  "/HabitTracker/assets/css/style.css",
  "/HabitTracker/assets/js/firebase.js",
  "/HabitTracker/style.css",
  "/HabitTracker/assets/js/habits.js",
  "/HabitTracker/assets/js/signIn.js",
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
