function somar(num1, num2) {
    let media = num1 + num2
    return media;
}

console.log( somar(15, 15) )


function dividir(quantidade, pessoas) {
    let divisao = quantidade / pessoas
    return `A quantidade de itens é ${quantidade} dividido por ${pessoas} pessoas cada pessoa recebe um total de ${divisao} itens`
}

console.log(dividir(20, 5))