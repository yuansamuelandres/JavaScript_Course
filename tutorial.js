// In the name of Allah

/* Challenge 8: Loops */
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"]

let member = 1
let admins = myAdmins.length
for (let i=0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break
    }
    admins = i + 1
}
document.write(`<div>We have ${admins} Admins</div><hr>`)

mainloop: for (let j=0; j < myAdmins.length; j++) {
    if (myAdmins[j] === "Stop") {
        break
    }
    document.write(`<div>`)
    document.write(`The Admin For Team ${j+1} Is ${myAdmins[j]}`)
    document.write(`<h3>Team Members: </h3>`)
    inside: for (let k=0; k < myEmployees.length; k++) {
        if (myEmployees[k].startsWith(myAdmins[j].charAt(0))) {
            document.write(`<p>- ${member} ${myEmployees[k]}</p>`)
            member++
        }
    }
    member = 1
    document.write(`</div>`)
    document.write(`<hr>`)
}