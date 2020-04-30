class SortButtonsContainer {
  constructor() {
    
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    let element = document.createElement('div');
    element.className = 'container-sort';
    element.innerHTML = `
      <div class="btn btn--blue">A-Z</div>  
      <div class="btn btn--blue">Z-A</div>  
      <div class="btn btn--blue">Price low</div>  
      <div class="btn btn--blue">Price high</div>  
      <div class="btn btn--blue">Year ↑</div>  
      <div class="btn btn--blue">Year ↓</div>`;
    return element;
  }
}