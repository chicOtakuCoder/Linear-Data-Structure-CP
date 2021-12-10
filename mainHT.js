let arr1 = [3, 1, 7, 9]
let arr2 = [2, 4, 1, 9, 3]
let sum1 = 0
let sum2 = 0
let newArr = arr1.concat(arr2)
let obj = {}
let count = 1

// for loop to create obj key and values
for (i = 0; i < newArr.length; i++) {
    if ( newArr[i] in obj === false) {
        obj[newArr[i]] = count
    } else if (newArr[i] in obj) {
        obj[newArr[i]] += 1
    }
}

// sum of overlapping elements
for (key in obj) {
    if (obj[key] === 2) {
        sum1 += parseInt (key)*2
    }
}

// sum of Distinct elements
for (key in obj) {
    if (obj[key] === 1) {
        sum2 += parseInt (key)
    }
}



