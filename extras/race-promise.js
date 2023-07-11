function run(corredor) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(corredor);
      }, Math.random() * 1000); // Simula um tempo de execução aleatório
    });
  }
  
  const corredorOne = run('CORREDOR 1');
  const corredorTwo = run('CORREDOR 2');
  
  Promise.race([corredorOne, corredorTwo])
    .then((winner) => {
      console.log(`Vencedor: ${winner}`);
    })
    .catch(() => console.log("OCORREU UM ERRO."));
  