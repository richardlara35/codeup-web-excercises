(function(){
"use strict";
//** TODO While Loops
// Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// 16
// 32
// 64
//...
// 65536
//
//     var i = 2;
//
//     while(i <= 65536){
//      console.log("Count is at:" + i);
//         i*=2
//     }

//** TODO:Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random
// number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the looP
// your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her
// clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the
// random numbers for this exerciseS
//  This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
//  This expression will generate a random number between 1 and 5

// The output should be similar to the following:
//
// 5 cones sold...if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

    console.log("I have " + allCones + " ice cream cones to sell today");

do{
    var sold = Math.floor(Math.random() * 5) + 1;
    if(allCones - sold >= 0) {
        console.log("I sold " + sold + " ice cream cones!");
        allCones -= sold;
        console.log("There are now " + allCones + " left");
    }else{
        console.log("I can't sell you " + sold + " cones, I only have " + allCones + " left");
    }
}while(allCones !== 0)

console.log("I sold all my cones!");



})()