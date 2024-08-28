// In the name of Allah

let myData = [1, 1, 1, 2, 3]
let myUniqueData = new Set(myData)

console.log(myUniqueData)
console.log(myUniqueData.delete(4)) // false

/* Set Data Type = Set(Iterable)
=> stores unique values only
=> cannot access elements by index
    .size

    .add()
    .delete()
    .clear()
    .has()
*/