// Aritmetinės operacijos
let a = 5;
let b = 6;
console.log({ a, b });                               // Gudrus spausdinimas išrašant kintamųjų pavadinimus
console.log('Add', a + b);                      // Sudėtis
console.log('Subtract', a - b);                 // Atimtis
console.log('Divide', a / b);                   // Dalyba
console.log('Multiply', a * b);                 // Daugyba
console.log('Power', a ** b);                   // Kelimas laipsniu
console.log('Nth root', a ** (1 / b));          // Šaknies traukimas
console.log('Remainder', a % b);                // Liekana
console.log('Increment after execution', a++);  // Didinimas vientu, po atspausdinimo (po komandos įvykdymo)
console.log('Increment before execution', ++b); // Didinimas vienetu, prieš atspausdinimą (prieš įvykdant komandą)
console.log('Decrement after execution', a--);  // Mažinimas vientu, po atspausdinimo (po komandos įvykdymo)
console.log('Decrement before execution', --b); // Mažinimas vienetu, prieš atspausdinimą (prieš įvykdant komandą)
console.log('');                                // Tuščia eilutė

// // Aritmetinių operacijų trumpasis urašymas
let c = 6;
console.log('c =', c + ', a =', a);
c += a; // c = c + a; Prie c esamos reikšmės pridėti a reikšmę 
console.log('c += a arba c = c + a');
console.log(c);
c -= a; // c = c - a; Iš c esamos reikšmės atimt a reikšmę 
console.log('c -= a arba c = c - a');
console.log(c);
c /= a; // c = c / a; c priskyrimas c / a  rezultatui 
console.log('c /= a arba c = c / a');
console.log(c);
c *= a; // c = c * a; c esamą reikšmę padauginti iš a 
console.log('c *= a arba c = c * a');
console.log(c);

// // Loginės operacijos, operatoriai
a = 1;
b = true;
console.log({ a, b });
console.log('a > b', a > b);      // Ar daugiau?
console.log('a >= b', a >= b);    // Ar daugiau arba lygu?
console.log('a < b', a < b);      // Ar mažiau?
console.log('a <= b', a <= b);    // Ar mažiau arba lygu?
console.log('a == b', a == b);    // Ar lygios reikšmės?
console.log('a === b', a === b);  // Ar lygios reikšmės ir vienodi duomenų tipai?
console.log('a != b', a != b);    // Ar NElygios reikšmės?
console.log('a !== b', a !== b);  // Ar NElygios reikšmės ir vienodi duomenų tipai?

// // Loginiai operatoriai
// || - OR - operatorius ARBA (Suma)
let or = {
  'true || true': true || true,     // true
  'true || false': true || false,   // true
  'false || true': false || true,   // true
  'false || false': false || false  // false
};
// && - AND - operatorius AND (Daugyba)
let and = {
  'true && true': true && true,     // true
  'true && false': true && false,   // false
  'false && true': false && true,   // false
  'false && false': false && false  // false
};
console.log('Operatorius OR - ||');
console.table(or);
console.log('Operatorius AND - &&');
console.table(and);

// // Salygos sakiniai
// let isFemale = confirm('Labas, ar Jūs esate moteris?')
let age = prompt('Kiek jums metų?');
// let isFemale = true;

// Ažiaus ir lyties validacija
// if (!isNaN(age)) {
//   if (isFemale) {
//     if (age >= 20 && age <= 31) {
//       console.log('Tu ateik į pasimatymą :)');
//     } else {
//       if (age < 20) {
//         console.log('Ammmm.. paskambink už ' + (20 - age) * 1.5 + ' metų.');
//       } else {
//         console.log('Atlkeisk, bet aš dar nepakankamai subrendęs rimtiems santykiams.');
//       }
//     }
//   } else {

//     if (age >= 23 && age <= 34) {
//       console.log('Tu ateik į pasimatymą :)');
//     } else {
//       if (age < 23) {
//         console.log('Manau kad tau dar reik pasidžiaugt gyvenimu.');
//       } else {
//         console.log('Aš dar noriu pasidžiaugt jaunyste. Gal susitikime po' + (age - 34) * 0.75 + ' metų?');
//       }
//     }
//   }
// } else {
//   alert('Blogai įvedėte amžių');
// }

// // Tęstiniai salygos sakiniai
if (age < 0) {
  console.log('Tu dar negimęs/us');
} else if (age < 6) {
  console.log('Kaip sekasi darželyje?');
} else if (age < 18) {
  console.log('Kaip sekasi mokykloje?');
} else if (age < 24) {
  console.log('Kaip sekasi universitete?');
} else if (age < 35) {
  console.log('Kaip sekasi darbe?');
} else if (age < 50) {
  console.log('Kaip sekasi bites augint?');
} else if (age < 65) {
  console.log('Ar lauki pensijos?');
} else if (age < 80) {
  console.log('Ar darai tai, ką planavai daryti \'kuomet išeisi į pensiją\'?');
} else if (age < 100) {
  console.log('Ar žmonės užleidžia vietą troleibuse?');
} else {
  console.log('Vampyru kvartalas kitoje pusėje!');
}

let today = new Date(); // JS gamyklinė funkcija, dabartinei datai gauti
let weekDay = today.getDay(); // getDay() metodo pagalba, gauname šiandienos savaitės dieną

if (weekDay === 1) {
  console.log('Pirmadienis');
} else if (weekDay === 2) {
  console.log('Antradienis');
} else if (weekDay === 3) {
  console.log('Trečiadienis');
} else if (weekDay === 4) {
  console.log('Ketvirtadienis');
} else if (weekDay === 5) {
  console.log('Penktadienis');
} else if (weekDay === 6) {
  console.log('Šeštadienis');
} else if (weekDay === 7) {
  console.log('Sekmadienis');
} else {
  console.log('Grįšk į Kentauro Proksimą');
}

switch (true) {
  case 1: console.log('Pirmadienis'); break;
  case 2: console.log('Antradienis'); break;
  case 3: console.log('Trečiadienis'); break;
  case 4: console.log('Ketvirtadienis'); break;
  case 5: console.log('Penktadienis'); break;
  case 6: console.log('Šeštadienis'); break;
  case 7: console.log('Sekmadienis'); break;
  default: console.log('Grįžk į Kentauro Proximą');
}

let obuoliai = [
  {
    sunokes: true,
    pernokes: false,
    rusis: 'alyvinis'
  }, {
    sunokes: true,
    pernokes: true,
    rusis: 'kita'
  }, {
    sunokes: true,
    pernokes: true,
    rusis: 'saldinis'
  }, {
    sunokes: true,
    pernokes: false,
    rusis: 'alyvinis'
  }, {
    sunokes: true,
    pernokes: true,
    rusis: 'saldinis'
  }, {
    sunokes: false,
    pernokes: true,
    rusis: 'saldinis'
  }, {
    sunokes: true,
    pernokes: false,
    rusis: 'alyvinis'
  }, {
    sunokes: true,
    pernokes: false,
    rusis: 'kita'
  }, {
    sunokes: true,
    pernokes: true,
    rusis: 'kita'
  }
];

let alyviniai = [];
let saldiniai = [];
let kita = [];
let nedanoke = [];
let pernoke = [];

for (let i = 0; i < obuoliai.length; i++) {
  const obuolys = obuoliai[i];
  if (!obuolys.sunokes) {
    nedanoke.push(obuolys);
  } else if (obuolys.pernokes) {
    pernoke.push(obuolys);
  } else if (obuolys.rusis === 'saldinis') {
    saldiniai.push(obuolys);
  } else if (obuolys.rusis === 'alyvinis') {
    alyviniai.push(obuolys);
  } else {
    kita.push(obuolys);
  }
}
console.log({
  alyviniai,
  saldiniai,
  kita,
  nedanoke,
  pernoke
});

// //---------------------------------Veiksmai su masyvais---------------------------------
// console.log('------------------Veiksmai su masyvais------------------');
// const numArray = [1, 2, 3, 4, 5, 6, 7];
// const stringArray = ['.', ',', 'buvo', 'graži', 'diena', 'naktį', 'laiškas',
//  'gavo', 'draugė', 'laiškininkas', 'obuolį', 'suvalgė', 'bebriukai', 'šunį',  'pavogė'];

//  console.log('Pradinis masyvas');
//  console.log(numArray);
//  // Įdėti į galą:
//  numArray.push(8);
//  console.log('numArray.push(8):', numArray);
//  // Išimti iš galo:
//  let lastEl = numArray.pop();
//  console.log('numArray.pop():', numArray);
//  console.log({lastEl});
//  // Įdėti į priekį:
//  numArray.unshift(0);
//  console.log('numArray.unshift(0):', numArray);
//  // Išimti iš priekio:
//  let firstEl = numArray.shift();
//  console.log('numArray.shift(0):', numArray);
//  console.log({firstEl});

// // Masyvo pjūvis - (kopija)
// // slice(p, b); Šis metodas niekaip NEKEIČIA pradio masyvo
// // p - Nuo kurio elemento ĮSKAITANT
// // b - Iki kurio elemento NEĮSKAITANT
// let numArraySlice = numArray.slice(2, 4);
// let numArrayFullSlice = numArray.slice();
// let numArrayBackSlice = numArray.slice(-4);
// console.log(numArrayFullSlice);
// console.log(numArraySlice);
// console.log(numArrayBackSlice);

// // Masyvo išpjova
// // splice(p, b, r1, r2, ..., rn); Šis metodaskeičia pradinio masyvo duomenis (išpjauna segmentą)
// // p - Nuo kurio elemento ĮSKAITANT // Jeigu nenurodyta - Nuo pradžios
// // b - Kiek elementų pašalinti      // Jeigu nenurodyta - Iki galo
// // r1, r2, ..., rn - Kuom pakeisti išpjautą dalį

// console.log('Pradinis masyvas', numArray);

// // Duomenų pridėjimui
// console.log('Pridedame vieną nuo indekso 2: -5');
// numArray.splice(2, 0, -5);
// console.log('Skaičių masyvas', numArray);

// console.log('Pridedame kelis nuo indekso 2: -5, 6, 2')
// numArray.splice(2, 0, -5, 6, 2);
// console.log('Skaičių masyvas', numArray);

// console.log('Pridedame segmentą į galą: [-2, 2, 2]')
// numArray.splice(numArray.length, 0, ...[-2, 2, 2]);
// console.log('Skaičių masyvas', numArray);

// // Duomenų pakeitimui
// console.log('Vietoj elemento indeksu 3, įdedame: -9');
// numArray.splice(3, 1, -9);
// console.log('Skaičių masyvas', numArray);

// // Duomenų išpjovimui
// console.log('Išpjauname iš pradžios 5 elementus');
// let firstFive = numArray.splice(0, 5);
// console.log('Skaičių masyvas', numArray);
// console.log({firstFive});

// console.log('Išpjauname iš galo 5 elementus');
// let lastFive = numArray.splice(-5, 5);
// console.log('Skaičių masyvas', numArray);
// console.log({lastFive});

// // Duomenų ištrinimas
// console.log('Elemento indeksu 2 ištrinimas');
// numArray.splice(2, 1);
// console.log('Skaičių masyvas', numArray);


// // Duomenų iš galo perkėlimas į priekį
// console.log('Paskutinių dviejų išpjovimas iš galo ir pridėjimas į priekį');
// numArray.splice(0, 0, ...numArray.splice(-2, 2));



