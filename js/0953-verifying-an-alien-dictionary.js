/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const sortedOrder = Array(26).fill(0)
  for (let i = 0; i < 26; i++) sortedOrder[getCharCode(order[i])] = i
  for (let i = 0; i < words.length - 1; i++) {
    // compare two words
    const w1 = words[i]
    const w2 = words[i + 1]
    if (!areWordsInOrder(w1, w2, sortedOrder)) return false
  }
  return true
}

function areWordsInOrder(w1, w2, order) {
  const w1Len = w1.length
  const w2Len = w2.length
  const minLen = Math.min(w1Len, w2Len)

  for (let i = 0; i < minLen; i++) {
    const w1Order = order[getCharCode(w1[i])]
    const w2Order = order[getCharCode(w2[i])]

    console.log(w1[i], w2[i], w1Order, w2Order)

    if (w1Order == w2Order) continue
    if (w1Order < w2Order) return true
    return false
  }

  return w1Len <= w2Len
}

function getCharCode(char) {
  return 'a'.charCodeAt(0) - char.charCodeAt(0)
}

const words = ['hello', 'hellothere', 'leetcode', 'dog']
const order = 'hlabcdefgijkmnopqrstuvwxyz'

console.log(isAlienSorted(words, order))
