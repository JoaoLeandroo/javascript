const URL_API_TESTE = "https://rickandmortyapi.com/api/character";

const loadApi = (url) => {
    fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
    })
}

loadApi(URL_API_TESTE)