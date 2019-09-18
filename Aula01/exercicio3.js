/* 3. Altere o exercício anterior de forma que ele informe também se os números são iguais.*/

const n1 = parseInt(prompt('Digite um número: '))
const n2 = parseInt(prompt('Digite outro número: '))

if (n1 > n2) {
    alert(`${n1} é maior`)
} else if (n2 > n1) {
    alert(`${n2} é maior`)
} else {
    alert(`${n1} e ${n2} são iguais`)
}