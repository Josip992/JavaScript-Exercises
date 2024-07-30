//2. zadatak

function increaseNumber() {
    let num = 0;
    return () => {
      num++;
      console.log(num);
    }
  }
  
  const increase = increaseNumber();
  increase()
  increase()
  increase()

  //4. zadatak

  // Definiranje klase BankovniRacun
class BankovniRacun {
    constructor(vlasnik, brojRacuna, stanje) {
      this.vlasnik = vlasnik;
      this.brojRacuna = brojRacuna;
      this.stanje = stanje;
    }
  
    uplata(novac) {
      this.stanje += novac;
      console.log(`Uplaćeno ${novac} kuna. Novo stanje na računu je ${this.stanje} kuna.`);
    }
  
    podizanje(novac) {
      if (novac > this.stanje) {
        console.log("Nemate dovoljno sredstava na računu.");
      } else {
        this.stanje -= novac;
        console.log(`Podignuto ${novac} kuna. Novo stanje na računu je ${this.stanje} kuna.`);
      }
    }
  }
  
  // Kreiranje novog računa
  let racun = new BankovniRacun("Ana Anić", "1234567890", 5000);
  
  // Testiranje metoda za uplatu i podizanje novca
  racun.uplata(1000);    // Output: Uplaćeno 1000 kuna. Novo stanje na računu je 6000 kuna.
  racun.podizanje(3000); // Output: Podignuto 3000 kuna. Novo stanje na računu je 3000 kuna.
  racun.podizanje(4000); // Output: Nemate dovoljno sredstava na računu

  // Funkcija za provjeru valjanosti broja telefona
function provjeriBrojTelefona(broj) {
    let re = /^\(\d{3}\) \d{3}-\d{4}$/;
    return re.test(broj);
  }
  
  // Testiranje
  console.log(provjeriBrojTelefona("(123) 456-7890"));  // Output: true
  console.log(provjeriBrojTelefona("123 456-7890"));    // Output: false
  console.log(provjeriBrojTelefona("(123) 456-789")); 

  