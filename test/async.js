var pieces = require('../async')

var blob = new Blob([new Uint8Array([1, 2, 3, 4, 5])])
var piece = pieces(blob, 2)
var tests = []

tests.push(function (done) {
  console.assert(piece.length === 3, 'correct number of pieces', piece.length)
  done()
})

tests.push(function (done) {
  piece.at(0, function (err, p) {
    console.assert(err === null, 'no error', err)
    console.assert(p[0] === 1, 'correct piece value', p[0])
    console.assert(p[1] === 2, 'correct piece value', p[1])
    done()
  })
})

tests.push(function (done) {
  piece.at(1, function (err, p) {
    console.assert(err === null, 'no error', err)
    console.assert(p[0] === 3, 'correct piece value', p[0])
    console.assert(p[1] === 4, 'correct piece value', p[1])
    done()
  })
})

tests.push(function (done) {
  piece.at(2, function (err, p) {
    console.assert(err === null, 'no error', err)
    console.assert(p[0] === 5, 'correct piece value', p[0])
    console.assert(p[1] === void 0, 'correct piece value', p[1])
    done()
  })
})

tests.push(function (done) {
  console.assert(piece.length === 3, 'correct number of pieces', piece.length)
  done()
})

run(tests.shift())

function run (test) {
  test && test(function () {
    run(tests.shift())
  })
}
