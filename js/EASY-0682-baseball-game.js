/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const record = []
  for (const operation of operations) {
    switch (operation) {
      case 'C':
        record.pop()
        break
      case 'D':
        record.push(record[record.length - 1] * 2)
        break
      case '+':
        record.push(record[record.length - 1] + record[record.length - 2])
        break

      default:
        record.push(Number(operation))
    }
  }
  let sum = 0
  while (record.length > 0) {
    sum += record.pop()
  }
  return sum
}

// const arr = ['5', '2', 'C', 'D', '+']
// const arr = ['1', 'C']
const arr = ['5', '-2', '4', 'C', 'D', '9', '+', '+']

console.log(calPoints(arr))
