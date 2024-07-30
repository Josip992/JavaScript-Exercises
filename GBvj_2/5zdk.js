function isOnlyLetters(str){
    let regex = /^[a-zA-Z]+$/
    return str.match(regex) ? true : false
}

const str = "Hello"
const str2 = "Hello123"
console.log(isOnlyLetters(str))
console.log(isOnlyLetters(str2))