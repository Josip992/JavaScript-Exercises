function Banka(iznos){
    this.iznos = iznos
}
Banka.prototype.getBalance = function(){
    return this.iznos 
}
Banka.prototype.deposit = function(uplata){
    return this.iznos += uplata 
}

Banka.prototype.withDraw = function(isplata){
    if(this.iznos >= isplata)
        this.iznos -= isplata
    else
        console.log("Nedovoljna novca")  
}

const b = new Banka(500)
console.log("Stanje racuna je " + b.getBalance())
console.log("Stanje racuna nakon uplate je " + b.deposit(200))

function Kamate(iznos, kamate){
    Banka.call(this, iznos)
    this.kamate = kamate
}
Kamate.prototype = Object.create(Banka.prototype)
Kamate.prototype.constructor = Banka

Kamate.prototype.getKamate = function(kamata){
   this.iznos += this.iznos * (kamata / 100)
   return this.iznos
}

const k = new Kamate(100, 2.5)
console.log("Stanje racuna je " + k.getBalance())
console.log("Stanje s kamatom je " + k.getKamate(2.5))
