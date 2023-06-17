const nomeUsuario = undefined

const usuario = nomeUsuario ?? "Visitante"

console.log(usuario)

const numeroUser = 7
const num1 = numeroUser ?? "Sem Numero"
console.log(num1)

const numeroCanditado = null
const num2 = numeroCanditado ?? "Numero Indefinido."
console.log(num2)

const x = 'ola' ?? undefined
console.log(x)

// Se o valor for null ou undefined o valor da esquerda é atribuido.