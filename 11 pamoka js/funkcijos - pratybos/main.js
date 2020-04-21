// 1. Parašykite funkciją pavadinimu 'triple', kuri padaugintų paduodamąjį kintamąjį iš 3
//    1.1 Sukurkite tuščia funkcijos aprašą su pavadinimu
//    1.2 Sukurkite įenamąjį parametrą bet kokiu pavadinimu
//    1.3 Sukurkite parašykite grąžinimo direktyvą
//    1.4 Po grąžinimo direktyvos parašykite logiką, kuri įeinamąjį parametrą padaugintų iš 3
//    1.5 Sukurkite kintamajį ir priskirkite jo reikšmę iškviesdami funkciją ir paduodami parametrą
//    1.6 Atspausdinkite konsolėje paduotą parametro reikšmę ir atsakymą iš funkcijos
// 2. Parašykite funkciją pavadinimu 'square2', kuri keltų paduodamąjį kintamąjį kvadratu.
// 3. Parašykite funkciją pavadinimu 'add', kuri sudėtų 2 skaičius.
// 4. Parašykite funkciją pavadinimu 'mul', kuri sudaugintų 2 skaičius.
// 5. Parašykite funkciją pavadinimu 'pow', kuri keltų bet kokį pagrindą nurodytu laipsniu (2 įeinamieji parametrai).
// 6. Parašykite funkciją pavadinimu 'root', išrauktų bet kokio laipsnio šaknį(2 įeinamieji parametrai).
// 7. Parašykite funkciją pavadinimu 'squareArea', kuri skaičiuotų stačiojo keturkampio plotą.
// 8. Parašykite funkciją pavadinimu 'volume', kuri skaičiuotų keturkampio gretasienio tūrį (3d keturkampis).
// 9. Parašykite funkciją 'arrayDouble' kuri imtų masyvą ir grąžintų naują masyvą su padvigubintomis reikšmėmis.
// 10. Parašykite funkciją 'arrayPower' kuri imtų masyvą ir grąžintų naują masyvą su reikšmėmis pakeltomis nurodytu laipsniu.
// 11. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai, pvz.: [0] => 64.  (nieko negrąžina)
// 12. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą
// 13. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį
// 14. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.
// 15. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.
// 16. Sukurti funkciją, kuri ima masyvą ir išrikiuoja jo elementus nuo mažiausio iki didžiausio. Ir tuomet grąžina tą masyvą.
// 17. Sukurti funkciją, kuri ima 2 masyvus ir iš jo išrenka visus lyginius skaičius į naują masyvą, ir jį grąžina

// --------------------------------------------------Sprendimai---------------------------------------------------

// 9. Parašykite funkciją 'arrayDouble' kuri imtų masyvą ir grąžintų naują masyvą su padvigubintomis reikšmėmis.
function arrayDouble(array) {
  let result = [];
  array.forEach(el => result.push(el * 2));
  // for (let i = 0; i < array.length; i++) {
  //   result.push(array[i]*2);    
  // }
  return result;
}

// 11. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai, pvz.: [0] => 64.  (nieko negrąžina)
console.log('11. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai, pvz.: [0] => 64.');
function pirntArray(array) {
  console.log('------------Masyvas------------');
  array.forEach(function (element, index) {
    console.log(`[${index}] => ${element} ` + `%c ${typeof element}`, 'color: #44d');
    // console.log('[' + index + '] => ' + element);
  });

  // ------------ Alternatyvus pavyzdys su 'lambda expression' ------------  
  // array.forEach((element, index) => console.log(`[${index}] => ${element} ` + `%c ${typeof element}`, 'color: #44d'));

  // ------------ Alternatyvus pavyzdys su 'for' ------------
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   console.log(`[${index}] => ${element} ` + `%c ${typeof element}`, 'color: #44d');
  // }

  // ------------ Alternatyvus pavyzdys su 'while' ------------
  // let index = 0;
  // while (index < array.length) {
  //   const element = array[index];
  //   console.log(`[${index}] => ${element} ` + `%c ${typeof element}`, 'color: #44d');
  //   index = index + 1;
  // }
  console.log('');
}

pirntArray([1, 2, 3, -8, 9]);
pirntArray(['labas', 5, true, -8, 9]);
console.log('');


// 12. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą
console.log('12. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą');
function arraySum(array) {
  let result = 0;
  array.forEach(function (number) {
    result += number;
  });

  // ------------ Alternatyvus pavyzdys su 'lambda expression' ------------  
  // array.forEach(number => result += number);

  // ------------ Alternatyvus pavyzdys su 'for' ------------
  // for (let i = 0; i < array.length; i++) {
  //   result += array[i];
  // }

  // ------------ Alternatyvus pavyzdys su 'while' ------------
  // let i = 0;
  // while (i < array.length) {
  //   result += array[i];
  //   i++;
  // }
  return result;
}

let arraySumResult = arraySum([-15, 1.258, 4, 8, 5, 34, 58]);
console.log(arraySumResult);
console.log(arraySum([2, 6, 9, 8, 7, 4, 2, 55, 6, 8, 4]));
console.log('');



// 14. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.
console.log('14. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
function arrayMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    if (currentElement > max) {
      max = array[i];
    }
  }
  // Pavyzdys sutrumpinta sitankse
  // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

  return max;
}

let max = arrayMax([2, 5, 4, -9, 8, 18, 5, 17, 19, 2, 3, 1]);
console.log(max);
console.log('');


// 16. Sukurti funkciją, kuri ima masyvą ir išrikiuoja jo elementus nuo mažiausio iki didžiausio. Ir tuomet grąžina tą masyvą.
console.log('16. Sukurti funkciją, kuri ima masyvą ir išrikiuoja jo elementus nuo mažiausio iki didžiausio. Ir tuomet grąžina tą masyvą.');
function sortBubble(array) {
  for (let i = 0; i < array.length - 1; i++) { // Ciklas mažinti lyginamų elementų imčiai
    for (let j = 0; j < array.length - 1 - i; j++) { // Ciklas nustumiantis didžiausią reikšmę į imties galą
      if (array[j] > array[j + 1]) { // Lyginame, ar sekantis didesnis už einamajį elementą
        let temp = array[j]; // išsaugome į laikiną kintamąjį einamojo elemento reikšmę
        array[j] = array[j + 1]; // į einamąji elementą įdedame sekančio reikšmę
        array[j + 1] = temp; // į sekantį elementą įdedame (prieš tai išsaugoto 'tempą') einamojo elemento reikšmę
      }
    }
  }
  return array;
}
let arraySorted = sortBubble([2, 5, 4, -9, 8, 18, 5, 17, 19, 2, 3, 1]);
console.log(arraySorted);