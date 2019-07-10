const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  mode: 'spa',
  modules: [
    { handler: require('../../') }
  ],
  auth0: {
    domain: 'corocn-auth0-spa-module.auth0.com',
    clientId: 'cRDXsLKe4W0nX5lbLss8BP4PkDhQunFR'
  }
}
