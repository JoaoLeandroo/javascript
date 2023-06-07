let timeNome = 'manchester united'

switch (timeNome.toLocaleLowerCase()) {
    case 'real madrid':
        console.log("Tem 14 Champions")
    break;
    case 'barcelona':
        console.log("Tem 5 Champions")
    break;
    case 'juventus':
        console.log("Tem 2 Champions")
    break;
    case 'psg':
        console.log("NÃO POSSUI CHAMPIONS")
    break;
    case 'liverpool':
        console.log("Tem 6 Champions")
    break;
    case 'milan':
        console.log("Tem 7 Champions")
    break;
    default:
        console.log("Esse time ainda não foi registrado")
    break; 
}