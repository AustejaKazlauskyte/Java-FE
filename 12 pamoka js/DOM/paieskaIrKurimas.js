// // document - tai visų elementų tėvas
// // Spausdina visą HTML objektų medį
// console.log(document);

// // ----------------------------------- Paieškos metodai ------------------------------------------
// console.log('Pasirinkti pirmą atitikusį kriterijų HTML objektą');
// //                                       ↓ - pagal ką ieško (kriterijus)
let container = document.querySelector('.container');
// let firstRow = container.querySelector('.row');
// //                 ↑ - nuo ko pradeda
// console.log(firstRow);

// console.log('Pasirinkti VISUS atitikusius kriterijų HTML objektus');
// //                                         ↓ - pagal ką ieško (kriterijus)
// let columns = document.querySelectorAll('.col');
// //                ↑ - nuo ko pradeda
// console.log(columns);
// // --------------------------- Elementų kūrimas ---------------------------------
// console.log('Elementų kūrimas');
// //    ↓ - kintamasis kuriame saugosime naujai sukurtą elementą
// let newRow = document.createElement('div');
// //        HTML elemento pavadinimas - ↑
// let col1 = document.createElement('div'); // <div></div>
// let col2 = document.createElement('div');
// let col3 = document.createElement('div');
// let newRow2 = document.createElement('div');
// let col21 = document.createElement('div');
// let col22 = document.createElement('div');
// let col23 = document.createElement('div');

// //--------------------------- Klasės atributo pridėjimas ---------------------------------
// //                   ↓ - tai ką įrašysime į class="..."    
// newRow.className = 'row'; // <div class="row"></div>
// col1.className = 'col';
// col2.className = 'col';
// col3.className = 'col';
// newRow2.className = 'row';
// col21.className = 'col';
// col22.className = 'col';
// col23.className = 'col';

// // ------------------------- Elemento turinio (teksto) įrašymas -------------------------
// //Sukuriamas turinys,tai kas bus tarp atsidarymo ir užsidarymo tag'ų;
// col1.innerHTML = '1 stulpelis po'; // ← - įrašome tarp užsidarymo ir atsidarymo tag'ų reikšmę: '1 stulpelis'  
// col2.innerHTML = '2 stulpelis po'; // ← - įrašome tarp užsidarymo ir atsidarymo tag'ų reikšmę: '2 stulpelis' 
// col3.innerHTML = '3 stulpelis po'; // ← - įrašome tarp užsidarymo ir atsidarymo tag'ų reikšmę: '3 stulpelis' 
// // ↑ - kokiam elementui
// col21.innerHTML = '1 stulpelis prieš'; //<div class="col">1 stulpelis prieš</div>
// col22.innerHTML = '2 stulpelis prieš';
// col23.innerHTML = '3 stulpelis prieš';

// // --------------------- Sukurtų elementų prijungimas prie jau esančių elementų -------------------------
// newRow.appendChild(col1);
// newRow.appendChild(col2);
// newRow.appendChild(col3);
// // ↓ - prie šito elemento
// container.appendChild(newRow); // ← elementą 'newRow'
// //             ↑ - prijungiame į galą
// newRow2.appendChild(col21);
// newRow2.appendChild(col22);
// newRow2.appendChild(col23);
// // ↓ - Šiame elemente    ↓ - pridėti šį elementą
// container.insertBefore(newRow2, firstRow); // ← prieš elementą 'firstRow'
// //             ↑ - prijungiame prieš


// // ----------------------------------------- Užduotys ---------------------------------
// // 1. Pasirinkite tik pirmos eilutės stulpelius
// // 2. Pasirinkite tik trečios eilutės stulpelius
// // 3. Sukurkite dar vieną eilutę su trimis stulpeliais ir tekstu stulepliuose pabaigoje konteinerio
// // 4. Sukurkite dar vieną eilutę su trimis stulpeliais ir tekstu stulepliuose prieš pirmą eilutę
// // 5. Sukurkite dar vieną eilutę su trimis stulpeliais ir tekstu stulepliuose prieš trečią eilutę

// // ------------------------------------ Užduočių atlikimas-----------------------------
// // 1.
// console.log('1. Pasirinkite tik pirmos eilutės stulpelius');
// let firstRowColumns = firstRow.querySelectorAll('.col');
// console.log(firstRowColumns);
// console.log('');
// // 2. 
// console.log('2. Pasirinkite tik trečios eilutės stulpelius');
// let allRows = document.querySelectorAll('.row');
// // console.log('allRows');
// // console.log(allRows);
// let thirdRow = allRows[2];
// // console.log('thirdRow');
// // console.log(thirdRow); 
// let thirdRowColumns = thirdRow.querySelectorAll('.col');

// console.log(thirdRowColumns);
// console.log('');

// // 3. Sukurkite dar vieną eilutę su trimis stulpeliais ir tekstu stulepliuose pabaigoje konteinerio
// let lastRow = document.createElement('div');
// lastRow.className = 'row';
// lastRow.innerHTML = `
//   <div class="col">pabaigoje konteinerio</div>
//   <div class="col">pabaigoje konteinerio</div>
//   <div class="col">pabaigoje konteinerio</div>`;
// container.appendChild(lastRow);

// // 4. Sukurkite dar vieną eilutę su trimis stulpeliais ir tekstu stulepliuose prieš pirmą eilutę
// {
//   let firstRow = document.createElement('div');
//   firstRow.className = 'row';
//   firstRow.innerHTML = `
//   <div class="col">prieš pirmą eilutę</div>
//   <div class="col">prieš pirmą eilutę</div>
//   <div class="col">prieš pirmą eilutę</div>`;
//   container.insertBefore(firstRow, container.firstElementChild);
// }

// // 5.
// console.log('5. Sukurkite dar vieną eilutę su trimis stulpeliais ir tekstu stulepliuose prieš trečią eilutę');

// newRow = document.createElement('div');
// col1 = document.createElement('div');
// col2 = document.createElement('div');
// col3 = document.createElement('div');
// newRow.className = 'row';
// col1.className = 'col';
// col2.className = 'col';
// col3.className = 'col';
// col1.innerHTML = 'prieš trečią';
// col2.innerHTML = 'prieš trečią';
// col3.innerHTML = 'prieš trečią';
// newRow.appendChild(col1);
// newRow.appendChild(col2);
// newRow.appendChild(col3);
// container.insertBefore(newRow, allRows[2]);


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      container.innerHTML += `
      <div class="row">
        <div class="col">${element.id}</div>
        <div class="col">${element.userId}</div>
        <div class="col">${element.title}</div>
        <div class="col">${element.completed? 'atlikta': 'neatlikta'}</div>
      </div>`;
    });
  })


