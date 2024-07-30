// 1. Napisati void funkciju koji računa aritmetičku sredinu tri prirodna broja koja
// unosi korisnik putem skočnog prozora (prompt), a rezultat se ispisuje u konzoli.
// FUNCTIONS
// IF – ELSE IF –ELSE
alert("Moj prvi JS program!");

function average(a,b,c){
    return (a + b + c) / 3;
}



var a = parseInt(prompt("Unesite prvi broj: "));
var b = parseInt(prompt("Unesite drugi broj: "));
var c = parseInt(prompt("Unesite treci broj: "));

var aritmeticka = average(a,b,c);
console.log("Aritmeticka sredina iznosi: " + aritmeticka);

// 2. Napisati void funkciju koji računa zbroj, razliku, umnožak i količnik dvaju
// brojeva. Vrijednosti brojeva i znak za operaciju (+, -, /, *) prosljeđuju se kroz
// poziv funkcije kao argument, a rezultat se ispisuje u konzoli.
// FUNCTIONS
// OPERATORS

function operatori(a,b,c){
    if (c === '*'){
        return a*b;
    }
    else if (c === '+'){
        return a+b;
    }
    else if (c === '-'){
        return a-b;
    }
    else if (c === '/' && b != 0){
        return a/b;
    }
}
var a = parseInt(prompt("Unesite prvi broj: "));
var b = parseInt(prompt("Unesite drugi broj: "));
var c = prompt("Unesite operator: ");
var rezultat = operatori(a,b,c);
console.log("Rezultat operacije: " + rezultat);


// 3. Napisati funkciju koja kao povratnu vrijednost vraća prvu znamenku unesenog
// deseteroznamenkastog broja npr. za broj 1254192518 funkcija vraća 1 i
// rezultat ispisuje u konzoli.
// FUNCTIONS
// OPERATORS
// WHILE

function vratiPrvu(a){
    while(a>10){
        a /= 10;
    }
    return a;
}

var a = parseInt(prompt("Unesite deseteroznamenkasti broj: "));
var prvaZn = vratiPrvu(a);
console.log("Prva znamenka broja je: " + prvaZn);



// 4. Napisati void funkciju koji unosi mjesec i ispisuje koje je godišnje doba u skočnom
// prozoru (alert). Za 1., 2. i 3. mjesec ispisuje zima, za 4., 5. i 6. ispisuje proljeće,
// za 7., 8. i 9. mjesec program ispisuje ljeto, a za 10., 11. i 12. ispisuje jesen.
// FUNCTIONS
// SWITCH
// IF – ELSE IF –ELSE
function godisnje_doba(mjesec){
    
switch(mjesec) {
    case 1:
        return "Zima";
      break;
    case 2:
        return "Zima";
    case 3:
        return "Zima";
      break;
    case 4:
      return "Proljece";
    case 5:
        return "Proljece";
      break;
    case 6:
        return "Proljece";
    case 7:
        return "Ljeto";
      break;
    case 8:
        return "Ljeto";
    case 9:
        return "Ljeto";
      break;
    case 10:
        return "Jesen";
    case 11:
        return "Jesen";
        break;
    case 12:
        return "Jesen";
      break;
    default:
      return "!!!NISTE UNJELI BROJ KOJI ODGOVARA MJSECU U GODINI!!!"
  }
}
var mjesec = parseInt(prompt("Upisite mjesec: "));
var doba = godisnje_doba(mjesec);
console.log("Prva znamenka broja je: " + doba);


// 5. Napisati funkciju koja provjerava broj pojavljivanja znamenke z u prirodnom
// broju n. Funkcija za unose korisnika npr. n = 2955, z =5, vraća poruku „
// U broju
// 2955 imamo 2 pojavljivanja broja 5.“, te ispisuje u konzoli.
// FUNCTIONS
// OPERATORS
// WHILE

function brPonavljanja(n,z){
    var brojac;
    while(n>0){
        temp = n%10;
        n=n/10;
        if (temp === z){
            brojac++;
        };
    }
    return brojac;
}


var a = parseInt(prompt("Unesite broj: "));
var b = parseInt(prompt("Unesite znamenku ciju ucestalost zelite provjeriti: "));
var koliko = brPonavljanja(a, b);
console.log("Broj ponavljanja" + a + "znamenke je: " + koliko);