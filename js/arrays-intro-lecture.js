(function(){
"use strict";


    //number - 5
    //string - "Doge"
    //boolean - True/False
    //null - the absence of
    //undefined - data should exist, but doesn't
    // object ->

    //[]

    // var myArr = ["doge", "cat", "fishy"]
    //
    // //<== each comma delimited value is called an "element"
    //
    // console.log(Array.isArray(myArr));


    // var myCharacteristics = ["Richard", "Software Engineer", "25"];

    //console.log("The length of the array is " + myCharacteristics.length);
    // The first element in an array is index of 0
    //the last element in an array has an index of (length - 0)
    // console.log(`Hello I am a ${myCharacteristics[1]} named ${myCharacteristics[0]}
    //  who is ${myCharacteristics[2]} years old`);

// TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!


     // for(let i = 0; i < 10; i++){
     //     //do something with an array element
     //
     //
     // }

    var myPets = ["Buddy", "Felipe", "Taz", "Lupe"];
    //length = 4
    //maxIndex = 3
    // for (let i = 0; i < myPets.length; i++){
    //     console.log(myPets[i]);
    // }

    // TODO: MINI-EXERCISE
    //  -> Create an array with at least 5 elements, describing whatever you'd like!
    //  -> Create a loop which will log each element to the console
    //  -> Wrap that loop in a function which has an array parameter
    //  -> Call the function and pass in your array as the argument
    //  -> DID YOU KNOW: You can add different data types to an array??
    //      -> Try adding strings, numbers, or booleans as elements

    var topFiveFoods = ['Ramen', 'Tacos', 'Lo Mein', 'Sushi', 'Burgers'];



    myPets.forEach(function(pet){
        console.log(("My pet's name is : " + pet));
    });







})()