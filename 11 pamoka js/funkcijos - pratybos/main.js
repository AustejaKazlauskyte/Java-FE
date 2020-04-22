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

console.log("1. Parašykite funkciją pavadinimu 'triple', kuri padaugintų paduodamąjį kintamąjį iš 3.");
function triple(x) {
  return x * 3
}
console.log(3, "triple(3)", triple(3))
console.log('');

console.log("2. Parašykite funkciją pavadinimu 'square2', kuri keltų paduodamąjį kintamąjį kvadratu.");
function square2(x) {
  return x ** 2;
}
console.log(3, "square2(3)", square2(3))
console.log('');


function abc() {
  if (arguments[0] != undefined && typeof arguments[0] == 'number' && arguments.length == 1){
    console.log(arguments)
  }
}

abc(1);
abc(1, 2, 3);
abc([1, 2], 32);