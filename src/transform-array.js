const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  if (Array.isArray(arr)) {
    const newArr = [];
    // let prev = arr[0];
    for (let i of arr) {

        if (i >  i + 1) {
          continue;
        }
        if (i === '--discard-prev') {
          if (newArr.length > 0) {
            newArr.pop();
          }
          newArr.pop();
          continue;
        } else if (i === '--double-prev') {
          if (newArr.length > 0) {
            newArr.push(i - 1);
          }
          continue;
        } else if (i === '--double-next') {
          newArr.push(i + 1);
          continue;
        } else if (i === '--discard-next') {
          newArr.push('next');
          continue;
        } else if (typeof i !== 'number') {
          continue;
        }
        if (newArr[newArr.length - 1] === 'next') {
          newArr.pop();
          continue;
        }


        newArr.push(i);

      }
    return newArr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
