let arr1 = [3, 1, 7, 9]
let arr2 = [2, 4, 1, 9, 3]
let sum1 = 0
let sum2 = 0

// Sum of Overlapping Elements
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      sum1 += (arr1[i] + arr2[j])
    }
  }
}
console.log (sum1)

// Sum of Distinct Elements
for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === false) {
        sum2 += arr1[i]
    }
}
for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) === false) {
        sum2 += arr2[i]
    }
}
console.log (sum2)


