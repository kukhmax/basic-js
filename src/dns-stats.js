const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let res = {};

  for (let domain of domains ) {
     let domainList = domain.split( '.' ).reverse();
     let i = 0;
     let dom =  '';
     while ( i < domainList.length ) {
      dom += `.${domainList[i]}`;
      if (dom in res) {
        res[dom]++;
      } else {
        res[dom] = 1;
      }
      i++;
     }

  }
  return res;
}

module.exports = {
  getDNSStats
};
