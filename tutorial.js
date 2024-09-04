// In the name of Allah

const locations = {
    20: "Place 1",
    30: "Place 2",
    10: "Place 3",
    40: "Place 4"
}
let minLocation = 15

let locationsArray = Object.keys(locations)
console.log(Array.from(locationsArray, (e) => {
    return +e
}))

let check = locationsArray.every(function (e) {
    return e > this
}, minLocation)
console.log(check)

/* Array Methods:
    Array.every(CallbackFunction(e, i, a), this Argument)
*/