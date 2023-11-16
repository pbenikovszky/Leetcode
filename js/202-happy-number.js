var isNumberHappy = function (n, memoize) {
  if (n === 1) {
    return true
  }

  if (memoize[n]) {
    return false
  }

  memoize[n] = 1

  const newNumber = n
    .toString()
    .split('')
    .reduce((prevValue, currentValue) => {
      return prevValue + Math.pow(Number(currentValue), 2)
    }, 0)
  return isNumberHappy(newNumber, memoize)
}

var isHappy = function (n) {
  return isNumberHappy(n, {})
}

const n = 2

console.log(isHappy(n))
