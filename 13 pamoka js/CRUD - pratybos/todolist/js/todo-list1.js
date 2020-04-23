// Atskirai keičiami duomenys ir atskirai keičiamas vaizdas (HTML)
const taskContainer = document.querySelector("ul");
const btnAdd = document.querySelector("input[type=submit]");
const inputText = document.querySelector("input[type=text]");
let newId = tasks.length;

function createListItem(task) {
  let li = document.createElement("li");
  li.innerHTML =
    `<span class="todo-title ${task.done ? "task-done" : ""}">
      ${task.title}
    </span>
    <span class="btn btn-complete">&#10003;</span>
    <span class="btn btn-delete">&#10005;</span>`;
  let todoTitle = li.querySelector(".todo-title");
  let btnComplete = li.querySelector(".btn-complete");
  let btnDelete = li.querySelector(".btn-delete");

  btnDelete.addEventListener("click", function () {
    let arrayOfIds = tasks.map(t => t.id);
    let i = arrayOfIds.findIndex(id => id == task.id);
    tasks.splice(i, 1);
    li.remove();
  });

  btnComplete.addEventListener("click", function () {
    let arrayOfIds = tasks.map(t => t.id);
    let i = arrayOfIds.findIndex(id => id == task.id);
    tasks[i].done = !tasks[i].done;
    if (todoTitle.classList.contains("task-done")) {
      todoTitle.classList.remove("task-done");
    } else {
      todoTitle.classList.add("task-done");
    }
  });

  taskContainer.appendChild(li);
}

function render() {
  tasks.forEach(task => createListItem(task));
}

btnAdd.addEventListener("click", function () {
  let newTaskObject = {
    id: ++newId,
    title: inputText.value,
    done: false
  };
  tasks.push(newTaskObject);
  createListItem(newTaskObject);
});

render();
