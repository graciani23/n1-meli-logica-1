 /* 1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto.  */

let cont = 0
let alto = 0
let nomeAlto = ''

while (cont < 3) {
    nome = prompt(`Digite o nome do ${cont+1}º atleta: `)
    altura = parseFloat(prompt(`Digite a altura do ${cont+1}º atleta:`))
    cont++

    if (cont == 0) {
        alto = altura
        nomeAlto = nome
    } else if (alto < altura) {
        alto = altura
        nomeAlto = nome
    }
}
alert(`O jogador mais alto é o ${nomeAlto} que tem ${alto} metros.`)