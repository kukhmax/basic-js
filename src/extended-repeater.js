const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 * sep = +
 * add sep = |
 * add time =
 */
function repeater( str, options ) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  } else if (!options.separator) {
    options.separator = '+';
  } else if (!options.additionSeparator) {
    options.additionSeparator = '|';
  } else if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  } else if (!options.addition) {
    options.addition = '';
  }
  let sep = [];
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    sep.push(options.addition) ;
  }
  str += sep.join(options.additionSeparator);
  let adiSep = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    adiSep.push(str);
  }
  return adiSep.join(options.separator);
}

module.exports = {
  repeater
};
