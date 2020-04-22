/**
 * Suskaičiuoja atstumą pixeliais iki puslapio viršaus
 *
 * @param {HTMLElement} elem - elementas kuriam skaičiuosime atstumą
 * @returns {Number} - atstumas
 */
function distanceFromPageTop(elem) {
  let location = 0;
  if (elem.offsetParent) {
    do {
      location += elem.offsetTop;
      elem = elem.offsetParent;
    } while (elem);
  }
  return location >= 0 ? location : 0;
};