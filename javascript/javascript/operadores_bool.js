const numero= 10

console.log(numero == 10)// pode utilizar == ou ===
console.log(numero > 20)//maior que
console.log(numero < 10)//menor que
console.log(numero >= 10)//maior ou igual a
console.log(numero <= 10)// menor ou igual a
console.log(numero != 10)// diferente de


//pro javascript numeros e textos são iguais(com == ele compara o conteúdo) caso queira comparar tipo de variavel use === . (use sempre === na maioria dos casos para evitar bugs) 
console.log(10 === 10)//false
console.log( 10 == "10")//true

console.clear() 

// vale de mesmo para o != diferente de..

console.log(10 != 10)// false
console.log(10 != "10")// false
console.log(10 !== "10")// true

//conjunções lógicas
 
//AND => &&

let idade = 26
let cnh = true

const possoDirigir = idade>=18 && cnh === true

console.log("Posso dirigir?", possoDirigir)

//OR => ||
idade = 40

const votoFacultativo = idade < 18 || idade >= 70

console.log("Meu voto é facultativo?", votoFacultativo)

//Not => !

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)