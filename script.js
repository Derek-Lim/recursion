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
