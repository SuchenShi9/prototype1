
export default {
  basePath: 'https://github.com/SuchenShi9/prototype1',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
