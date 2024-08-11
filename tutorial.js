// In the name of Allah

/* Map Practise */
let swappingCases = "elZERo"
let invertedNumbers = [1, -10, -20, 15, 100, -30]
let ignoreBooleans = "Elz123er4o"

let sw = swappingCases.split("").map(function (e) {
    return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
}).join("")
console.log(sw)

let inv = invertedNumbers.map(function (e) {
    return -e
})
console.log(inv)

let ign = ignoreBooleans.split("").map(function (e) {
    return isNaN(parseInt(e)) ? e : ""
}).join("")
console.log(ign)