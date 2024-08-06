// In the name of Allah

/* Challenge 7: Arrays */
let zero = 0
let couner = 3
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

let one = true
let two = couner - true

my = my.reverse().slice(two)
console.log(my)

my = my.slice(one, my.length - one)
console.log(my)

my = my.splice(one).join().split("")
my[zero] = 'E'
my[zero + true] = 'l'
console.log(my.join(""))

my = my.slice(my.length - two)
my[my.length - one] = my[my.length - one].toUpperCase()
console.log(my.join(""))