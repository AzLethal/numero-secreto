function validaChute(chute) {
    const numero = +chute;
    if(chuteInvalido(numero)){
        elementoChute.innerHTML +='<div>Valor Inválido</div>';
        return;
    }
    if(numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML +='<div>O número secreto deve estar dentro do limite estabelecido!</div>';
        return;
    }

    if(numero === secretNumber) {
        document.body.innerHTML = `
        <h2>Você Acertou</h2>
        <h3>O Número secreto era : ${secretNumber}</h3>
        <div class="reiniciar">
        <label for="jogar-novamente"><i class="fa-solid fa-arrow-rotate-right"></i></label>
        <button id="jogar-novamente" class="btn-jogar"></button>
        </div>
        `
    } else if (numero > secretNumber) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-1-9"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-9-1"></i></div>
        `
    }
}

function chuteInvalido (numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})