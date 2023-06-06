// pegando o maior numero da lista, usando o metodo map

const lista = [1, 8, 40, 9, 10, 15, 20, 35, 5, 8, 22]
let maior = 0
lista.map((item) => {
    if(item > maior){
        console.log('é maior ' + item)
        maior = item
    }else{
        console.log('é menor ' + item)
    }
})

console.log('fim ' + maior)