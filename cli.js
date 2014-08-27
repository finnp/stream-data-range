#!/usr/bin/env node

var ldj = require('ldjson-stream')
var range = require('./')

process.stdin
  .pipe(ldj.parse())
  .pipe(range(function (metadata) {
    console.log(JSON.stringify(metadata))
  }))