const { resolve } = require('path')

module.exports = function (moduleOptions) {
  // Get all Sanity config options
  // including top level options
  const options = {
    ...this.options.sanity,
    ...moduleOptions
  }
  // Throw error if project id is not defined in the config
  if (!options.projectId) throw new Error('[Sanity module] No project ID was found in the Sanity configuration')
  // Throw error if a dataset is not defined in the config
  if (!options.dataset) throw new Error('[Sanity module] No dataset was configured in the Sanity configuration')

  // Set default for token
  options.token = options.token || ''
  // Set default for useCdn
  options.useCdn = options.useCdn || false
  // Set default for withCredentials
  options.withCredentials = options.withCredentials || false

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'sanity.js',
    options
  })
}
module.exports.meta = require('../package.json')
