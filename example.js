var fs = require('fs')
var ldj = require('ldjson-stream')
var range = require('./')

fs.createReadStream('data.ldjson')
  .pipe(ldj.parse())
  .pipe(range(function (metadata) {
    console.log(metadata)
  }))