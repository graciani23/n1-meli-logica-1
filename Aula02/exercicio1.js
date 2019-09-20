/*1. Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.*/

const num1 = parseInt(prompt('Digite um número de 1 a 10:'))
const sorte = Math.floor(Math.random()*10+1)

if (num1 == sorte) {
    alert('Parabéns, você acertou!')
} else {
    alert('Tente novamente.')
    const num2 = parseInt(prompt('Digite outro número:'))
    if (num2 == sorte) {
        alert('Parabéns, você acertou!')
    } else {
        alert('Não foi dessa vez, você errou!')
        alert(`O número sorteado foi ${sorte}`)
    }
}