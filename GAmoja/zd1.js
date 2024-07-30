// Napravite closure funkciju koja uvećava ulazni parametar za jedan.

// function zd1(broj){
//     broj++
//     return broj
// }

// let broj = 15

// let uv_br = zd1(broj)

// console.log(`Originalni broj je ${broj}, a uvecan je ${uv_br}`)

// Povratnu vrijednost funkcije zapišite u obliku arrow funkcije.

let zd1 = (broj)=>{
    broj++;
    return broj;
};

let broj = 15;

novi_br = zd1(broj);

console.log(`Originalni broj je ${broj}, a uvecan je ${novi_br}`);