// In the name of Allah

let myObject = {}
let myEmptyObject = Object.create(null)
let myMap = new Map()
console.log(myObject)
console.log(myEmptyObject)
console.log(myMap)

let myNewObject = {
    10: "Number",
    "10": "String",
}
console.log(myNewObject[10])
let myNewMap = new Map()
myNewMap.set(10, "Number")
myNewMap.set("10", "String")
console.log(myNewMap.get("10"))

/* Map Data Type vs Object:
Map => doesn't contain keys by default
Object => has keys by default

Map => key can be anything
Object => string or symbol keys 

Map => ordered by insertion
Object => not 100% 

Map => gets items by size
Object => needs to be done manually

Map => can be directly iterated
Object => not directly & needs to use .keys()

Map => better performance when adding or removing data
Object => low performance compared to Map
*/
/*
! Search:
    - WeakSet use cases
*/