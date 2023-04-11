const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason( date ) {
  if (!date) {return 'Unable to determine the time of year!';}

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  if (date instanceof Date) {
    if (date.getMonth() < 2 || date.getMonth() >10) {
    return 'winter';
  } else if (date.getMonth() > 7) {
    return 'autumn';
  } else if (date.getMonth() > 4) {
    return 'summer';
  } else if (date.getMonth() > 1){
    return 'spring';
  }
} else {
  return 'Unable to determine the time of year!';
}

}

module.exports = {
  getSeason
};
