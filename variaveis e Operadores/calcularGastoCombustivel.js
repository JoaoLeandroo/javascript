const precoCombustivel = 5.79;
const gastoPorKm = 10;
const distancia = 205;

const litrosConsumidos = distancia / gastoPorKm;
const gastoFinal = litrosConsumidos * precoCombustivel;

console.log(`Você percorreu um total de ${distancia.toFixed(1)} Km o valor gasto em Combustivel foi um total de R$${gastoFinal.toFixed(2)}`)