// In the name of Allah

let element = document.getElementById("my-div")
let createdP = document.createElement("p")

element.before("Hello from JS file")
// element.after(createdP)
element.append("Hello from JS file")
element.prepend(createdP)

element.remove()


/* DOM [Deal with Elements]:
    before [Element || String]
    after [Element || String]
    append [Element || String]
    prepend [Element || String]
    remove()
*/