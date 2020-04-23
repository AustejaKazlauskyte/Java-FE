// --------------------------------- KINTAMIEJI -----------------------------------
// Pasirenkame elementus iš HTML struktūros
const btnAdd = document.querySelector("input[type=submit]");
const textField = document.querySelector("input[type=text]");
const listTodo = document.querySelector("ul");
let newID = tasks.length;

// --------------------------------- FUNKCIJOS -----------------------------------
function createListItem(task) {
  // Su KIEKVIENU, tasks masyvo elementu atliekame veiksus
  // ....
  // Sukuriame tuščią <li></li> HTML elementą, ir išsaugome jį kintamajame 'li'. ()
  let li = document.createElement("li");
  // <li></li> jo vidų įdedame tekstą, pagal HTML faile anksčiau kurtą pavyzdį
  // ${task.title} - einamojo elemento savybė 'title'
  li.innerHTML =
    /**                     if(task.done){ ↓then↓ }else{ ↓ }  */
    `<span class="todo-title ${task.done ? "task-done" : ""}">
      ${task.title}
    </span>
    <span class="btn btn-complete">&#10003;</span>
    <span class="btn btn-delete">&#10005;</span>`;
  // Iš eilutės vaikų susirandu mygtukus
  let todoTitle = li.querySelector(".todo-title");
  let btnComplete = li.querySelector(".btn-complete");
  let btnDelete = li.querySelector(".btn-delete");

  // Uždedame klausiklį ištrinimo mygtukui
  btnDelete.addEventListener("click", function() {
    // Sugeneruoja iš eilės id masyvą pagal, map(...) metode, iteruojamus objektus 't'
    let arrayOfIds = tasks.map(t => t.id);
    // Suranda vietą (indeksą) masyve, lyginant visas 'id' reikšmes su paspausto mygtuko id(task.id)
    let i = arrayOfIds.findIndex(id => id == task.id);
    // Pašalinam iš vaizdo
    li.remove();
    // Pašalinam iš masyvo pagal surastą vietą masyvę (indeksą)
    tasks.splice(i, 1);
    console.table(tasks);
  });

  // Uždedame klausiklį atlikimo mygtukui
  btnComplete.addEventListener("click", function() {
    // Sugeneruoja iš eilės id masyvą pagal, map(...) metode, iteruojamus objektus 't'
    let arrayOfIds = tasks.map(t => t.id);
    // Suranda vietą (indeksą) masyve, lyginant visas 'id' reikšmes su paspausto mygtuko id(task.id)
    let i = arrayOfIds.findIndex(id => id == task.id);
    // Užduoties atlikimas/gražinimas HTML vaizde
    //          Ar turi klasę 'task-done' ?
    if (todoTitle.classList.contains("task-done")) {
      // Taip turi, nuimk ją užrašo elementui
      todoTitle.classList.remove("task-done");
    } else {
      // Ne neturi, pridėk ją užrašo elementui
      todoTitle.classList.add("task-done");
    }
    // Užduoties atlikimas/gražinimas duomenų masyve
    // salygos apvertimas: !true => false ; !false => true
    tasks[i].done = !tasks[i].done;
    console.table(tasks);
  });

  // Prijungiame sugeneruotą <li></li> HTMl elementą prie jau esančio sąrašo
  listTodo.appendChild(li);
  console.table(tasks);
}

// Veiksmus apsirašome funknkcijoje, jog galėtume perpanaudoti.
function renderTasks() {
  // task - einamojo elemento pavadinimas (galime pasivadinti laisvai)
  tasks.forEach(task => createListItem(task));
}

// ---------------------------- ĮVYKIŲ KLAUSIKLIAI -----------------------------------
btnAdd.addEventListener("click", function() {
  // Task'o pridėjimas į duomenų masyvą
  let newTaskObject = {
    id: ++newID, // Prieš sukuriant naują id vertę, ji padidinama vienetu
    title: textField.value, // į title savybę įdedame reikšmę iš įvedimo laukelio
    done: false
  };
  tasks.push(newTaskObject);
  /// Naujo Task'o atvaizdavimas
  createListItem(newTaskObject);
});

// ----------------------------- PRADINIAI VEIKSMAI-----------------------------------
// Anksčiau sukurtos funkcijos iškvietimas (vykdymas)
renderTasks();
