// Keičiami duomenys ir viskas pervaizduojama per naujo
const taskContainer = document.querySelector("ul");
const btnAdd = document.querySelector("input[type=submit]");
const inputText = document.querySelector("input[type=text]");
let newId = tasks.length;

function render() {
  taskContainer.innerHTML = "";
  
  tasks.forEach((task, i) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span class="todo-title${task.done ? " task-done" : ""}">
        ${task.title}
      </span>
      <span class="btn btn-complete">&#10003;</span>
      <span class="btn btn-delete">&#10005;</span>`;

    let btnComplete = li.querySelector(".btn-complete");
    let btnDelete = li.querySelector(".btn-delete");

    btnDelete.addEventListener('click', function () {
      
      tasks.splice(i, 1);
      render();
    });

    btnComplete.addEventListener('click', function () {
      task.done = !task.done;
      render();
    });
    taskContainer.appendChild(li);
  });
}

btnAdd.addEventListener("click", () => {
  tasks.push({
    id: ++newId,
    title: inputText.value,
    done: false
  });
  render();
});

render();
