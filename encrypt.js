const input = '1HGCM82633A004352';

function firstStep(chars, encrypt) {
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

function secondStep(first) {
  const encrypted = first.reverse();

  return encrypted;
}

function thirdStep(second) {
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

function encrypt(input) {
  const chars = input.split('');

  const first = firstStep(chars, true);

  const second = secondStep(first);

  const third = thirdStep(second);

  const encrypted =  third.join('');

  return encrypted;
}

console.log(encrypt(input));

module.exports = {
  firstStep,
  secondStep,
  thirdStep
}