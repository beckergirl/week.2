// DIA 7 // RETOS 7 & 8

const { Person } = require("./person");


let irene = new Person(80, 190, "pintar");
console.log(irene);
irene.calcImc();

irene.yearBirth = 1982; /// añade año de nacimiento
console.log(irene);
irene.calcEdad(); /// imprime 40

irene.printAll();

irene.hobbies = ["Pintar", "Cine", "Leer", "Viajar"];
irene.printHobbies();
