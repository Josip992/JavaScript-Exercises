
// 1. Kreirati niz koji će sadržavati deset slučajno generiranih brojeva u
// intervalu od 100 do 200, zaokruženih na najbliži cijeli broj. Sortirati
// elemente niza od manjeg prema većem funkcijom sort(). Obratiti
// pozornost kod sortiranja numeričkih i tekstualnih elemenata.

function funkcija(){
    const array = Array(10) 
				.fill()
                .map(() => Math.floor(Math.random() * (200 - 100 + 1)) + 100); 

console.log(array);

array.sort((a,b)=>b-a);

console.log(array);
}

funkcija();

// 2. Omogućiti unos brojeva dok se ne unese 0. Zbrojiti parne i neparne
// brojeve koristeći se closure funkcijom arrow zapisa. Zabranjeno je
// koristiti nizove.

// function fja(){
//     const zbroj = () =>
//     parniZbr = 0;
//     neparniZbr = 0;
//     const unesiBr = () =>{
//         const broj = prompt('Unesi broj: ');
//     }
//     if (broj == 0){
//         console.log('Zbroj parnih brojeva je: $(parniZbr)');  
//         console.log('Zbroj neparnih brojeva je: $(neparniZbr)');

//     }else if (broj % 2 == 0){
//         parniZbr = parniZbr + broj;
//         unesiBr();
//     }else if(broj % 2 == 1){
//         neparniZbr = neparniZbr + broj;
//         unesiBr();
//     }
// };

// fja();


// 3. Kreirati closure funkciju koja vraća poruku „Programirati nije teško“.

function closureFja() {
    var uzrecica = "Programirati nije teško"; // name is a local variable created by closureFja
    function prikaz() {
      console.log(uzrecica); //use variable declared in the parent function
    }
    prikaz();
  }
closureFja();
  
// 4. Prepiši programski k𝑜̂d i objasni što se događa.

function sum(a){
    return (b, c) => {
    return a * b * c
    }
}
    let x = sum(10);
    console.log(x(3,12));
    // ili
    console.log(sum(10)(3,12));


// 5. Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije s
// promjenjivim brojem argumenata u formatu (a)(b)(c)… koja bi trebala
// vratiti umnožak pozitivnih brojeva manjih od 20.

// function peti(a){
//     return (a) => {
//         if(a>0 && a<20){
//             console.log(a);
//         }
//     }
//     return (b) =>{
//             if((a>0 && a<20) && (b>0 && b<20)){
//                 console.log(a*b);
//             }
//     }
   
//     return (c) =>{
//         if((a>0 && a<20 ) && (b>0 && b<20) && (c>0 && c<20)){
//             console.log(a*b*c);
//         }
//     }
// }
// peti(10)(5)(20);





    // function peti(){
    //     let umnozak = (a) => (b) => (c) => {
    //     let product = 1;
    //     if (a > 0 && a < 20) product *= a;
    //     if (b > 0 && b < 20) product *= b;
    //     if (c > 0 && c < 20) product *= c;
        
    //     return product ;
    //     };
    //     console.log(umnozak(5)(4)(25))
    // }
    // peti();








    //mnozi tri broja, prima samo jedan argument, a ostala dva prima preko druge funkcije