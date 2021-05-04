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


    function cube(n){
        return Math.pow(n,3);
    }

    console.log(cube(3));

    function cubeRoot(n){
        return Math.cbrt(n)
    };

    console.log(cubeRoot(cube(5)));

})()