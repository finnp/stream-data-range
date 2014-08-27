var Writable = require('stream').Writable

module.exports = function (cb) {
  var metadata = {}
  var stream = new Writable({objectMode: true})
  stream._write = function (chunk, enc, done) {
    onRow(chunk)
    done()
  }
  stream
    .on('finish', function () {
      cb(metadata)
    })
  return stream

  function onRow(row) {
    for(attr in row) {
      var value = isNaN(Number(row[attr])) ? row[attr] : Number(row[attr])
      if(metadata[attr]) {
        if(value < metadata[attr].min) {
          metadata[attr].min = value
        }
        if(value > metadata[attr].min) {
          metadata[attr].max = value
        }
      } else {
        metadata[attr] = {
          min: value,
          max: value
        }
      }
    }
  }
}