import path from 'path'

function auth0SpaModule(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: this.options.auth0
  })
}

module.exports = auth0SpaModule
module.exports.meta = require('../package.json')
