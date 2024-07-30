// Napravite currying funkciju koja zbraja tri broja, a poziv funkcije izgleda kao
// zbroji(2,3)(4).

function zbroji(a,b){
    return function(c){
        return a + b + c
    }
}

let rez = zbroji(2222,3)(4)

console.log(rez)