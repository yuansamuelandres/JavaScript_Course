// In the name of Allah

let email = "O@@@...com O@g.net A@Y.com O-g.com o@s.org 1@1.com"
let dot = /./g
console.log(email.match(dot))

let word = /\w/g
console.log(email.match(word))

let valid = /\w@\w.(com|net)/g
console.log(email.match(valid))

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo"
let re = /(\bspam|spam\b)/ig
console.log(names.match(re))

console.log(re.test(names))

/* Regular Expression: Character Classes
    . => matches any character, except new lines or other line terminators
    \w => matches word characters [a-z, A-Z, 0-9, _]
    \W => matches non-word characters
    \d => matches digits from 0 to 9
    \D => matches non-digit characters
    \s => matches whitespace characters
    \S => matches non-whitespace characters
    \b => matches at the beginning/end of a word
    \B => matches NOT at the beginning/end of a word

    Test Method:
        pattern.test(input)
*/