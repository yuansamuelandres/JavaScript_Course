// In the name of Allah

let myVar = "The Country"
let user = {
    //Properties
    theName: "Yuan",
    age: 23,
    "The Country": "Egypt",

    //Methods
    ageInDays: function() {
        return this.age * 365.25 + `!`
    }
}
console.log(user.ageInDays())               //Dot Notation
console.log(user["The Country"])    //Bracket Notation
console.log(user.myVar)
console.log(user[myVar])

/* Object
    Dot Notation:
        - Not dynamic
    Bracket Notation:
        - Dynamic
    New Keyword: new Object(){}
    Create Method: Object.create({Proto Object})
    Assign Method: Object.assign({Target Object}, {Copied Objects})
*/
/*
! Search:
    - Strict Mode
*/