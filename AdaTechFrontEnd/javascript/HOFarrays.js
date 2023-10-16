const numeros = [40, 34, 67, 89, 23, 10];

const pessoas = [
  //array de objetos[ {  } ]
  {
    nome: "pessoa 1",
    idade: 19,
    altura: 1.77,
  },

  {
    nome: "pessoa 2",
    idade: 25,
    altura: 1.8,
  },
  {
    nome: "pessoa 3",
    idade: 33,
    altura: 1.9,
  },
  {
    nome: "pessoa 4",
    idade: 43,
    altura: 1.5,
  },
];

//array.every()== verificar se todos os elementos de um array conseguem determinar uma condição retornada pela função

const TodosPositivos = numeros.every(
  (elemento /*, index, arrayCompleto*/) => elemento > 0
); //booleano(true || false)

console.log(TodosPositivos);

console.clear();

const TodosMaioresDeIdade = pessoas.every((elemento) => elemento.idade > 18); //verifica se todos são maiores de 18 anos

console.log(TodosMaioresDeIdade);

//array.some()  == se algum elemento atinge a condição





