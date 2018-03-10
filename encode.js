/**
Javascript features and functions in use:
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
  //somewhere to store the converted characters
  let result = [];
  //next we loop over each character in the string.
  for (let position of word) {
  // and save the charcode to the array
  result.push(word.charCodeAt(word.indexOf(position))); // change this to return index instead of actual char
  }
  // and return that list of codes, separated by colons
  return result.join(':');
}

function decode(hash) {
  //split the code by semicolons!
  let arr = hash.split(':');
  // again somewhere to put our codes
  let result = [];
  //loop over the codes
  for (let code of arr) {
  //change the code back to the string character equivalent
  result.push(String.fromCharCode(code)); //
  }
  return result.join('');
}


let message = "My name is Groot";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
