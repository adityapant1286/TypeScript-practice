

export class Person {
    firstName : string;
    lastName : string;

    constructor(firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() : string {
        return "Hello " + this.firstName + " " + this.lastName;
    }
}

class Programmer extends Person {

    greet() : string {
        //super.greet();
        return "Hello world";
    }
}

var p : Person = new Person("Aditya", "Pant");
var prg : Person = new Programmer("John", "Doe");


console.log(p);
console.log(prg);
console.log(p.greet());
console.log(prg.greet());

