// In the name of Allah

/* Functions Practise */
function showInfo(us="Un", ag="Un", rt=0, show="yes", ...sk) {
    document.write(`<div>`)
    document.write(`<h2>Welcome, ${us}</h2>`)
    document.write(`<p>Age: ${ag}`)
    document.write(`<p>Hour Rate: $${rt}`)
    if (show === "yes") {
        if (sk.length > 0) {
            document.write(`<p>${sk.join(" | ")}</p>`)
        }
        else {
            document.write(`<p>No skills</p>`)
        }
    }
    else {
        document.write(`<p>Skills are hidden</p>`)
    }
    document.write(`</div>`)
}
showInfo("Yuan", 23, 0, "no")