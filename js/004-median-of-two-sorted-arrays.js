/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums2.length < nums1.length) {
    a = [...nums2]
    b = [...nums1]
  } else {
    a = [...nums1]
    b = [...nums2]
  }

  const totalLength = nums1.length + nums2.length
  const half = Math.floor(totalLength / 2)
  let l = 0
  let r = a.length - 1
  while (true) {
    const i = Math.floor((l + r) / 2)
    const j = half - i - 2

    const al = i >= 0 ? a[i] : -Infinity
    const ar = i + 1 < a.length ? a[i + 1] : Infinity
    const bl = j >= 0 ? b[j] : -Infinity
    const br = j + 1 < b.length ? b[j + 1] : Infinity

    if (bl <= ar && al <= br) {
      if (totalLength % 2 == 1) {
        return Math.min(ar, br)
      }
      return (Math.max(al, bl) + Math.min(ar, br)) / 2
    }

    if (al > br) {
      r = i - 1
    } else {
      l = i + 1
    }
  }
}

module.exports = findMedianSortedArrays
