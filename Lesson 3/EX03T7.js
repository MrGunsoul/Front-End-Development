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


const person1 = new Person("Pekka","20")

const person2 = new Person("Steve","55")

person1.getName()

person2.sayGreeting()