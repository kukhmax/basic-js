const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let max = 0;
  const digits = n.toString().split('').map(Number);
  for (let i = 0; i < digits.length; i++) {
    const newNum = parseInt(digits.filter((_, index) => index !== i).join(''));
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
