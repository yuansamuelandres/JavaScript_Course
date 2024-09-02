// In the name of Allah

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"])
console.log(mySet)

let iterator = mySet.keys()
console.log(iterator.next())
console.log(iterator.next().value)

mySet.forEach((e) => console.log(e))


let myWS = new WeakSet([{A: 1, B: 2,}])
console.log(myWS)

let iter = myWS.keys()
console.log(iter.next())

/* WeakSet:
=> You only store objects in it
=> Can be garbage collected 
becuase objects in it are held weakly (with no reference)
=> Doesn't have the size property
=> Doesn't have keys, values, nor entries
=> Cannot use forEach()
*/
/*
! Search:
    - WeakSet use cases
*/