(function(){
"use strict";
    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // hint: area = pi * radius^2

            return (Math.PI * this.radius) ; /**TODO: return the proper value**/
        },

        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value


        logInfo: function (doRounding) {
            if (doRounding == true){
                Math.round(this.getArea ())
            }else{
                return this.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.logInfo);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);



})()