
// alert('Alert komanda');
// ------------------------------- Primityvūs kintamųjų tipai -----------------------------------------
// ------------------------------- Primitive type variables -------------------------------------------
// Number - visi skaičiai
let skaičius1 = 5;
let skaičius2 = 8;
console.log(skaičius1, typeof(skaičius1)); // typeof - tai direktyva kuri grąžina kintamojo reikšmės tipą
console.log(skaičius2, typeof (skaičius2)); // typeof galime naudoti ir kaip funkciją, paduodami kintamajį tarp skliaustų
console.log(skaičius1 + skaičius2);
console.log("-----------------------------------------------------------------------------");
// // String - simbolių darinys
let vardas = 'Petras';
let pavardė = 'Betnestoras';
let pilnasVardas = vardas + ' ' + pavardė;
console.log(vardas, typeof vardas);   // console.log( ... ) - konsolės metodas, kuriame galime rašyti kintamuosius ar 
console.log(pavardė, typeof pavardė); // reikšmes atskirtas kableliais, ir juos atspausdins naršyklės konsolėje
console.log(vardas + ' ' + pavardė);  // atskirtus tarpais
console.log(pilnasVardas);  // atskirtus tarpais
console.log("-----------------------------------------------------------------------------");
// Boolean - tiesa arba melas. Galimos tik 2 reikšmės: true arba false
let tiesa = true;
let melas = false;
let salyga1 = skaičius1 > skaičius2;
let salyga2 = skaičius1 < skaičius2;
console.log(tiesa, typeof tiesa);
console.log(melas, typeof melas);
console.log(salyga1, typeof salyga1);
console.log(salyga2, typeof salyga2);
console.log(salyga1, salyga2);
console.log("-----------------------------------------------------------------------------");

// // ------------------------------- Nuorodos-objekto kintamųjų tipai -------------------------------------
// // ----------------------------------- Reference type variables -----------------------------------------
//   // Objektai - savybių rinkinys viename kintamajame
let person1 = {
  name: 'Jonas',
  surname: 'Kepalas',
  age: 25,
  sex: 'vyras',
  married: true
}

let person2 = {
  name: 'Kristina',
  surname: 'Paukštytė',
  age: 22,
  sex: 'moteris',
  married: false,
  hasFingerNailsDone: true
}

let person3 = {
  name: 'Homasas',
  surname: 'Žygevičius',
  age: 29,
  sex: 'other',
  married: false
}

console.log(person1, typeof person1);
console.log(person2, typeof person2);
console.log(person3, typeof person3);
console.log("-----------------------------------------------------------------------------");

    // Norint ištraukti ar įrašyti objekto savybę, kreipiamės į ją per tašką:
person1.age = 36; // Duomenų perrašymas
console.log(person1.name, person1.surname, person1.age); // Duomenų ištraukimas 

    // Kartai galime į objekto savybęs kreiptis per laužtinius skliaustus
person1['age'] = 76;  // Duomenų perrašymas
console.log(person1['name'], person1['surname'], person1['age']); // Duomenų ištraukimas 

  //   Array(masyvas) - tai kintamųjų rinkinys vienoje kolekcijoje. Jis dažniausiai naudojamas laikyti panašios 
  // paskirties arba panašaus tipo kintamiesiems.
let people = [person1, person2, person3];
console.table(people);

    // Norit ištraukti konkrečius elementus, turime kreiptis į masyvą ir nurodyti indeksą
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);


//  Sukurkite knygų masyvą, kur kiekviena knyga turėtų savybes: title, author, genre[], inStock; Min 3 knygos; Atspausdinti;

let books = [
  {
    title: "Alise",
    author: "Job Dickens",
    genre: ["Drama", "Romance"],
    inStock: 16
  },
  {
    title: "Travel guide",
    author: "Traveler Scout",
    genre: ["Travel", "Documentary"],
    inStock: 7
  },
  {
    title: "Dark path",
    author: "Compilator Byte",
    genre: "Science",
    inStock: 0
  },
];
console.table(books);