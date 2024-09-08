// In the name of Allah

let tld = "com net org info code io"
let tldRe = /(org|info|io)/ig
console.log(tld.match(tldRe))

let nums = "12345678910"
let numsRe = /([0-9])/g
console.log(nums.match(numsRe))

let notNums = "12345678910"
let notNumsRe = /([^0-9])/g
console.log(notNums.match(notNumsRe))

let practice = "os1 os1os os2 os8 os8os"
let practiceRe = /(os[5-9]os)/g
console.log(practice.match(practiceRe))

let myString = "AaBbcdefG123!234%^&*"
let atozSmall = /[a-z]/g
console.log(myString.match(atozSmall))

let notletters = /[a-zA-Z]/g
console.log(myString.match(notletters))

/* Regular Expression: Ranges
    (X|Y) => X or Y
    [0-9] => 0 to 9     
    [^0-9] 
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]
*/