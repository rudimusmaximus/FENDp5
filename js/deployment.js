let RR$ = {
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
    DEV_PROD_PREFIX: ''},
};
// Determine link prefix based on environment indicator t/f for prod/dev
RR$.Enums.DEV_PROD_PREFIX = RR$.Enums.IS_PRODUCTION_INDICATOR ?
      RR$.Enums.GITHUB_HOSTED_LINK : RR$.Enums.LOCAL_ROOT;
