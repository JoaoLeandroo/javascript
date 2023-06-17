
const maior = 4 > 12 ? 'O primeiro Numero é maior' : 'O segundo numero é maior'

console.log(maior)

const texto = ""
const formattedText = texto ? texto.replace("a", "b") : ''
console.log(formattedText)

const texto2 = "aaaaaaaaaa"
const formattedText2 = texto2 ? texto2.replaceAll("a", "b") : ''
console.log(formattedText2)
