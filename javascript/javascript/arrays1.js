//arrays ou vetores

//como criar um array
let arr = ['jhonn', 18, 1.80, true]

console.log(arr)

//chamando elementos especificos

console.log("primeiro elemento ", arr[0])

//como oter o tamanho do array

console.log("tamanho do array ", arr.length)

//percorrendo arrays(scanning com for)
console.clear()
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//for off
console.clear()
for (let elemento of arr) {
    console.log(elemento)
}

console.clear()

//for in

for (let indice in arr) {
    console.log(indice, arr[indice])
}


