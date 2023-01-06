let table = document.querySelector(".table")
let tbody = document.querySelector("#tbody");
let cards = document.querySelector("#cards");
let usersBtn = document.querySelector(".users-btn");
let postsBtn = document.querySelector(".posts-btn");
let usersPostBtn = document.querySelector(".users-posts-btn");

function usersShow() {
    usersBtn.classList.toggle("active");
    postsBtn.classList.remove("active");
    cards.classList.toggle("d-none");
    table.classList.remove("d-none");
    usersPostBtn.classList.remove("active");

}


function postsShow() {
    postsBtn.classList.toggle("active");
    usersBtn.classList.remove("active");
    table.classList.toggle("d-none");
    cards.classList.remove("d-none");
    usersPostBtn.classList.remove("active");

}

function UsersAndPostShow() {
    usersPostBtn.classList.toggle("active");
    table.classList.remove("d-none");
    cards.classList.remove("d-none");
    postsBtn.classList.remove("active");
    usersBtn.classList.remove("active");

}




fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json()
    })
    .then(data => {

        tbody.innerHTML = "";

        data.forEach((user, index) => {
            
            tbody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
        </tr>`
        });
    })
    .catch(err => {
        console.log(err.message);
    })


    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {

        cards.innerHTML = "";

        data.forEach((post, index) => {
            cards.innerHTML += `<div class="card w-25 ">
            <div class="card-header bg-secondary">${index + 1} ${post.title}</div>
            <div class="card-body bg-light">${post.body}</div>
        </div>  `
        });
    })
    .catch(err => {
        console.log(err.message);
    })
