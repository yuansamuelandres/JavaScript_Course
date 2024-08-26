// In the name of Allah

window.localStorage.setItem("color", "red")
window.localStorage.fontWeight = "bold"
window.localStorage["fontSize"] = "20px"

console.log(window.localStorage.getItem("color"))
console.log(window.localStorage.color)
console.log(window.localStorage["color"])

console.log(window.localStorage.key(0))

document.body.style.backgroundColor = window.localStorage.color

/* BOM [Local Storage]
    setItem(Key, Value)
    getItem(Key)
    removeItem(Key)
    clear()
    key(Index)
*/