const vogais = ['a', 'e', 'i', 'o', 'u']

const palavra = 'pedra'

let armazenar = 0
for(let i=0;i < palavra.length;i++) {
    if(palavra[i].toLowerCase() === 'a' || palavra[i].toLowerCase() === 'e' || palavra[i].toLowerCase() === 'i' ||
    palavra[i].toLowerCase() === 'o' || palavra[i].toLowerCase() === 'u'){
        armazenar += 1
    }
}

console.log("Existem " + armazenar + ' vogais nessa palavra.')