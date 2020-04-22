//  Kintamieji
let viewportHeight = document.documentElement.clientHeight;
let logo = document.querySelector('nav .fixed-brand');
let navbar = document.querySelector('nav.navbar');

// -----------------------Animacijų Funkcijų deklaracijos------------------------
function handleNavbarColor() {
  if (window.scrollY > viewportHeight - navbar.offsetHeight) {
    // Pra'scroll'inome #hero sekcija
    logo.classList.add('not-visible');
    navbar.classList.add('bg-darkred');
  } else {
    // Grįžome į #hero sekcija
    logo.classList.remove('not-visible');
    navbar.classList.remove('bg-darkred');
  }
}

function handleCardShift() {
  // Salyga kokiu atveju nuimti
  let cards = carContainer.querySelectorAll('.card');
  if (cards[0] && window.scrollY > distanceFromPageTop(cards[0]) - viewportHeight + 100) {
    cards.forEach((card, i) => {
      // setTimeout(ką vykdyti, po kiek laiko) - tai funkcija, kuri vykdo kitą funkciją, po laiko tarpo (milisekundėmis)
      setTimeout(() => card.classList.remove('card-shifted'), 120 + 120 * (i % 3));
      //  i - kortelės vieta eilutėje prie didelio ekrano
    });
  }
}

// ---------------------------Eventų sekimas----------------------------
window.addEventListener('scroll', handleNavbarColor);
window.addEventListener('scroll', handleCardShift);

// ---------------------Pirmo užkrovimo kvietiniai----------------------
handleNavbarColor();
handleCardShift();

