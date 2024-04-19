function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {Number} num
 * @return {ListNode}
 */
function convertNumToLinkedList(num) {
  const arrayOfDigits = `${num}`.split('').map((digit) => Number(digit))

  let node = new ListNode(arrayOfDigits[0])
  if (num < 10) {
    return node
  }
  let newNode
  for (let i = 1; i < arrayOfDigits.length; i++) {
    newNode = new ListNode(arrayOfDigits[i], node)
    node = newNode
  }
  return newNode
}

function printLinkedList(node) {
  const nums = [node.val]
  while (node.next) {
    node = node.next
    nums.push(node.val)
  }
  console.log(nums.join(' -> '))
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carryOver = 0
  let prev = new ListNode()
  const head = prev
  while (l1 || l2 || carryOver) {
    let d1 = 0
    let d2 = 0
    if (l1) {
      d1 = l1.val
      l1 = l1.next
    }
    if (l2) {
      d2 = l2.val
      l2 = l2.next
    }
    let sum = d1 + d2 + carryOver
    carryOver = 0
    if (sum > 9) {
      carryOver = 1
      sum -= 10
    }
    const newNode = new ListNode(sum)
    prev.next = newNode
    prev = newNode
  }
  return head.next
}

const l1 = convertNumToLinkedList(9999999)
const l2 = convertNumToLinkedList(9999)

printLinkedList(l1)
printLinkedList(l2)

const s = addTwoNumbers(l1, l2)
printLinkedList(s)
