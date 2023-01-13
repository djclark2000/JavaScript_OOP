console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies = []){
        this.name = name; 
        this.pets = pets; 
        this.residence = residence; 
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        //push modifies in place 
        this.hobbies.push(hobby); 
        //or array.splice
    }

    removeHobby(hobby) {
        //filter creates a shallow copy, so we need to change this.hobbies:
        this.hobbies = this.hobbies.filter(element => element != hobby)
        //or 
        //find where the hobby is in the array
        //let myIndex = this.hobbies.indexOf(hobby);
        //remove on element from that location in the array
        // this.hobbies.splice(myIndex, 1);
    }
        
    greeting() {
        console.log(`Hello, ${this.name}!`);
    }

    info(){}

    soundOff() {}
}

const testPerson = new Person('Dustin', 0, `San Antonio, TX`, ['basketball', 'coding', 'reading']); 

testPerson.removeHobby('reading'); 
console.log(testPerson);



//Exercise 2 Section
class Coder extends Person {
    //there's always a 'shadow' constructor if we don't specify one ...
    occupation = 'Full Stack Web Developer'; 
    /*constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);

        this.occupation = 'Full Stack Web Developer';  
    } */
    //Overriding the parent greeting method:
    greeting() {
        console.log(`Hello, fellow ${this.occupation}!`);
    }

}

const testCoder = ('Harrison', 2, 'The Cold North', ['feeling warm', 'drinking coffee', 'shoveling snow'])

console.log(myCoder);


//Exercise 3 Section
let newPerson = new Person('Dustin', 0, `San Antonio, TX`, 'Basketball'); 
let newCoder = new Coder('Dustin', 0, `San Antonio, TX`, ['basketball', 'coding', 'reading']); 

console.log(newPerson); 
newCoder.addHobby('Piano');
console.log(newCoder);



//Exercise 4 Section
class Calculator {
    constructor(a, b){
        this.result = 0;
    }

    add(a, b){
        this.result = a + b; 
        return this.result;
    };
    subtract(a, b){
        this.result = a - b; 
        return this.result;
    };
    multiply(a, b){
        this.result = a * b;
        return this.result;
    };
    divide(a, b){
        this.result = a / b;
        return this.result;
    };

    displayResult() {
        console.log(result);
    }; 
}

let myCalculator = new Calculator(); 
console.log(myCalculator.add(9, 7));
