/*1.2. Faça o mesmo programa anterior, agora com 3 palpites.*/

const n1 = parseInt(prompt('Digite um número entre 1 a 10:'))
const sorte = Math.floor(Math.random() * 10 + 1)

if (n1 == sorte) {
    alert('Parabéns, você acertou!')
} else {
    if (n1 > sorte) {
        alert('Reduza seu palpite e tente novamente.')
    } else {
        alert('Aumente seu palpite e tente novamente.')
    } 
    alert('Você tem mais duas chances.')
    const n2 = parseInt(prompt('Digite outro número:'))
    if (n2 == sorte) {
        alert('Parabéns, você acertou!')
    } else {
        if (n1 > sorte) {
            alert('Reduza seu palpite e tente novamente.')
        } else {
            alert('Aumente seu palpite e tente novamente.')
        } 
        alert('Você tem mais uma chance.')
        const n3 = parseInt(prompt('Digite outro número:'))  
        if (n3 == sorte) {
            alert('Parabéns, você acertou')
        } else {
            alert(`O número sorteado foi ${sorte}, não foi dessa vez!`)
        }
    }
} 