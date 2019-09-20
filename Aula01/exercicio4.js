/* 4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar. */
/*
INICIO
    criar um comando que receba um número
    se a divisão de número por 2 tiver resto 0
        escrever - o número é PAR
    se a divisão de número por 2 tiver resto diferente de 0
        escrever - o número é IMPAR
FIM
*/

const num = parseInt(prompt('Digite um número:'))

if (num % 2 == 0) {
    alert(`${num} é PAR`)
} else {
    alert(`${num} é ÍMPAR`)
}