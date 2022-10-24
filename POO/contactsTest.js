const { Contacts } = require("./contacts");
const { Person } = require("./person");

let agenda = new Contacts();

amelia = new Person(175, 70, "montar a caballo");
amelia.nombre = "Amelia";
amelia.apellidos = "Herrero"

irene = new Person(160, 58, "cocinar");
irene.nombre = "Irene";
irene.apellidos = "Herrero Becker";

ann = new Person(190, 98, "patinar");
ann.nombre = "Ann";
ann.apellidos = "Becker";

miguel = new Person(180, 88, "leer");
miguel.nombre = "Miguel";
miguel.apellidos = "Gomis";

let arrayPerson = [amelia, irene, ann, miguel];

console.log(arrayPerson);

arrayPerson = agenda;

agenda.printPersons();