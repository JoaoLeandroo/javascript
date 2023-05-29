const nota1 = 1
const nota2 = 4
const nota3 = 9

const soma = (nota1+nota2+nota3)/3

if(soma >= 5) {
    console.log("Aluno APROVADO, média: " + soma.toFixed(1))
}else{
    console.log("Aluno REPROVADO, média: " + soma.toFixed(1))
}