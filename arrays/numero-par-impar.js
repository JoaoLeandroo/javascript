
const lista = [0,1,2,3,4,5,6,7,8];

for(let i = 0; i < lista.length; i++){
    const numeros = lista[i]
    if(numeros%2 === 0){
        console.log(`Número (${numeros}) é considerado um número PAR`);
    }else{
        console.log(`Número (${numeros}) é considerado um número IMPAR`);
    }
}
