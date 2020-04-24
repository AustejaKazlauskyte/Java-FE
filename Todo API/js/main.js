const todoList = document.querySelector('.js-list-todo');
let todosPerPage = 15;
let currentPage = 1;

function fecthTodoData() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      if (todos.length > 0) {
        let viewableTodos = todos.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage);
        renderTable(viewableTodos);
        if (todos.length > todosPerPage) {
          renderNavigation(todos.length);
        }
      } else {
        renderHeading('There are no things to do :(')
      }
    })
    .catch(err => {
      renderHeading('Problem connecting to server :(')
    });
}


function renderTable(todos) {
  todoList.innerHTML = `
    <div class="list-todo__header">
      <span>ID</span>
      <span>User ID</span>
      <span>Title</span>
      <span>Completed</span>
    </div>
    <hr class="list-todo__header-line">`;
  let todoDataContainer = document.createElement('div');
  todoList.appendChild(todoDataContainer);
  todos.forEach(todo => {
    todoDataContainer.innerHTML += `
    <div class="list-todo__row">
      <span>${todo.id}</span>
      <span>${todo.userId}</span>
      <span>${todo.title}</span>
      <span>${todo.completed ? 'Completed' : 'Not completed'}</span>
    </div>`;
  });
}

function renderNavigation(count) {
  const navigationPageTypes = {
    firstPage: 0,
    pageNumber: 1,
    gap: 2,
    lastPage: 3,
  };

  count = Math.ceil(count / todosPerPage);
  // count = 5;
  let navigation = document.createElement('div');
  navigation.className = "navigation-todo";
  if (count <= 5) {
    for (let i = 1; i <= count; i++)
      addBtnNavigation(i, navigationPageTypes.pageNumber)
  } else {
    addBtnNavigation('<', navigationPageTypes.firstPage);
    for (let i = currentPage; i <= currentPage + 2; i++)
      addBtnNavigation(i, navigationPageTypes.pageNumber)
    addBtnNavigation('...', navigationPageTypes.gap);
    addBtnNavigation(count, navigationPageTypes.pageNumber);
    addBtnNavigation('>', navigationPageTypes.lastPage);
  }
  todoList.appendChild(navigation);

  function addBtnNavigation(innerHTML, navigationPageType) {
    let btnNumberNavigation = document.createElement('div');
    btnNumberNavigation.innerHTML = innerHTML;
    switch (navigationPageType) {
      case navigationPageTypes.pageNumber:
        btnNumberNavigation.className = "navigation-todo__btn";
        if (innerHTML === currentPage) btnNumberNavigation.classList.add("active");
        break;
      case navigationPageTypes.firstPage:
        btnNumberNavigation.className = "navigation-todo__btn";
        if(currentPage === 1) {
          btnNumberNavigation.classList.add("muted");
        }
        break;
      case navigationPageTypes.gap:
        btnNumberNavigation.className = "navigation-todo__gap";
        break;
      case navigationPageTypes.lastPage:
        btnNumberNavigation.className = "navigation-todo__btn";
        if(currentPage === count) {
          btnNumberNavigation.classList.add("muted");
        }
        break;
      default: throw "There is no such navigation type"
    }
    navigation.appendChild(btnNumberNavigation);
  }
}


function renderHeading(msg) {

  todoList.innerHTML = `
  <h1 class="heading-error">${msg}</h1>
  `;
}



// Init

fecthTodoData();

