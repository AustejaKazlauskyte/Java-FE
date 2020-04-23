fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      container.innerHTML += `
      <div class="row">
        <div class="col">${element.id}</div>
        <div class="col">${element.userId}</div>
        <div class="col">${element.title}</div>
        <div class="col">${element.completed? 'atlikta': 'neatlikta'}</div>
      </div>`;
    });
  })