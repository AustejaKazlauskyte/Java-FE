// ----------------------------------Funkcijos----------------------------------
// Funkcija - tai perpanaudojamas kodo blokas. Kuris gali reikalauti parametrų korektiškam vykdymui.
// Funkcija gali (bet neprivalo) grąžinti atsakymą į jos iškvietimo vietą.
// Pirma funkciją reikia deklaruoti, o tik po to naudoti (iškviesti)
// Funkcijos viduje sukurti parametrai NĖRA pasiekiami iš išorės

// funkcijos deklaracija (aprašome, o naudosime vėliau)
//         ↓ - sugalvotas funkcijos pavadinimas (double)
function double(x) { // Parametrai tai VIDINIAI kintamieji, kuriuos paduosite iškvietimo metu
  //            ↑ - įeinamieji parametrai/as (x)  
  //  ↓↓↓↓↓↓↓↓↓ Vykdomasis blokas  ↓↓↓↓↓↓↓↓↓
  return 2 * x; // ← Tai kas bus gąžinama ( 2 * x )
  // ↑ - direktyva, kuri pasako, ką gražins į IŠKVIETIMO VIETĄ (return)
}

// Fukcijos iškvietimų pavyzdžiai
let a = double(2);        // let a = 4;
let arr = [a, double(3)]; // let arr = [ 4, 6];
arr.push(double(4));      // arr.push(8);
arr.unshift(double(1));   // arr.unshift(2);

console.log(arr);

// 1. Parašykite funkciją pavadinimu 'triple', kuri padaugintų paduodamąjį kintamąjį iš 3
//    1.1 Sukurkite tuščia funkcijos aprašą su pavadinimu
//    1.2 Sukurkite įenamąjį parametrą bet kokiu pavadinimu
//    1.3 Sukurkite parašykite grąžinimo direktyvą
//    1.4 Po grąžinimo direktyvos parašykite logiką, kuri įeinamąjį parametrą padaugintų iš 3
//    1.5 Sukurkite kintamajį ir priskirkite jo reikšmę iškviesdami funkciją ir paduodami parametrą
//    1.6 Atspausdinkite konsolėje paduotą parametro reikšmę ir atsakymą iš funkcijos

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ PAVYZDYS - DARANT UŽDUOTIS UŽSIKOMENTUOTI ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//    1.1 Sukurkite tuščia funkcijos aprašą(declaration) su pavadinimu
function triple() {
//          ↑ - funkcijos pavadinimas
}

//    1.2 Sukurkite įenamąjį parametrą bet kokiu pavadinimu
function triple(a) {
//              ↑ - įeinamasis parametras
}

//    1.3 Sukurkite parašykite grąžinimo direktyvą
function triple(a) {
  return; // ← rezultatui grąžinti skirta direktyva
}

//    1.4 Po grąžinimo direktyvos parašykite logiką, kuri įeinamąjį parametrą padaugintų iš 3
function triple(a) {
  return a * 3; 
//       ↑↑↑↑↑ - tai ką grąžinsime į iškvietimo vietą
}

//    1.5 Sukurkite kintamajį ir priskirkite jo reikšmę iškviesdami funkciją ir paduodami reikšmę
//         ↓ - funkcijos iškvietimas (invocation) 
let b = triple(5); // triple(5) grąžins 15, todėl gausime: let b = 15;
//             ↑ - paduodamas parametras, funkcijos vykdymo metu: a = 5

//    1.6 Atspausdinkite konsolėje paduotą parametro reikšmę ir atsakymą iš funkcijos
console.log(5, b);
// arba
console.log(3, triple(3))
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ PAVYZDYS - DARANT UŽDUOTIS UŽSIKOMENTUOTI ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
