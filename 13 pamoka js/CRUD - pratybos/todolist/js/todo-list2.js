const taskContainer = document.querySelector("ul");
const btnAdd = document.querySelector("input[type=submit]");
const inputText = document.querySelector("input[type=text]");
let newId = tasks.length;

function render() {
  taskContainer.innerHTML = "";
  tasks.forEach((task, i) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="todo-title${task.done ? " task-done" : ""}">
        ${task.title}
      </span>
      <span class="btn btn-complete">&#10003;</span>
      <span class="btn btn-delete">&#10005;</span>`;
    let btnComplete = listItem.querySelector(".btn-complete");
    let btnDelete = listItem.querySelector(".btn-delete");
    btnComplete.addEventListener('click', function(){
      task.done = !task.done;
      render();
    });
    btnDelete.addEventListener('click', function(){
      tasks.splice(i, 1);
      render();
    })
    taskContainer.appendChild(listItem);
  });
}

function addTaskObject() {
  tasks.push({
    id: ++newId,
    title: inputText.value,
    done: false
  });
  render();
}
btnAdd.addEventListener("click", addTaskObject);

render();
