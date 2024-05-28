const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isValidInput = function(i){
  if(i[0] === 'a'){
    return true;
  }
  return false;
};
// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function(isValidInput){
  if(isValidInput === true){
    return 'its vowel';
  }
  return 'not a vowel';
}
// Be sure to test your code!
console.log(getValidInput('Enter a string: ',isValidInput));
console.log(getValidInput('Enter a word: ', isVowel));