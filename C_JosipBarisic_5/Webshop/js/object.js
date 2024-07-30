// 1. Napisanu funkciju
// ocjena(k1, k2, sem) zapiši kao:
// function ocjena(k1, k2, sem){
//  //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
//  return k1*0.42 + k2*0.42 + sem*0.16
//  }
//  console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`)

// - arrow funkciju s pozivom
// ocjena_arrow(50, 80, 80),

 const multiplyA = (k1, k2, sem) => { return (k1*0.42)*(k2*0.42)*(sem*0.16)};
 console.log(`Postotak ostvaren na kolegiju ${multiplyA(50, 80, 80)} `);

// - currying funkciju s pozivom
// ocjena_currying(50)(80)(80).

 function multiplyC(k1) {
  return (k2) => {
      return (sem) => {
       return (k1*0.42)*(k2*0.42)*(sem*0.16)
      }
  }
}
console.log(`Postotak ostvaren na kolegiju ${multiplyC(50, 80, 80)} `); 

// 2. Napisati zasebno arrow i currying funkciju koja će ispisivati poruku o
// ostvarenom rezultatu iz ispita iz određenog kolegija.
// Prva vrijednost koja se šalje funkciji je naziv kolegija, druga ostvareni broj
// bodova, a treća ukupan broj bodova.
// Primjer poziva funkcije rezultat je rezultat("PWKS")(25)(35), a primjer ispisa
// pozvane funkcije „
// Iz kolegija PWKS ostvarili ste 71.43% „. Koristiti metodu
// toFixed objekta Number za zaokruživanje rezultata na dva decimalna mjesta.


//currying
function rezultatC(nazivKolegija){
 return (ostvareniBroj) => {
     return (ukupanBroj) => {
      console.log(`Postotak na kolegiju ${nazivKolegija} je ${(ostvareniBroj/ukupanBroj).toFixed(2) }`)
      //return nazivKolegija + (ostvareniBroj/ukupanBroj).toFixed(2) 	
     }
  }
}

rezultatC("PWKS")(25)(35);

//arrow
/* const rezultatA = (nazivKolegija, ukupanBroj, ostvareniBroj) => { console.log(`Postotak na kolegiju ${nazivKolegija} je ${(ostvareniBroj/ukupanBroj).toFixed(2) }`) };
console.log(`Postotak ostvaren na kolegiju ${rezultatA("PWKS")(25)(35)} `); */

// 3. Napisati currying funkciju koja množi brojeve sa zadnjom parnom znamenkom.
// Za funkciju s pozivom mnozi(2)(5)(13)(10)(14)(177)(4)(0)() ispisuje se rezultat
// 1120.

let umnozakC = a => b => {
 if(b == undefined){
   return a;
 }
 else if (b == 0) {
   return umnozakC(a);
 }
 else if((b%10) % 2 == 0){
  return umnozakC(a*b);
 }
 else{
  return umnozakC(a);
 }
}

console.log(`Postotak ostvaren na kolegiju ${umnozakC(2)(5)(13)(10)(14)(177)(4)(0)()} `);

// 4. Kreiraj konstruktor Kolegij s atributima (property)
// godina, semestar, kol1,
// kol2, ocjena_rez i dvije metode
// ocjena() i
// info().
// Funkcija ocjena() ispisuje postotak riješenosti => kol1*0.5 + kol2*0.5.
// Funkcija info() ispisuje poruku „
// Student na predmetu PWKS, {godina}. godina,
// {semestar}. semestar, ostvario je {ocjena_rez}%“.
// Kreirati dva objekta i postaviti vrijednosti pomoću konstruktora. Pozvati
// funkcije
// ocjena() i
// info() u oba objekta.


function Kolegij(godina, semestar, kol1, kol2, ime, prezime, status) {
 this.ime = ime;
 this.prezime = prezime;
 this.status = status;
 this.godina = godina;
 this.semestar = semestar;
 this.kol1 = kol1;
 this.kol2 = kol2;
 this.ocjena_rez = (this.kol1*0.5) + (this.kol2*0.5);
 this.ocjena = function() {
  console.log( ((this.kol1*0.5) + (this.kol2*0.5)));
 }
 this.info = function(){
  console.log( "Student na predmetu PWKS, " + " " + this.godina + " " + this.semestar +" "+ "ostvario je"  +" "+ this.ocjena_rez + "%")
 }
 this.poruka = function(){
  console.log( "Ime studenta je " + " " + this.ime + " " + this.prezime +" "+ "status je"  +" "+ this.status)
 }
}

let student1 = new Kolegij(2, 4, 50, 33, "Ante", "Antic", "ziv");
let student2 = new Kolegij(2, 4, 48, 25,"Josip", "Josipovic", "rip");

student1.ocjena();
student2.ocjena();
student1.info();
student2.info();

student1.poruka();
student2.poruka();

delete student1.ime;
delete student1.prezime;
delete student1.status;
delete student2.ime;
delete student2.prezime;
delete student2.status;