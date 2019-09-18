/* 5. Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10. */
/*
INICIO
    criar um comando que receba um número inteiro
    se a divisão de número por 10 tiver resto 0
        escrever - número é múltiplo de 10
    se a divisão de número por 10 tiver resto diferente de 0
        escrever - número não é múltiplo de 10
FIM
*/

const num = parseInt(prompt('Digite um número inteiro:'))

if (num % 10 == 0) {
    alert(`${num} é múltiplo de 10`)
} else {
    alert(`${num} não é múltiplo de 10`)
}