
// * transforma a function em um generator
function* testeGenerator() {
    console.log("Teste 1")
    yield console.log("Teste 2") //metodo yild vai executar até essa linha
    console.log("Teste 3")
}

const teste = testeGenerator()

// next chama a função para ser executada
teste.next()
console.log("----------------")
console.log(teste.next()) // vai executar o resto do codigo