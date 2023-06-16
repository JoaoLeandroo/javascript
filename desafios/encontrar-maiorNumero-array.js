const lista = [22, 33, 90, 44, 8, 90, 22, 39]
let maiorNumero = 0

lista.forEach((numero) => {
    if(numero >= maiorNumero) {
        maiorNumero = numero
        return
    }

})

console.log("O maior numero da lista é " + maiorNumero)