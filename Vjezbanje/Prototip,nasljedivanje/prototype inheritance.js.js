// Definiranje prototipa Osobe
function Osoba(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
  
  Osoba.prototype.pozdrav = function() {
    console.log("Pozdrav, ja sam " + this.ime + " " + this.prezime);
  }
  
  // Definiranje prototipa Studenta koji nasljeđuje prototip Osobe
  function Student(ime, prezime, fakultet) {
    Osoba.call(this, ime, prezime);
    this.fakultet = fakultet;
  }
  
  Student.prototype = Object.create(Osoba.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.ponasanje = function() {
    console.log(this.ime + " " + this.prezime + " je student na fakultetu " + this.fakultet);
  }
  
  const student1 = new Student("John", "Doe", "Stručni studije Split");
  student1.pozdrav(); // Output: Pozdrav, ja sam John Doe
  student1.ponasanje(); // Output: John Doe je student na fakultetu Stručni studije Split

//KLASE
// Definiramo nadklasu (roditeljsku klasu)
class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
  pozdrav() {
    console.log(`Pozdrav od ${this.ime} ${this.prezime}`);
  }
}

// Definiramo podklasu (dijete) koja nasljeđuje osobine od klase Osoba
class Student extends Osoba {
  constructor(ime, prezime, fakultet) {
    // Pozivamo konstruktor nadklase da bi inicijalizirali svoje osobine
    super(ime, prezime);
    this.fakultet = fakultet;
  }
  
  predstaviSe() {
    console.log(`Ja sam ${this.ime} ${this.prezime} i studiram na fakultetu ${this.fakultet}`);
  }
}

// Kreiramo novog studenta
const noviStudent = new Student('Ana', 'Anić', 'Fakultet informatike');

// Pozivamo metodu predstaviSe() koja pripada podklasi (Student)
noviStudent.predstaviSe();

// Pozivamo metodu pozdrav() koja pripada nadklasi (Osoba)
noviStudent.pozdrav();

  