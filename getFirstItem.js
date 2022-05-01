let prompt = require('prompt-sync')();

// 1. Write a program, `getFirstItemFrom.js` that prompts the user for an array, then logs out the first item in that array

let firstItem = prompt("Array input = seperate items by comma ").split(",")
// "1,2,3,4" - use to split by comma to get items into array
console.log(firstItem[0])

