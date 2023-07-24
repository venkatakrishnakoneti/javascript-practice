arr = [1, 2, 3, 4,5]
console.log(arr.slice(2)) // no effect on original array
console.log(arr)
console.log(arr.splice(2,2, 6,77)) // Changes original array
console.log(arr)