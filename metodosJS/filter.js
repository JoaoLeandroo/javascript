// Remover todos os numeros pares da lista
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let novoArray = numeros.filter((num) => {
    return num%2 != 0
})

// retornando apenas os numeros impares da lista
console.log(novoArray)