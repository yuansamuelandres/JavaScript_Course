// In the name of Allah

window.localStorage.setItem("color", "red")
window.sessionStorage.setItem("color", "blue")

document.querySelector(".name").onblur = function () {
    window.sessionStorage.setItem("input-name", this.value)
}

/* BOM [Session Storage]        Duplicate Tab = Copy Session
    setItem()
    getItem()
    removeItem()
    clear()
    key()
*/