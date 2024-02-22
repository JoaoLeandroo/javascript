const interval = () => {
  console.log("Executando...");
};

let x = setInterval(interval, 1000);

setTimeout(() => {
    clearInterval(x)
    console.log("stop interval")
}, 5000);