/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
  const map = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
  ]

  // const map = Array(row)
  //   .fill(0)
  //   .map((_, i) => Array(col).fill(0))

  printMap(map)

  console.log(getDeepest(map, 0, 0, 2))

  // for (let i = 0; i < cells.length; i++) {
  //   console.log(`After ${i + 1} day`)
  //   const x = cells[i][0] - 1
  //   const y = cells[i][1] - 1
  //   map[x][y] = 1
  //   printMap(map)
  // }
}

function getDeepest(map, row, col, marker) {
  const rows = map.length
  const cols = map[0].length

  if (row == rows - 1) {
    return row
  }

  map[row][col] = marker

  // check left
  if (row > 0 && ![marker, 1].includes(map[row - 1][col])) {
    left = getDeepest(map, row - 1, col)
  }

  // check right
  if (row < rows - 1 && ![marker, 1].includes(map[row - 1][col])) {
    right = getDeepest(map, row + 1, col)
  }

  // check down
  if (col > 0 && ![marker, 1].includes(map[row][col - 1])) {
    right = getDeepest(map, row, col - 1)
  }

  // check up
  if (col < cols - 1 && ![marker, 1].includes(map[row][col + 1])) {
    right = getDeepest(map, row, col + 1)
  }
  return Math.max(left, right, up, down)
}

function printMap(map) {
  for (const row of map) {
    console.log(row.join(' '))
  }
}

const row = 3
const col = 3
const cells = [
  [1, 2],
  [2, 1],
  [3, 3],
  [2, 2],
  [1, 1],
  [1, 3],
  [2, 3],
  [3, 2],
  [3, 1]
]

latestDayToCross(row, col, cells)
