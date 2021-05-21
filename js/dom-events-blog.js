addButtonEvent();

function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost);
}

function addPost() {
    var textArea = document.getElementById("user-input")
    var newPost = document.createElement("p")
    newPost.innerText = textArea.value
    document.getElementById("blog-container").append(newPost);
    addEmail();
}
function addEmail(){

    // create a element

    let emailAdd = document.getElementById("email");

    // create another element and have it set to the new text area

    let postE = document.createElement('p');

    // append the email input into the new textarea

    postE.textContent = emailAdd.value;

    document.getElementById("blog-container").append(postE);

}
addButtonEvent()



// function addPost() {
//
//     document.getElementById('blog-container')
//         .appendChild(blogPost());
// }
//
// function blogPost() {
//     let postNode = document.getElementById('user-input').textContent;
//     console.log(postNode);
//     return postNode;
// }
//
