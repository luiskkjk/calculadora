const tela = document.getElementById('tela');

function adicionar(valor) {
  tela.value += valor;
}

function calcular() {
  try {
    tela.value = eval(tela.value);
  } catch (e) {
    tela.value = 'Erro';
  }
}

function limpar() {
  tela.value = '';
}