import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache all assets generated by webpack
precacheAndRoute(self.__WB_MANIFEST || []);

// Cache API requests (stories)
registerRoute(
  ({ url }) => url.origin === 'https://story-api.dicoding.dev',
  new StaleWhileRevalidate({
    cacheName: 'api-cache',
  })
);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'image-cache',
  })
);
