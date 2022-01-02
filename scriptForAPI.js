const button = document.getElementById('getText');
button.addEventListener('click', getText);
const users = document.getElementById('getUsers');
users.addEventListener('click', getUsers);
const getAPI = document.getElementById('getAPI');
getAPI.addEventListener('click', getApiData);
const formAddPost =document.getElementById('addPost');
formAddPost.addEventListener('submit', addPost);
const rate = document.getElementById('rate');
rate.addEventListener('click', calculate);



function getText(){
fetch('sample.txt')
.then((res) =>{
    return res.text();
})
.then((data) =>{
    console.log(data);
})
}

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Get users</h2>';
        data.forEach((user) =>{
            output +=
            `<ul>
                <li>Id: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Mail: ${user.correo}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML = output;
    } )
}

//get data from API
function getApiData(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => res.json())
    .then((data) => {
        let output ='<h2>Get data from API</h2>';
        data.forEach((post) => {
            output +=`
            <div>
                <h3>${post.title}</h3>
                <p> ${post.body}</p>
            </div>
            `
        })
        document.getElementById('output').innerHTML = output;

    })
}
function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts/', {
       method:'POST',
       headers: {
        'accept': 'application/json, text/plain, */*',
        'content-type':'application/json'
       },
       body: JSON.stringify({title:title, body:body})
       })
       .then((res) => res.json())
       .then((data) =>{
           console.log(data);
    })
}

function calculate(){
    fetch('items.json')
    .then((res) => res.json())
    .then((data) =>{
        let output =`data`;
        data.forEach((itm) =>{
            output +=`id: ${itm.id} text: ${itm.text}`;
        })
        document.getElementById('output').innerHTML = output;
    })

}