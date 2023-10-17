const nacionalidade = "Nao tem"

switch(nacionalidade.toUpperCase()) {
    case "BR":
        console.log("Voce é Brasileiro")
    break;
    case "EUA":
        console.log("Voce é Americano")
    break;
    default:
        console.log("Nacionalidade não definida.")
    break;
}