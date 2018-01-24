/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/cloud-data/cloud-data-overlay.html","d4feb01a58a479f4a9d4327b1a2285f0"],["bower_components/cloud-data/cloud-data.html","b8e753a27af85ac227458d3cb73194b6"],["bower_components/cloud-data/import.html","d5739824337d126e13306157e17faa8b"],["bower_components/filesaver/FileSaver.min.js","cf4473afd98b8fcdbf259ad664f10027"],["bower_components/font-roboto/roboto.html","50a4457123c499ff4c0a13aa13f92983"],["bower_components/google-apis/google-client-loader.html","04b185bab8c2e34b41ba461980d1241a"],["bower_components/google-apis/google-js-api.html","6a8ce97294978148e03876a24c86743f"],["bower_components/google-chart/charts-loader.html","113e70ff8be44bae2130ddcb4d3035d6"],["bower_components/google-chart/google-chart-loader.html","fbdd4cdc33937330d99986468951cc45"],["bower_components/google-chart/google-chart-styles.html","c2609fce6f48d9c44f09f7dbaa0e4e0b"],["bower_components/google-chart/google-chart.html","9bac9c2b378ed8d35f6cf35fadc50f28"],["bower_components/google-signin/google-icons.html","d9bb7895a3045e89b50a9e53f294f1cf"],["bower_components/google-signin/google-signin-aware.html","9050736c1930747a824c094e4d5841d5"],["bower_components/google-signin/google-signin.html","5da2fa6a51b39580cad968c503cfa666"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","f6b40d98b7b2be6bf537928c8a7eb201"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b27a60a07aba0ddff87d1c739454c071"],["bower_components/iron-ajax/iron-request.html","b4ff793efee463538b1cd3ce2e6f4c6c"],["bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","328476060db297974d88630407538f6b"],["bower_components/iron-behaviors/iron-button-state.html","38a6bf2bf210785b903b4a6b94c54ec5"],["bower_components/iron-behaviors/iron-control-state.html","3cc8067e4729b4406a29aeba96d54da9"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","9fecdec6a06eed68a0466e98ecfee4fb"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","f82e71699fdacb03f89ce1ecbd6a77f7"],["bower_components/iron-dropdown/iron-dropdown.html","55954a78ef3072adaf4e4dc20360ee22"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","230825673df96a79518bb28771570f99"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","93d9c66073931ce4f405dc0a8a28c4a6"],["bower_components/iron-flex-layout/iron-flex-layout.html","54b794c8985259cf0e1a98e5d721efe6"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","81d969c048a29a1a340645f314a3abbd"],["bower_components/iron-icon/iron-icon.html","39b4b11df09f6b0234b5534fe6ccfb4b"],["bower_components/iron-icons/av-icons.html","7bea564a1ce29f19d1a0f3da4fb1c9ef"],["bower_components/iron-icons/editor-icons.html","953ea43c00827277891bb073b0f0a028"],["bower_components/iron-icons/image-icons.html","93661cb033f1cdaa553e3a098dea4504"],["bower_components/iron-icons/iron-icons.html","ab0bb876e9b58052eff047736e55680a"],["bower_components/iron-icons/maps-icons.html","5cc01037fee582db7b5b02f205c9aa8c"],["bower_components/iron-icons/social-icons.html","0636ab16f97f85b855069590e8886cba"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","80fe75f563f2a34733521f84bd997106"],["bower_components/iron-input/iron-input.html","def793bccf499d8b8a5b082c59ac8186"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","baeb8e0473cd2369aa2f462d0370b056"],["bower_components/iron-media-query/iron-media-query.html","ab2d3e12f93b91ebc00f00389e9e3c27"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","527832ebae66ad9d28da6009977c66b1"],["bower_components/iron-menu-behavior/iron-menubar-behavior.html","3f50e7a1b12a8dd89174514b02416cf0"],["bower_components/iron-meta/iron-meta.html","8785d73a41ebb00e007ac04c3a8cf7cc"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","2155a5a7744e726ddb2a7392388a8b39"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","3d6d59dfc2281b6c715dc9e7d795e33e"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","62ffaeeb486ac4b0ca3279772e42b2d6"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","b8a1a9ac074740b60806439e8a96ef4d"],["bower_components/iron-pages/iron-pages.html","b811eb8152c078e56b704898f95c0a01"],["bower_components/iron-range-behavior/iron-range-behavior.html","809c43192bca02abf897dd50cd21dcb6"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","3c2cda48fcdacd412d9cbf47074ff758"],["bower_components/iron-selector/iron-multi-selectable.html","8d47e5b7ac1e7d4919f5eea894c38108"],["bower_components/iron-selector/iron-selectable.html","6bf558c1b51b7aaa3dd527d1d1376d38"],["bower_components/iron-selector/iron-selection.html","0367aeeb9c145ad4a8e86ae1c208496c"],["bower_components/iron-selector/iron-selector.html","0a9b17395e3505faededc3fdfd480729"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","f818045327c72bdac1f8d488779c74f9"],["bower_components/jszip/dist/jszip.min.js","62db1c2504bd4d030ffc37880227d5fd"],["bower_components/neon-animation/animations/cascaded-animation.html","e08dbcc0aff3cbdee99fce02cf46b263"],["bower_components/neon-animation/animations/fade-in-animation.html","0a4016d543a8c02eca34ea613d426fba"],["bower_components/neon-animation/animations/fade-out-animation.html","fe26a863219ab1fa7c4572e626dd605c"],["bower_components/neon-animation/animations/hero-animation.html","11ca07a17e528aeb6de87792dfb7b0d9"],["bower_components/neon-animation/animations/opaque-animation.html","f29687381ef60a18a94fc4cf7ad94f5c"],["bower_components/neon-animation/animations/reverse-ripple-animation.html","e361976fd3e04811029437045c5f4dcd"],["bower_components/neon-animation/animations/ripple-animation.html","05a790e8e13f35785957cf75607db6dd"],["bower_components/neon-animation/animations/scale-down-animation.html","bb04d38a402c886875bf744a35f9bef4"],["bower_components/neon-animation/animations/scale-up-animation.html","e624d5ff529285c075aed18e155278b5"],["bower_components/neon-animation/animations/slide-down-animation.html","408b5dda979bee83e08f2143ab2a8483"],["bower_components/neon-animation/animations/slide-from-bottom-animation.html","9f79d9097842ce7445e1a28ab7864b34"],["bower_components/neon-animation/animations/slide-from-left-animation.html","779b95f6732ee3daf759da3f958bf470"],["bower_components/neon-animation/animations/slide-from-right-animation.html","3ad2e30845e91f3584d3485109ce59ae"],["bower_components/neon-animation/animations/slide-from-top-animation.html","a3d92a3b69cd4cad04f87163bfc7c09a"],["bower_components/neon-animation/animations/slide-left-animation.html","e2b7e1b3ffe58aff53ea7d2a0359d3d0"],["bower_components/neon-animation/animations/slide-right-animation.html","2ffe199c2bb3f59b5ff6adc5ad0eb93b"],["bower_components/neon-animation/animations/slide-up-animation.html","e4ee54345264f0dbde4fd20429656639"],["bower_components/neon-animation/animations/transform-animation.html","db65400baf908e3374f5ac4cfd46a2ac"],["bower_components/neon-animation/neon-animatable-behavior.html","fe29b0f176b9900d560e8c9f6ee453c9"],["bower_components/neon-animation/neon-animatable.html","ab60b881481936f4aab6a8d2e2ef2c6d"],["bower_components/neon-animation/neon-animated-pages.html","456de4856ea0c2755d759cc4b9298ffa"],["bower_components/neon-animation/neon-animation-behavior.html","7fa83188c29adc2b0faa03e28ec5ac32"],["bower_components/neon-animation/neon-animation-runner-behavior.html","f78c957c09d23ac1b54a3e452b488369"],["bower_components/neon-animation/neon-animation.html","91cc001cbd47ab2ef66b998cd54681b3"],["bower_components/neon-animation/neon-animations.html","df30be0e5072f84d561af26f77772243"],["bower_components/neon-animation/neon-shared-element-animatable-behavior.html","9e5f3a24315c0d17310b9548867b3651"],["bower_components/neon-animation/neon-shared-element-animation-behavior.html","575a0fe294d65fe63f37df4fae331dc8"],["bower_components/neon-animation/web-animations.html","984b45768fb35329a79a6d9b9438f748"],["bower_components/paper-behaviors/paper-button-behavior.html","0fc75796e3658f22430501e5ffe800a9"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","e6bb85abd24d12866e9fd758ad19bf03"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","32f1caa26beeaba2d0d742e0844ac973"],["bower_components/paper-behaviors/paper-ripple-behavior.html","9dfb89167402831e5b1533bef481c8d9"],["bower_components/paper-button/paper-button.html","15e07a6b5b0355e1f51e939b93b66985"],["bower_components/paper-checkbox/paper-checkbox.html","ee7be498774e3e0dd574a782f9e980f5"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","bc5155edb8a53e52259ed872bb85f6a9"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","77da268dde8da1167eddf2b1cce32649"],["bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","a3469a7b7363fd3ded57e5ae9684d0e7"],["bower_components/paper-dialog/paper-dialog.html","1f98de2c535cac8c1a515108f8148e70"],["bower_components/paper-drawer-panel/paper-drawer-panel.html","17138fd7189c1e3c0841fac4cf5fd43f"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","bfede54f22ccfae2d83d86a5de10ad10"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","d3f781dbc5fbd6964b13686f3aed3913"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","bc499acbc18bc5f862b55fac2dd1787a"],["bower_components/paper-fab/paper-fab.html","d157a6a5da8e056272da3f9b8d19f982"],["bower_components/paper-header-panel/paper-header-panel.html","31451e367caf81b72f1b68a381b2f697"],["bower_components/paper-icon-button/paper-icon-button.html","2e22512e5abc8368905d05ece9146b73"],["bower_components/paper-input/paper-input-addon-behavior.html","53ea5db0439f4eeb8c525caec2078e91"],["bower_components/paper-input/paper-input-behavior.html","6afeaa55384aa2a610137ca888585df6"],["bower_components/paper-input/paper-input-char-counter.html","8a1d74cad6d050051aa49a8c529f1b77"],["bower_components/paper-input/paper-input-container.html","6ef0c807cb6611c791b79fcd62840649"],["bower_components/paper-input/paper-input-error.html","d820c37e1199d1ffef4af1874bae1702"],["bower_components/paper-input/paper-input.html","c6306c593592abfef27f032e71795c4a"],["bower_components/paper-input/paper-textarea.html","b0e9218e16a61bd049d828189a99f725"],["bower_components/paper-item/paper-item-behavior.html","c788de427d6edfc5b840cb2b1ecbd3dd"],["bower_components/paper-item/paper-item-shared-styles.html","3997f81c4a0293af0e55280c68350dc5"],["bower_components/paper-item/paper-item.html","300cfa13935149854de2c4e6f2e79806"],["bower_components/paper-listbox/paper-listbox.html","45f0b449aea7354ddd5cd2f6e93a5357"],["bower_components/paper-material/paper-material-shared-styles.html","60192d95ea10fdd6d84ee478f00f9a14"],["bower_components/paper-material/paper-material.html","63dcbfdbd15c5c07fcb89185352e1ec5"],["bower_components/paper-menu-button/paper-menu-button-animations.html","2dc6c91bbb2c2cc572cf3d9a5fd47b8e"],["bower_components/paper-menu-button/paper-menu-button.html","3a5a38083d073755f5a7b498725c67bc"],["bower_components/paper-progress/paper-progress.html","5d2d35844724fc615144d1bc28413b46"],["bower_components/paper-radio-button/paper-radio-button.html","25d4ed62c8790750d9b081d84d23c339"],["bower_components/paper-radio-group/paper-radio-group.html","ec117fad2c1979e4ad33851888e8df48"],["bower_components/paper-ripple/paper-ripple.html","cb12f561ff2951e2cdc69a91e7b08848"],["bower_components/paper-slider/paper-slider.html","f8ca1a7b3d3f1f2c4cf34a4ac924f972"],["bower_components/paper-styles/color.html","df500d44d416dd9be8aa0827453897f7"],["bower_components/paper-styles/default-theme.html","90af25da026d9f3bb842237180ba71df"],["bower_components/paper-styles/shadow.html","8ba26cd73f856f5ad91ed40bd5f7bf28"],["bower_components/paper-styles/typography.html","9d65acd951f695dce5ec0915f00e86bc"],["bower_components/paper-tabs/paper-tab.html","cc01639f97db7157b0fa7fec9288d162"],["bower_components/paper-tabs/paper-tabs-icons.html","051ea36d632c8b9d07b5909427c0defd"],["bower_components/paper-tabs/paper-tabs.html","89433df0df8f9816d1ca9b6d9c061704"],["bower_components/paper-toast/paper-toast.html","4586e41533057a1338f45d5c1f88b615"],["bower_components/paper-toolbar/paper-toolbar.html","14c2db16e23f710de08e40f8dad8d277"],["bower_components/paper-tooltip/paper-tooltip.html","4c9d4dad6cb437c3703694fd64970831"],["bower_components/pdfmake/build/vfs_fonts.js","86918a5cf56ab5ec693f29ec3d3bed32"],["bower_components/polymer/polymer-micro.html","79eb210c797f7988f8d7186ea53b7d03"],["bower_components/polymer/polymer-mini.html","ff9df0715dff1efcca35f7fedfea666a"],["bower_components/polymer/polymer.html","34d451064e8d3e036586240a982546b2"],["bower_components/promise-polyfill/Promise-Statics.js","02005242df61471f6758e0d133a9acc7"],["bower_components/promise-polyfill/Promise.js","6d72e76387d06f828797b0ce05a2feb7"],["bower_components/promise-polyfill/promise-polyfill-lite.html","d455a231a8f7f3703244ef2ce3d689ab"],["bower_components/promise-polyfill/promise-polyfill.html","4892dce3c27173d3b7726afdaf8f3919"],["bower_components/responsive-table/responsive-table.html","17dab3c4ec9456fa3b1ceb93fb8ddff0"],["bower_components/vaadin-date-picker/vaadin-date-picker-behavior.html","19994f66037148a99197373014968313"],["bower_components/vaadin-date-picker/vaadin-date-picker-helper.html","4c5b009274ce731c6b714412e0fdc65e"],["bower_components/vaadin-date-picker/vaadin-date-picker-icons.html","5d8904d9f0762124204da00065844e94"],["bower_components/vaadin-date-picker/vaadin-date-picker-overlay.html","ab840018783098497bca6608eb141ece"],["bower_components/vaadin-date-picker/vaadin-date-picker.html","eec762436c7576cf219c038cb82f6523"],["bower_components/vaadin-date-picker/vaadin-infinite-scroller.html","5a73323492c1d513827074195e737409"],["bower_components/vaadin-date-picker/vaadin-month-calendar.html","6f2130e06af32e9787374463a010d964"],["bower_components/web-animations-js/web-animations-next-lite.min.js","fa336dd9110f3e62dd0f6663cc910b3a"],["bower_components/zreptil-date-picker/zreptil-date-picker.html","40d1b5f06cf812626aed2bb09994434e"],["bower_components/zreptil-time-picker/zreptil-time-picker.html","8d6e85e936bd2d3310836ebc6fe3ef16"],["index.html","feb1a492a03c15c57476bd97aab74b4c"],["src/diamant-app/diamant-app.html","3d2bba5b084647960628047c0890ddaa"],["src/diamant-app/diamant-daydata.html","b8d9d5e1d66e264ce3ab3c48d3c12a4a"],["src/diamant-app/diamant-monthdata.html","5ad8c1f41fd9ed1098547b29d20a92ae"],["src/diamant-app/diamant-signed-in.html","f4335a1f364165dea4264a360cc780b8"],["src/diamant-app/diamant-signed-out.html","7f2d324d53c42dae4a8b1ec8d2b4bc93"],["src/diamant-app/diamant-tutor-sign.html","c3a0c1e7796f57468c7956c3e1b8f5c9"],["src/diamant-app/diamant-tutorial.html","7c55315ac5c57ae81f6adb8236791302"],["src/diamant-app/diamant-welcome.html","7cc853fb9bf0f762b99227d0494fde7a"],["src/diamant-app/diamant-yeardata.html","9bbbf2c9a2a7d3e343a2578de1fd82f6"],["src/diamant-app/dlg-config.html","57fe9b24bffc742ffd66fd5addbd31ae"],["src/diamant-app/dlg-foodlist.html","8b4dddc6e6af98789658c2fe2a97a7b2"],["src/diamant-app/dlg-input.html","e2dda4c37901ea8733f4ab6c35ce6205"],["src/diamant-app/dlg-print.html","7fc3a77f8176105c3241f90e9ef36e84"],["src/diamant-app/print-INPUT-basalrate.html","fcae2376c6a8b1047282c377334f5f35"],["src/diamant-app/print-INPUT-datenmanagement.html","fc3456af6c8f7bc5b02c98dddd7c947c"],["src/diamant-app/print-INPUT-faktoren.html","0c143997f5036fe6e9427a24cedd37db"],["src/diamant-app/print-INPUT-protkoll-cgm.html","499daedc5c25d68eda6ad399a214d1b6"],["src/diamant-app/print-INPUT-protkoll.html","8bb72398085af3881e3e30197cfc9c2d"],["src/diamant-app/print-INPUT-trend.html","90992894ce9bfec0fe32509f00ebfcaa"],["src/diamant-app/print-analysis.html","3b5c4e183615e7b35e6427e8e7a8e6d3"],["src/diamant-app/print-diary.html","6325c0cc21c8cd915fe01710c0845859"],["src/diamant-app/resources/globals.js","4b39facff293f92b93a45003ea8f2229"],["src/diamant-app/resources/local-config.html","8847bf9a09716136e44ea2e5a7e53c18"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







