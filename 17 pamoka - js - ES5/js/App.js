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
    if (!this.state.carsLoaded) {
      this.fetchCars()
    }
    if (!this.state.carsLoaded) {
      this.root.innerHTML = '<img src="./assets/loading.gif">';
    } else {
      this.root.innerHTML = 'Atvaizduotas masinu sarasas';
    }
  }
}