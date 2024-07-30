// Napiši program koji predstavlja bankovni račun. Svaki bankovni račun ima
// sljedeća svojstva: vlasnik računa (ime i prezime) i stanje na računu. Svaki
// bankovni račun ima metodu za uplatu novca na račun i metodu za podizanje
// novca s računa.(10)
//
// Neka atribut stanje bude privatan član, te ga postavite i dohvatite preko get
// i set metode ili preko Object property.(10)

function Bankovni_racun(ime,prezime,pocetno_stanje){
    this.ime = ime
    this.prezime = prezime
    let stanje = pocetno_stanje

    this.uplata =  function(cifra) {
        stanje+=cifra
    }
    this.podizanje = function(cifra){
        if((stanje-cifra)>0){
            stanje-=cifra
        }else{
            console.log(`Broke nigga`)
        }
        
    }
    this.getStanje = function(){
        return stanje
    }
    this.setStanje = function(novo_stanje){
        stanje = novo_stanje
    }
}

const R1 = new Bankovni_racun('Jozo','Bozo',10000000000)

R1.uplata(100000)//proda admars100k
R1.podizanje(250000000000000000000000)//mc20
let st = R1.getStanje();
console.log(`Stanje racuna iznosi ${st}`)

