const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0
  s = s
    .replace('IV', 'IIII')
    .replace('IX', 'VIIII')
    .replace('XL', 'XXXX')
    .replace('XC', 'LXXXX')
    .replace('CD', 'CCCC')
    .replace('CM', 'DCCCC')

  return s
    .split('')
    .map((roman) => values[roman])
    .reduce((prevValue, currentValue) => {
      return prevValue + currentValue
    }, 0)
}

module.exports = romanToInt
