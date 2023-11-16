const person = {
    name: "Lucas",
    age: 25
}

const personProxy = new Proxy(person, {
    set(target, key, value) {
        if(key === "age" && value < 0) {
            throw new Error("Idade da pessoa está errada")
        }

        target[key] = value
    }
})

personProxy.age = 15
console.log(personProxy.age)