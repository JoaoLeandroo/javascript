
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (min - max) + min)
}

function wait(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'))
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
}

wait('Conexão com DB', rand(1, 5))
.then(response => {
    console.log(response)
    return wait('Buscando os Dados da Base', rand(1, 4))
})
.then(response => {
    console.log(response)
    return wait(123123 , rand(1, 4))
})
.then(response => {
    console.log(response)
})
.then(() => {
    console.log("Exibir dados na tela")
})
.catch((e) => {
    console.log('erro ' + e)
})