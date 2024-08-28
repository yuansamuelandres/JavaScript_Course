// In the name of Allah

const user = {
    nombre: "Yuan",
    age: 23,
    skills: {
        html: 60,
        css: 70
    }
}
show(user)
function show ({nombre: theName, age, skills: {css}} = user) {
    console.log(theName)
}

/* Destructing Function Parameters
*/