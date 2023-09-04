//laço condicional  (while de javascript == wile de c++)
const input = require('readline-sync')
const numeroSortado = 5
let num =0
while(num !== numeroSortado){
   console.log("voce errou o numero , tente novamente")
  num = Number(input.question("Qual numero voce escolhe? "))
}
  console.log("Voce acertou !!")//enquanto ele estiver no loop ele não roda esta linha..