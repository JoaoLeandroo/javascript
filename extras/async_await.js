

async function returnResultsPokemon() {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon')
    const resultApi = await result.json()

    resultApi.results.forEach(poke => {
        console.log(poke.name);
    })
}

returnResultsPokemon()