const listaFrutas = [
    {fruta: "banana", valor: 5.99},
    {fruta: "uva", valor: 12.59},
    {fruta: "pera", valor: 3.00},
    {fruta: "maça", valor: 8.80}
]

let client = "maça"
client = client.toLowerCase()

function verificar(client) {
    listaFrutas.map((event) => {
        if(client === event.fruta) {
            console.log("Fruta existente")
            return
        }
    })

}

verificar(client)