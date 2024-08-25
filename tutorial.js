// In the name of Allah

let counter = setTimeout(user, 2000)
function user (){
    console.log("Hello")
}
clearTimeout(counter)


let div = document.querySelector("div")
function countDown () {
    div.innerHTML -= 1
    if (div.innerHTML === "0") {
        clearInterval(count)
    }
}

let count = setInterval(countDown, 1000);
/* BOM 
    alert(message)
    confirm(message)        returns a boolean value
    prompt(message, defaultMessage)

    setTimeout(Function, Timeout, additional parameters "of the function")
    clearTimeout(Identifier)

    setInterval(Function, Timeout, additional parameters)
    clearInterval(Identifier)
*/