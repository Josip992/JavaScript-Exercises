// function isOnlyLetters(str){
//     let regex = /^[a-zA-Z]+$/
//     return str.match(regex) ? true : false
// }

function isLettersOnly(str) {
    return /^[a-zA-Z]+$/.test(str);
}

const str = "Hello"
const str2 = "Hello123"
console.log(isLettersOnly(str))
console.log(isLettersOnly(str2))

// const str = "Hello"
// const str2 = "Hello123"
// console.log(isOnlyLetters(str))
// console.log(isOnlyLetters(str2))