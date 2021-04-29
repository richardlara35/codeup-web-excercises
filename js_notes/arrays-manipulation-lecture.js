(function(){
"use strict";

    //TODO:
    //-> .length - SUPER IMPORTANT
    // -> .forEach() - SUPER IMPORTANT
    // -> FOR LOOP - SUPER IMPORTANT

    var days = ["Monday", 'Tuesday', "Wednesday"];

    // days.push("Thursday");
    //
    // // var removedElement = days.pop();
    //
    // console.log(days);
    // console.log("The removed element was: " + removedElement);

    // TODO: Mini Exercise
    // -> Create an array with the remaining days of the week
    // Call .forEach() on that new array
    // Inside the inline function you pass into .forEach();
    //---add the remainingDays of the week to the old array
    //->When the loop completes, console.log() the completed day of the week array

    var remainingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

    remainingDays.forEach(function(day){
        days.push(day);
    });
    // console.log(days)

    // TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array


    //
    // function reverse(popped) {
    //    let newNum = [];
    //    let len = popped.length;
    //
    //    for (let i = 0; i <= len; i++){
    //        newNum.unshift(popped.pop());
    //        console.log(newNum);
    //    }
    // }






})()