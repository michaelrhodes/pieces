# pieces
slice binary data into pieces

[![build status](https://travis-ci.org/michaelrhodes/pieces.svg?branch=master)](https://travis-ci.org/michaelrhodes/pieces)

## install
```sh
npm install michaelrhodes/pieces#1.0.0
```

## use
```js
var pieces = require('pieces')

var u8a = new Uint8Array([1, 2, 3, 4, 5])

// Sync
var p1 = pieces.sync(u8a, 2)
console.assert(p1.length === 3)
console.assert(p1.at(0)[0] === 1)
console.assert(p1.at(0)[1] === 2)
console.assert(p1.at(1)[0] === 3)
console.assert(p1.at(1)[1] === 4)
console.assert(p1.at(2)[0] === 5)
console.assert(p1.at(2)[1] === void 0)
console.assert(p1.length === 3)

// Async
var blob = new Blob([u8a])
var p2 = pieces.async(blob, 2)

console.assert(p2.length === 3)

p2.at(0, function (err, p) {
  console.assert(err === null)
  console.assert(p[0] === 1, 'actual', p[0])
  console.assert(p[1] === 2)
  console.assert(p2.length === 3)
})

p2.at(1, function (err, p) {
  console.assert(err === null)
  console.assert(p[0] === 3)
  console.assert(p[1] === 4)
  console.assert(p2.length === 3)
})

p2.at(2, function (err, p) {
  console.assert(err === null)
  console.assert(p[0] === 5)
  console.assert(p[1] === void 0)
  console.assert(p2.length === 3)
})
```

## obey
Copyright 2019 Michael Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
