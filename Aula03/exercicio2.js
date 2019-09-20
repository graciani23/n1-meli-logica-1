/* 2. Solicite que seja digitada uma palavra que contenha a letra F ou comece com a letra P */

let palavra = prompt('Digite uma palavra que contenha a letra F ou P.').toUpperCase()

if ((palavra.indexOf('F') >= 0) || (palavra.indexOf('P') >= 0)) {
    alert('Ok, a palavra está correta.')
} else {
    alert('A palavra não contém F ou P.')
}