
const contactsContainer = document.querySelector('.js-contacts');

people.forEach(person =>{
  contactsContainer.innerHTML += `
  <div class="contacts__card">
      <img src="${person.image}" class="contacts__card__img">
      <h4 class="text-center">${person.name} ${person.surname}</h4>
      <h2 class="text-center">${person.jobTitle}</h2>
    </div>`;
});
