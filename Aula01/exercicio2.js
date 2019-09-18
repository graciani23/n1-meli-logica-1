/* 2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.*/


const n1 = parseInt(prompt('Digite um número: '))
const n2 = parseInt(prompt('Digite outro número: '))

if (n1 > n2) {
    alert(`${n1} é maior`)
} else {
    alert(`${n2} é maior`)
}