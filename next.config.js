module.exports = {
   //basePath: '/',
   webpack: function (config) {
      config.module.rules.push({
         test: /\.html$/,
         use: 'raw-loader',
      })
      return config
   },
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

      // loader: 'imgix',
      // // path: 'https://picsum.photos/200/',// 'https://example.com/myaccount/',
      // path: '../public/images/',// 'https://example.com/myaccount/',
      loader: "imgix",
      // path: "https://noop/",
      path: "",
   },
}
