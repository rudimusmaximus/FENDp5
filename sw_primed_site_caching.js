// DODO: the global variables are not available to this so re-declare, research
// See RR$ in deployment for mirrored logic
// Must stay in sync to Enums in deployment.js
const swFromProductionEnv = true;
const swDevProdPrefix = swFromProductionEnv ?
  'https://rudimusmaximus.github.io/FENDp5/' : '/';

// see readme.md for source attributions for service work cache approaches
const initialCacheFiles = [
  `${swDevProdPrefix}index.html`,
  `${swDevProdPrefix}restaurant.html`,
  `${swDevProdPrefix}css/responsiveIndex.css`,
  `${swDevProdPrefix}css/responsiveRestaurant.css`,
  `${swDevProdPrefix}css/styles.css`,
  `${swDevProdPrefix}js/dbhelper.js`,
  `${swDevProdPrefix}js/main.js`,
  `${swDevProdPrefix}js/restaurant_info.js`,
  `${swDevProdPrefix}js/swregistration.js`,
  `${swDevProdPrefix}data/restaurants.json`,
  `${swDevProdPrefix}img/1.jpg`,
  `${swDevProdPrefix}img/2.jpg`,
  `${swDevProdPrefix}img/3.jpg`,
  `${swDevProdPrefix}img/4.jpg`,
  `${swDevProdPrefix}img/5.jpg`,
  `${swDevProdPrefix}img/6.jpg`,
  `${swDevProdPrefix}img/7.jpg`,
  `${swDevProdPrefix}img/8.jpg`,
  `${swDevProdPrefix}img/9.jpg`,
  `${swDevProdPrefix}img/10.jpg`];

const cacheName = 'v1';

// Call Install Event
self.addEventListener('install', (e) => {
  console.log(
      `Service Worker: Installed. Priming cache from initial files array.`);
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
                          // console.error(error,
                          // ' for this request ', e.request);
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
