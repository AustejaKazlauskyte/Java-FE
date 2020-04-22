let inputName = document.querySelector('.js-input-name');
let btnName = document.querySelector('.js-btn-name');
let containerResult = document.querySelector('.js-result');
let counterPrintName = 0; // darbinis kintamasis 'printName' funkcijai

// ------------------------ Event listener ---------------
// addEventListener dokumentacija  - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// Visų event'ų sąrašas - https://developer.mozilla.org/en-US/docs/Web/Events
// Event listener - tai toks JS mechanizmas kuris vykdo funkciją, įvykus įvykiui

// -------------------- Laukelio spausdinimas į kitą konteinerį ----------------------------
function printName() {
  counterPrintName++; // Kiekviena kart įvykus funkcijai didiname darbinį kintamajį
  if (counterPrintName > 5) {
    btnName.removeEventListener('click', printName);
    // inputName yra <input ...> kintamasis, jis neturi innerHTML savybės. Jo turinys saugomas savybėje(property) 'value'
    inputName.value = 'Daugiau nebegalite spausti';
    //                        ↓ - atributo pavadinimas        
    inputName.setAttribute('readonly', true);
    // ↑ - kokiam elementui             ↑ - atributo reikšmė
  } else {
    containerResult.innerHTML = inputName.value;
  }
}
// ↓ - kokiam elementui;    ↓ - Kokiam įvykiui įvykus
btnName.addEventListener('click', printName);
//            ↑ - mechanizmas kuris rūpinasi klausymu;    ↑ - kokia funkcija bus vykdoma įvykus įvykiui

// ------------------------------- Spalvų žaismas ------------------------------

let rectangleColor = document.querySelector('.js-result-rect');
let inputColor = document.querySelector('.js-input-color');
let btnColor = document.querySelector('.js-btn-color');

btnColor.addEventListener('click', function () {
  // ↓ - kokiam elementui;          ↓ - Kokia bus nurodytos savybės reikšmė
  rectangleColor.style.background = inputColor.value;
  //        ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ - nurodome kokią stiliaus savybę keisime
})

// ------------------------------- Dydžių žaismas ------------------------------
let rectangleSize = document.querySelector('.js-adjustable-rect');
let panelIncSize = document.querySelector('.js-inc-panel');
let panelDecSize = document.querySelector('.js-dec-panel');
let btnSizeMax = document.querySelector('.js-btn-max-size');
let btnSizeMin = document.querySelector('.js-btn-min-size');
let containerMain = document.querySelector('.container');

/**
 * Ši funkcija skirta paversti STRING duomenis į reikšmę skaičiavimams
 * @param {String} sizeInPixels - takes pixel string
 * @returns {Number} pixel amount
 */
function pixelsToAmount(sizeInPixels) {
  let result = sizeInPixels.substring(0, sizeInPixels.length - 2);
  return Number(result);
}

/**
 * Apskaičiuoja elemento, plotį atmetus kamšalą (padding)
 * @param {HTMLElement} element - elementas kurio plotį skaičiuosime
 * @returns Number
 */
function actualWidth(element){
  //     Gauname sukompiliuotus stilius - ↓; kokio elemento - ↓;           kokios savybės - ↓
  let paddingLeft = pixelsToAmount(window.getComputedStyle(element).getPropertyValue('padding-left'));
  let paddingRight = pixelsToAmount(window.getComputedStyle(element).getPropertyValue('padding-right'));
  // Suskaičiuojame realų plotį, atėmus kamšalą
  return element.offsetWidth - paddingLeft - paddingRight;
}

/**
 *    Ši funkcija yra skirta padidinti kvadato dydžiui, 
 * kiekvieną kartą ją iškviečiant dydis padidinamas 10px
 */
function incRectangleSize() {
  let containerWidth = actualWidth(containerMain);
  if (rectangleSize.offsetWidth < containerWidth) { // Jeigu realus plotis mažesnis už conteinerio plotį
    // Stiliaus savybė ... nustatoma ...
    rectangleSize.style.height = rectangleSize.offsetHeight + 10 + 'px';
    rectangleSize.style.width = rectangleSize.offsetWidth + 10 + 'px';
  }
}

/**
 *    Ši funkcija yra skirta sumažinti kvadato dydžiui, 
 * kiekvieną kartą ją iškviečiant dydis sumažinamas 10px
 */
function decRectangleSize() {
  if (rectangleSize.offsetWidth > 50) {
    rectangleSize.style.height = rectangleSize.offsetHeight - 10 + 'px';
    rectangleSize.style.width = rectangleSize.offsetWidth - 10 + 'px';
  }
}

panelIncSize.addEventListener('mousemove', incRectangleSize);
panelDecSize.addEventListener('mousemove', decRectangleSize);
btnSizeMax.addEventListener('click', function () {
  let containerWidth = actualWidth(containerMain);
  rectangleSize.style.width = containerWidth + 'px';
  rectangleSize.style.height = containerWidth + 'px';
});

btnSizeMin.addEventListener('click', function () {
  rectangleSize.style.width = '50px';
  rectangleSize.style.height = '50px';
});

