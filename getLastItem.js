let prompt = require('prompt-sync')();

// 2. Write a program, `getLastItemFrom.js` that prompts the user for an array, then logs out the last item from that array

const lastItemArray = prompt("please enter items seperated by a comma ").split(",");

const lastItem = lastItemArray[lastItemArray.length -1]; 
console.log(lastItem)


