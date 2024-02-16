// O metodo toReversed inverte o array, sem alterar o array original
const teste = [
    {id: 1, tarefa: "tarefa x..."},
    {id: 7, tarefa: "Lets GO..."},
    {id: 5, tarefa: "tarefa H"},
    {id: 3, tarefa: "Teste..."}
]
console.log(teste)
console.log("---------------------")

const reversed = teste.toReversed()
console.log(reversed)
console.log(teste)