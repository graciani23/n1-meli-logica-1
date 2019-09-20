/*4. Escreva um programa que joga par ou ímpar com o usuário.*/
const jog = parseInt(prompt('Digite um número entre 1 e 10:'))
pI = prompt('Escolha par ou impar:').toUpperCase()
comp = Math.floor(Math.random() * 10 + 1)
let soma = jog + comp
res = ''

if(soma % 2 == 0) {
    res = 'PAR'
} else {
    res = 'IMPAR'
}
if (pI == res) {
    alert(`A soma deu ${soma}, é ${res}. Sua escolha foi ${pI}, você VENCEU!`)
} else {
    alert(`A soma deu ${soma}, é ${res}. Sua escolha foi ${pI}, você PERDEU!`)
}

