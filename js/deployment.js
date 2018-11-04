// Add to Global object, a namespace object for our use
window.RR$ = {
  description: `Restaurant Review namespace as a global object`,
  Enums: {
    // set to true when published/deployed to github environment
    // keep in sync with sw_primed_site_caching.js
    IS_PRODUCTION_INDICATOR: true,

    GITHUB_HOSTED_ROOT: 'https://rudimusmaximus.github.io/FENDp5/',
    LOCAL_ROOT: '/',

    // prefix with current directory (LOCAL_ROOT) when working locally
    // prefix with repo name (GITHUB_HOSTED_ROOT) when in hosted
    // production ghpages io
    DEV_PROD_PREFIX: '',
  },
};
/**
 * @description Determines link prefix based on environment
 * indicator t/f for prod/dev
 * @param {object} RR$ - the restaurant reviews namespace
 * @return {string} required link prefix
 */
window.RR$.Enums.DEV_PROD_PREFIX = (function(RR$) {
  return (window.RR$.Enums.IS_PRODUCTION_INDICATOR ?
    window.RR$.Enums.GITHUB_HOSTED_ROOT : window.RR$.Enums.LOCAL_ROOT);
})(RR$);
