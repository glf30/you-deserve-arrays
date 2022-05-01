let prompt = require("prompt-sync")()

// 5. `firstItemIsNumber.js`: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number

let userInputList = prompt("please enter list items seperated by a comma ").split(",");

if (Number(userInputList[0]) > 0){
    console.log(true);
}else{
    console.log(false)
}