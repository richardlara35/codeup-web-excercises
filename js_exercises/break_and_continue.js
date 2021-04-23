(function(){
"use strict";

function choose(){
    while(0< num < 50 ){
        var num = prompt("Choose a number that is odd between 1 and 50");
        if((num % 2 == 1) && (1 < num < 50)){
            break;
        }else{
            alert("Try again");
        }

    }
}

for(let i = 1; i <= 50; i+= 2 ){
    console.log("Here is an odd number" + i);
    choose();
    if(i == num){
        console.log("Gross we don't like" + num);
    }
}


})()