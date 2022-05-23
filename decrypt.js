const { transformWithLength, reverseCrypt, transform } = require('./utils');

const input = 'cfdeaarddgci^txyb';


function decrypt(key) {
  const chars = input.split('');

  const first = transform(chars);
  
  const second = reverseCrypt(first);

  const third = transformWithLength(second, false);

  const decrypted = third.join('');
  
  return decrypted;
}

console.log(decrypt(input));