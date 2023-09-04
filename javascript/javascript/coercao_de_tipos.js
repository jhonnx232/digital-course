//COERÇÃO (CONVERSÃO) DE TIPOS

//coerção explicita (manual)
let numero = 10
console.log(numero, typeof (numero))

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof (numeroEmFormatoDeString))

console.log(Number("12345678"))//oposto
console.log(parseFloat("12399.234"))//funciona como o number, utilize number
console.log(parseInt("12399.234"))//funciona como o number, utilize number(este arredonda pra int)

console.log(Boolean(123452))//converte qualquer n != 0 para true
console.clear()
//coerção implícita (automatica)

console.log('10' + 1)//transforma em texto
console.log('10' - 1)//transforma em inteiro(o mesmo para outras operações , o perigo é a soma)
console.log(10 - 'asasas')// ele mostra NaN (not is a number)
