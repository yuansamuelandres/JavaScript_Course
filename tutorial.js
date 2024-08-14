// In the name of Allah

let element = document.getElementById("my-div")

element.style.color = "red"
element.style.fontWeight = "bold"
element.style.cssText = "color: green;"

element.style.removeProperty("color")
element.style.setProperty("font-size", "40px", "important")

document.styleSheets[0].rules[0].style.removeProperty("line-height")

/* DON [CSS]:
    - .style
    - .cssText
    - .removeProperty()
    - .setProperty(,)
*/