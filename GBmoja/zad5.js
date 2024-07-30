// Kreirati funkciju koja provjerava sastoji li se string samo od slova.
// console.log(isOnlyLetters('Hello')); // Output: true
// console.log(isOnlyLetters('Hello123')); // Output: false

function isOnlyLetters(strrring){
    regex = /^[a-zA-Z]+$/
    return regex.test(strrring)
}

console.log(isOnlyLetters('Hello')); // Output: true
console.log(isOnlyLetters('Hello123')); // Output: false
