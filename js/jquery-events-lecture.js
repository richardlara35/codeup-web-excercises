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


    $(document).ready(function () {
        $("#submitBtn").click(function () {
            $("#override-bootstrap").css('background-color', 'red')
        })
    })

    $(document).ready(function () {
        $(".card-text").click(function () {
            $(this).css('background-color', 'red')
        })
    })

    $(document).ready(function () {
        $('#reset').click(function () {
            location.reload();
        })
    })
    $(document).ready(function () {
        $('#main-title').click(function () {
            $(this).css("text-size","4em");
        })
    })


})();

