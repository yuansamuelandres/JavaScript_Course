// In the name of Allah

console.log(Array.from("Yuan"))
console.log(Array.from("123", function (n) {
    return +n
}))

let myArray = [1, 1, 1, 2, 3, 4]
// let mySet = new Set(myArray)
// console.log(Array.from(mySet))
console.log([...new Set(myArray)])    // Spread Operator

function testArg () {
    return Array.from(arguments)
}
console.log(testArg("Yuan", "Samuel"))

/* Array Methods:
    Array.from(Iterable, MapFunction, This)
        - Variable
        - String Numbers
        - Set
        - Using the Map Function
        - arguments usage inside the function
*/