(function () {
    // let jqElements = $('.jqClass');
    // let backgroundBlue = 'lightblue';
    // let backgroundReset = '';
    // function addClickEvents(elementsToBind, color1, color2){
    //     let handlerBlueBckGnd = function(){
    //         elementsToBind.css('background-color', color1);
    //         $(this).css('background-color', color2);
    //     }
    //     elementsToBind.click(handlerBlueBckGnd);
    // }
    // addClickEvents(jqElements, backgroundReset, backgroundBlue);
    // addClickEvents($(".card"), "", "red");
    // //make sure the DOM is loaded first
    // document.addEventListener("DOMContentLoaded", function() {
    //     addListeners();
    // });
    // //parent method for adding all listeners
    //
    //     addListeners();
    //
    // //parent method for adding all listeners
    // function addListeners(){
    //     //get the elements to add listener and change image
    //     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
    //     addEvents(cardContainers, 'js/assets/jazz-music-rubber-duck.jpg', 'mouseover');
    //     addEvents(cardContainers, 'js/assets/question.png', 'mouseout');
    // }
    // //add mouseover/mouseout events to all selected elements
    // function addEvents(cardContainers, imgPath, listenerType){
    //     (cardContainers).hover(
    //         function (){
    //             changeImage($(this), 'js/assets/jazz-music-rubber-duck.jpg');
    //         },
    //         function (){
    //             changeImage($(this), 'js/assets/question.png');
    //         }
    //     )
    //
    //
    // }
    // //actual function to swap images
    // function changeImage(card, imgPath){
    //   $(card).find('img').attr('src', imgPath);
    // }
    //
    //
    // $(document).ready(function () {
    //     $("#submitBtn").click(function () {
    //         $("#override-bootstrap").css('background-color', 'red')
    //     })
    // })
    //
    // $(document).ready(function () {
    //     $(".card-text").click(function () {
    //         $(this).css('background-color', 'red')
    //     })
    // })
    //
    // $(document).ready(function () {
    //     $('#reset').click(function () {
    //         location.reload();
    //     })
    // })
    // $(document).ready(function () {
    //     $('#main-title').click(function () {
    //         $(this).css("text-size","4em");
    //     })
    // })


    // TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")
    $(document).ready(function () {
        // let hoverIn = function () {
        //     let attributeValue = $(this).attr("data-attribute");
        //     $(this).find(".card-title").text(attributeValue);
        //     console.log(attributeValue);
        // }
        //
        // let hoverOut = function () {
        //     $(this).find(".card-title").text("Card");
        // }
        //
        // $('.col-md-3').hover(hoverIn, hoverOut);


// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

        // $(".list-group-item").toggle(
        //     function () {
        //         $(this).css('background-color', 'red');
        //         $(this).css('text-transform', 'uppercase');
        //     }, function() {
        //         $(this).css('background-color', 'white');
        //     });



        // $(".list-group-item").click(
        //     function () {
        //         $(this).css('background-color', 'red');
        //         $(this).css('text-transform', 'uppercase');
        //     }
        //
        // )

        // $(".list-group-item").click(function(e){
        //     $(this).css('text-transform', 'uppercase');
        //     $(this).toggleClass('cssStuff');
        // })




        // TODO: Change up the submit button event
//  -> Add a new input with an id of #redirect-url
//  -> Remove the old click events from #submitBtn
//  -> When the user clicks #submitBtn, redirect the page to the value of #redirect-url
//  -> HINT: You can either add a new input or change the id of an existing input element to #redirect-url to save time

        // $('#submitBtn').click(function(){
        // let newSite = $('#redirect-url').val();
        // window.location.assign(newSite);
        //
        // })

        // TODO: When the user clicks #submitBtn, log to the console the values of #first, #last, and #handleField
//  -> If any of the fields are empty, alert the user to fill the empty control (be sure to tell them which control was empty)

        // $('#submitBtn').click(function(){
        //     console.log($('.firstName').val())
        //     console.log($('.lastName').val())
        //     console.log($('.handle').val())
        // })


        $('#submitBtn').click(function(){
            if ($('.firstName').val() === "" || $('.lastName').val() === "" || $('.handle').val() === ""){
                alert("No")
            } else{
                let person = {
                    firstName: $('.firstName').val(),
                    lastName : $('.lastName').val(),
                    handle : $('.handle').val(),
                }
                console.log(person);
            }
        })





    })

})();

