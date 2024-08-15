// In the name of Allah

let myP = document.querySelector("p")

myP.addEventListener("click", function () {
    console.log("Event 1")
    console.log("Event 2")

    let newP = myP.cloneNode(true)
    newP.className = "p-clone"
    document.body.appendChild(newP)
})

let cloned = document.querySelector(".p-clone")
document.addEventListener("click", function (e) {
    if (e.target.className === "p-clone") {
        console.log("I am cloned")
    }
})

/* DOM [Add Event Listener]:
    addEventListener(,)
        - attach multiple events
        - type the event's name without 'on' prefix
        - error test

        - enable you to put an event on an element that 
        doesn't yet exist in the page
*/