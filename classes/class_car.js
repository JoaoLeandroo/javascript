class Carro {
    constructor(marca, cor, gastoPorKm, combustivel, distancia) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
        this.combustivel = combustivel;
        this.distancia = distancia;
    }

    calcularGastoMedioCombustivel() {
        const litrosConsumidos = this.distancia / this.gastoPorKm
        const gastoFinal = litrosConsumidos * this.combustivel
        console.log(`O veiculo da Marca ${this.marca} Percorreu uma distancia de ${this.distancia}Km com gasto medio de ${this.gastoPorKm}L por Km, gastando um total de ${litrosConsumidos}L de combustivel`)
        console.log(`Valor total gasto: R$${gastoFinal.toFixed(2)} \n`)
    }
}

const ferrari = new Carro('Ferrari', 'Red', 4, 5.59, 100)
ferrari.calcularGastoMedioCombustivel()

const mcLaren = new Carro("McLaren", 'Orange', 8, 5.59, 50)
mcLaren.calcularGastoMedioCombustivel()