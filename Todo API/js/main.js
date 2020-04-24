const todoList = document.querySelector('.js-list-todo');
let todosPerPage = 15;
let currentPage = 1;
let todosAll; // Šis kintamasis užsipildo ir yra naudojamas tik esant navigacijai

function fecthTodoData() {
  // Tik duomenų užkrovimui
  fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(renderTodos)
    .catch(() => {
      renderHeading('Problem connecting to server :(')
    });
}

function renderTodos(todos) {
  if (todosAll == null) {
    // Pirmo užkrovimo atveju
    if (todos.length > 0) {
      renderTable(todos.slice(0, todosPerPage));
      if (todos.length > todosPerPage) {
        todosAll = todos;
        renderNavigation(todos.length);
      }
    } else renderHeading('There are no things to do :(')
  } else {
    // Navigavimo atveju
    renderTable(todosAll.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage));
    renderNavigation(todosAll.length);
  }
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
  const pageTypes = {
    firstPage: 0,
    pageNumber: 1,
    gap: 2,
    lastPage: 3,
  };

  count = Math.ceil(count / todosPerPage);
  let navigation = document.createElement('div'); // <div></div>
  navigation.className = "navigation-todo";
  if (count <= 7) {
    for (let i = 1; i <= count; i++)
      addBtnNavigation(i, pageTypes.pageNumber);
  } else {
    addBtnNavigation('<', pageTypes.firstPage);
    if (currentPage <= 2) {
      // Atvaizduojami pirmieji 3 be tarpo
      for (let i = 1; i <= 3; i++) addBtnNavigation(i, pageTypes.pageNumber);
      addBtnNavigation('...', pageTypes.gap);
      addBtnNavigation(count, pageTypes.pageNumber);
    } else if (currentPage == 3) {
      // Atvaizduojami pirmieji 4, todėl kad nerašyti bereikalingo daugtaškio
      for (let i = 1; i <= 4; i++) addBtnNavigation(i, pageTypes.pageNumber);
      addBtnNavigation('...', pageTypes.gap);
      addBtnNavigation(count, pageTypes.pageNumber);
    } else if (currentPage >= 4 && currentPage <= count - 3) {
      // Atvaizduojami nuorodos aplink esantį puslapį ir dauktaškiai iš kraštų
      addBtnNavigation(1, pageTypes.pageNumber);
      addBtnNavigation('...', pageTypes.gap);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) addBtnNavigation(i, pageTypes.pageNumber);
      addBtnNavigation('...', pageTypes.gap);
      addBtnNavigation(count, pageTypes.pageNumber);
    } else if (currentPage == count - 2) {
      // Atvaizduojami paskutiniai 4, todėl kad nerašyti bereikalingo daugtaškio
      addBtnNavigation(1, pageTypes.pageNumber);
      addBtnNavigation('...', pageTypes.gap);
      for (let i = currentPage - 1; i <= count; i++)addBtnNavigation(i, pageTypes.pageNumber);
    } else {
      // Atvaizduojami paskutiniai trys
      addBtnNavigation(1, pageTypes.pageNumber);
      addBtnNavigation('...', pageTypes.gap);
      for (let i = count - 2; i <= count; i++) addBtnNavigation(i, pageTypes.pageNumber);
    }
  }
  addBtnNavigation('>', pageTypes.lastPage);
  todoList.appendChild(navigation);

  function addBtnNavigation(btnText, type) {
    let btnNumberNavigation = document.createElement('div');
    btnNumberNavigation.innerHTML = btnText;
    switch (type) {
      case pageTypes.pageNumber:
        btnNumberNavigation.className = "navigation-todo__btn";
        if (btnText === currentPage) btnNumberNavigation.classList.add("active");
        btnNumberNavigation.addEventListener('click', navigate(btnText));
        break;
      case pageTypes.firstPage:
        btnNumberNavigation.className = "navigation-todo__btn";
        if (currentPage === 1) btnNumberNavigation.classList.add("muted");
        else btnNumberNavigation.addEventListener('click', navigate(1));
        break;
      case pageTypes.gap:
        btnNumberNavigation.className = "navigation-todo__gap";
        break;
      case pageTypes.lastPage:
        btnNumberNavigation.className = "navigation-todo__btn";
        if (currentPage === count) btnNumberNavigation.classList.add("muted");
        else btnNumberNavigation.addEventListener('click', navigate(count));
        break;
      default: throw "There is no such navigation type"
    }
    navigation.appendChild(btnNumberNavigation);
  }
  
  // Curry function metodologija - Sukuriamas nepasiekiamas kintamasis (pageNumber) grąžinamos funkcijos vykdymui
  function navigate(pageNumber) {
    return function () {
      currentPage = pageNumber;
      renderTodos();
    }
  }
}

function renderHeading(msg) {
  todoList.innerHTML = `<h1 class="heading-error">${msg}</h1>`;
}
// Initial commands
fecthTodoData();

