module.exports = pieces

function pieces (file, size) {
  return {
    length: Math.ceil(file.size / size),
    at: function (index, cb, start) {
      var reader = new FileReader
      reader.onerror = cb
      reader.onload = function () {
        cb(null, new Uint8Array(this.result))
      }
      reader.readAsArrayBuffer(
        file.slice(start = index * size, start + size)
      )
    }
  }
}
