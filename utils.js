function transformWithLength(chars, encrypt) {
  const encrypted = chars.map(char => {
    const cryptKey = chars.length;
    const ascii = char.charCodeAt(0);
    
    const transformedChar = encrypt
      ? String.fromCharCode(ascii + cryptKey)
      : String.fromCharCode(ascii - cryptKey);

    return transformedChar;
  });

  return encrypted;
}

function reverseCrypt(first) {
  const encrypted = first.reverse();

  return encrypted;
}

function transform(second) {
  const encrypted = second.map(char => {
    const ASCII = char.charCodeAt(0);
    if (ASCII >= 97 && ASCII <= 122) {

      return String.fromCharCode(ASCII - 32);
    } else if (ASCII >= 65 && ASCII <= 90) {

      return String.fromCharCode(ASCII + 32);
    }

    return char;
  })

  return encrypted;
}

module.exports = {
  transformWithLength,
  reverseCrypt,
  transform,
}