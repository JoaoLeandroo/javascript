
const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'


    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        json.map((item) => console.log(item.titulo))
    })
