// In the name of Allah

/* Challenge 9: Random Arguments Function */

function showDetails(a, b, c) {
    let name, age, availability, choice
    typeof a === "string" ? name = a :
        typeof b === "string" ? name = b :
        name = c
    typeof a === "number" ? age = a :
        typeof b === "number" ? age = b :
        age = c
    typeof a === "boolean" ? availability = a :
        typeof b === "boolean" ? availability = b :
        availability = c
    availability === true ? choice = "Are" : choice = "Are Not"
    console.log(`Hello ${name}, Your Age Is ${age}, You ${choice} Available For Hire`)
}

showDetails("Osama", 38, true)
showDetails(38, "Osama", true)
showDetails(true, 38, "Osama")
showDetails(false, "Osama", 38)