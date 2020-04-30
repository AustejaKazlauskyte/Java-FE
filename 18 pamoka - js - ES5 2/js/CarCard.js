class CarCard {
  constructor(brand, model, year, price, img) {
    this.state = { brand, model, year, price, img }
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    let element = document.createElement('div');
    element.className = 'car-container__car';
    element.innerHTML = `
      <img 
        class="car-container__car__img" 
        src="${this.state.img}" 
        alt="${this.state.brand} ${this.state.model}"
      >
      <h3 class="car-container__car__title">
        <span>${this.state.brand} - ${this.state.model}</span>
        <span>${this.state.year}</span>  
      </h3>
      <div class="car-container__car__price">${this.state.price}</div>
      <div class="car-container__car__actions">
        <a class="btn btn--blue" href="">Read more</a>
        <a class="btn btn--green" href="">Add to cart</a>
      </div>`;
    return element;
  }
}