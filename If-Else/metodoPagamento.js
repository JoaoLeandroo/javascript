// se o pagamento for A VISTA ou PIX, aplicar desconto 15%
// se o pagamento for no debito, aplicar desconto de 10%
// se a compra no cartao de credito for em até 2 parcelas nao aplicar juros, se for maior que 2 aplicar 10% de juros

const metodoPagamento = 'CARTAO';
const precoProduto = 299.99;
const parcelas = 2;


if(metodoPagamento === 'DEBITO'){
    const desconto = (10 * precoProduto)/100
    const precoFinal = precoProduto - desconto
    console.log('Com um desconto de 10% seu produto custara ' + precoFinal.toFixed(2))
}
else if(metodoPagamento === 'A VISTA' || metodoPagamento === "PIX"){
    const desconto = (15 * precoProduto)/100
    const precoFinal = precoProduto - desconto
    console.log('Com um desconto de 15% seu produto custara ' + precoFinal.toFixed(2))
}
else if(metodoPagamento === 'CARTAO' && parcelas <= 2){
    console.log("Produto comprado no cartao de credito, parcelado em " + parcelas + ' Vezes, Sem Juros, preco final ' + precoProduto)
    const parc = precoProduto / parcelas
    console.log("Parcelas " + parcelas + ' - ' + parc.toFixed(2))
}
else{
    const desconto = (10 * precoProduto)/100
    const precoFinal = precoProduto + desconto
    const parc = precoFinal / 3
    console.log("Cartao de credito, parcelado em " + parcelas + ' Vezes, acrescimo de juros de 10%, valor total ' + precoFinal.toFixed(2) + " Parcelas de " + parc.toFixed(2))
}