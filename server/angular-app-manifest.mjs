
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/SuchenShi9/prototype1',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SuchenShi9/prototype1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533, hash: '6c611292b55a9f953ba8a3ecd40935920e47cd8745d35b85c1bf93cae0e4ea98', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: 'b87ae20c536549c40fa823c28989cdc8ff29113a9d7001aa245d8eef5dcb021e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20875, hash: '0cc55cb6f29801cbac63972ecae021bfa1145c4f492f082d7fa122c8ba00d945', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
