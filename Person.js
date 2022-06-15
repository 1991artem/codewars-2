class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  }

  Object.defineProperties(Person.prototype, {
    "name": {
        get: function() { return this.getName() },
        set: function(fullName) {
          [this.firstName, this.lastName] = fullName.split(' ');
        }
    }
})


  let augustusCole = new Person('Augustus', 'Cole');
  console.log (augustusCole);
  console.log (augustusCole.name);
  augustusCole.name = 'Cole Train';
  console.log (augustusCole.name);
  console.log (augustusCole.getName());
