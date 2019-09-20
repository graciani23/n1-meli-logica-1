/*   1.3 não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média. */

let cont = 0
let alto = 0
let nomeAlto = ''
let soma = 0
let media = 0
let resp = 'S'

while (resp != 'N') {
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
    resp = prompt('Deseja continuar? [S/N]').toUpperCase()
}
media = (soma / cont).toFixed(2)
alert(`O jogador mais alto é o ${nomeAlto} que tem ${alto} metros.
A altura média da equipe é ${media} metros.`)