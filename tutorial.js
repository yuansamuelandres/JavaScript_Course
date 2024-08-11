// In the name of Allah

let nums = [10, 20, 15, 30]
let add = nums.reduce((a, c) => {
    return a + c
}, 5)
console.log(add)

/* Higher Order Functions:
    Reduce(callBackFunction (Accumulator, CurrentValue, CurrentIndex, SourceArray) {}
    , initialValue)
        Accumulator: accumulated value in the last invocation = Mandatory
        CurrentValue: current element being processed = Mandatory
        CurrentIndex = Optional
        SourceArray = Optional
*/