"use strict";
//
//
alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?").toUpperCase();

if(favColor === "Green".toUpperCase()){
    alert("Green is my favorite color too!");
}else {
    alert("You chose " + favColor);
}
