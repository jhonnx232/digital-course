//uma estrutura de dados que guarda diferentes conteudos numa variavel porém vc acessa por uma chave

//Objetos

// como criar objetos
let pessoa = {
    'nome-da-pessoa': "jhonn",
    idade: 26,
    altura: 1.77,
    ehProgramador: true,
    array: [1 , 2 , 10  ,19],
    funcao: function(){//se utiliza funcao anonima pois o nome é declarado ja na estrutura do objeto
        console.log("bestaaaaaa") 
    },
    ARROW: () => {console.log('OLÁ')},
    nome:"apenas jhon",
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

console.clear()

pessoa.ARROW()
pessoa.funcao()
console.clear()

const age=19
const width = 1.80

const objeto= {
    age,
    width,
}

//areas especificas do objeto


const name= pessoa.nome;//variavel de nome diferente ao parametro
//ou

const { nome } = pessoa;//variavel de mesmo nome que parametro do objeto