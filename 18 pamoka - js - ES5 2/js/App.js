class App{
  constructor(selector) {
    this.root = document.querySelector(selector);
    this.state = {
      carsLoaded: false
    };
  }

  sortCarsByTitle(asc) {
    this.setState({
      ...this.state,
      cars: this.state.cars.sort((a, b) => {
        let title1 = a.brand + ' ' + a.model;
        let title2 = b.brand + ' ' + b.model;
        if (title1 === title2) return 0;
        if (title1 > title2) return 1 * (asc ? 1 : -1);
        return -1 * (asc ? 1 : -1);
      })
    })
  }

  sortCarsByPrice(asc) {
    this.setState({
      ...this.state,
      cars: this.state.cars.sort((a, b) => (a.price - b.price) * (asc ? 1 : -1) )
    })
  }

  sortCarsByYear(asc) {
    this.setState({
      ...this.state,
      cars: this.state.cars.sort((a, b) => (a.year - b.year) * (asc ? 1 : -1) )
    })
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
          sortFunction: function () { this.sortCarsByTitle(true) }.bind(this)
        },
        {
          title: 'Z-A',
          sortFunction: () => this.sortCarsByTitle(false)
        },
        {
          title: 'Price Low',
          sortFunction: () => this.sortCarsByPrice(true)
        },
        {
          title: 'Price High',
          sortFunction: () => this.sortCarsByPrice(false)
        },
        {
          title: 'Oldest',
          sortFunction: () => this.sortCarsByYear(true)
        },
        {
          title: 'Newest',
          sortFunction: () => this.sortCarsByYear(false)
        },
      ]);
      const carContainer = new CarContainer(this.state.cars);

      this.root.appendChild(sortButtonsContainer.render());
      this.root.appendChild(carContainer.render());
    }
  }
}