// In the name of Allah

let allLis = document.querySelectorAll("ul li")
let allDivs = document.querySelectorAll(".content div")

allLis.forEach(function (e) {
    e.onclick = function () {
        allLis.forEach(function (e) {
            e.classList.remove("active")
        })
        this.classList.add("active")

        allDivs.forEach(function (e) {
            e.style.display = "none"
        })
    }
})


/* Higher Order Functions: ForEach + its Practise
    ForEach(callBackFunction (Element, Index, Array) {}, thisArgument)   
        doesn't return a new array
        doesn't change the elements of the array
*/