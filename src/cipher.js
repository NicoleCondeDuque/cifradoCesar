const cipher = {
  encode: function (offset, string) {
    const offsetN = parseInt(offset)
    if (typeof offsetN !== "number" || typeof string !== "string") {
      throw new TypeError("El valor no es correto", "cipher.js", 4)
    }
    let convertedMessage = "";
    for (let i = 0; i < string.length; i++) {
      const ascii = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65
      convertedMessage += String.fromCharCode(ascii);

    }
    return convertedMessage;

  },
  decode: function (offset, string) {
    const offsetN = parseInt(offset)
    if (typeof offsetN !== "number" || typeof string !== "string") {
      throw new TypeError("El valor no es correto", "cipher.js", 4)
    }
    let convertedMessage = "";
    for (let i = 0; i < string.length; i++) {
      const ascii = ((string.charCodeAt(i) - 65 - parseInt(offset) + (26 * (offset % 26 + 1))) % 26) + 65;
      convertedMessage += String.fromCharCode(ascii);
    }
    return convertedMessage;
  }
};


export default cipher;

