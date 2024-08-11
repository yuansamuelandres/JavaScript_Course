// In the name of Allah

/* Filter & Reduce Practise */
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"]
let check = theBiggest.reduce(function (a, c) {
    return a.length > c.length ? a : c
})
console.log(check)

let removeChars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O']
let finalStirng = removeChars.filter(e => {
    return !e.startsWith('@')
}).reduce((a, c) => {
    return `${a}${c}`
})
console.log(finalStirng)