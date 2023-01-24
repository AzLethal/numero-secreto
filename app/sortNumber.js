const menorValor = 1;
const maiorValor = 100;
const elementoMenor = document.querySelector('#menor-valor');
const elementoMaior = document.querySelector('#maior-valor');

const secretNumber = gerarNumeroAleatorio();
console.log(secretNumber);

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;
