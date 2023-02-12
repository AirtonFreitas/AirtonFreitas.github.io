'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "16deff59c4b151ea5f51fff8a337a510",
".git/config": "524e31fe86915e53233234fa54e60a65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "789823493d2a93adc8e96d02ce7ce90e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1328416a8fdf5c0b6fcb4670b1d3412",
".git/logs/refs/heads/main": "d1328416a8fdf5c0b6fcb4670b1d3412",
".git/logs/refs/remotes/origin/main": "3393b0e971bc1ddd443dc28ef049293a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/f6bc5bac5aa757ae32fbe587431336e12602b3": "df1ed5cc2f3e4a5bd58d82bfb497b2be",
".git/objects/0f/9f53a9fac1bec313c6d1accee64b72ef2815ce": "bd0b8f45b5c8efb4b51f686e84a102b6",
".git/objects/15/9e4079959c6af395cbe9be8884880ecd47d87a": "127a9fce7ab4deb6923329e78f8ccc11",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/2e7a40e7bba23bcc9db4da3699f5c3585d47ff": "ebc76edcef465592fbf1fabcbedfe5e2",
".git/objects/32/caad2a30748f6e82ecdb96cc0a89e6da4833e0": "d30c555b49d45672c181d2a301b5781b",
".git/objects/35/83bd25d9f90d9dd66d486357cfea691f71cbe4": "47e8087f30eac6218d64f94b3fcdfe33",
".git/objects/39/2984fad9786b87a6a16e01ceb35ea5e8497cf2": "a01868bb2ab1fd6b679b29797d622249",
".git/objects/3b/e422d7dce61b950ad3081687f44bab0cd38d87": "09cd6a68bb26a46012de6f86a1b861d3",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/811f6fc4866ac57af588d1e07722c1f0a4028b": "4498a40de52b233aaf584137bd7f2818",
".git/objects/42/0d3a4058aa418972d6ddd3623deff2a3938251": "bb45e70f6da8f942426071918bfe8549",
".git/objects/42/c6276b2a4ee55dac5a357fb5a218279d3c8986": "68b1262da70b20cd340d6357ebedad04",
".git/objects/43/00ea36bae8ae6a6390dd27be7e7285deab1d36": "5c11feaac7c8f517466a64fcd454d976",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6261abfd9a0fc273b5e332d6075fc7e8ff2700": "7ef3e200cf554a17aaafa5c189c5f854",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/5f/cb34c92b7211ec5459ce3d900b543621ca96fe": "1bd3d343bf181b30d41f254fdc256793",
".git/objects/6b/0880688d59b9075a6259fc81f9af3b72fa5323": "703b4ebaf14e722798822f4e6c04c088",
".git/objects/6c/d5f1aca32cea060a89bf2c6e95d7c19ddd33e1": "7de0441264a9d88fba1c11ada06dfbab",
".git/objects/71/6684db794df9af8f90b16c9a311351a14f8509": "bc3c655380b98e2b558b45cfcaf0c644",
".git/objects/71/81228d3a200b7e1ed5c95edb35e69fc5434c8f": "ebe338404a39130beacfe42bb40df4a6",
".git/objects/72/ad95e128db4f5a91d507f544bbb83b205ea219": "4b236e3ecf3f8f3989251485e575252f",
".git/objects/73/a87af372db715a9bc48f3ee5898fd50187ac4e": "9901416618f0199252b96ded1325861e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/7e/6be93d18adb4be7ee62a0a5da58222db15ca61": "dbcfea187a039f14afebf73adad39c59",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bc111c7c88e8335938085931422d7823d03cdf": "e1757de95a75295ab8ce2a4ba7215482",
".git/objects/91/d82974fb9f684e970cdbc98bd4d15901f8a86b": "43cfdfa154a32c660b20458cd4c64830",
".git/objects/94/7bb44f9371de5615ef4f10cbfbc5b348ede71c": "3ceb1229f22c29524aed1e3500c16722",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9f/a727b8be1527501b556a03c4e4c5bb85c035e2": "9862ee49a2d00bcf948c889b2881985b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7dacf71514d02b4405490d7df916735f986500": "58870f58c1b14c1979ae085f0e4c89ff",
".git/objects/a7/21441aba61c95d988ccc3335b45057f36287ca": "124dfe1bbd49fd182a1d4b1f47b5d0bd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/19cb143977e4f4903b6f66e02aba9bbef0d84f": "59727da08cbffa306819cbd365ad02fe",
".git/objects/af/2d96a9b43858185b82912b471488c79a3b3549": "f27e20a201d0a912cc649e0cbf318761",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/61b868a597872fccf1250344092a4670e85dd5": "9262794dd8d0777ebcd8f76c01da154a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/9c748fcb7e5464af8aa665b38356e3e88c25b0": "3d05480c03987add6593c81ff59c1a66",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/f9f67800229e21cfd17c2a6f11c00ed2d3f0d8": "805c80f880bfa3f11e87929dd7cfff3c",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/e5/7d79f19eab3fc0c216bb524023eea01053a947": "42682aa9f3f024a728019a9e610fd0e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/7c6d9306537abb1d7c4e7e4ecbb47912f4f746": "309d64aea2a32f6cc12d3a72ec43cba2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/3802ba719cf7bf08b11a953641e33ca31938d8": "55c4dee50d8bc4ae25b1ebb08c97ffc2",
".git/objects/f6/8fc6f27b68074a9d5f05c915f01f33faec324f": "e55a63f1d681d6f750e02043c90df520",
".git/objects/f7/9b21d0ef08d819ba55c2918a38d50a244afe8b": "6e0998325eec1c2658f81bfec9cc73a7",
".git/objects/f8/ffc4b30d296618ae62558cc4d1473e6cab87cf": "a48d2f74643fef1676091e88b949860f",
".git/objects/fd/08a650e08cedf003c886cbc9ed74610a085925": "453706af8518eddbf8b4330d8cbd4875",
".git/objects/fe/82ff373d2eb5bc76f94af6604c19c6b024a1b4": "2d01332350db252fe2b646771975d444",
".git/refs/heads/main": "d43bffc2cbca3ebfc99842af2bf87aa4",
".git/refs/remotes/origin/main": "d43bffc2cbca3ebfc99842af2bf87aa4",
"assets/asset/animations/note.json": "17db468e837277e48f209e2d8fffe427",
"assets/asset/fonts/LouisGeorgeCafe.ttf": "877dd203e9f65b39ac117010d1cf2a62",
"assets/asset/fonts/LouisGeorgeCafeBoldItalic.ttf": "c0faab440f7eda3a63713a89d3be8fd4",
"assets/asset/fonts/LouisGeorgeCafeItalic.ttf": "0be2424b87c1dd1dc612fd1a3caf78f6",
"assets/asset/fonts/LouisGeorgeCafeLight.ttf": "06f0dfb3dd526cd200d2e0df79f17ce6",
"assets/asset/fonts/LouisGeorgeCafeLightItalic.ttf": "a177242e6cd2093a4c81de7c4b4bae75",
"assets/asset/icons/facebook.png": "1d3ddecc62efeb285ef73eb45ed33e7b",
"assets/asset/icons/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/asset/icons/instagram.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/asset/icons/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/asset/icons/whatsapp.png": "c1baf16f786d7e5971c3a9c7d7d20579",
"assets/asset/images/profile.png": "92de601c62d0fb5458dd72427c279b46",
"assets/asset/images/profiles.png": "cd749e998bccaa905e653fe1870fb054",
"assets/AssetManifest.json": "54bdbfddb61ed0ab37c4e18444fa30ca",
"assets/FontManifest.json": "2e7c1c809bcdfb6205b5f6e7235f759b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/asset/animations/note.json": "17db468e837277e48f209e2d8fffe427",
"assets/lib/asset/fonts/LouisGeorgeCafe.ttf": "877dd203e9f65b39ac117010d1cf2a62",
"assets/NOTICES": "cbc238962dbdd77f39f118df55456062",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "56f8332ec610b3d5b51619d53e47504a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b9fd2e38546db32e0d72c696824af77",
"/": "3b9fd2e38546db32e0d72c696824af77",
"main.dart.js": "8ea3782a85dc4d92f0932e1a55d7a3dc",
"manifest.json": "8e36b18e2efd7ff59d866e42ffd272e4",
"version.json": "6320f954b1fc2e3b982b3edf72aea231"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
