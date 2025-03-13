const path = require('path');

module.exports = {
  appBuild: path.resolve(__dirname, '../build'),
  appPublic: path.resolve(__dirname, '../public'),
  appHtml: path.resolve(__dirname, '../public/index.html'),
  appIndexJs: path.resolve(__dirname, '../src/index.js'),
  appSrc: path.resolve(__dirname, '../src'),
  appDist: {
    root: '/www/wwwroot/SDK_ERP3/template/SDK_ERP_REACT',
    html: '/www/wwwroot/SDK_ERP3/template/SDK_ERP_REACT/html',
    css: '/www/wwwroot/SDK_ERP3/template/SDK_ERP_REACT/css',
    js: '/www/wwwroot/SDK_ERP3/template/SDK_ERP_REACT/js'
  },
  publicUrlOrPath: '/template/SDK_ERP_REACT/'
}; 