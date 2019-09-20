/* 1.2 informe também a altura média destes 5 atletas.  */


let cont = 0
let alto = 0
let nomeAlto = ''
let soma = 0
let media = 0

while (cont < 3) {
    nome = prompt(`Digite o nome do ${cont + 1}º atleta: `)
    altura = parseFloat(prompt(`Digite a altura do ${cont + 1}º atleta:`))
    cont++
    soma += altura

    if (cont == 0) {
        alto = altura
        nomeAlto = nome
    } else if (alto < altura) {
        alto = altura
        nomeAlto = nome
    }
}
media = (soma / cont).toFixed(2)
alert(`O jogador mais alto é o ${nomeAlto} que tem ${alto} metros.
A altura média da equipe é ${media} metros.`)