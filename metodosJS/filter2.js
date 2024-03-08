
const dadosPlayes = [
    {name: "Cristiano Ronaldo", nacionalidade: "Portugal"},
    {name: "Lionel Messi", nacionalidade: "Argentina"},
    {name: "Neymar jr", nacionalidade: "Brasileiro"},
    {name: "Coutinho", nacionalidade: "Brasileiro"},
    {name: "Bruno Fernandes", nacionalidade: "Portugues"},
    {name: "Mbappe", nacionalidade: "Frances"}
]


const x = dadosPlayes.filter(num => num.nacionalidade.toLocaleLowerCase() === "brasileiro")

console.log(x)