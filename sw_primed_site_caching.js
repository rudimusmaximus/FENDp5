// see readme.md for source attributions for service work cache approaches
const initialCacheFiles = [
  '/index.html',
  '/restaurant.html',
  '/css/responsiveIndex.css',
  '/css/responsiveRestaurant.css',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/swregistration.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'];

const cacheName = 'v1';

// Call Install Event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed. Priming cache.');
  e.waitUntil(
      caches.open(cacheName).then((cache) => cache.addAll(initialCacheFiles))
  );
  console.log('Cache is ready.');
});

// Call Activate Event
self.addEventListener('activate', (e) => {
  console.log(`Service Worker: ${cacheName} Activated`);
  // Remove unwanted caches
  e.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
            cacheNames.map((cache) => {
              if (cache !== cacheName) {
                console.log('Service Worker: Clearing old cache named ', cache);
                return caches.delete(cache);
              }
            })
        );
      })
  );
});

// Call Fetch Event
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetching');
  e.respondWith(
      // check if the event request URL already exist within the cache loaded
      // during installation
      caches.match(e.request).then((response) => {
        if (response) {
          // console.log('Confirmed ', e.request, ' is in cache.');
          return response;
        } else {
          // console.log
          // ('No cache for ', e.request, ' , fetching outside cache.');
          return fetch(e.request)
              .then((response) => {
                const clonedResponse = response.clone();
                caches.open(cacheName).then((cache) => {
                  if (clonedResponse) {
                    cache.put(e.request, clonedResponse)
                        .catch((error) => {
                          console.log('Error caching novel clone via put.');
                          // console.error(error, ' for this request ', e.request);
                        });

                    // console.log('Cloned and cached novel response.');
                  }
                });
                return response;
              })
              .catch((error) => {
                console.error(error, ' for this request ', e.request);
              });
        }
      })
  );
});
