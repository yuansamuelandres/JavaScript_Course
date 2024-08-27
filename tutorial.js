// In the name of Allah

const user = {
    theName: "Yuan",
    theAge: 23,
    theTitle: "Programmer",
    theCountry: "Egypt",
    skills: {
        html: 70,
        css: 80,
    },
}
let theName = user.theName
let theAge = user.theAge
let theTitle = user.theTitle
let theCountry = user.theCountry;
({theName: n, theTitle, theCountry,
    theColor = "Black", skills: {html}} = user)
console.log(n)
console.log(theAge)
console.log(html)

/* Destructing Objects 
*/