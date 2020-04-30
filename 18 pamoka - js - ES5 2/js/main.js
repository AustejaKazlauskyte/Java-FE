const app = new App("#root");

app.render();



// name = 'window';
// surname = 'window';

// function sayName(){
//   // Raktažodis 'this' funkcijos viduje rodo į objektą, kuris iškvietė funkciją
//   console.log('My name is', this.name, this.surname);
// }


// let student1 = {
//   name: 'aaa',
//   surname: 'aaa',
//   func: sayName.bind(window)
// }

// let student2 = {
//   name: 'bbb',
//   surname: 'bbb',
//   func: sayName.bind({
//     name: 'nelekas',
//     surname: 'nelekas'
//   })
// }

// sayName();
// student1.func();
// student2.func();
// // student1.func = sayName;