// In the name of Allah

/* DOM [Events] Practise */         //Validate Form
let userInput = document.querySelector("[name='username']")
let ageInput = document.querySelector("[name='age']")

document.forms[0].onsubmit = function (e) {
    let userValid = false
    let ageValid = false

    console.log(userInput.value.length)

    if (userInput.value !== 0 && userInput.value.length <=10) {
        userValid = true
    }
    if (ageInput !== "") {
        ageValid = true
    }

    if (userValid === false && ageValid === false) {
        e.preventDefault()
    }

    if (userValid === false || ageValid === false) {
        e.preventDefault()
    }
}

document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault()
}