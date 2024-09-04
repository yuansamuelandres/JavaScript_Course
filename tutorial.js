// In the name of Allah

let nums = [1, 2, 3, 4, 5, 6, 7]
let myNumber = 5
let check = nums.some(function (e) {
    console.log("Test") //6
    return e > this
}, myNumber)
console.log(check)

function checkValues (arr, val) {
    return arr.some(function (E) {
        return E === val
    })
}
console.log(checkValues(nums, 5))

let range = {
    min: 10,
    max: 20
}
let checkRange = nums.some(function (e) {
    return e >= this.min && e <= this.max 
}, range)
console.log(checkRange)

/* Array Methods:
    Array.some(CallbackFunction(e, Index, Array), This Argument)
        - Checks if an element exists in the array
        - check if number is in a range
*/