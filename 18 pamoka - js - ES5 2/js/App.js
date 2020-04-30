class App {
  constructor(selector) {
    this.root = document.querySelector(selector);
    this.state = {
      carsLoaded: false
    };
  }

  sortCarsByTitle(asc){
    console.log('sort cars by title', asc? 'asc': 'desc');
  }

  sortCarsByPrice(asc){
    console.log('sort cars by price', asc? 'asc': 'desc');

  }

  sortCarsByYear(asc){
    console.log('sort cars by year', asc? 'asc': 'desc');

  }









  // Šî funkcija skirta programos duomenims keisti.
  // Po kiekvieno duomenų pasikeitimo yra atnaujinamas vaizdas kviečiant render() metodą;
  setState(newState) {
    this.state = newState;
    this.render();
  }

  fetchCars() {
    // fetch('http://KazkoksUrlsusikursitsu.java.com')
    //   .then(response => response.json())
    //   .then(cars => {
    //     //  Vykdomas kodas
    //      this.setState({
    //        cars = carData
    //      })
    //   })
    //   .catch(err => {
    //     // Klaidu apdorojimas
    //   })

    setTimeout(() => {
      // Vykdomas kodas
      this.setState({
        cars: carData,
        carsLoaded: true
      });
    }, 1000);
  }

  render() {
    this.root.innerHTML = ''; // Išvalo visą turinį
    if (!this.state.carsLoaded) {
      // Neužsikrovus duomenims
      this.fetchCars()
      this.root.innerHTML = '<img class="page-loading" src="./assets/loading.gif">';
    } else {
      // Užsikrovus duomenims
      const sortButtonsContainer = new SortButtonsContainer([
        {
          title: 'A-Z',
          sortFunction: function() { this.sortCarsByTitle(true) }
        },
        {
          title: 'Z-A',
          sortFunction: function() { this.sortCarsByTitle(false) }
        },
        {
          title: 'Price Low',
          sortFunction: function() { this.sortCarsByPrice(true) }
        },
        {
          title: 'Price High',
          sortFunction: function() { this.sortCarsByPrice(false) }
        },
        {
          title: 'Oldest',
          sortFunction: function() { this.sortCarsByYear(true) }
        },
        {
          title: 'Newest',
          sortFunction: function() { this.sortCarsByYear(false) }
        },
      ]);
      const carContainer = new CarContainer(this.state.cars);

      this.root.appendChild(sortButtonsContainer.render());
      this.root.appendChild(carContainer.render());
    }
  }
}