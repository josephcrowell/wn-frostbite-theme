/*
 * Application
 */

import 'flowbite';

if (typeof(gtag) !== 'undefined' && typeof(gtag) !== 'function') {
    gtag = function() { console.log('GoogleAnalytics not present.'); }
}
