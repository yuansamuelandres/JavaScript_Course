// In the name of Allah

/* Destructing Practise */
const user = {
    theName: "Yuan",
    theAge: 23,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        another: "Alexandria"
    }
}

const {theName: n,
    theAge: a, 
    skills: [one, , three], 
    addresses: {egypt: e}} = user 

console.log(n)