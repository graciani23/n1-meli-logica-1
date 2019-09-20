/* 1. Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe A ALTURA do atleta mais alto. */

let cont = 0
let alto = 0

while (cont < 3) {
    nome = prompt(`Digite o nome do ${cont+1}º atleta: `)
    altura = parseFloat(prompt(`Digite a altura do ${cont+1}º atleta:`))
    cont++

    if (cont == 0) {
        alto = altura
    } else if (alto < altura) {
        alto = altura
    }
}
alert(`O jogador mais alto mede ${alto} metros.`)