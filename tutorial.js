// In the name of Allah

let myFreinds = ["Yuan", "Samuel", "Joel"]
let [a, b, , c = "Andrew"] = myFreinds      // Destructing
console.log(a)
console.log(b)
console.log(c)

let frinds = ["Ahmed", "Sayed", "Ali"
    , ["Shady", "Amr", ["Mohamed", "Gamal"]]]
let [, , , [d, , [, e]]] = frinds
console.log(d)
console.log(e)

let book = "Video"
let video = "Book";
// let x = book                 // old way of swapping
// book = video
// video = x
// console.log(book)
// console.log(video)

[book, video] = [video, book]   // new way of swapping
console.log(book)
console.log(video)

/* Destructing Arrays 
Destructing = extracting data from arrays, objects, and maps 
& setting them into new variables
*/