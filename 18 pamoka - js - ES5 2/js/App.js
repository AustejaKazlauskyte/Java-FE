class App {
  constructor(selector) {
    this.root = document.querySelector(selector);
    this.state = {
      carsLoaded: false
    };
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
      const sortButtonsContainer = new SortButtonsContainer();
      const carContainer = new CarContainer(this.state.cars);
      
      this.root.appendChild(sortButtonsContainer.render());
      this.root.appendChild(carContainer.render());
    }
  }
}