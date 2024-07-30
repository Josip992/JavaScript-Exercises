// //prototip objekta

// function Banka(pocetniIznos){
//     this.iznos = pocetniIznos;
// }

// Banka.prototype.getBalance = function(){
//     return this.iznos;
// }
// Banka.prototype.deposit = function(depozit){
//     this.iznos += depozit;
// }
// Banka.prototype.withDraw = function(koliko){
//     if(this.iznos > koliko){
//         this.iznos -= koliko;
//     }else{
//         console.log(this.iznos)
//     }
// }

// const B1 = new Banka(100000);

// console.log(`Iznos na racunu je ${B1.getBalance()}`);

// B1.deposit(50000);

// console.log(`Iznos na racunu je ${B1.getBalance()}`);

// B1.withDraw(20000);

// console.log(`Iznos na racunu je ${B1.getBalance()}`);


// function Kamata(iznos,kamata){
//     Banka.call(this,iznos);
//     this.kamata = kamata;
// }

// Kamata.prototype = Object.create(Banka.prototype);
// Kamata.prototype.constructor = Banka;

// Kamata.prototype.iznosKamata = function(kamataN){
//     this.iznos += this.iznos * (kamataN / 100);
//     return this.iznos;
// }

// const K1 = new Kamata(1000,0.5);

// console.log(`Iznos na racunu je ${K1.getBalance()}`);

// console.log(`Iznos na racunu je ${K1.iznosKamata(0.0005)}`);

// ------------------------------------------------------------------


// class Banka{
//     constructor(iznos){
//         this.iznos = iznos;
//     }

//     getBalance(){
//         return this.iznos;
//     }
//     deposit(uplata){
//         var novi = this.iznos += uplata;
//         return novi;
//     }
//     withDraw(isplata){
//         if (this.iznos > isplata) {
//             this.iznos -= isplata;
//           } else {
//             console.log(this.iznos);
//           }
//     }
// }

// const B1 = new Banka(100000);
// console.log("Stanje racuna je " + B1.getBalance());
// console.log("Stanje racuna nakon uplate je " + B1.deposit(200));
// B1.withDraw(20);
// console.log("Stanje racuna nakon isplate je " + B1.getBalance());

// class Kamata extends Banka{
//     constructor(iznos,kamata){
//         super(iznos);
//         this.kamata = kamata;
//     }
//     getKamate(kamata) {
//         this.iznos += (this.iznos * kamata) / 100;
//         return this.iznos;
//     }
// }
  
  
// const K1 = new Kamata(100, 2.5);
// console.log("Stanje racuna je " + K1.getBalance());
// console.log("Stanje s kamatom je " + K1.getKamate(2.5));
  