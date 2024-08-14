// In the name of Allah

let element = document.getElementById("my-div")

console.log(element.classList)

element.onclick = function () {
    element.classList.toggle("test")
}

/* DOM [Class List]
    classList
        - length
        - .contains()
        - .item()
        - .add()
        - .remove()
        - .toggle()
*/