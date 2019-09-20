/*
1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.
 */

 /*
INICIO
    criar um comando que receba um número
    se número > 10
        escrever - número é maior que 10
    se número === 10
        escrever - número é igual a 10
    se número < 10
        escrever - número é menor que 10
FIM
*/

const numero = parseInt(prompt('Digite um número:'))
if (numero > 10) {
    alert(`${numero} é maior que 10`)
} else if (numero === 10) {
    alert(`${numero} é igual a 10`)
} else {
    alert(`${numero} é menor que 10`)
}