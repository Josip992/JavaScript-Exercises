function Banka(ime, prezime, stanje){
    this.ime = ime
    this.prezime = prezime
    let stanje = stanje

    this.uplata = function(novac){
        stanje += novac
    }
    this.ispala = function(novac){
        stanje -= novac
    }
    Object.defineProperty(this, 'stanje', {
        get: function(){
            return stanje
        },
        set: function(stanje){
            stanje = stanje
        }
    })

}

const racun = new Banka('Anka', 'Marovic', 580)
racun.uplata(200)
console.log(`Stanje racuna je ${racun.stanje}`)
