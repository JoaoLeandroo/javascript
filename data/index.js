const data = new Date()

// Com o padStart um zero é adicionado a frente do número sempre que tiver apenas um número
let segundos = data.getSeconds()
segundos = String(segundos).padStart(2, '0')
console.log(segundos)