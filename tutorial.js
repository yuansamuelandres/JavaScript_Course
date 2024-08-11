// In the name of Allah

/* Challenge 10: Arrow Function */
let names = (...name) => {
    return `String ` + `[` + name.join("], [") + `] => Done !`
}
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"))

let myNumbers = [20, 50, 10, 60]
let calc = function (one, two, ...nums) {
    return one + two + nums[Number(false)]
}
console.log(calc(10, myNumbers[Number(false)], myNumbers[Number(true)]))