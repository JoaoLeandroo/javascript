const numero = Intl.NumberFormat("en", {
    notation: 'compact'
})

console.log("Seguidores " + numero.format(120000))
console.log("curtidas " + numero.format(1022))