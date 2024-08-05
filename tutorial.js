// In the name of Allah

/* Challenge 5: if Condition */
let a = 10
a < 10 ? console.log(10) :
a>= 10 && a<= 40 ? console.log("10 To 40") :
a > 40 ? console.log("> 40") :
console.log("Unknown")

let st = "Elzero Web School"
if ((st.length * 2).toString() === "34") {
    console.log("Good")
}

if (st.slice(st.indexOf('W')-1, st.indexOf('W')+1).trim().toLowerCase() === "w") {
    console.log("Good")
}

if (st !== "string") {
    console.log("Good")
}

if (typeof st.length === "number") {
    console.log("Good")
}

if (st.slice(st.indexOf('E'),st.indexOf('o')+1).repeat(2) === "ElzeroElzero") {
    console.log("Good")
}