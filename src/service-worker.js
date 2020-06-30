import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { cleanupOutdatedCaches,  precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

skipWaiting();
clientsClaim();

cleanupOutdatedCaches();
precacheAndRoute( self.__WB_MANIFEST );

// caheado de los archivos de .js
registerRoute(
  new RegExp('.+\\.js$'),
  new StaleWhileRevalidate({
      cacheName: 'js-cache',
      plugins: [
          new ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 60 * 60 * 24 * 7,
            purgeOnQuotaError: true,
          }),
          new CacheableResponsePlugin({ statuses: [0, 200] })
      ]
  })
);


// caheado de los archivos de .css
registerRoute(
  new RegExp('.+\\.css$'),
  new StaleWhileRevalidate({
      cacheName: 'css-cache',
      plugins: [
          new ExpirationPlugin({
            maxEntries: 5,
            maxAgeSeconds: 60 * 60 * 24 * 7,
            purgeOnQuotaError: true,
          }),
          new CacheableResponsePlugin({ statuses: [0, 200] })
      ]
  })
)


// cacheado de archivos
registerRoute(
  new RegExp('.+\\.(png|jpg|jpeg|svg|pdf)$'),
  new CacheFirst({
      cacheName: 'file-cache',
      plugins: [
          new ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 60 * 60 * 24 * 7,
            purgeOnQuotaError: true,
          }),
          new CacheableResponsePlugin({ statuses: [0, 200] })
      ]
  })
)


registerRoute(
  new RegExp('/.*'),
  new CacheFirst({
      cacheName: 'other-cache',
      plugins: [
          new ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 60 * 60 * 24 * 7,
            purgeOnQuotaError: true,
          }),
          new CacheableResponsePlugin({ statuses: [0, 200] })
      ]
  })
)

// cacheado del resto de archivos
registerRoute(
  new RegExp('/.*'),
  new NetworkFirst({}),
  'GET'
);