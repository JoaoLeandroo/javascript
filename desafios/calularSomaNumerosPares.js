let lista = [3, 6, 9, 4, 10]

let numeroPares = lista.filter((par) => {
    return par%2===0
})

let soma = 0
numeroPares.map((numero) => {
    soma += numero
})

console.log(soma)