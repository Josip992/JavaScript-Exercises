// Napišite klasu ili konstruktor funkciju Osoba koja ima atribute ime, prezime i
// god_rodenja, a atribut god_rodenja trebao bi biti privatan. Potrebno je kreirati
// metodu greet() koja ispisuje podatke osobe (ime i prezime). Kreirati dva objekta koja
// primaju ime, prezime i pozvati metodu greet().
// Kreirati metode set i get kako bi postavili i dohvatili god_rodenja. Zatim napisati
// arrow metodu koja vraća koliko osoba ima godina s obzirom na godinu rođenja.

function Osoba(ime,prezime){
    this.ime=ime
    this.prezime=prezime
    let god_rod

    this.greet = function(){
        console.log(`Pozdrav ${this.ime} ${this.prezime}`)
    }
    this.set=function(nova_god_rodenja){
        this.god_rod = nova_god_rodenja
    }
    this.get = function(){
        return this.god_rod
    }
}

const O1= new Osoba('ivo','ivic')
O1.greet()
O1.set(2000)
console.log(O1.get())


const O2= new Osoba('soka','SOKIC',1911)
O2.greet()

