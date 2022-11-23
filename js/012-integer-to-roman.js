function getRomanFromDigit(digit, arr) {
  let result = ''

  if (digit == 0) return ''

  if (digit < 4) {
    for (const i of Array(digit)) result += `${arr[0]}`
    return result
  }

  if (digit < 5) {
    return `${arr[0]}${arr[1]}`
  }

  if (digit < 9) {
    result = `${arr[1]}`
    for (const i of Array(digit - 5)) result += `${arr[0]}`
    return result
  }

  return `${arr[0]}${arr[2]}`
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  return num
    .toString()
    .split('')
    .map((digit, index, arr) => {
      const startIndex = (arr.length - index - 1) * 2
      const romanDigits = [
        romans[startIndex],
        romans[startIndex + 1],
        romans[startIndex + 2]
      ]
      return getRomanFromDigit(+digit, romanDigits)
    })
    .join('')
}

module.exports = intToRoman

for (const num of [3, 58, 1994]) {
  console.log(intToRoman(num))
}
