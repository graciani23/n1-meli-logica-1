/*5.  Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A. O programa deve então exibir uma mensagem dizendo se ele acertou ou errou. (Importante o programa aceitar que a letra A seja digitada    tanto em minúsculas quanto em maiúsculas).*/

const palavra = prompt('Digite uma palavra que começe com A:'
).toUpperCase()

if(palavra[0] == 'A') {
    alert('Você acertou!')
} else {
    alert('Você errou!')
}