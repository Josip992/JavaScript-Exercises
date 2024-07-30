// 1. Kreirajte proizvoljan numerički niz te koristeći se ugrađenim funkcijama za
// nizove napravite sljedeće zadatke:
// • dodaj element na početak niza --1
// • dodaj element na kraj niza --2
// • dodaj element na predzadnje mjesto niza --3 
// • izbriši drugi element niza --4
// • izbriši zadnji element niza --5 
// • izmijeni drugi element --6 
// • zbroji sve elemente niza --7 
// • ispiši sve elemente niza koristeći se FOR petljom --8

const numNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
numNiz.unshift = "876";                         //dodaj na pocetak
numNiz.push("231");                            //dodaj na kraj
numNiz.splice((numNiz.length)-1, 0, "1515");     //dodaj na predzadnje mjesto 
numNiz.splice(1, 1);                             //izbrisi drugi element niza
numNiz.splice((numNiz.lenght)-1, 1);             //izbrisi zadnji element niza
numNiz[1] = "1253";             //izmjeni drugi element

var sum = 0;

for (var i = 0; i < numNiz.length; i++) {  //zbroji el niza
  sum += numNiz[i];
}

console.log(sum);                

for (let i = 0; i < numNiz.length; i++) {  //ispisi sve el niza !FOR! petljom
    console.log(numNiz[i], '\n'); 
}

// 2. Kreiraj niz objekata koji predstavlja trgovinu s atributima:
// naziv_proizvoda,
// godina_proizvodnje, cijena, količina i popust. Ispiši nazive artikla koji imaju cijenu
// manju od 50 koristeći se funkcijom filter().

const trgovina =[ 
    {naziv_proizvoda:"banana", cijena:100000, kolicina:2, popust:0.2}, 
    {naziv_proizvoda:"krastavac", cijena:252, kolicina:1, popust:0.2}, 
    {naziv_proizvoda:"ananas", cijena:30, kolicina:1, popust:0.2}, 
    {naziv_proizvoda:"paprika", cijena:15, kolicina:2, popust:0.2}, 
]

const filtriraniNiz = trgovina.filter(trgovina => trgovina.cijena < 50);
console.log(filtriraniNiz);

// 3. U nizu trgovina iz prethodnog zadatka prebroj količinu artikala koristeći se
// funkcijom reduce().

let suma = 0;

sum = trgovina.reduce((suma, proizvod) => suma + proizvod.kolicina, 0); //procui ovo proizvod malo
  
console.log(sum);

// 4. U nizu trgovina ispiši nazive trgovina koristeći se funkcijom map().

let nazivi_trgovina = trgovina.map(trgovina => trgovina.naziv_proizvoda);

console.log("Nazivi trgovina: ", nazivi_trgovina);


// 5. Koristeći se arrow funkcijama i ternarnim operatorom (po potrebi) kreiraj
// funkciju koja:
// • provjerava je li broj pozitivan ili negativan, vraća true(1) ili false(0).
// • provjerava parnost broja, vraća „Pozitivan“ ili „Negativan“
// • računa kub broja
// • ispisuje poruku „Hello Wordl!“

function peti(){
    let pozitivan = (a) => a>=0;
    let paran = (a) => (a%2==0) ? "Paran" : "Neparan";
    let kubni = (a) => a*a*a;
    let pozdrav = (a) => a;

    console.log(pozitivan(-1))
    console.log(paran(-1))
    console.log(kubni(2))
    console.log(pozdrav("Hello World"))
}

peti();

