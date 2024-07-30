// 1. Napravite funkciju delayedGreeting, koja će koristiti Promise objekt za
// ispisivanje pozdrava nakon određenog vremenskog kašnjenja.
// Funkcija treba prihvatiti vrijeme kašnjenja (u milisekundama) i tekst
// pozdrava kao argumente.
// Nakon zadanog kašnjenja, funkcija treba ispisati tekst pozdrava.


function delayedGreeting(delay, greeting) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log(greeting);
        resolve();
      }, delay);
    });
}

delayedGreeting(5000, "Dobar dan, kasnim 5 sekundi!")



// 2. Napravite funkciju checkWeather, koja će koristiti Promise objekt za
// provjeru vremenskih uvjeta na temelju unesenog grada.
// Funkcija treba prihvatiti ime grada kao argument. U ovom zadatku,
// koristit ćemo jednostavnu simulaciju dohvaćanja podataka o vremenskim
// uvjetima iz API-ja. Ako je vrijeme sunčano, Promise treba biti riješen
// (resolve) s porukom "Vrijeme je sunčano u {grad}". U suprotnom, Promise
// treba biti odbijen (reject) s porukom "Vrijeme nije sunčano u {grad}". 

function checkWeather(grad) {
    return new Promise(function(resolve, reject) {
      var vremenski_uvjeti = {
        "Split": "suncano",
        "Zagreb": "snig",
        "Pakrac": "kisa"
      };
      if (vremenski_uvjeti.hasOwnProperty(grad)) {
        if (vremenski_uvjeti[grad] === "suncano") {
          resolve(`Vrijeme je sunčano u ${grad}u.`);
        } else {
          reject(`Vrijeme nije sunčano u ${grad}u.`);
        }
      } 
    });
}


checkWeather("Split").then(function(message) {
    console.log(message);
})

  
//   3. Primjer zadatka sa await funkcijom. Prepišite i pokrenite program
//   U ovom primjeru, funkcija delay vraća obećanje (Promise) koje se rješava nakon
// određenog vremenskog razdoblja pomoću funkcije setTimeout.
// U funkciji example, koristimo ključnu riječ await kako bismo zaustavili
// izvršavanje programa dok se obećanje ne riješi. Nakon čekanja od 2 sekunde,
// program nastavlja izvršavati liniju console.log('Nakon čekanja').
// Ovo omogućava asinkrono izvršavanje funkcija i čekanje na rezultate prije
// nastavka izvršavanja ostatka koda.
// Prepišite navedeni primjer i promijenite vrijeme čekanja.
// Što se promijenilo? Jesu li se sve naredbe izvršile očekivanim redoslijedom?

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function example() {
    console.log('Prije čekanja');
    await delay(2000); // čeka 2 sekunde
    console.log('Nakon čekanja');
    }
    example();


//     4. Primjer zadatka sa callback funkcijom. Prepišite i pokrenite program
// Callback funkcija je funkcija koja se predaje kao argument u drugu funkciju i
// izvršava se nakon završetka određene operacije ili događaja. Kada se callback
// funkcija pozove, ona omogućava prenošenje rezultata ili obavijesti nazad u
// izvornu funkciju. Glavna svrha callback funkcija je podržati asinkrono
// izvršavanje u JavaScriptu.
// Iako je vrijeme kašnjenja postavljeno na 4 sekunde, k𝑜̂d još uvijek izvršava
// console.log('Nastavak izvršavanja') prije nego što se callback funkcija pozove.
// To pokazuje da se callback funkcija izvršava asinkrono i ne čeka na završetak
// ostatka koda

function getData(callback) {
    setTimeout(function() {
    const data = { message: 'Ovo su podaci' };
    callback(data);
    }, 4000);
    }
    function processData(data) {
    console.log('Obrada podataka:', data.message);
    }
    getData(processData);
    console.log('Nastavak izvršavanja');
    

//     5. Napišite funkciju calculateAndPrintSum koja prima dva broja a i b.
// Funkcija treba koristiti await funkciju calculateSum kako bi asinkrono
// izračunala zbroj brojeva a i b. Nakon izračuna, ispišite rezultat zbroja.
// Funkcija calculateSum simulira izračun zbroja brojeva s određenim
// vremenskim kašnjenjem. Funkcija calculateSum vraća obećanje (Promise)
// koje se rješava (resolve) s rezultatom zbroja

function calculateSum(a, b) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var sum = a + b;
        resolve(sum);
      }, 5000);
    });
}
  
async function calculateAndPrintSum(a, b) {
    try {
      var result = await calculateSum(a, b);
      console.log(`Zbroj brojeva ${a} i ${b} je ${result}`);
    } catch (error) {
      console.error("Pogreska", error);
    }
}

calculateAndPrintSum(66, 99);

// 6. Napišite funkciju checkNumber koja prima broj kao argument. Funkcija
// treba provjeriti je li dani broj paran ili neparan te vratiti odgovarajuću
// poruku.
// Koristite obećanje (Promise) s callback funkcijama resolve i reject. Ako
// je broj paran, obećanje treba biti riješeno s porukom "Broj je paran.".
// Ako je broj neparan, obećanje treba biti odbijeno s porukom "Broj je
// neparan.".
// Pozovite funkciju checkNumber s proizvoljnim brojem i ispišite rezultat
// korištenjem metoda then za hvatanje riješenog obećanja i metode catch
// za hvatanje odbijenog obećanja.


function checkNumber(number) {
    return new Promise(function(resolve, reject) {
      if (number % 2 === 0) {
        resolve(`${number} je paran!`);
      } else {
        reject(`${number} je neparan!`);
      }
    });
}
  
var inputNumber = 138;
  
checkNumber(inputNumber).then(function(message) {
      console.log(message);
})
