// In the name of Allah

/* Map & Filter Practise */
let sentence = "I Love Foood Code Too Playing Much"
let smallWords = sentence.split(" ").filter(e => {
    return e.length <= 4
}).join(" ")
console.log(smallWords)

let mix = "A13BD2ZX"
let pure = mix.split("").filter(e => {
    return !isNaN(parseInt(e))
}).map(e => {
    return e * e
}).join(" # ")
console.log(pure)