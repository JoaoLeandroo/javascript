function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  console.log(calcularFatorial(5));