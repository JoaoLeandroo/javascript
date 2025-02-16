// Gerar uma tabuada completa de 1 a 10, utilizando um único FOR

let valor = 1

for(let valorTabuada = 1; valor < 11; valorTabuada++) {
    if(valorTabuada > 10) {
        valor++
        valorTabuada = 1
        console.log("----------------------")
    }else {
        console.log(`${valor} x ${valorTabuada} = ${valor * valorTabuada}`)
    }
}