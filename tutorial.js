// In the name of Allah

/* Challenge 13: BOM */
let input = document.querySelector(".input")
let submit = document.querySelector(".add")
let tasksDiv = document.querySelector(".tasks")

let arrayOfTasks = []
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}

getDataFromLocalStorage()

document.onload = input.focus()

submit.onclick = function () {
    if (input.value != "") {
        addTaskToArray(input.value)
        input.value = ""
    }
}
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        console.log(e.target.parentElement.getAttribute("task-id"))
        deleteTaskWith(e.target.parentElement.getAttribute("task-id"))
        e.target.parentElement.remove()
    }
})

// Functions
function addTaskToArray (t) {
    const task = {
        id: Date.now(),
        title: t
    }
    arrayOfTasks.push(task)
    addElementsToPageFrom(arrayOfTasks)
    addDataToLocalStorageFrom(arrayOfTasks)
}

function addElementsToPageFrom (a) {
    tasksDiv.innerHTML = ""
    a.forEach((task) => {
        let tasks = document.createElement("div")
        tasks.className = "task"
        tasks.setAttribute("task-id", task.id)
        tasks.appendChild(document.createTextNode(task.title))
        let Delete = document.createElement("button")
        Delete.className = "delete"
        Delete.appendChild(document.createTextNode("Delete"))
        tasks.appendChild(Delete)
        tasksDiv.appendChild(tasks)
    })
}

function addDataToLocalStorageFrom (a) {
    window.localStorage.setItem("tasks", JSON.stringify(a))
}

function getDataFromLocalStorage() {
    let data = localStorage.getItem("tasks")
    if (data) {
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        addElementsToPageFrom(tasks)
    }
}

function deleteTaskWith (id) {
    arrayOfTasks = arrayOfTasks.filter((task) =>
    task.id != id)
    addDataToLocalStorageFrom(arrayOfTasks)
}