/*3. Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).*/

const num1 = Math.floor(Math.random() * 10 + 1)
const num2 = Math.floor(Math.random() * 10 + 1)

if ((num1 >= 3 && num1 <= 7) && (num2 >= 3 && num2 <= 7))  {
    alert(`Os números ${num1} e ${num2} atendem a condição`)
} else if ((num1 >= 3 && num1 <= 7) || (num2 >= 3 && num2 <= 7)){
    alert(`O número ${num1} ou ${num2} atende a condição`)
} else {
    alert('Nenhum número atende a condição')
}

