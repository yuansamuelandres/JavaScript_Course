// In the name of Allah

/* Challenge 14: Destructing */
let chosen = 3
let myFriends = [
    {title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"]},
    {title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
    {title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"]}
]

if (chosen === 1) {
    let [{title: theName, age: theAge, available: x, skills:[, skill]}, , ] = myFriends
    console.log(theName)
    console.log(theAge)
    if (x === true) {
        console.log(`Available`)
    } else {
        console.log(`Not Available`)
    }
    console.log(skill)
} else if (chosen === 2) {
    let [, {title: theName, age: theAge, available: x, skills:[, skill]}, ] = myFriends
    console.log(theName)
    console.log(theAge)
    if (x === true) {
        console.log(`Available`)
    } else {
        console.log(`Not Available`)
    }
    console.log(skill)
} else {
    let [, , {title: theName, age: theAge, available: x, skills:[, skill]}] = myFriends
    console.log(theName)
    console.log(theAge)
    if (x === true) {
        console.log(`Available`)
    } else {
        console.log(`Not Available`)
    }
    console.log(skill)
}