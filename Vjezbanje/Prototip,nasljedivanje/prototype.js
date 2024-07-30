// Definiranje funkcije konstruktora za objekt
function Osoba(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
  // Dodavanje prototipne metode za objekt
  Osoba.prototype.pozdrav = function() {
    console.log("Pozdrav, ja sam " + this.ime + " " + this.prezime);
  };
  
  // Kreiranje instance objekta
  var osoba1 = new Osoba("Marko", "Marković");
  
  // Pozivanje prototipne metode
  osoba1.pozdrav(); // Output: Pozdrav, ja sam Marko Marković

  
  