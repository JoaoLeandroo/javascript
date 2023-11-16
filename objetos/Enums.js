const day = "Sabado";

const dayObject = {
    "Domingo": 1,
    "Segunda-feira": 2,
    "Terça-feira": 3,
    "Quarta-feira": 4,
    "Quinta-feira": 5,
    "Sexta-feira": 6,
    "Sabado": 7,
}

let dayOfWeek = dayObject[day] || -1

console.log(dayOfWeek)