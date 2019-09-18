/*1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.*/
/**
INICIO

    receber um número

    se número > 10
        'Número é maior que 10!'
    se não
        'Número não é maior que 101'
FIM
 */

 const  num = prompt("Digite um número")
 if (num > 10) {
    alert(`${num} é maior que dez!`)
 } else {
    if (num == 10) {
        alert(`${num} é igual a dez!`)
    } else {
        alert(`${num} não é maior que dez e nem igual a dez!`)
    }
 }