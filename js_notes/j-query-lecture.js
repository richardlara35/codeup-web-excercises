(function () {
    "use strict";
//
//     let school = {
//         students: 36,
//         name: "Mayde Creek HS",
//         teachers: ["Casey", "Laura", "Tristan"],
//         getLunchMoney: function (){
//             console.log("you have x dollars left");
//         }
//     }
// school.getLunchMoney();
//
//     //dollar sign tapping into jQuery library
//     //selector - the element that you are selecting from the dom
//     $("selector").methods(any arguments required);
//
//
//     //select by tag name
//     $("tag-name")
//     //select by id
//     $("#id")
//     //select by class
//     $(".class")
//window.onload
//JavaScript
// DO SOMETHING WHEN THE DOM IS FINISHED LOADING
//     window.onload = function () {
//         console.log(new Date());
//         console.log("Window done loading");
//     }
//
//     // document.ready
//     //jquery
//     //DO SOMETHING WHEN THE DOM IS FINISHED LOADING
//     //WON'T WAIT FOR IMAGES TO LOAD
//     //DOC WO'T NEED QUOTES
//     $(document).ready(function () {
//         console.log(new Date());
//         console.log("Dom is finished loading");
//
//     })


//TODO: Using jQuery ...
// 1. hide the paragraph that is in all caps
    $("#all-caps").hide();
// 2.hide all the spans
    $("span").hide();
// 3. show all the elements that have a ‘show-me’ class. refresh your page between every task. d
    $(".show-me").show();
    $('.pink').css('background-color', 'pink');
    $('.orange').css('background-color', 'orange');

    window.onload = function (){
        $(".pink").hide();
        console.log("Pink is hidden")
    }

    $(document).ready(function () {
        $(".orange").hide();
        console.log("Orange is now hidden");
    })

    $(window).load(function() {
        $(".backboard").click(function(){
            alert("Briiiiick!");
        });
    })

    $(window).load(function() {
        $(".home").click(function(){
            $(".home").css('border-radius', '50%');
        })
    })

    $(window).load(function() {
        $(".sunset").click(function(){
            alert("Briiiiick!");
        });
    })



})()