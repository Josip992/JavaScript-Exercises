function addN(x){
    return function(y){
        return x + y
    }
}

const add = addN(3);
console.log(add(5)); // Izlaz: 8
