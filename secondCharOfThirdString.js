let prompt = require('prompt-sync')();
// 6. `secondCharOfThirdString.js`: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead

let userStringArray = prompt("please enter items seperated by a comma ").split(",")

const secondCharacter = userStringArray[2][2]
console.log(secondCharacter)