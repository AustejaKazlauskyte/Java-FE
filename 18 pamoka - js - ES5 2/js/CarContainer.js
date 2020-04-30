class CarContainer {
  constructor(cars) {
    this.state = {
      cars: cars
    }
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    let element = document.createElement('div');
    element.className = 'car-container';
    this.state.cars.forEach(car =>
      element.appendChild(
        new CarCard(car.brand, car.model, car.year, car.price, car.img).render()
      )
    );
    return element;
  }
}

