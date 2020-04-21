const cars = [
  {
    brand: 'Opel',
    model: 'Astra',
    year: 1999,
    fuelType: 'Petrol',
    damaged: true,
    price: 300
  },
  {
    brand: 'Mazda',
    model: 'RX-7',
    year: 2003,
    fuelType: 'Petrol',
    damaged: true,
    price: 1100
  },
  {
    brand: 'BMW',
    model: '320D',
    year: 2008,
    fuelType: 'Dysel',
    damaged: true,
    price: 600
  },
  {
    brand: 'Toyota',
    model: 'Supra',
    year: 2008,
    fuelType: 'Petrol',
    damaged: false,
    price: 3000
  },
  {
    brand: 'Volvo',
    model: 'V70',
    year: 2014,
    fuelType: 'Hybrid',
    damaged: true,
    price: 11000
  },
  {
    brand: 'Toyota',
    model: 'Prius',
    year: 2018,
    fuelType: 'Dysel',
    damaged: false,
    price: 28000
  },
  {
    brand: 'Toyota',
    model: 'Yaris',
    year: 2002,
    fuelType: 'Dysel',
    damaged: true,
    price: 820
  },
  {
    brand: 'Tesla',
    model: 'Model S',
    year: 2015,
    fuelType: 'Electric',
    damaged: false,
    price: 45000
  },
];


// ------------------------------- array.map -------------------------------
// Tai metodas perdirbti kiekvieną masyvo elementą ir sudaryti naują kolekciją(masyvą)
let brandModels = cars.map(function (car) {
  return car.brand + ' - ' + car.model;
});

// Analogija su lambda išraiška
// let brandModels = cars.map(car => car.brand + ' - ' + car.model);
console.log(brandModels)

// ------------------------------- array.filter -------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Tai metodas atrūšiuoti elementus pagal objektą
let carsTayota = cars.filter(function (car) {
  if (car.brand == 'Toyota') {
    return car;
  }
});
// Analogija su lambda išraiška
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// let carsTayota = cars.filter(car => car.brand == 'Toyota');
console.table(carsTayota)

// ------------------------------- array.reduce -------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Tai metodas sutraukti elementus į vieną reikšmę
let carsPriceAll = cars.reduce(function (sum, car) {
  return sum + car.price;
}, 0);

// Analogija su lambda išraiška
// let carsPriceAll = cars.reduce((sum, car) => sum + car.price, 0);


// ------------------------------- array.sort -------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Tai rikiavimui skirtas metodas

// Palyginimo funkcija
function byBrand(car1, car2) {
  if (car1.brand > car2.brand) {
    return 1; // Gražindami teigiamą reikšmę, sakome jog lyginama elementas yra aukštesnio prioriteto
  } else if (car1.brand == car2.brand) {
    return 0 // Gražindami 0, sakome jog lyginama elementas yra to paties prioriteto
  } else { // Gražindami neigiamą reikšmę, sakome jog  lyginama elementas žemesnio
    return -1
  }
  // !!! Nagliau !!!
  // return car1.brand > car2.brand ? 1 : car1.brand == car2.brand ? 0 : -1;
}

console.table(cars);
cars.sort(byBrand);
// Nagla Analogija su lambda išraiška
// cars.sort((car1, car2) => car1.brand > car2.brand ? 1 : car1.brand == car2.brand ? 0 : -1);

console.table(cars);
console.log(carsPriceAll);

// ------------------------------- method chaining -------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// Tai toks prototipų (vienodo tipo objektų) naudojimas (ir formavimas), kad būtų galima rašyti metodus nuosekliai (vines po kito)

// xy. Atrinkite Toyota markės, naujesnes nei 2005 metai automobilius ir suformuokite jų markę, modelį ir kainą eilute, ir atspausdinkite
cars.filter(car => car.brand == 'Toyota')
  .filter(car => car.year > 2005)
  .map(car => car.brand + ' - ' + car.model + ': ' + car.price + ' euro')
  .forEach(line => console.log(line));

// Atlikite užuotis su lambda išraiškomis ir method chaining'u.
// 1. Mašinas naujesnes nei 2010-tieji ir brangesnes nei 20 000
// 2. Toyota markės mašinas naujesnes nei 2005-tieji ir brangesnes nei 5000
// 3. Elektrines ir hibridines mašinas.
// 4. Naujesnes nei 2010 daužtas mašinas.
