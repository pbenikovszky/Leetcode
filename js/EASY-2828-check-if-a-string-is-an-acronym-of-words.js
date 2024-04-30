/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let acr = ''
  for (let i = 0; i < words.length; i++) {
    acr += words[i].charAt(0)
  }

  return acr == s
}

const words = ['never', 'gonna', 'give', 'up', 'on', 'you']
const s = 'ngguoy'

console.log(isAcronym(words, s))
