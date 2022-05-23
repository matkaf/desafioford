const input = 'cfdeaarddgci^txyb';
const { firstStep, secondStep, thirdStep } = require('./encrypt');

function decrypt(key, firstStep, secondStep, thirdStep) {
  const chars = input.split('');

  const first = thirdStep(chars);
  
  const second = secondStep(first);

  const third = firstStep(second, false);

  const decrypted = third.join('');
  
  return decrypted;
}

console.log(decrypt(input, firstStep, secondStep, thirdStep));