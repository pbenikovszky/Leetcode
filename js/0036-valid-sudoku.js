/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const squaresMaps = []
  const rowsMaps = []
  const colsMap = []
  for (let i = 0; i < 9; i++) {
    squaresMaps[i] = {}
    rowsMaps[i] = {}
    colsMap[i] = {}
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue
      }
      const num = board[i][j]
      const squareIndex = Math.floor(i / 3) * 3 + 1 + Math.floor(j / 3)
      if (squaresMaps[squareIndex - 1][num]) {
        return false
      }
      if (rowsMaps[i][num]) {
        return false
      }
      if (colsMap[j][num]) {
        return false
      }
      squaresMaps[squareIndex - 1][num] = 1
      rowsMaps[i][num] = 1
      colsMap[j][num] = 1
    }
  }
  return true
}

const board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

console.log(isValidSudoku(board))
