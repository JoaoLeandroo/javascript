// Imprimir de 1 a 100 sem utilizar loops

let valor = 1

// solução -> Criar uma função que vai chamar ela mesmo, até o valor ser igual a 100

function functionNoLoop(numero) {
    if(numero < 100) {
        console.log(valor)
        valor = numero + 1
        functionNoLoop(valor)
        return 
    } 
        
    if(numero >= 100) {
        console.log(valor)
        console.log("Fim da operação.")
        return
    }
}

functionNoLoop(valor)
