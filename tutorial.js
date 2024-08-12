// In the name of Allah

/* DOM [Create & Append Elements Practise] */
for (let i=1; i<=100; i++) {
    let myMainElement = document.createElement("div")
    let mySubElement = document.createElement("div")
    let myHeading = document.createElement("h2")
    let myHeadingText = document.createTextNode(`Product Title ${i}`)
    let myParagraph = document.createElement("p")
    let myParagraphText = document.createTextNode("Product Description")
    let seperator = document.createElement("hr") 
    
    myMainElement.className = "main-products"
    mySubElement.className = `product ${i}`
    
    myHeading.appendChild(myHeadingText)
    mySubElement.appendChild(myHeading)
    
    myParagraph.appendChild(myParagraphText)
    mySubElement.appendChild(myParagraph)
    
    myMainElement.appendChild(mySubElement)

    document.body.appendChild(myMainElement)
    document.body.appendChild(seperator)
    console.log(myMainElement)
}