const numeros = [1, 2, 3, 4, 5, 7];

const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(soma);


const calcularNumerosTabela = [10, 6, 2, 9, 6, 6]
const newSomador = calcularNumerosTabela.reduce((acul, num) => {return acul + num})
console.log(newSomador)
