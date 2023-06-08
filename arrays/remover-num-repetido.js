const listaNumero = [9, 8, 2, 2, 12, 9, 12, 12, 18, 19, 22, 0, 22, 18, 15, 0, 23]
let novaLista = []

listaNumero.map((item) => {
    if(novaLista.includes(item)) {
        console.log(`O número ${item} já está presente na lista, removido o item duplicado.`)
        return
    }
    novaLista.push(item)
})

console.log("lista final " + novaLista)