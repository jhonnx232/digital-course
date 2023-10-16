// first class function
//uma linguagem de programação tem First class function quando as funções são tratadas como qualquer outra variável(uma função pode ser parâmetro para outra função)
// como consequencia disso ==> High Order Function
//é uma função que recebe outra função como parametro ou que retorna outra função

//função que retorna outra função como parâmetro (clowjure)
function welcome(CourseName) {
  return (studentName) => {
    console.log(
      `Ola ${studentName} ! , seja bem vindo(a) ao curso ${CourseName} !!!`
    );
  };
}

const displayWelcomeToFrontEndCourse = welcome("Front-end em React");

const displayWelcomeToBackEndCourse = welcome("Back-end em Node.js");

displayWelcomeToFrontEndCourse("Jhonn");

console.clear();

//função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;

const subtrair = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => num1 * num2;

const dividir = (num1, num2) => num1 / num2;

// operacao = função que realiza a operacao entre 2 numeros ou seja prescisa ser uma funcao que receba 2 numeros
const caucular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);
//const caucular = (10, 5 , somar) => somar(10, 5);
//uma funcao generica que retorna um retornno de uma função
//
const retorno = caucular(10, 5, somar); //pode trocar a funcao da operacao e funciona

console.log(retorno);

//o cauculo que eu quero== num1+ num2 +(2*num1 + num2)

const resultado = caucular(
  10,
  5,
  (num1, num2) => num1 + num2 + (2 * num1 + num2)
);

console.log(resultado);



//#########Funções pré implementadas de alta ordem de arrays################################

//métodos que recebem funções como parâmetro
//funções dentro de arrays


//novoarquivo



