/*2. Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não necessariamente na mesma ordem.*/

const sort1 = Math.floor(Math.random() * 5 + 1)
const sort2 = Math.floor(Math.random() * 5 + 1)
const n1 = parseInt(prompt('Digite um número entre 1 e 5:'))
const n2 = parseInt(prompt('Digite um número entre 1 e 5:'))

if (((n1 == sort1) && (n1 == sort2)) || ((n1 == sort2) && (n2 == sort1))) {
    alert('Parabéns, você acertou!')
} else {
    alert('Não foi dessa vez, você errou!')
    alert(`Sorteio 1 = ${sort1} e sorteio 2 = ${sort2}
    Palpite 1 = ${n1} e palpite 2 = ${n2}`)
}
