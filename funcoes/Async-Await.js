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

async function executar() {
    try{
        const fase1 = await wait('FASE 1 EXECUTADA', rand());
        console.log(fase1)
        const fase2 = await wait('Segunda Fase', rand());
        console.log(fase2)
        const fase3 = await wait('Terceira fase', rand())
        console.log("FIM DO PROGRAMA " + fase3)
    }catch(e){
        console.log(e)
    }

}

executar()