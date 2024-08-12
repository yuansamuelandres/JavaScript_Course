// In the name of Allah

/* Challenge 11: Higher Order Functions */
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"

let solution = myString.split("").filter((e) => {
    return isNaN(parseInt(e))
})
.map(e => {
    return !e.startsWith(',') ? e : " "
})
.filter(function (e) {
    return !e.includes(" ")
})
.map(e => {
return e.startsWith('_') ? " " : e
})
.reduce((a, c) => {
    return a === c ? `${a}` : `${a}${c}`
})
.split(" ")
.reduce((a, c) => {
    let one = true, ln = c.length - one, zero = !one
    // console.log(`#${a} ##${c}`)
    return c.charAt(ln) === c.charAt(ln).toUpperCase() && 
    c.charAt(zero) === c.charAt(zero).toUpperCase()
        ? `${a} ${c.slice(0, ln)}` : `${a} ${c}`
})
console.log(solution)