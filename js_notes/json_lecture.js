(function () {
    "use strict";
// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values



    // TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments

    console.log($.ajax("https://jsonplaceholder.typicode.com/"))



    $.ajax('https://jsonplaceholder.typicode.com/posts',{
        type: "get",
        success : function (){
            alert("HI");
        }
        // data: {
        //     postID: 713,
        //     id: 832,
        //     name: 'Mike Jones',
        //     email: "whoIsMikeJones@gmail.com",
        //     body: "latin stuff here"
        // }
    })

    console.log($.ajax("https://jsonplaceholder.typicode.com/"))
$.ajax("https://jsonplaceholder.typicode.com/posts").done(function (data){
    console.log(data);
    console.log(typeof data);
    let allPosts = data;
    let dataId = allPosts[25].id
})
















})()