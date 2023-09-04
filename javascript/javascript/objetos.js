//uma estrutura de dados que guarda diferentes conteudos numa variavel porém vc acessa por uma chave

//Objetos

// como criar objetos
let pessoa = {
    'nome-da-pessoa': "jhonn",
    idade: 26,
}
//como acessar chaves do objeto
console.log(pessoa)
console.log(pessoa["nome-da-pessoa"])
console.log(pessoa.idade)
//adicionando chaves ou modificando já existentes
pessoa.altura = 1.77

console.log(pessoa)

delete pessoa.altura

console.log(pessoa)

console.clear()
//como percorrer


for (let chave in pessoa) {
    console.log(chave)
}

