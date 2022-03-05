class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }

    sayGreeting() {
        console.log("Greetings, world!");
    }
}

class SuperHero extends Person {
    constructor(name, age, superpower) {
      super(name, age);
      this.superpower = superpower;
    }

    useSuperPower() {
      console.log(this.superpower);
    }
  }
  


const person1 = new SuperHero("Pekka","20", "Flight")

const person2 = new SuperHero("Steve","55", "Super Strength")

person1.useSuperPower()

person2.sayGreeting()