'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fbefcee34c7dd63e63f15d954d115ca3",
".git/config": "a537e35e8c4362227a86d38858866e33",
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
".git/index": "659aba8ef4ba9eb9e35b9334f1a46971",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25ebb956754144114e0375c52ae14fba",
".git/logs/refs/heads/main": "25ebb956754144114e0375c52ae14fba",
".git/logs/refs/remotes/origin/main": "32323c0025b9ee813c8aa8f96f52753b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/f6bc5bac5aa757ae32fbe587431336e12602b3": "df1ed5cc2f3e4a5bd58d82bfb497b2be",
".git/objects/0f/9f53a9fac1bec313c6d1accee64b72ef2815ce": "bd0b8f45b5c8efb4b51f686e84a102b6",
".git/objects/0f/bde152bb7e8ddec5a5a01a8d987d0b4d797db6": "c1421bdab35ee9a5903ef4cd987d6839",
".git/objects/13/68f330bbe999a30028c3c7648ed989175a9367": "bae6b1103986f1b8b408a4b95b73549b",
".git/objects/15/9e4079959c6af395cbe9be8884880ecd47d87a": "127a9fce7ab4deb6923329e78f8ccc11",
".git/objects/15/af0f23073ba6b7db5a0bcb91cc1806b9246c74": "c1e1e109c1aecfc12d9db4dcb646c99f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/88d06effcd3574095d4dc3f914d8d264986527": "6a87c581bd1fe9dbea850948de6d2a66",
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
".git/objects/43/ca8d283651939adc16409d3921d458ef29d637": "58d56ad3e2a9f4597037c515b4fbc2b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6261abfd9a0fc273b5e332d6075fc7e8ff2700": "7ef3e200cf554a17aaafa5c189c5f854",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/95b406eeef2878bbca6669d74ea11eb877020b": "f8d1c2b2da51cd6714043ddab429063c",
".git/objects/5b/1888e1a169b74a20229bccf43b2e66a5b0476c": "83bd2612aad03ae6620faf12d3fc9491",
".git/objects/5f/cb34c92b7211ec5459ce3d900b543621ca96fe": "1bd3d343bf181b30d41f254fdc256793",
".git/objects/6b/0880688d59b9075a6259fc81f9af3b72fa5323": "703b4ebaf14e722798822f4e6c04c088",
".git/objects/6c/d5f1aca32cea060a89bf2c6e95d7c19ddd33e1": "7de0441264a9d88fba1c11ada06dfbab",
".git/objects/6d/b3f07587b2c02e7341fe691ecf522f9604ade2": "a0718cf363daa373507cf095a34df01d",
".git/objects/70/a37379f6a7c4bc33860a145cbdb75b12885840": "ff5a2c75099d53a37b5913948966e224",
".git/objects/71/6684db794df9af8f90b16c9a311351a14f8509": "bc3c655380b98e2b558b45cfcaf0c644",
".git/objects/71/81228d3a200b7e1ed5c95edb35e69fc5434c8f": "ebe338404a39130beacfe42bb40df4a6",
".git/objects/72/ad95e128db4f5a91d507f544bbb83b205ea219": "4b236e3ecf3f8f3989251485e575252f",
".git/objects/73/a87af372db715a9bc48f3ee5898fd50187ac4e": "9901416618f0199252b96ded1325861e",
".git/objects/73/f19784441d8d522df671ef807f1276da98b193": "3123a4e3ea3807fe88e04f75e81a2278",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/7e/6be93d18adb4be7ee62a0a5da58222db15ca61": "dbcfea187a039f14afebf73adad39c59",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/87/d4702e440c2776c184f17123a7cefe93b7f805": "f6f9f105a83ec1a101170e8bffd7ac28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bc111c7c88e8335938085931422d7823d03cdf": "e1757de95a75295ab8ce2a4ba7215482",
".git/objects/91/d82974fb9f684e970cdbc98bd4d15901f8a86b": "43cfdfa154a32c660b20458cd4c64830",
".git/objects/94/7bb44f9371de5615ef4f10cbfbc5b348ede71c": "3ceb1229f22c29524aed1e3500c16722",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/162ffd478964ddd7a7cc31621f720919e13515": "c5ab217b7d2d074a18fc9b9266174d71",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9f/a727b8be1527501b556a03c4e4c5bb85c035e2": "9862ee49a2d00bcf948c889b2881985b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7dacf71514d02b4405490d7df916735f986500": "58870f58c1b14c1979ae085f0e4c89ff",
".git/objects/a3/59b3e9eccba38d2b38afd2a3524b5ed065bf0e": "ba2c3c7a080b7935cc9cbac6268167ab",
".git/objects/a5/81020845b438e2cadd1c45246595011b6b9494": "1a3dee4d63e664628e3a4695a06e85b8",
".git/objects/a7/21441aba61c95d988ccc3335b45057f36287ca": "124dfe1bbd49fd182a1d4b1f47b5d0bd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/19cb143977e4f4903b6f66e02aba9bbef0d84f": "59727da08cbffa306819cbd365ad02fe",
".git/objects/af/2d96a9b43858185b82912b471488c79a3b3549": "f27e20a201d0a912cc649e0cbf318761",
".git/objects/b2/01baee936a9eb0494209481a93797d5ce0497c": "c188a8d99a8fa94a269454a2725abee4",
".git/objects/b3/d535950d13d5a01745676516b4b538f3b8cab0": "69e31bc886659e228b8e42a032b9373e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/61b868a597872fccf1250344092a4670e85dd5": "9262794dd8d0777ebcd8f76c01da154a",
".git/objects/c6/b10cb3c5891409d91fff6780a36fcf49b55e7c": "084e9c07479d68e15b902d2ce867cda1",
".git/objects/cb/1e347357ce18aa620645465742cd1ec40c7a26": "d3b7e45b73020e23fbdc3afd2a50d68c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/62cfa7dc4065aeee38793e8d018e60cdba7ac4": "ad88a57c36e93c63290cacd49706945f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/5e1b7c498dcdb046fcd6d39391a737ba471769": "e7504d51cdc001fb33182bd7f554006e",
".git/objects/df/9c748fcb7e5464af8aa665b38356e3e88c25b0": "3d05480c03987add6593c81ff59c1a66",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/f9f67800229e21cfd17c2a6f11c00ed2d3f0d8": "805c80f880bfa3f11e87929dd7cfff3c",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/7d79f19eab3fc0c216bb524023eea01053a947": "42682aa9f3f024a728019a9e610fd0e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/7c6d9306537abb1d7c4e7e4ecbb47912f4f746": "309d64aea2a32f6cc12d3a72ec43cba2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/e567821cc52e3bebc350c75162d77598008dc0": "70c03891a138e9520fe36d77ebb8fc93",
".git/objects/f1/f4031449b26ea64bd9720b5bb2b9488adc70df": "703deecca5c6088b68202f1aeac73184",
".git/objects/f6/3802ba719cf7bf08b11a953641e33ca31938d8": "55c4dee50d8bc4ae25b1ebb08c97ffc2",
".git/objects/f6/8fc6f27b68074a9d5f05c915f01f33faec324f": "e55a63f1d681d6f750e02043c90df520",
".git/objects/f7/9b21d0ef08d819ba55c2918a38d50a244afe8b": "6e0998325eec1c2658f81bfec9cc73a7",
".git/objects/f8/ffc4b30d296618ae62558cc4d1473e6cab87cf": "a48d2f74643fef1676091e88b949860f",
".git/objects/fd/08a650e08cedf003c886cbc9ed74610a085925": "453706af8518eddbf8b4330d8cbd4875",
".git/objects/fe/2b1cbc40140a2b170a0f3c354ae6e37a47a5c4": "9b0c3b4e897209ea80f36611af82e51f",
".git/objects/fe/82ff373d2eb5bc76f94af6604c19c6b024a1b4": "2d01332350db252fe2b646771975d444",
".git/refs/heads/main": "2610cfd21e5525d41dedffea40ffd6de",
".git/refs/remotes/origin/main": "2610cfd21e5525d41dedffea40ffd6de",
"assets/asset/animations/note.json": "17db468e837277e48f209e2d8fffe427",
"assets/asset/fonts/CaviarDreams.ttf": "3670aa493ee09e92c7b8e1e7c2f5b441",
"assets/asset/fonts/CaviarDreams_Bold.ttf": "65ab651cc7cebf7331a4228e830573d1",
"assets/asset/fonts/Coolvetica.otf": "651b51cc4409a3926f85aa25861852ce",
"assets/asset/icons/facebook.png": "1d3ddecc62efeb285ef73eb45ed33e7b",
"assets/asset/icons/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/asset/icons/instagram.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/asset/icons/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/asset/icons/whatsapp.png": "c1baf16f786d7e5971c3a9c7d7d20579",
"assets/asset/images/appanimais.png": "d6cf26d014eaa5f45301226092a8ca29",
"assets/asset/images/appflutter.png": "f35e9bca49d1474d92ef2e7e5a2cba5b",
"assets/asset/images/appnutri.png": "3779f45ab5036d82c06a9665a315eeb1",
"assets/asset/images/appsharelist.png": "0021d8e25bd16e6fe96a930dd79567c8",
"assets/asset/images/appsql.png": "16b46fd9f13288f2210d9c883f897cc3",
"assets/asset/images/profile.png": "92de601c62d0fb5458dd72427c279b46",
"assets/AssetManifest.json": "f8ec7aa44b92aec09da145ad1283fc64",
"assets/FontManifest.json": "76e9c95af680d7c143b834fbad3acf2a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "dea5209e35bd68c0232af915a2d311b0",
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
"index.html": "5146d00749c5db492b2ba0bcd53825e3",
"/": "5146d00749c5db492b2ba0bcd53825e3",
"main.dart.js": "b8952ab2a745d6fa53518ad06ef3407b",
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
