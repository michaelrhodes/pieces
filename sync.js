module.exports = pieces

function pieces (u8a, size) {
  return {
    length: Math.ceil(u8a.length / size),
    at: function (index, start) {
      return u8a.slice(start = index * size, start + size)
    }
  }
}
