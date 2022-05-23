const { transformWithLength, reverseCrypt, transform } = require('./utils');

const input = '1HGCM82633A004352';

function encrypt(input) {
  const chars = input.split('');

  const first = transformWithLength(chars, true);

  const second = reverseCrypt(first);

  const third = transform(second);

  const encrypted =  third.join('');

  return encrypted;
}

console.log(encrypt(input));
