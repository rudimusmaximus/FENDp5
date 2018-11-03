// // Set Global object via IIFE; note, this pattern requires var
// var RR$ = (function(ns) {
//   ns.description = `Restaurant Review namespace as a global object`;
//   ns.Enums = {
//     // set to true when published/deployed to github environment
//     // keep in sync with sw_primed_site_caching.js
//     IS_PRODUCTION_INDICATOR: false,
//
//     GITHUB_HOSTED_ROOT: 'https://rudimusmaximus.github.io/FENDp5/',
//     LOCAL_ROOT: '/',
//
//     // prefix with current directory (LOCAL_ROOT) when working locally
//     // prefix with repo name (GITHUB_HOSTED_ROOT) when in hosted
//     // production ghpages io
//     DEV_PROD_PREFIX: '',
//   };
//   return ns;
// })(RR$ || (RR$ = {}));
// /**
//  * @description Determines link prefix based on environment
//  * indicator t/f for prod/dev
//  * @param {object} RR$ - the restaurant reviews namespace
//  * @return {string} required link prefix
//  */
// RR$.Enums.DEV_PROD_PREFIX = (function(RR$) {
//   return (RR$.Enums.IS_PRODUCTION_INDICATOR ?
//     RR$.Enums.GITHUB_HOSTED_ROOT : RR$.Enums.LOCAL_ROOT);
// })(RR$);
