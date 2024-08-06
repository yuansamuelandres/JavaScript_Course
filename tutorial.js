// In the name of Allah

let myFriends = ["Yuan", "Samuel", "Andrea"], myCats = ["Mizo", "Ceres"]
myFriends[2] = "Andrew"
console.log(myFriends.length)
console.log(typeof myFriends)   //object
console.log(Array.isArray(myFriends))

myFriends[myFriends.length] = "Ahmed"
console.log(myFriends)

myFriends.unshift("Muhammad")
myFriends.push("Hesham")
myFriends.shift()
myFriends.pop()

console.log(myFriends.indexOf("Muhammad"))      // -1 = Not Found

myFriends.splice(myFriends.length, 0, "Muhammad")
console.log(myFriends)

let allFriends = myFriends.concat(myCats, "Memorias")
console.log(allFriends.join(" | "))     // convert the array to a string

/* Arrays & Array Methods:
    - length
    - unshift = add elements to the start
    - push = add elements to the end
    - shift = remove the first element
    - pop = remove the last element
    - indexOf( , )
    - lastIndexOf( , )
    - includes( , )
    - sort() 
    - reverse()
    - slice( , ): returns a new array
    - splice(Start [Mandatory], DeleteCount [Optional], Items to add [Optional])
    - concat()
    - join(Separator)
*/