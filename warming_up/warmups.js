(function(){
"use strict";
//----------------------------------May 3


// function trim(input){
//     // return input.replace(/\s+/g, '');
//     return input.replaceAll(" ","");
// }
//
//     console.log(trim("Not Hello World"));


//------------------------------May 4th


    // function cube(n){
    //     return Math.pow(n,3);
    // }
    //
    // console.log(cube(3));
    //
    // function cubeRoot(n){
    //     return Math.cbrt(n)
    // };
    //
    // console.log(cubeRoot(cube(5)));

//-----------------------------Cinco De Mayo

    // function last(input){
    //     return (input.slice(-1));
    // }
    //
    // console.log(last("What it do"));
    // console.log(last("Warm Up!"))


//-------------------------------May 6th

    // function remainder(num, div) {
    //     if (!isNaN(num) && !isNaN(div)) {
    //         return num % div;
    //     } else if (isNaN(num)) {
    //         return (`Parameter ${num} is not a number`);
    //     } else if (isNaN(div)) {
    //         return (`Parameter ${div} is not a number`);
    //     }
    //     return ("Its all messed up here");
    // }
    //
    // console.log(remainder(26,3));
    // console.log(remainder("Banana",5));
    // console.log(remainder(20,"Jello"));
    // console.log(remainder("Banana","Jello"));

    //------------------------------May 13

    // for(let i = 1; i<= 5; i++){
    //     console.log(" 🥸 ".repeat(i));
    // }

//----------------------------------May17

    //Write a function named secondToLast(arr) that returns the data type of the
    // second to last element of the array
    // parameter. When you call the function, pass in an array of your choosing

    function secondToLast(arr){
        console.log(arr[arr.length -2])
        return typeof (arr[arr.length -2])
    }

    console.log(secondToLast([100, 200, 300, "400", 500]));

})()