// const form = document.querySelector('#todo-form')
// const todoList = document.querySelector('#todo-list')
//const url = "http://localhost:3000/notes"

console.log("Hello World")
const root = document.getElementById('root')
console.log(root)



fetch(url) 
.then(response => response.json())
.then(notes => console.log(notes))

const submit = document.getElementById('newNote')



//const editButton = 

//function submitButton(){
}

//function editButton(){
//}

//function deleteButton(){
//}