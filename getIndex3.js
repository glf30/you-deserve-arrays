let prompt = require("prompt-sync")();

// 3. Write a program `getIndex3.js` that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index

let getIndex3Array = prompt("Please enter items seperated by a comma").split(",")

if (getIndex3Array.length < 4){
    console.log(getIndex3Array[getIndex3Array.length-1])
}else{
    console.log(getIndex3Array[3])
}
