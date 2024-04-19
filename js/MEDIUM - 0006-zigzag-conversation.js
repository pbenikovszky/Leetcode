/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }

  if (numRows >= s.length) {
    return s
  }

  let i = 0
  let dir = 1
  let currentCharacter = 0
  let rows = Array(numRows).fill('')
  for (
    let currentCharacter = 0;
    currentCharacter < s.length;
    currentCharacter++
  ) {
    rows[i] += s.charAt(currentCharacter)
    i += dir
    if (i == numRows) {
      i == numRows - 1
      dir = -1
    }
    if (i == numRows - 1 || i == 0) {
      dir *= -1
    }
  }
  return rows.join('')
}

const str = 'AB'
const numRows = 1

console.log(convert(str, numRows))
