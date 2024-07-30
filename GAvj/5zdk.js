function numbers(str){
    // ^ - početak niza znakova
    // [0-9]+ - jedan ili više znakova koji moraju biti brojevi
    // $ - kraj niza znakova
    let regex = /^[0-9]+$/
    return str.match(regex) ? true : false
}

let str = "12377jhgf55g"
let str2 = "12345678"
console.log(numbers(str))
console.log(numbers(str2))