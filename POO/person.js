// DIA 7 // RETOS DEL 1 AL 6.

class Person{

    constructor(altura, peso, aficiones){

        this.height = altura;
        this.weight = peso;
        this.name;
        this.hobbies = aficiones;
        this.colorHair;
        this.colorEyes;
        this.nacionality;
        
    }
    calcImc(){

        this.height = 190;
        this.weight = 80;

        return this.weight / (this.height * this.height) * 10000;

    }
    calcEdad(currentYear){  

        currentYear = 2022; // parámetro año actual.

         return  currentYear - this.yearBirth;
    }
    printAll(){

        for (let propiedad in this){

           console.log(propiedad + " - " + this[propiedad])
        }
    }  
    printHobbies(){

        console.log(this.hobbies);
    }
    
}


module.exports = { Person };