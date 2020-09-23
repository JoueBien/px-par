var path = require('path');
var sassTrue = require('sass-true');
var assert = require('assert');
var sassFile = path.join(__dirname, 'text.spec.scss');
const { px_par } = require('./index.js')

// SASS Tests
describe('Running SASS Test', function () {
  sassTrue.runSass({file: sassFile}, describe, it);
})


// Node Tests
describe('Running JS Test', function () {
  describe('The function for px conversion to %', () => {

    it(' par_size(100, 50) Outputs calc( ( (100% / 100) * 50 + 0px )', () => {
      assert.equal(px_par(100, 50), 'calc( ( (100% / 100) * 50 ) + 0px )')
    })

    it(' par_size(100, 50) Outputs calc( ( (100% / 240) * 20 + 0px )', () => {
      assert.equal(px_par(240, 20), 'calc( ( (100% / 240) * 20 ) + 0px )')
    })
  })
})
