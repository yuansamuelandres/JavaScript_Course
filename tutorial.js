// In the name of Allah

console.log(location.protocol)
// location.href = "/#sec02"

setTimeout(function () {
    window.open("https://google.com", "_blank",
        "width=500, height=500, left=50, top=100", true)
}, 2000)

/*BOM [location Object]
    href
    host
    hostname
    hash
    protocol
    reload()
    replace()       removes the current page from the session history
    assign()        doesn't remove the page from the session history

    close()         only closes the window opened by JavaScript
    open(URL, WindowName or Target, Features, History?)
*/
/*
! Search:
    - window.open
    - window Features
*/