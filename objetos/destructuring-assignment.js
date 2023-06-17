
const produto = {
    name: "Relogio",
    value: 32,
    category: "Acessorio"
}
const newProduct = {
    ...produto,
    color: 'red'
}
console.log(newProduct)

const valores = [1, 2, 4, 5, 12, 8,]
const newValores = [55, ...valores, 25]
console.log(newValores)

const [one, two, ...rest] = valores
console.log(`Primeiro valor ${one}`)
console.log("segundo valor " + two)
console.log(`resto dos valores ${rest}`)