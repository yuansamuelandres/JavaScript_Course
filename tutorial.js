// In the name of Allah

/* Challenge 4: String Methods */
let a = "Elzero Web School"

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6))

console.log(a.slice(-4, -3).toUpperCase().repeat(8))

console.log(a.substring(0, 6).split())

console.log(`${a.substr(0, 6)} ${a.substr(-6)}`)

console.log(
    a[0].toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a[a.length - 1].toLowerCase())