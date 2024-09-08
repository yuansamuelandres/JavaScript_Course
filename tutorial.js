// In the name of Allah

let invalidEmail = "yuan@@@gmail....com"
let validEmail = "yuan@gmail.com"

let myString = "Hello Elzero Web School I Love elzero"
let regex = /Elzero/ig

console.log(myString.match(regex))


/* Regular Expression:
    - Syntax => /pattern/
    - Modifiers => Flags
        i = case insensitive
        g = global
        m = multilines
    .match
        - matches a string againist a Regular Expression pattern
        - returns an array with the matches or null

    new RegExp("pattern", "modifier")
*/