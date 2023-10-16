//funções de alta ordem de arrays

//Array.forEacth()
function imprimirElemento(elemento) {
  console.log(elemento);
}
const numeros = [40, 34, 67, 89, 23, 10];

// numeros.forEach(imprimirElemento)//ele percorre cada elemento do array e executa a function

// análogo a

// for(const elementos of numeros){
//     console.log(elementos)
// }

//pode fazer assim
numeros.forEach((item, index, arrayCompleto) =>
  console.log(item, index, arrayCompleto)
); //for each== por cada ..(pode receber até 3 parâmetros){item, index , arraycompleto }

console.clear();
//Array.find()== encontra elementos dentro de um array

const encontrado = numeros.find((item /*, index, arrayCompleto*/) => {
  return item > 10;
}); //retorna o elemento encontrado(ao encontrar ele quebra)

console.log(encontrado);

const pessoas = [
  //array de objetos[ {  } ]
  {
    nome: "pessoa 1",
    idade: 19,
    altura: 1.77
  },

  {
    nome: "pessoa 2",
    idade: 25,
    altura: 1.80
  },
  {
    nome: "pessoa 3",
    idade: 33,
    altura: 1.90
  },
  {
    nome: "pessoa 4",
    idade: 43,
    altura: 1.5
  },
];


const pessoaencontrada =pessoas.find((pessoa) => pessoa.idade>18 && pessoa.altura<1.70)//para cada elemento do array, entre no objeto pessoa , no atributo idade e se idade for maior que 18 e altura menor que 1.70 me retorne a pessoa

console.clear()

console.log(pessoaencontrada)//quando não encontra ele retorna undefyned


console.clear()




//arra.findindex()


const indiciePessoaEncontrada =pessoas.findIndex((pessoa) => pessoa.idade>18 && pessoa.altura<1.70)//mesma coisa mas ao inves de retornar a pessoa ele retorna o indicie

console.log(indiciePessoaEncontrada)//quando ele não encontra ele retorna -1


