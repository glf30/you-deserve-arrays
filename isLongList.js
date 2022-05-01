let prompt = require('prompt-sync')();

// 4. `isLongList.js`: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

const listArray = prompt("please enter list items seperated by a comma ").split(","); 

if (listArray.length > 9){
    console.log(true)
}else{
    console.log(false);
}




