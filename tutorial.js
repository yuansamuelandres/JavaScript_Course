// In the name of Allah

/* Challenge 2: Operators */
let a = 10
let b = "20"
let c = 80
console.log(++a + +b++ + +c++ - +a++)
console.log(++a + -b + +c++ - -a++ + +a)
console.log(--c + +b + --a * +b++ - +b * a + --a - +true)
// 11 + 20(b=21) + 80(c=81) - 11(a=12) = 100
// 13 + [-21] + 81(c=82) - [-13](a=[14]) + 14 = 100 
// 81 + 21 + 11 * 21(b=22) - 22 * 11 + 10 - 1 = 81 + 21 + 231 - 242 + 10 - 1 = 100

let d = "-100"
let e = "20"
let f = 30
let g = true
console.log(-d * e)         //2000
console.log(-d + e * 2 + f + g * 3)         //173