(function(){
"use strict";
    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    function analyzeColor(color) {
        if (color === "red"){
            console.log("Apples are red");
        }else if(color === "orange"){
            console.log("Orange you glad I didn't say banana")
        }else if(color === "yellow"){
            console.log("Mello Yellow");
        }else if(color === "green"){
            console.log("Mean Green fighting machine");
        }else if(color === "blue"){
            console.log("I'm feeling blue today");
        }else if(color === "indigo"){
            console.log("I got nothing for indigo");
        }else if(color === "violet"){
            console.log("Isn't violet just fancy purple?");
        }else{
            console.log("Uhhh that's not a color");
        }


    }

    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    analyzeColor(randomColor);
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
 function analyzeColorAgain(color){
     switch(color){

         case "red":
             console.log("Apples are red");
             break;
         case "orange":
             console.log("Orange you glad I didn't say banana");
             break;
         case "yellow":
             console.log("Yellow Submarine");
             break;
         case "green":
             console.log("Mean green fighting machine");
             break;
         case "blue":
             console.log("I'm feeling blue today");
             break;
         case "indigo":
             console.log("I got nothing for indigo");
             break;
         case "violet":
             console.log("Isn't violet just a fancy purple?");
             break;
         default:
             console.log("Uhhh that's not a color I'm familiar with.");

     }
    }
    analyzeColorAgain(randomColor);
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
//     var myColor = (prompt("What is your favorite color?"));
//
// analyzeColor(myColor);
    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
function calculateTotal(num, total){
    if(num === 0){
        return total - (total / 0);
    }else if(num === 1){
       return total - (total * 0.10);
    }else if(num === 2){
        return total - (total * 0.25);
    }else if(num === 3){
        return total - (total * 0.35);
    }else if(num === 4){
       return total - (total * 0.50);
    }else if(num === 5){
         return total * 0;
    }else{
    console.log("Uhhh pick another number");
    }
    }
    console.log("Your total today is $" + calculateTotal(5, 100));
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log("Your total today is $" + calculateTotal(luckyNumber, 100));
    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function numberStuff() {
        var choose = (confirm("Would you like to enter a number?"));
        if (choose === true) {
            var num = (prompt("What number are you thinking of?"));
            if (isNaN(num) === true){
                alert("That is not an number! Refresh & Try again")
            }else {
                if (num % 2 == 0) {
                    alert("Your number is even!");
                } else {
                    alert("Your number is odd!");
                }
                alert("Your number +100 is: " + (parseInt(num, 10) + 100));
                if (num > 0) {
                    alert("Your number is positive!");
                } else if(num<0){
                    alert("Your number is negative!");
                }else{
                    alert("Your number is neither positive nor negative!")
                }
            }
        }
    }
    numberStuff();
})()