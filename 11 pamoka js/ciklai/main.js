// Ciklai
// While ciklas
// Ciklas vykdomas tol, kol yra tenkinama salyga

let girlAge = 3;
let boyAge = 10;
let tolerance = 0.25 * boyAge;

// Tol kol amžiaus skirtumas yra didesnis už toleruojamą normą, kartoti veiksmus 
while ((boyAge - girlAge) > tolerance) {
  console.log({ boyAge, girlAge, tolerance });
  // boyAge = boyAge + 1; // yra tas pats kaip:  boyAge++;
  boyAge++;  // Privalomas pokytis kuris veda prie ciklo pabaigos
  girlAge++; // Privalomas pokytis kuris veda prie ciklo pabaigos
  tolerance = 0.25 * boyAge;
}
console.log('You can be friends now !!!');
console.log({ boyAge, girlAge, tolerance });

console.log('While');
let iterator = 0;
let result = '';
while (iterator < 10) {
  // Formuojame rezultatą string pavidalu atskirdami iteratorius kableliais
  result += iterator++ + ', ';
  // Apačioje pateiktas analogiškas variantas
  // result  = result + iterator;
  // result = result + ', ';
  // iterator = iterator + 1;
}
// Dinamiškai pašaliname paskutinius 2 simbolius (nuimame perteklinius kablelį ir tarpą).
result = result.substr(0, result.length - 2);
console.log(result);

console.log('Do while');
iterator = 0;
result = '';

do { // Padaro vieną kartą bet kokiu atveju
  result += iterator++ + ', ';
} while (iterator < 10);

result = result.substr(0, result.length - 2);
console.log(result);

// For ciklas
console.log('For cycle');
result = '';
for (let i = 0; i < 10; i++) {
  result += i + ', ';
}
result = result.substr(0, result.length - 2);
console.log(result);

// For ciklavimo panaudojimas su masyvais
let numArray = [1, 5, 6, 2, 4, 8, 9, -2, -4, 5, -3, 9];
console.log(numArray);

// Pavyzdys, iteruoti ir atlikti veiksmus su kiekvienu masyvo elementu
for (let i = 0; i < numArray.length; i++) {
  const el = numArray[i];
  console.log({ i, el });
}

// Pavyzdys, iteruoti ir atlikti veiksmus su kiekviena objekto savybe

let student = {
  name: 'Serbentautas',
  surname: 'Bordiūras',
  age: 21,
  faculty: 'Apželdinimas',
  course: 2,
};

console.log("student.name === student['name']", student.name === student['name']);
// Eik per kiekvieną studento savybę
for (let propTitle in student) { // savybės pavadinimas bus kintamajame propTitle (galime pasivadinti kaip norime)
  //  ir su kiekvienu objekto savybės pavadinimu daryk tai...
  console.log(propTitle, student[propTitle]);
}

// Pavyzdys, iteruoti ir atlikti veiksmus su kiekvienu masyvo elementu ( logika analogiška for(...){...})
// Iteravimas per kiekvieną masyvo numArray elementą;
// num (pirmas parametras) - elemento reikšmė
// i (antras parametras) - elemento indeksas // Nėra privalomas
//                          ↓ laikinas kintamasis, kaip vadinsime einamąjį masyvo elementą

// Funkcija tai perpanaudojamas komandų rinkinys, kurio vykdymą reikia iškviesti. Tai lyg aprašas arba receptas
// Pats aprašas function funcName ...  nieko nedaro. Tiesiog išsisaugo ir gali būt iškviečiamas.
function printArrayElement(num, i) {
  // Veiksmų seka, atliekama su kiekviena iteracija
  console.log({ i, num });
}

// Iteravimo funkcija, printArrayElement, kviečiama su kiekvienu elementu
numArray.forEach(printArrayElement);

// Paduodama anoniminė funkcija ir vykdoma su kiekvienu elementu
numArray.forEach(function (num, i) {
  // Veiksmų seka, atliekama su kiekviena iteracija
  console.log({ i, num });
});

// Paduodama anoniminė funkcija nauja ES6 išraiška ir vykdoma su kiekvienu elementu
numArray.forEach((num, i) => {
  // Veiksmų seka, atliekama su kiekviena iteracija
  console.log({ i, num });
});

// Analogiškas sutrauktas praktikoje naudojamas variantas 
numArray.forEach((num, i) => console.log({ i, num }));