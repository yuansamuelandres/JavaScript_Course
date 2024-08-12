// In the name of Allah

let myElement = document.createElement("div")
let myAttribute = document.createAttribute("data-custom")
let myText = document.createTextNode("Product One")
let myComment = document.createComment("This is a comment")

myElement.className = "product"
myElement.setAttributeNode(myAttribute)
myElement.setAttribute("data-test", "Testing")

myElement.appendChild(myComment)

myElement.appendChild(myText)

document.body.appendChild(myElement)

/* DOM [Create & Append Elements]:
    .createElement()
    .createAttribute()
    .setAttributeNode()
    .setTextNode()
    .appendChild()
*/