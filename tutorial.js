// In the name of Allah

let access = true

if (access === false) {
    access = true
}
else if (access === null) {
    console.log("Acces denied.")
}
else {
    console.log("Access granted!")
}

access === false
    ? access = true : 
    access === null
    ? console.log("Acces denied.") :
    console.log("Access granted!")

/* if Condition:
    if (Condition) {
        true
    }
    else {
        false
    }

Conditional Ternary Operator:
    Condition ? if True : if False
*/