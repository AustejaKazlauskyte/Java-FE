console.log('---------------------- Objektų kartojimas ----------------------');

// Obektas tai kompleksinis kintamasis, kuriame saugome kelias savybes (properties)
// Kiekviena savybės (property) reikšmė yra pasiekiama vidiniu kintamuoju, kitaip vadinamu raktu ( key)
let objektoPavyzdys = {
  // ↓ - savybių raktai (keys)
  raktas1: 'reikšmė1',  // ← kiekviena eilutė, tai objekto savybė (property)
  raktas2: 'reikšmė2',  // ← kiekviena eilutė, tai objekto savybė (property)
  raktas3: 'reikšmė3'  // ← kiekviena eilutė, tai objekto savybė (property)
  //           ↑ - savybių reikšmės (values)
}

// Norint sužinoti objekto savybės reikšmę, turime per objektą, kreiptis savybės raktu.
//  1. Naudojant tašką; { objektas }.{ raktas }:
let key1Value = objektoPavyzdys.raktas1; // kuriame tarpinį kintamajį išsitraukti reikšmei pagal raktą
let key2Value = objektoPavyzdys.raktas2; // kuriame tarpinį kintamajį išsitraukti reikšmei pagal raktą
let key3Value = objektoPavyzdys.raktas3; // kuriame tarpinį kintamajį išsitraukti reikšmei pagal raktą
console.log(key1Value); // spausdiname tarpinius kintamuosius
console.log(key2Value); // spausdiname tarpinius kintamuosius
console.log(key3Value); // spausdiname tarpinius kintamuosius

console.log(objektoPavyzdys.raktas1); // Spausdiname tiesiogiai kreipiantis į objektą
console.log(objektoPavyzdys.raktas2); // Spausdiname tiesiogiai kreipiantis į objektą
console.log(objektoPavyzdys.raktas3); // Spausdiname tiesiogiai kreipiantis į objektą

//  2. Naudojant laužtinius skliaustus; { objektas }['raktas']
key1Value = objektoPavyzdys['raktas1']; // kuriame tarpinį kintamajį išsitraukti reikšmei pagal raktą
key2Value = objektoPavyzdys['raktas2']; // kuriame tarpinį kintamajį išsitraukti reikšmei pagal raktą
key3Value = objektoPavyzdys['raktas3']; // kuriame tarpinį kintamajį išsitraukti reikšmei pagal raktą
console.log(key1Value); // spausdiname tarpinius kintamuosius
console.log(key2Value); // spausdiname tarpinius kintamuosius
console.log(key3Value); // spausdiname tarpinius kintamuosius

console.log(objektoPavyzdys['raktas1']); // Spausdiname tiesiogiai kreipiantis į objektą
console.log(objektoPavyzdys['raktas2']); // Spausdiname tiesiogiai kreipiantis į objektą
console.log(objektoPavyzdys['raktas3']); // Spausdiname tiesiogiai kreipiantis į objektą

//  Savybių reikšmių perrašymas:
//  1. Naudojant tašką; { objektas }.{ raktas }:
console.log('Objekto būsena', objektoPavyzdys);
objektoPavyzdys.raktas1 = 'pakeista1';
objektoPavyzdys.raktas2 = 'pakeista1';
objektoPavyzdys.raktas3 = 'pakeista1';
//  2. Naudojant laužtinius skliaustus; { objektas }['raktas']
console.log('Objekto būsena', objektoPavyzdys);
objektoPavyzdys['raktas1'] = 'pakeista2';
objektoPavyzdys['raktas2'] = 'pakeista2';
objektoPavyzdys['raktas3'] = 'pakeista2';
console.log('Objekto būsena', objektoPavyzdys);

console.log('---------------------- Užduotys ----------------------');
// 1. Sukurkite objektą, su savybėmis: title, author, year, genre. išsaugokite jį kitamajame 'book1'
// 2. Sukurkite dar 2 knygų objektus analogiškus pirmajam: book2 ir book3
// 3. Sukurkite objektą, su savybėmis: name, surname, age, books(tuščias masyvas). išsaugokite jį kitamajame 'person'
// 4. Pridėkite visas knygas(book1, book2, book3) į asmens knygų masyvą (person.books) ;
// 5. Pakeiskite visų knygų pavadinimus, jog jų visos raidės būtų didžiosios.
// 6. Sukurkite naują masyvą 'authorNames' ir jame įrašykite knygų autorius.
// 7. Sukurkite dar 2 asmenis, kurie turėtų po 3 knygas 
// 8. Sukurkite naują objektą seniūnija su savybėmis: pavadinimas, adresas, nariai(tuščias masyvas)
// 9. Sukurkite dar vieną seniūniją. Į pirmają įdėkite 2 žmones, o į antrają vieną
// 10. Sukurkite miesto su savybėmis: pavadinimas, seniūnijos(tuščias masyvas)
// 11 Priskirkite miestui seniūnijas.

// Galutinė struktūra
const city = {
  title: 'Vilnius',
  elderships: [
    {
      title: 'Saulėtekio seniūnija',
      members: [
        {
          name: "Petras",
          surname: 'Petraitis',
          age: 25,
          books: [
            {
              title: 'Peizažas',
              author: 'Motiejus Tolimauskas',
              year: '2002',
              genre: 'Grožinė litaratūra'
            },
            {
              title: 'Saulėlydis',
              author: 'Santanas Kurpavičius',
              year: '2001',
              genre: 'Grožinė litaratūra'
            },
            {
              title: 'Marijonetė',
              author: 'Teatrauskas Vaidenis',
              year: '2005',
              genre: 'Grožinė litaratūra'
            }
          ]
        },
        {
          name: "Juozas",
          surname: 'Juozaitis',
          age: 35,
          books: [
            {
              title: 'Gyvenimo sprendimas',
              author: 'Čilas Belenkauskas',
              year: '2002',
              genre: 'Autobiografinė literatūra'
            },
            {
              title: 'Erelė',
              author: 'Strėlė Lankauskaitė',
              year: '2017',
              genre: 'Autobiografinė literatūra'
            },
            {
              title: 'Keptuvės ir samčiai',
              author: 'Puodas Krosnelis',
              year: '2005',
              genre: 'Autobiografinė literatūra'
            }
          ]
        },
      ]
    },
    {
      title: 'Centro seniūnija',
      members: [
        {
          name: "Saulius",
          surname: 'Saulaitis',
          age: 46,
          books: [
            {
              title: 'Kinematika',
              author: 'Skaitenis Kritauskas',
              year: '1998',
              genre: 'Mokslinė literatūra'
            },
            {
              title: 'Matematika',
              author: 'Skaičius Sandauga',
              year: '2001',
              genre: 'Mokslinė literatūra'
            },
            {
              title: 'Chemikalai',
              author: 'Chemstva Polimeraitė',
              year: '2005',
              genre: 'Mokslinė literatūra'
            }
          ]
        }
      ]
    }
  ]
}
console.log(city);