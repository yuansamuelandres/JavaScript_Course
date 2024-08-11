// In the name of Allah

let myNums = [1, 2, 3, 4, 5, 6]
let newArray = []

let addSelf = myNums.map((element) => {
    return element + element
})
console.log(addSelf)

/* Higher Order Functions:
    Map(callBackFunction(Element, Index, Array){}, thisArgument){}      returns a new array
        Element = Mandatory
        Index = Optional
        Array = Optional
        thisArgument = Optional
*/