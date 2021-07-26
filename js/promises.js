fetch(`https://dog.ceo/api/breeds/image/random`)
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.message);
    $("#random-dog-image").attr("src", data.message);
})
.catch(error => console.error(error));

// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
        console.log(data); //
        console.log(data[10].id);
        return data[10].id;
    })
    .then(dataId => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(comment =>{
                    $("#comments").append(`<h4>${comment.name}</h4><hr><p>${comment.body}</p>`)
                })
            }) // we have the data in json format, now we can manipulate it
            .catch(error => {
                console.log(error);
                console.error(error);
            })
    });