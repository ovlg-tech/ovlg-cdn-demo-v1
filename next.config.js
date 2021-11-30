module.exports = {
   //basePath: '/',
   webpack: function (config) {
      config.module.rules.push({
         test: /\.html$/,
         use: 'raw-loader',
      })
      return config
   },
   trailingSlash: true,
   // i18n: {
   //    locales: ["en"],
   //    defaultLocale: "en",
   // },
   publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
      rootPath: '',
   },
   env: {
      prod: false, //true,
   },
   images: {
      domains: ['www.ovlg.com', 'ik.imagekit.io', 'i1.ytimg.com', 'picsum.photos'],
      formats: ['image/webp'], //'image/avif',
      loader: "imgix",
      path: "", // "https://noop/", '../public/images/', 'https://picsum.photos/200/', 'https://example.com/myaccount/',
   },
   exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/debt-consolidation': { page: '/debt-consolidation/home' },
        //'/debt-consolidation/payday-loan.html': { page: '/debt-consolidation/payday-loan', query: { title: 'payday loan' } },
      }
    },
}
