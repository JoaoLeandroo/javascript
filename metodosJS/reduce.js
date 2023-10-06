const numeros = [1, 2, 3, 4, 5, 7];

const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(soma);
