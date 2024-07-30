function Automobil() {
    this.brzina = 0;
  }
  
  Automobil.prototype.ubrzaj = function() {
    this.brzina += 10;
  }
  
  Automobil.prototype.uspori = function() {
    this.brzina -= 10;
  }
  
  const auto = new Automobil();
  
  auto.ubrzaj();
  console.log("Trenutna brzina automobila: " + auto.brzina); // Output: 10
  
  auto.ubrzaj();
  console.log("Trenutna brzina automobila: " + auto.brzina); // Output: 20
  
  auto.uspori();
  console.log("Trenutna brzina automobila: " + auto.brzina); // Output: 10
  