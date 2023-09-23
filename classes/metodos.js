class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar() {
        return 'agora eu posso falar'
    }

    comer() {
        return 'Comida'
    }

    beber() {
        return 'Beber água'
    }
}

const rafael = new Pessoa("rafael", 'xxxx')
console.log(`${rafael.nome} agora sabe ${rafael.beber()}`)
