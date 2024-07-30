function Osoba(ime, prezime){
    this.ime = ime
    this.prezime = prezime
    let god_rodenja

    this.greet = function(){
        console.log(`Veliki pozdrav ${this.ime} ${this.prezime}`)
    }

    this.setGodina = (godina) => {god_rodenja = godina}
    this.getGodina = () => god_rodenja

    this.broj_godina = () => 2023 - this.getGodina()
}

const o = new Osoba('Ante', 'Marković')
const o2 = new Osoba('Mario', 'Markovic')
o.greet()

o2.setGodina(2005)
console.log(`Osoba ${o2.ime} ${o2.prezime} ima ${o2.broj_godina()} godina`)