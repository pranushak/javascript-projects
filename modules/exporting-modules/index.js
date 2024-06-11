// Import the modules exported from practiceExports.js below:

const practice = require('./practiceExports.js');

console.log(typeof practice);

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));
console.log(practice.randomArrayElement(arr))