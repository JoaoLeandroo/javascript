// Valores da tabela
const valores = [
    1462.121, 1462.165, 1462.071, 1462.095, 1462.097,
    1462.088, 1462.163, 1462.045, 1462.108, 1462.091,
    1462.052, 1462.056, 1462.145, 1462.085, 1462.088,
    1462.057, 1462.081, 1462.094, 1462.144, 1462.085,
    1462.115, 1462.113, 1462.071, 1462.078, 1462.126,
    1462.164, 1462.088, 1462.101, 1462.084, 1462.164,
    1462.128, 1462.121, 1462.087, 1462.121, 1462.096,
    1462.106, 1462.13, 1462.107, 1462.051, 1462.118,
    1462.096, 1462.122, 1462.034, 1462.117, 1462.021,
    1462.08, 1462.074, 1462.14, 1462.097, 1462.1
]


// Função para calcular a média
function calcularMedia(valores) {
    const soma = valores.reduce((total, valor) => total + valor, 0)
    return soma / valores.length
}

// Função para calcular o desvio padrão
function calcularDesvioPadrao(valores) {
    const media = calcularMedia(valores)
    const somaDifQuadrado = valores.reduce((total, valor) => total + Math.pow(valor - media, 2), 0)
    const variancia = somaDifQuadrado / valores.length
    return Math.sqrt(variancia)
}

// Função para calcular o desvio padrão da média
function calcularDesvioPadraoMedia(valores) {
    const desvioPadrao = calcularDesvioPadrao(valores)
    return desvioPadrao / Math.sqrt(valores.length)
}

// Calcular e imprimir os resultados
const media = calcularMedia(valores)
const desvioPadrao = calcularDesvioPadrao(valores)
const desvioPadraoMedia = calcularDesvioPadraoMedia(valores)


console.log(`Média: ${media}`)
console.log(`Desvio Padrão: ${desvioPadrao}`)
console.log(`Desvio Padrão da Média: ${desvioPadraoMedia}`)
