
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
  ////////////////////////////////////////////////////////////////
//   let myLink = document.querySelector('#myLink');
// myLink.href = 'https://www.example.com';
// --------------------------------------------------
// <div onmouseover="mOver(this)" onmouseout="mOut(this)" 
// style="width:120px;height:20px;padding:40px;">
// Mouse Over Me</div>

// <script>
// function mOver(obj) {
//   obj.innerHTML = "Thank You"
// }

// function mOut(obj) {
//   obj.innerHTML = "Mouse Over Me"
// }
// </script>

// -------------------------------------------------------

// <h2 onclick="this.innerHTML='Ooops!'">Click on this text!</h2>

// ----------------------------------------------------------

// <script>
// function mymessage() {
//   alert("This message was triggered from the onload event");
// }
// </script>
// <body onload="mymessage()">
// </body>

// -----------------------------------------------------

// window.onload = function() {
//     document.body.style.backgroundColor = "red";
//   };
// ----------------------------------------------------------------

// document.getElementById("demo").innerHTML= "Hello";

// document.getElementsByTagName("p")[0].innerHTML= "Hello";


// document.getElementsByClassName("test")[0].innerHTML= "Hello";

// document.getElementById("image").src = "pic_mountain.jpg";

// document.getElementById("myText").value = "Have a nice day!";

// document.getElementById("demo").style.color = "red";

// document.getElementById("demo").style.fontSize = "40px";



// function promijeniPozadinu(){
//     document.body.style.backgroundColor = "red"
// }

// let p = document.getElementsByTagName('p')
// for( i = 0; i < p.length; i++){
//     p[i].style.fontSize = "50px"
// }

////////////////////////////////////////////////////////////
// function opsegTrokuta(a,b,c){
//     return new Promise(function(resolve, reject){
//         if(typeof a  == 'number' && typeof b == 'number' && typeof c == 'number'){
//             resolve(a+b+c)
//         }else{
//             reject("Greska")
//         }
//     })
// }

// opsegTrokuta(12,3,5)
// .then(function(opseg){
//     console.log(opseg)
// })
// .catch(function(greska){
//     console.log(greska)
// })

// ---------------------------------------------------
// function getData(callback) {
//     setTimeout(function () {
//       const data = { message: "Ovo su podaci" };
//       callback(data);
//     }, 4000);
//   }
//   function processData(data) {
//     console.log("Obrada podataka:", data.message);
//   }
//   getData(processData);
//   console.log("Nastavak izvršavanja");
//   --------------------------------------------------------------

//   function calculateSum(a, b) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         var sum = a + b;
//         resolve(sum);
//       }, 5000);
//     });
//   }
  
//   async function calculateAndPrintSum(a, b) {
//     try {
//       var result = await calculateSum(a, b);
//       console.log(`Zbroj brojeva ${a} i ${b} je ${result}`);
//     } catch (error) {
//       console.error("Pogreska", error);
//     }
//   }