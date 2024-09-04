// In the name of Allah

console.log([..."Yuan"])

// Concatenation
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let allArrays = [...array1, ...array2]
console.log(allArrays)

// Objects
let ob1 = {
    a: 1,
    b: 2,
}
let ob2 = {
    c: 3,
    d: 4,
}
console.log({...ob1, ...ob2, e: 5})

// Copying
let copy = [...array1]
console.log(copy)

// Push 
let allFriends = ["Yuan", "Samuel"]
let thisYear = ["Andrew"]
allFriends.push(...thisYear)
console.log(allFriends)

// Math Object
let nums = [10, 20, -200, 500]
console.log(Math.max(...nums))

/* Spread Operator => ...Iterable
*/