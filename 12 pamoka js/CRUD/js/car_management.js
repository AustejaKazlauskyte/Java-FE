const carContainer = document.querySelector('#js-car-container');
let editedOrDeleted = false;

function displayCars(cars) {
  cars.forEach(car => {
    //  Sukuriame stulpelį pozicionavimui
    let col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    // Patrumpiname tekstą
    let description = car.description.substring(0, 150) + ' . . .';
    // Duomenis įdedame į komponento šabloną
    let carViewSkeleton = `
    <div class="card-container">
      <div class="card bg-darker ${editedOrDeleted? '': 'card-shifted'}">
        <div class="card-control-panel">
          <span class="btn-action btn-update">&#916;</span>
          <span class="btn-action btn-delete">&#10005;</span>
        </div>
        <img class="card-img-top" src="${car.imgPath}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${car.brand} - ${car.model}</h5>
          <h6 class="card-title text-muted">${car.color}, ${car.year}</h6>
          <p class="text-justify">${description}</p>
          <a href="${car.link}" class="btn bg-darkred text-light">Read more</a>
          <span class="d-block float-right py-2 px-2">${car.price} &euro;</span>
        </div>
      </div>
    </div>`;
    // įdedame komponentą į stulpelį
    col.innerHTML = carViewSkeleton;
    // įdedame stulpelį į jau enatį konteinerį
    carContainer.appendChild(col);

    // pasirenkame iš komponento mygtukus
    let btnDel = col.querySelector('.btn-delete');
    let btnUpd = col.querySelector('.btn-update');

    // uždedame klausiklį ištrinimo mygtukui
    btnDel.addEventListener('click', function () {
      // surandame pagal paspausto mygtuko id jo vietą masyve
      let index = carData.map(carOb => carOb.id).indexOf(car.id);
      // pašaliname objektą iš duomenų masyvo 
      carData.splice(index, 1);
      // Išvalome senas mašinas
      carContainer.innerHTML = '';
      // Pažymime, kad buvo trinimas, ir nebūtų vykdomos animacijos
      editedOrDeleted = true;
      // Perkuriame elementus, kad vaizdas sutaptų su duomenimis
      displayCars(cars);
    });
  });
}


displayCars(carData);