//além do if e do else nós temos o switch em javascript

/*o switch tem a seguinte identação
switch (expressão){
    case valor 1:

    break
    case valor 2:

    break
    case valor 3:

    break
    defeailt:

    break/no defealt é opcional
}
*/

let agora = new Date()
let diasem = agora.getDay()
/*
0-domingo
1-segunda
2-terça
3-quarta
4-quinta
5-sexta
6-sabado
*/

switch(diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break         
    case 2:
        console.log('Terça')
         break
    case 3:
        console.log('Quarta')
        break                 
    case 4:
        console.log('Quinta')
        break                 
    case 5:
        console.log('Sexta')
        break                 
    case 6:
        console.log('Sábado')
        break 
    default:
        console.log('Erro , dia inválido')
        break
}
