class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}

const cristiano = new Pessoa('Cristiano', 'Ronaldo')
console.log(cristiano.nome)