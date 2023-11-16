/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false
  }

  const ransomMap = {}

  for (let c of ransomNote) {
    if (!ransomMap[c]) {
      ransomMap[c] = 0
    }

    ransomMap[c] = ransomMap[c] + 1
  }

  for (let c of magazine) {
    if (ransomMap[c]) {
      ransomMap[c] = ransomMap[c] - 1
    }
  }

  for (let counter in ransomMap) {
    if (ransomMap[counter] > 0) {
      return false
    }
  }

  return true
}

const ransomNote = ''
const magazine = 'aab'

console.log(canConstruct(ransomNote, magazine))
