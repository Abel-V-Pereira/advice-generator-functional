const btnGerarConselho = document.querySelector('.advice-update');
const adviceId = document.getElementById('adviceId');
const adviceDescription = document.getElementById('adviceDescription');

gerarConselho();

btnGerarConselho.addEventListener('click', gerarConselho)

async function criarConselho() {
        const url = 'https://api.adviceslip.com/advice';
        const resposta = await fetch(url);
        return await resposta.json();
}

async function gerarConselho() {
        const conselhoCriado = await criarConselho()
        const conselho = conselhoCriado.slip.advice;
        const conselhoId = conselhoCriado.slip.id;
        adviceId.innerText = conselhoId
        adviceDescription.innerText = conselho
}
