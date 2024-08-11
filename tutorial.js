// In the name of Allah

function userName(name = "Unknown") {
    return `Hello, ${name}`
}
console.log(userName())

/* Functions:   DRY Concept
    function [Name](Parameter) {
        BLock of code
        return ...      interrupting the function
        unreachable code
    }
    Parameters:
        default => 
            logical Or
            condition
            ES6
        rest => ...Parameter        must be only one, and the last one
*/