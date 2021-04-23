(function(){
"use strict";
// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file
//     var number = 0;
//     while(number <= 25){
//         if (number % 2 === 0) {
//             console.log("Count is at: " + number);
//         }
//         number+=1;
//     }
//
//     var password = "1234";
//     var input = prompt("Please enter password:");
//
//     do{password === input;
//         alert("Incorrect try again")
//         input = prompt("Please try again:");
//     }while(input !== password)
//     alert("Password is correct!")

    // while(input !== password){
    //     var input = prompt("Please Enter password:");
    //     if(input === password){
    //         return alert("Password is correct!");
    //     }else alert("Incorrect try again!");
    // }



//----MINI EXERCISE-----
// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements

    // var spacesLeft = 30;
    // var car = 2;
    // do{
    //     console.log('There are ' + spacesLeft + ' parking spaces available');
    //     spacesLeft -=2;
    //     console.log('There are now ' + spacesLeft + ' parking spaces available');
    //     console.log('<------------>');
    //
    // }while(spacesLeft > 0);
    //
    // console.log("Sorry the lot is full")

//FOR LOOPS MINI EXERCISE---------------
// TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo)

    // for(let i = 0; i <= 30; i++){
    //     console.log("Count is at " + i);
    //     if(i % 2 == 0){
    //         i +=2;
    //         console.log("Count plus 2 is now " + i);
    //     }else{
    //         console.log(i + " is odd")
    //     }
    // }
// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.
    for(let i = 1; i <= 40; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("Yahtzee!...." + i);
        }else if(i % 5 == 0){
            console.log("Polo...." + i);
        }else if(i % 3 == 0){
            console.log("Marco...." + i);
        }else{
            console.log("I'm not playing...." + i);
        }
    }

})()