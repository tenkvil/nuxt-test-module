const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['bbs-ui-core'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'bbs-ui-core.js',
    options
  })
}

module.exports.meta = require('../package.json')
