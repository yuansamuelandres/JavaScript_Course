// In the name of Allah

let myFriends = ["Yuan", "Muhammad", 5, "Samuel", "Andrea", 78]
let measure = ["Loyal", "Kind"]

mainloop: for (let i=0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "number") {
        continue mainloop;
    }
    console.log(myFriends[i])
    nestedloop: for (let j=0; j < measure.length; j++) {
        console.log(`- ` + measure[j])
    }
    console.log("#".repeat(15))
}

/* For loop:
    for ([1] [2] [3]) {
        Block of code
    }
    [1] initialization
    [2] condition
    [3] action after repeating the code

    break;      stops the loop
    continue;   exclude some value & override them
    label;      controls the main loop from a subloop
*/