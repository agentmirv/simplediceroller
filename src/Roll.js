/**
 * Generates a random number between min and max inclusive.
 * @param {int} min - The minimum value.
 * @param {int} max - The maximum value.
 * @return {int} random number.
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
