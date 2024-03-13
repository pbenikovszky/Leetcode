/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['IV', 4],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ])
  let result = 0

  for (let i = 0; i < s.length; i++) {
    const oneDigit = s[i]
    const twoDigits = s[i] + s[i + 1]
    if (map.has(twoDigits)) {
      result += map.get(twoDigits)
      i++
    } else {
      result += map.get(oneDigit)
    }
  }

  return result
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
