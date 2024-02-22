let num = 1
const count = () => console.log(num++) 
const contador = setInterval(count, 1000)

setTimeout(() => {
    clearInterval(contador)
    console.log("Fim da Execução")
}, 11000)