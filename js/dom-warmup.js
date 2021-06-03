(function () {
    "use strict";

    let submitButtonQS = document.querySelector('#submit');
    submitButtonQS.addEventListener('click', addSearchValue);

    function addSearchValue(e) {
        e.preventDefault();
        let newSearchItem = $('#search').val();
        console.log(newSearchItem);
       $("#post-container").append(newSearchItem);
    }

    function cssStuff(){
        $('#post-container').css({
            "font-size": '64px',
            "color": 'green',
            "text-align": "center",
        }
        )
    }

    cssStuff();




})()