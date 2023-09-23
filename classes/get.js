
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return `Nome Completo: ${this.name} ${this.surname}`
    }
}

// para acessar o get não utilizar ()
const carlos = new Person("Carlos", 'Miguel')
console.log(carlos.fullName)