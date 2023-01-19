/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "193882b4a250ec7cd0abb490ae1c8113"
  },
  {
    "url": "assets/css/0.styles.b5ca89be.css",
    "revision": "660866d5be8d119659a303b9e781c0ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.95c9e1cf.js",
    "revision": "42ce4f13c1cb9d8a8228b99d80d7b4fb"
  },
  {
    "url": "assets/js/11.a5b6741e.js",
    "revision": "1e6b655c1215a370104d28793248a1eb"
  },
  {
    "url": "assets/js/12.b3e3aec2.js",
    "revision": "6397f01c3305316ad4d11531559fbc6e"
  },
  {
    "url": "assets/js/13.3fcd2811.js",
    "revision": "2c988edc3374ed544527dd520cb8e273"
  },
  {
    "url": "assets/js/14.2e8fb967.js",
    "revision": "66fb750ead4b280a85c9c29bdd05f0c7"
  },
  {
    "url": "assets/js/15.aaeab3c8.js",
    "revision": "c3892e7470fbb016fc82be6e3155edd7"
  },
  {
    "url": "assets/js/16.5817f984.js",
    "revision": "a3174d4284f9b0546ca175ced85be200"
  },
  {
    "url": "assets/js/17.e4f5d5cf.js",
    "revision": "4165ecb2bfa6385903a403913e3037f5"
  },
  {
    "url": "assets/js/18.d76453a6.js",
    "revision": "e6b70aca053c97778a6237e4f6287fcd"
  },
  {
    "url": "assets/js/19.937247ad.js",
    "revision": "86d745e154796f6179dc07eb78a80454"
  },
  {
    "url": "assets/js/20.8d68deef.js",
    "revision": "6915a97ed7a082ba1692b49510a1d3ab"
  },
  {
    "url": "assets/js/21.17dfcfb3.js",
    "revision": "3550a8113d15c79ea7c08b7d9c192d3c"
  },
  {
    "url": "assets/js/22.1bf2eebc.js",
    "revision": "11a9d74e69abcd0cda8e378a1ad84558"
  },
  {
    "url": "assets/js/23.b93a96f1.js",
    "revision": "d12628cc5606933313f2f01c36799482"
  },
  {
    "url": "assets/js/24.48b9ec7e.js",
    "revision": "3ea80ed4b3ea83f7edd4356aa80a341a"
  },
  {
    "url": "assets/js/25.ceea0259.js",
    "revision": "2d386970f00c1dd655d73c89c1ec33e8"
  },
  {
    "url": "assets/js/26.b0cf7b42.js",
    "revision": "1a4be020f7ef1be1e6777c0f4352d1d6"
  },
  {
    "url": "assets/js/27.235cd8d6.js",
    "revision": "361f25b6b5715b850adc0693667877ae"
  },
  {
    "url": "assets/js/28.ea62bb15.js",
    "revision": "6b7ea33e7104fd06ba1cc145750a0c6b"
  },
  {
    "url": "assets/js/29.17d41227.js",
    "revision": "f114df4d827c137822b0b9240fce8b2f"
  },
  {
    "url": "assets/js/3.b0820f77.js",
    "revision": "a3440e9d8cf514a5d4fa53883b32239b"
  },
  {
    "url": "assets/js/30.006bc379.js",
    "revision": "549ac6ae4a39132b8919720282426e0a"
  },
  {
    "url": "assets/js/31.5bfdab1c.js",
    "revision": "858f675009bc92eed62a6d604bc9330a"
  },
  {
    "url": "assets/js/32.5d938467.js",
    "revision": "99cb690704bb6da7afb6f7b8eb003523"
  },
  {
    "url": "assets/js/33.52e16269.js",
    "revision": "8d269155dec0a82820a0001752aa9875"
  },
  {
    "url": "assets/js/34.6317c690.js",
    "revision": "23035ecff52910a01c913f223de9b0a8"
  },
  {
    "url": "assets/js/35.c1c2dd4e.js",
    "revision": "ba661e4c3bb45ca1541c65c6f62bc5b8"
  },
  {
    "url": "assets/js/36.8e4113c5.js",
    "revision": "f9dd46ddf355989d068921e4f10accf3"
  },
  {
    "url": "assets/js/37.7c04b8ee.js",
    "revision": "ccd617e9ad8c0d04dc4779d3db735e0e"
  },
  {
    "url": "assets/js/38.fb9b5501.js",
    "revision": "fa23317d0055fdc9dedb254d471f1843"
  },
  {
    "url": "assets/js/39.94d9bd09.js",
    "revision": "72605174dd4d40eea4627b1ad5c9b844"
  },
  {
    "url": "assets/js/4.034d115a.js",
    "revision": "bec180c654a4fe45cde536078c1bd3b3"
  },
  {
    "url": "assets/js/40.f3d10063.js",
    "revision": "08b3e17d9af2b3ba06d5ecc32339a3a3"
  },
  {
    "url": "assets/js/41.a86e165e.js",
    "revision": "993cf86a30552e02b74a3c4d97f68853"
  },
  {
    "url": "assets/js/5.38c071ec.js",
    "revision": "987ea56314016160a5432eebd5d4c7b3"
  },
  {
    "url": "assets/js/6.150542a8.js",
    "revision": "ddf9e8020b7c1f1e25353b147f8469e4"
  },
  {
    "url": "assets/js/7.457ce9cb.js",
    "revision": "b296eeae4a4c79e41375788336183466"
  },
  {
    "url": "assets/js/8.86b8fce7.js",
    "revision": "d330b7ff6d23cd1237904f88daeb0b82"
  },
  {
    "url": "assets/js/9.e3986978.js",
    "revision": "722cf6286555589fb81c6ee88782eb4d"
  },
  {
    "url": "assets/js/app.d77c62f0.js",
    "revision": "0d8da8f059f6ebdfc0d7c2bdc3c77cd9"
  },
  {
    "url": "assets/js/vendors~docsearch.008c7241.js",
    "revision": "1b77e25d42f79fc9f6aaa72ef7b833b3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0652525317367329d83a1b29914b5f22"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "68126a5c5729639f0a58e3581242731f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "69e9bc0c9181f12e9ee90e362945fdfb"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "02cba4c8968d5b7dd78d0feaca802f71"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5a62b5ec8972a679d7aa27a1f7842de8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fb82146783aa3ac612d59241c0cc3034"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b7cdfe3d682603822ce649d63c06fc01"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b00177fca6dabf886a275af7d23421df"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e4707df6a5bfcc2f29784659fea0fedd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "154b0a1284411de56e7d308f4b29c66e"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "a2fd7544b282b45b1a3509acdf0f29a3"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7f0d881d271962db8ea115e817729e93"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0e7cda121c74eba83832e3cbec623649"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2057e282b079fd9b688f9714225b4b47"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "080eb665546a26d69bb5e3b84897017b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "725faa3ffaef2de0b9571639d77acd94"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c13cadbf230e6e97b0a69e8fa9b67aff"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f2bfaa8ae2819644d0ae2319be5cd221"
  },
  {
    "url": "resources/books.html",
    "revision": "c496a98a066eea0e1562b54b2a291db2"
  },
  {
    "url": "resources/community.html",
    "revision": "3d9e21f55e5d4af73c563ef7d2c2383f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "114d69f9779fb92b67b2c4908bdc8d2d"
  },
  {
    "url": "resources/courses.html",
    "revision": "36fb55ea7b31ca5417f431be2e71d338"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "72ceee7195e0e45907afc210cabb9461"
  },
  {
    "url": "resources/examples.html",
    "revision": "9dbbbfcfe9f3c8b7d8c449b5e751cba9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cdf7aab1c92e1ac748f10cc5293c6ab3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8601e4e2d40959302ef6bacc5405aea9"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0d171c3734313d74b8ab843d0163399c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0a27339e2a729839d24dbc692c028244"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2b44eb93244395b895aed83ae16a4963"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c8f8ce382ced3db2718ee253cc62d338"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "72ce8a26e8e69ffaf491d879e24fa36b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
