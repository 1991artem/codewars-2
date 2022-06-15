class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, status);
      this.legs = 0;
      this.species = "shark";
      this.status = status;
    }
  }
  class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs = 4;
        this.species = "cat";
        this.status = status;
      }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  }
  class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status);
        this.legs = 4;
        this.species = "dog";
        this.master = master;
        this.status = status;
      }
      greetMaster(){
        return `Hello ${this.master}`;
      }
  }

  var example = new Cat("Example", 10, "Happy");
//example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!";

console.log(example.introduce())
console.log(example.status)