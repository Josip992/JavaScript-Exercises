// Instancirati dva objekta koristeći konstruktor funkciju koja će opisivati Auto s
// atributima i metodama po želji. Potrudite se da vaše metode imaju neku svrhu osim
// tekstualnog ispisa. U svoje metode uključite atribute kako bi bolje vidjeli primjenu
// privatnih atributa npr. izračunajte potrošnju goriva.
// Važno je imati barem jedan privatan atribut i jednu privatnu metodu koje ćete
// dohvatiti u globalnom scopeu (get, set ili Object.definepropetry()).
// Jednom atributu postavite default vrijednost koju ne trebate prosljeđivati kroz
// konstruktor.
// Nakon što napravite objekt preko konstruktor funkcije, svoj k𝑜̂ d iskoristite i izradite
// još jedan objekt, ali preko factory funkcije ili klase. Nemojte izostaviti privatne
// atribute i metode.

// function Automobil(marka, model, godina, boja){
//     let potrosnja = 7;

//     function Postrosnja(put){
//         return ((potrosnja * put) / 100);
//     }
//     this.set_Potrosnja = function(novaPotrosnja){
//         Potrosnja = novaPotrosnja;
//     }
//     this.get_Potrosnja = function(){
//         return Potrosnja;
//     }
//     this.predeno = function(put){
//         potrosenoGoriva = Potrosnja(put);
//         console.log("Vozilo" + boja +", marke" + marka + ", modela" + model + "potrosilo je" + potrosenoGoriva + "litara!");
//     }
// }

// const auto = new Automobil("Mazda", "Premacy", 2002, "siva");
// console.log(auto.get_Potrosnja());
// auto.set_Potrosnja(7);
// auto.predeno(300);

class Automobil{ /*Nakon što napravite objekt preko konstruktor funkcije, svoj k𝑜̂d iskoristite i izradite još jedan objekt, ali preko factory funkcije ili klase. Nemojte izostaviti privatne atribute i metode*/ 
    constructor(marka,model,godina,boja){
        this.marka = marka;
        this.model = model;
        this.godina = godina;
        this.boja = boja;
        this.potrosnja = 4; /*Jednom atributu postavite default vrijednost koju ne trebate prosljeđivati kroz konstruktor.*/
        this._priv = 0;
        
    }
    #potrosnja(put){
        return ((this.potrosnja * put) / 100);
    }                   
    get_Potrosnja(){
         return this.potrosnja;
    }
    set_Potrosnja(novaPotrosnja){
        this.potrosnja = novaPotrosnja;
    }
    predeno(put){
        let potrosenoGoriva = this.#potrosnja(put);
        console.log("Vozilo " + this.boja + ", marke " + this.marka + ", modela " + this.model + " potrosilo je " + potrosenoGoriva + " litara!");
    }
}

const auto1 = new Automobil("Nissan", "240sx", 1998, "crvena");
console.log(auto1.get_Potrosnja());
auto1.set_Potrosnja(15);
auto1.predeno(35);

const auto = new Automobil("Mazda", "Premacy", 2002, "siva");
console.log(auto.get_Potrosnja());
auto.set_Potrosnja(7);
auto.predeno(300);





