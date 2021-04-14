'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d776ac4697908295bee50101f368fc02",
"assets/assets/tools/icons/bootstrap.svg": "ebc85b26307890aa1407517448830c6c",
"assets/assets/tools/icons/c.svg": "00cc5bdb950c7cd82c90fbe74b26b3cf",
"assets/assets/tools/icons/cake.svg": "e6f322d6d77e97961dca9ce1cf5087de",
"assets/assets/tools/icons/cpp.svg": "5be9bde46141498a7cfd4902b92133b1",
"assets/assets/tools/icons/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/tools/icons/django.svg": "bcf22073c9f13bab1761b90bce9fec55",
"assets/assets/tools/icons/firebase.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/tools/icons/flags.svg": "3359afe2ed4d9f10d2c2a626b08ca7c5",
"assets/assets/tools/icons/flutter.svg": "4cdf0d7503a49f93f6e15313cf24e7fb",
"assets/assets/tools/icons/github.svg": "ddc250127189a3b4ee4802e6c2493757",
"assets/assets/tools/icons/gmail.svg": "e6956db22f6b55500046d41bb128484a",
"assets/assets/tools/icons/home.svg": "d43a2b016233ef37fdc57504dd4e6f36",
"assets/assets/tools/icons/html5.svg": "9f2e1637c83e37e8f555044e12324734",
"assets/assets/tools/icons/illustrator.svg": "93ceeb6a04bd609e7ff6ea2a3a5d2e73",
"assets/assets/tools/icons/javascript.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/assets/tools/icons/jira.svg": "7f385361831777de4963b2d5fda7c7c0",
"assets/assets/tools/icons/linkedin.svg": "6c8e140e0c8b5d6acd513c67d12d267d",
"assets/assets/tools/icons/microsoft.svg": "67f10d87b7e36e62a638413860f6aa92",
"assets/assets/tools/icons/mongodb.svg": "554c7d4bfd63a3da33773978fd291c06",
"assets/assets/tools/icons/mysql.svg": "b04e488e156e32b474e695c43c9e7ac4",
"assets/assets/tools/icons/nodejs.svg": "5c376133d6403088a87a04fcc9685674",
"assets/assets/tools/icons/phone.svg": "de6928a8170976eefbd1eb77ba7db3a5",
"assets/assets/tools/icons/photoshop.svg": "446763959684b108ca164f3cdc9c96d0",
"assets/assets/tools/icons/php.svg": "2c8cc4a64e1339f56547b5831a0d0504",
"assets/assets/tools/icons/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/tools/icons/slack.svg": "548c1705c4252116988ce2d0c1f63464",
"assets/assets/tools/icons/trello.svg": "b1c3c1a3965a02e3965b8ed7a7e9de02",
"assets/assets/tools/icons/website.svg": "91d5372c6d4a1ee1ff17db74e325ffc3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/google_fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/google_fonts/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/google_fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/google_fonts/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/google_fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/google_fonts/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/google_fonts/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/google_fonts/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/google_fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/google_fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/google_fonts/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/google_fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/google_fonts/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/google_fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/google_fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/google_fonts/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/google_fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/google_fonts/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/google_fonts/OFL.txt": "5da468cc0e208e63aa009460017f214a",
"assets/NOTICES": "6cd352e9bce47ae5db885836a594642e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "9c5b9da567fb26abebc9727665c39be7",
"icons/Icon-192.png": "9c5b9da567fb26abebc9727665c39be7",
"index.html": "a82aa2b581e73b02590a0a17d6ff8d4d",
"/": "a82aa2b581e73b02590a0a17d6ff8d4d",
"main.dart.js": "84a2dfbb03f4a63e529a0d149e548411",
"manifest.json": "2cdfc8f67d6a7e5aa65023e69afab073",
"version.json": "d2a961a44c3447c31d857df1f7dd4f36"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
