let titulo = document.querySelector('h1');
titulo.innerHTML = 'Desafio aceito';

function verificar() {
    console.log('O botão foi clicado');
}

function exibir() {
    alert('Eu amo Python');
}

function nome() {
    let cidade = prompt('Informa uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function calculo() {
    let numero1 = parseInt(prompt('Inform um número:'));
    let numero2 = parseInt(prompt('Informe outro número:'));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} com o ${numero2} é igual a ${soma}`);
}