function fibs (n) {
  const arr = []
  let x = 0
  if (n === 0) return arr
  if (n >= 1) arr.push(0)
  if (n >= 2) arr.push(1)

  for (let i = 2; i < n; i++) {
    x = arr[i - 1] + arr[i - 2]
    arr.push(x)
  }
  return arr
}

function fibsRec (n) {
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  const previous = fibsRec(n - 1)
  return previous.concat(previous[n - 3] + previous[n - 2])
}

console.log(fibs(20))
console.log(fibsRec(20))

function merge (arr1, arr2) {
  const arr3 = []
  let i = 0
  let j = 0
  let k = 0

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      arr3[k] = arr1[i]
      i++
      k++
    } else {
      arr3[k] = arr2[j]
      j++
      k++
    }
  }
  for (; i < arr1.length; i++) {
    arr3[k] = arr1[i]
    k++
  }
  for (; j < arr2.length; j++) {
    arr3[k] = arr2[j]
    k++
  }
  return arr3
}

function mergeSort (arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2)
    const left = arr.splice(0, mid)

    return merge(mergeSort(left), mergeSort(arr))
  } else {
    return arr
  }
}
console.log(mergeSort([22, 14, 8, 34, 12, 1, 45]))
