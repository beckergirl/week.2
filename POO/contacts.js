let miClassContactos = require("./personTest")

let { Person } = require("./person");



class Contacts{

    constructor(){ 
                
            this.arrayPerson = [ ];
            
        }
     
    printPersons(){

        for (let personas of this.arrayPerson){

            personas.printPersons();
            
            }
    } 
}   
/* 
let agenda = new Contacts();
agenda.printPersons(); */

module.exports = { Contacts }