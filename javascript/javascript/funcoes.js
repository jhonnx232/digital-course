//é um trecho reaproveitavel do codigo

//definindo a função(diferente do c++ as funçoes aqui ficam no main pois não há separação)
function saudacao() {
    console.log("olá, seja bem vindo ao nosso curso de javascript :)")
}
saudacao()
console.clear()
//como enviar parâmetros para as funções

function saudacao(nome, curso = 'javascript') {
    console.log(`olá,${nome} seja bem vindo ao nosso curso de ${curso} :)`)//template string, use crase ao inves de aspas segundo o modelo acima.
}

saudacao("jhonn", "HTML & CSS")

console.clear()

//retorno de uma função *não ponha console.log numa função, pois ela fica fixa..

function soma(numero1, numero2) {
    return numero1 + numero2 //toda a vez que aparece return ela encerra então não ponha nada após o return
}

let result = soma(20, 10)

console.log(result / 2)

console.clear()

function maiorDoQue5o(numero) {
    if (numero > 50) {
        return true
    }//retorno dentro de if não se aplica a regra pois se o numero não satisfazer o if ele continua o codigo
    else return false
}
