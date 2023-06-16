// esse metodo mostra se todos os itens da lista atendem a uma determinada condição.

const lista = [2, 2]

const listaEvery = lista.every((item) => {
    return item%2===0
})

console.log(listaEvery)