module.exports = {
   basePath: '',
   webpack: function (config) {
      config.module.rules.push({
         test: /\.html$/,
         use: 'raw-loader',
      })
      return config
   },
   publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
      rootPath: '',
   },
   env: {
      prod: false,
   },
   images: {
      domains: ['www.ovlg.com', 'ik.imagekit.io', 'i1.ytimg.com'],
   },
   compress: true,
}
