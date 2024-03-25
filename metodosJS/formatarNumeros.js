const formatar = Intl.NumberFormat("en", { notation: "compact" });


console.log(formatar.format(1500))
// Retorno 1.5k

console.log(formatar.format(10000))
// retorno 10k

console.log(formatar.format(150000))
// retorno 150k

console.log(formatar.format(2000000))
// Retorno 2M

console.log(formatar.format(5000000000))
// Retorno 5B