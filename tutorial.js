// In the name of Allah

let print = () => 10
console.log(print())

var a = 1
// let b = 2

function showText() {
    var a = 10          //var overrides the local scope
    let b = 2
    console.log(`From Global/function local ${a}`)
    console.log(`From function local ${b}`)
}

showText()
console.log(`From Global ${a}`)
console.log(`From Global ${b}`)

/* Anonymous Function:
    can't be used before declaration

Arrow Function: 
    Only one line in the block of code

Scope:
    Global                      var
    Local                       var
    Block [if, switch, for]     let
    Lexical                     nested functions
*/
/*
! Search:
    - Execution Context
    - Lexical Environment
*/