function calcularMedia(numeros) {
    let soma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    
    return soma / numeros.length;
  }
  
  console.log(calcularMedia([12, 12, 12, 13, 12])); 