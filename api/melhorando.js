const URL_API_TESTE = "https://rickandmortyapi.com/api/character";

async function loadApi(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch(error) {
        console.log("ERRO AO CARREGAR API " + error)
    }finally{
        console.log("Fim da execução")
    }
}

loadApi(URL_API_TESTE);
