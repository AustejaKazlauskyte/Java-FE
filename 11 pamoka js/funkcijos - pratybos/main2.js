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

// 1. Parašykite funkciją, kuri atrinktų mašinas naujesnes nei 2010 metai.
// 2. Parašykite funkciją, kuri atrinktų mašinas senesnes nei 2000 metai.
// 3. Parašykite funkciją, kuri atrinktų mašinas brangesnes nei 1000 eurų.
// 4. Parašykite funkciją, kuri atrinktų tik 'Toyota' mašinas.
// 5. Parašykite funkciją, kuri atrinktų tik daužtas mašinas.
// 6. Parašykite funkciją, kuri atrinktų tik NEdaužtas mašinas.
// 7. Parašykite funkciją, kuri atrinktų tik mašinas pagal PARAMETRU nurodytą markę.
// 8. Parašykite funkciją, kuri atrinktų mašinas naujesnes nei PARAMETRU nurodyti metai.
// 9. Parašykite funkciją, kuri atrinktų mašinas brangesnes nei PARAMETRU nurodyta kaina.
// 10. Parašykite funkciją, kuri atrinktų pagal PARAMETRU nurodytą kuro tipą.
// 11. Parašykite funkciją, kuri suskaičiuotų paduodamų mašinų vertę(sumą).
// 12. Parašykite funkciją, kuri suskaičiuotų paduodamų mašinų vidutinę vertę(vidurkį).

// Nekuriant naujų funkcijų, o tik perpanaudojant jau sukurtas funkcijas parašykite logiką gauti: 
//    13. Mašinas naujesnes nei 2010-tieji ir brangesnes nei 20 000
//    14. Toyota markės mašinas naujesnes nei 2005-tieji ir brangesnes nei 5000
//    15. Elektrines ir hibridines mašinas.
//    16. Naujasnes nei 2010 daužtas mašinas.

// --------------------------------- UŽDUOČIŲ ATLIKIMAS ---------------------------------
console.log('Pradinis mašinų masyvas');
console.table(cars);
// 1. Parašykite funkciją, kuri atrinktų mašinas naujesnes nei 2010 metai.
console.log('1. Parašykite funkciją, kuri atrinktų mašinas naujesnes nei 2010 metai.');
function new2010(cars) {
  let result = [];
  cars.forEach(function (car) {
    if (car.year > 2010) {
      result.push(car);
    }
  });

  // ------------------- Labai mondrai ------------------- 
  // cars.forEach(car => car.year > 2010 ? result.push(car) : null );

  // ------------------- for ciklo pvz -------------------
  // for (let i = 0; i < cars.length; i++) {
  //   if(cars[i].year > 2010){
  //     result.push(cars[i]);
  //   }
  // }
  return result;
}

let carsNew2010 = new2010(cars);

console.table(carsNew2010);
console.log('');


// 7. Parašykite funkciją, kuri atrinktų tik mašinas pagal PARAMETRU nurodytą markę.
console.log('7. Parašykite funkciją, kuri atrinktų tik mašinas pagal PARAMETRU nurodytą markę.');
function carsByBrand(cars, brand){
  result = [];
  cars.forEach(car => {
    if(car.brand == brand) result.push(car);
  });
  return result;
}

let carsOpel = carsByBrand(cars, 'Opel');
let carsToyota = carsByBrand(cars, 'Toyota');
let carsTesla = carsByBrand(cars, 'Tesla');

console.table(carsOpel);
console.table(carsToyota);
console.table(carsTesla);
console.log('');

