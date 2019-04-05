var pieces = require('../sync')

var u8a = new Uint8Array([1, 2, 3, 4, 5])
var piece = pieces(u8a, 2)

console.assert(piece.length === 3, 'correct number of pieces', piece.length)
console.assert(piece.at(0)[0] === 1, 'correct piece value', piece.at(0)[0])
console.assert(piece.at(0)[1] === 2, 'correct piece value', piece.at(0)[1])
console.assert(piece.at(1)[0] === 3, 'correct piece value', piece.at(1)[0])
console.assert(piece.at(1)[1] === 4, 'correct piece value', piece.at(1)[1])
console.assert(piece.at(2)[0] === 5, 'correct piece value', piece.at(2)[0])
console.assert(piece.at(2)[1] === void 0, 'correct piece value', piece.at(2)[1])
console.assert(piece.length === 3, 'correct number of pieces', piece.length)
