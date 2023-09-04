//laço numérico =>> FOR
const input = require('readline-sync')
/*
//o problema
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3
*/
//acumulador
let acumulador = 0

acumulador = acumulador + 1

acumulador +=1

acumulador++

// estrutura for

for(let i=0; i< 10 ; i++){
    console.log('repetição')
}

console.clear()
//resolvendo o problema
let nota
let soma = 0
let media
for(let i=0 ; i<3 ; i++){
   nota = Number(input.question(`Informe a nota ${i+1}: `))
   soma= soma + nota
}

media=soma / 3

console.log("Sua média é: ", media)