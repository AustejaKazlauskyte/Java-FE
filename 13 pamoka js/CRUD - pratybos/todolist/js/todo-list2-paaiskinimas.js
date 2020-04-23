// -------------------------------- Variables --------------------------------
const taskContainer = document.querySelector("ul"); // Pasirenkame elementą - <ul>
const btnAdd = document.querySelector("input[type=submit]"); // Pasirenkame elementa <input type="submit">
const inputText = document.querySelector("input[type=text]"); // Pasirenkame elementa <input type="text">
// Kintamasis, kurti naujų objektų savybės 'id' unikalioms reikšmėms
let newId = tasks.length; // Pirmnio užkrovimo metu, id priskiriamas masyvo ilgiui (elementų skaičiui) 

// -------------------------------- Functions --------------------------------
// Sąrašo generavimo pagal masyvą 'tasks' funkcija. Naudojama po betkokio duomenų pakeitimo masyve 'tasks'
function render() {
  taskContainer.innerHTML = ""; // Išvalome senus duomenis HTML elemetų medyje (vaizde)
  // Veiksmus atliekame su kiekvienu masyvo 'tasks' elementu
  tasks.forEach((task, i) => { // Einamajį elementą pasivadiname 'task', o jo vietą masyve 'i'
    let listItem = document.createElement("li"); // Sukuriame <li></li> (Vaizde jo nėra, nes kolkas jis neprijunktas į HTML elementų medį)
    // Formuojame visą 'listItem' turinį
    // 20 eilutė - jeigu einamosios užduoties 'task' savybė 'done' (task.done) yra 'true', tuomet pridedame papildoma klasę, kuri perbraukia turinį
    // 21 eilutė - į <span class="todo-title></span> įdedame einamojo elemento (užduoties objekto 'title savybę')
    // 23 ir 24 eilutės - įterpiame mygtukus, kurie turi stiliaus savybes, aprašytas pagal klases, main.css faile
    listItem.innerHTML = `
      <span class="todo-title${task.done ? " task-done" : ""}"> 
        ${task.title}
      </span>
      <span class="btn btn-complete">&#10003;</span>
      <span class="btn btn-delete">&#10005;</span>`;
    // Iš tiką sukurto ir suformuoto 'listItem' elemento išsitraukiame ir išsisaugome mygtukus
    let btnComplete = listItem.querySelector(".btn-complete"); // Pasirenkame elementą  <span class="btn btn-complete">&#10003;</span>
    let btnDelete = listItem.querySelector(".btn-delete"); // Pasirenkame elementą <span class="btn btn-delete">&#10005;</span>

    btnComplete.addEventListener('click', function(){ // Pažymėjimo mygtukui uždedame veiksmų vykdymą jį paspaudus
      task.done = !task.done; // Einamojo užduoties obejekto savybę done (task.done) paverčiame priešinga
      render(); // Per naujo formuojame visus sąrašo elementus, kviesdami funkciją render()
    });
    
    btnDelete.addEventListener('click', function(){ // Ištrinimo mygtukui uždedame veiksmų vykdymą jį paspaudus
      tasks.splice(i, 1); // Iškerpame iš 'tasks' masyvo elementą, pagal jo vietą masyve
      render(); // Per naujo formuojame visus sąrašo elementus, kviesdami funkciją render()
    });
    taskContainer.appendChild(listItem); // Suformuotą ir su veikiančias mygtukais elementą <li>...</li> prijungiame į HTML elementų medį (vaizdą)
  });
}

function addTaskObject() { // Funkcija skirta naujo objekto sukūrimui
  tasks.push({ // Kuriame ir iškart į 'tasks' masyvą dedame naują užduoties objektą
    id: ++newId, // Kiekviena kart pridedant didiname 'id' savybę, tam kad būtų išlaikomas unikalumas. PRIEŠ įdedant -> ++kintamasis
    title: inputText.value, // Iš tekto įvedimo lauko esančią vertę įdedame į naujai formuojamos užduoties savybę 'title'
    done: false // Nustamo užduoti neatliką. Atlikta - true, neatlikta - false
  });
  render(); // Per naujo formuojame visus sąrašo elementus, kviesdami funkciją render()
}
// ----------------------------- Event listeners -----------------------------
btnAdd.addEventListener("click", addTaskObject); // Uždedame pridėjimo mygtukui klausiklį, jog jį paspaudus jis kviestų addTaskObject funkciją

// -------------------------- Initialization commands ------------------------
render(); // Pirminis duomenų formavimo iškvietimas
