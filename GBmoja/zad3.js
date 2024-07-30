// Kreirati currying funkciju koja zbraja brojeve veće od 10.
// Unutarnju funkciju napisati kao arrow funkciju.
// Primjer poziva funkcije
// sum(1)(2)(20)(35)(4)(7)() // Izlaz 55
// sum(1)(2)(2)(3)(4)(7)()
// // Izlaz 0

// function sum(a) { //ne radi
//     // Check if a is a number greater than 10
//     if (a > 10 && !isNaN(a)) {
//       // Return a function that takes a new number b
//       return function(b) {
//         // Check if b is a number greater than 10
//         if (b > 10 && !isNaN(b)) {
//           // If both a and b are greater than 10, add them together
//           // by calling sum function recursively with the new sum as the argument
//           return sum(a + b);
//         } else {
//           // If b is not a number greater than 10, return the function itself
//           // to keep adding numbers greater than 10
//           return sum(a);
//         }
//       }
//     } else {
//       // If a is not a number greater than 10, return a function that always returns 0
//       return function() {
//         return 0;
//       }
//     }
//   }
// console.log(sum(1)(2)(20)(35)(4)(7)()) // Izlaz 55
// console.log(sum(1)(2)(2)(3)(4)(7)()) //izlaz 0

function sum(a){
    return function(b){
        if(b==undefined){
            return a<10?0:a
        }
            else if(a<10){
                return sum(b)
            }
            else if(b<10){
                    return sum(a)
                }
            else{
                return sum(a+b)
            }
            }
}
console.log(sum(1)(2)(20)(35)(4)(7)()) // Izlaz 55
console.log(sum(1)(2)(2)(3)(4)(7)()) //izlaz 0