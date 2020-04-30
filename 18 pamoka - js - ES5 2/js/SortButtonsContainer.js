class SortButtonsContainer {
  constructor(buttons) {
    this.state = {
      buttons
    };
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  formButton(btnData){
    let element = document.createElement('div');
    element.className = 'btn btn--blue';
    element.innerHTML = btnData.title;
    element.addEventListener('click', btnData.sortFunction)
    return element;
  }

  render() {
    let element = document.createElement('div');
    element.className = 'container-sort';
    this.state.buttons.forEach(data => element.appendChild(this.formButton(data)))
    return element;
  }
}







