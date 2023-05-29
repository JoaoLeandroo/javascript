const peso = 68;
const altura = 1.70;
const imc = peso / Math.pow(altura,2);


if(imc < 18.5){
    console.log("IMC: " + imc.toFixed(2) + ' Abaixo do Peso')
}else if(imc >= 18.5 && imc < 25){
    console.log("IMC: " + imc.toFixed(2) + ' Peso Normal')
}else if(imc >= 25 && imc < 30){
    console.log("IMC: " + imc.toFixed(2) + ' Acima do Peso')
}else if(imc >= 30 && imc < 40){
    console.log("IMC: " + imc.toFixed(2) + ' Obesidade Morbida')
}else{
    console.log("IMC: " + imc.toFixed(2) + ' Acima de 40 Obesidade Grave')
}