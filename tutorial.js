// In the name of Allah

/* Challenge 12: DOM */
// Header
let header = document.createElement("div")
header.className = "my-header"

let logo = document.createElement("div")
logo.className = "logo"
let logoText = document.createTextNode("Elzero")

let ulMenu = document.createElement("ul")
ulMenu.className = "menu"
let ulLi1 = document.createElement("li")
let ulLi2 = document.createElement("li")
let ulLi3 = document.createElement("li")
let ulLi4 = document.createElement("li")
let Lis = [ulLi1, ulLi2, ulLi3, ulLi4]
let li1 = document.createTextNode("Home")
let li2 = document.createTextNode("About")
let li3 = document.createTextNode("Service")
let li4 = document.createTextNode("Contact")

logo.appendChild(logoText)

header.appendChild(logo)

ulLi1.appendChild(li1)
ulLi2.appendChild(li2)
ulLi3.appendChild(li3)
ulLi4.appendChild(li4)

ulMenu.appendChild(ulLi1)
ulMenu.appendChild(ulLi2)
ulMenu.appendChild(ulLi3)
ulMenu.appendChild(ulLi4)

header.appendChild(ulMenu)

document.body.appendChild(header)

document.body.style.fontFamily = "'Poppins', sans-serif"
document.body.style.margin = 0

header.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: 1rem;
    height: 7.5vh;`

logo.style.cssText = `
    color: green;
    font-weight: bolder;`

ulMenu.style.cssText = `
    margin-block: 0;
    list-style-type: none;
    display: inline-flex;
    color: grey;`

Lis.map(e => {
    e.style.cssText = `padding-inline: 0.25rem;`
})
////////////////////////////////////////////////////////////////
// Content
let content = document.createElement("div")
content.className = "content"

for (let i=1; i<=15; i++){
    let product = document.createElement("div")
    product.className = "product"
    let productText = document.createTextNode("Product")

    let span = document.createElement("span")
    let spanText = document.createTextNode(`${i}`)

    span.appendChild(spanText)
    product.appendChild(span)
    product.appendChild(productText)
    content.appendChild(product)

    product.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.35rem;
        background-color: white;
        color: grey;`

    span.style.cssText = `
        font-weight: bolder;
        font-size: 30px;
        color: black;`
}

document.body.appendChild(content)

content.style.cssText = `
    max-width: 100%;
    height: calc(85vh - 2rem);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    border: 1rem solid grey;
    background-color: grey;`
////////////////////////////////////////////////////////////////
// Footer
let footer = document.createElement("footer")
footer.className = "footer"
let footerText = document.createTextNode("Copyright 2021")

footer.appendChild(footerText)

document.body.appendChild(footer)

footer.style.cssText = `
    // max-width: 100%;
    height: 7.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;`