//metodos de arrays(funções dentro de uma variavel)

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []
//fatiamento - slice

console.log(arr1.slice(0, 2)) // ele vai pegar na posição 0 e na posição 1.. ele pega do 0 até menor que 2
console.log(arr1.slice(2))//caso só tenha 1 parâmetro ele pega do parâmetro até o final por padrão

console.clear()

//adicionar elementos nop array - push | unshift

console.log('Antes de adicionar :' , arr2)
//push adiciona no final
arr2.push(1)

console.log('depois de adicionar :' , arr2)
//unshifit adiciona no inicio

console.log('antes de adicionar no inicio:', arr2)

arr2.unshift(1)

console.log('depois de adicionar no inicio:', arr2)



//remoção de elementos pop e shift
//pop tira o ultimo
console.log('antes do pop', arr2)

arr2.pop()

console.log('depois do pop', arr2)

const elementoRemovido= arr2.pop()

console.log('o elemento removido foi', elementoRemovido)

arr2= [ 1 , 2 , 3 , 4]
//shift tira o primeiro
console.log('antes do shift ', arr2)

arr2.shift()

console.log('depois do shift ', arr2)

console.clear()

//concatenação de arrays

console.log(arr1)
console.log(arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

//buscar elementos indexof | lastindexof

console.log(arr1)

let indicieDoElemento34 = arr1.indexOf(34)//caso o elemento não exista ele retorna -1, e caso haja mais de um elemento ele retorna o primeiro

console.log(indicieDoElemento34)

let arr3=[3 , 3 , 3, 1 ,3]

console.log(arr3.lastIndexOf(3))//o ultimo indicie de ..
console.clear()
//buscando a existência do elemento no array

console.log(arr1)

console.log(arr1.includes(10))//booleano , ele verifica o elemento e retorna true ou false

console.clear()
//reverse(inverter array)

console.log(arr1)

let arr1Invertido=arr1.reverse()

console.log(arr1Invertido)

