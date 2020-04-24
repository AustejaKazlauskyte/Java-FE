const todoList = document.querySelector('.js-list-todo');
const navigation = document.querySelector('.js-todo-navigation');
let todosPerPage = 20;

function fecthTodoData() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      if (todos.length > 0) {
        renderTable();
        if (todos.length > todosPerPage) {
          renderNavigation();
        }
      } else {
        renderHeading('There are no things to do :(')
      }
    })
    .catch(err => {
      renderHeading('Problem connecting to server :(')
    })
}


function renderTable() {

}

function renderHeading(msg) {

  todoList.innerHTML = `
  <h1 class="heading-error">${msg}</h1>
  `;
}

function renderNavigation() {

}


// Init

fecthTodoData();

