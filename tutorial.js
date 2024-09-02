// In the name of Allah

let mapUser = {theName: "Yuan"}
let myMap = new Map()
myMap.set(mapUser, "Object")
mapUser = null
console.log(myMap)

let wMapUser = {theName: "Yuan"}
let myWeakMap = new Map()
myWeakMap.set(wMapUser, "Object")
wMapUser = null
console.log(myWeakMap)

/* Map vs WeakMap:
Map => key can be anything
WeakMap => key can be objects only
*/