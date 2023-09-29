
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    temQuatroPernas() {
        return 'O animal tem quatro pernas'
    }

    temDuasPernas() {
        return 'Tem duas Pernas'
    }

}

class Passaro extends Animal {
    sabeVoar() {
        return 'sabe voar'
    }
}

const papagaio = new Passaro() 

console.log(papagaio.temDuasPernas())