import { clientsClaim } from "workbox-core";
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

declare const self: ServiceWorkerGlobalScope;
cleanupOutdatedCaches();

// necessary for vite-plugin-pwa
precacheAndRoute(self.__WB_MANIFEST);
(self as ServiceWorkerGlobalScope).skipWaiting();
clientsClaim();

initializeEvents();

function initializeEvents() {
  const cacheName = `${import.meta.env.VITE_PROJECT_NAME}-cache@v0.0.5`;
  self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
  });

  self.addEventListener("install", (event: ExtendableEvent) => {
    console.log("Service Worker installing...");
    event.waitUntil(
      caches.open(cacheName).then((cache) => {
        return cache.addAll(["/index.html"]);
      }),
    );
  });

  self.addEventListener("activate", (event: ExtendableEvent) => {
    console.log("Service Worker activated.");
  });

  self.addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }),
    );
  });
}
