// The global variables are not available to this so re-declare,
// See RR$ in deployment for mirrored logic
// Must stay in sync to Enums in deployment.js
const swFromProductionEnvII = true;
const serviceWorkerLocation = swFromProductionEnvII ?
'https://rudimusmaximus.github.io/FENDp5/sw_primed_site_caching.js' :
'../sw_primed_site_caching.js';

// register the service worker on page load if the browser supports them
if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
        .register(serviceWorkerLocation)
        .then((reg) => console.log(
            'ServiceWorker registration successful with scope: ', reg.scope))
        .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
