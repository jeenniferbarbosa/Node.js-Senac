// Cálculo de Média Aritmética utilizando condicionais

var nota1 = 7
var nota2 = 9
var media = (nota1 + nota2) / 2

if (media >= 8){
    console.log(`A média do aluno é ${media.toFixed(1)}.
    \nO aluno está APROVADO!`)

} else if(media >= 3 && media < 6)
    console.log(`A média do aluno é ${media.toFixed(1)}.
    \nO aluno está de RECUPEREÇÃO!`)
    
    else{
     console.log(`A média do aluno é ${media.toFixed(1)}.
     \nO aluno está REPROVADO!`)
}