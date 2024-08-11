// In the name of Allah

let friends = ["Yuan", "Samuel", "Andrew"]
let filteredFriends = friends.filter(function (e) {
    return e.startsWith('A') 
})
console.log(filteredFriends)

/* Higher Order Functions:
    Filter(callBackFunction (Element, Index, Array) {}, thisArgument)
        returns a new array after passing a test (condition)
*/