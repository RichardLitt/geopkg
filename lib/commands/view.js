'use strict'

var pkgio = require('package-json-io')
var shared = require('../shared')
var browser = require('../browser')

module.exports = function () {
  pkgio.read(function (err, data) {
    if (!err && !data.coordinates) {
      err = new Error('The package.json doesn\'t contain any coordinates')
    }

    if (err) {
      console.error('ERROR:', err.message)
      console.error('To view your current location, type `geopkg preview`')
      process.exit(1)
      return
    }

    browser.openMap(data.coordinates, shared.done)
  })
}