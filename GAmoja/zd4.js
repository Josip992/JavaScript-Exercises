// Napravite funkciju koja provjerava nalaze li se u stringu samo brojevi
// koristeći se ternarnim operatorom.
// console.log(numbers("123456")); // Output: true
// console.log(numbers("1a2b3c")); // Output: false

function numbers(izraz){
    let regex = /^[0-9]+$/
    return regex.test(izraz) ? true : false

}

console.log(numbers("11s22s2000s")); // Output: true
console.log(numbers("123")); // Output: false