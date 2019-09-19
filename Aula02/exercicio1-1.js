/*1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.*/
const num1 = parseInt(prompt('Digite um número de 1 a 10:'))
const sorte = Math.floor(Math.random() * 10 + 1)

if ( num1 == sorte) {
    alert('Parabéns, você acertou!')
} else {
    if (sorte > num1) {
        alert('Aumente seu palpite e tente novamente.')
    } else {
        alert('Reduza seu palpite e tente novamente')
    }
    const num2 = parseInt(prompt('Digite outro número de 1 a 10:'))
    if (num2 == sorte) {
        alert('Parabéns, você acertou!')
   } else {
       alert(`O número sorteado foi ${sorte}, não foi dessa vez!`)
   }
}