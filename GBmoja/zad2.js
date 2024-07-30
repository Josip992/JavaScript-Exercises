// Napišite closure funkciju koja prima početni broj i vraća drugu funkciju koja povećava
// taj broj za n. Primjer poziva funkcije je:
// const add = addN(3);
// console.log(add(5)); // Izlaz: 8

function addN(x){
    return function(y){
        return x+y
    }
}

const add = addN(3);
console.log(add(5)); // Izlaz: 8