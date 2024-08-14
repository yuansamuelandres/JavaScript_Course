// In the name of Allah

let span = document.querySelector(".two")

console.log(span.nextElementSibling)

span.onclick = function () {
    span.parentElement.style.opacity = '0'
}


let myP = document.querySelector("p").cloneNode(true)
let myDiv = document.getElementById("div")

myP.id = `${myP.id}-clone`

myDiv.appendChild(myP)

/* DOM [Traversing]:
    nextSibling
    nextElementSibling
    previousSibling
    previousElementSibling
    parentElement

DOM [Cloning]:
    cloneNode(deep)     Boolean Value
*/