/* 2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior. */
/*
INICIO
    criar dois comandos para receber dois números
    se número1 > numero2
        escrever - número1 é maior que numero2
    se número1 < número2
        escrever - número1 é menor que número2
FIM
*/
const n1 = parseInt(prompt('Digite um número:'))
const n2 = parseInt(prompt('Digite outro número:'))

if (n1 > n2) {
    alert(`${n1} é maior que ${n2}`)
} else {
    alert(`${n1} é menor que ${n2}`)
}