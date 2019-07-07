import path from 'path'

function auth0SpaModule(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      domain: process.env.AUTH0_DOMAIN || this.options.auth0.domain,
      clientId: process.env.AUTH0_CLIENT_ID || this.options.auth0.clientId
    }
  })
}

module.exports = auth0SpaModule
module.exports.meta = require('../package.json')
