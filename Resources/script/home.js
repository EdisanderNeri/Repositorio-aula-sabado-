import { SalvarUsuario } from './SalvarUsuario.js';

const armazenamento = new SalvarUsuario();
const usuario = armazenamento.buscar();

if (usuario) {
  document.getElementById('boasVindas').textContent = 'Seja bem-vindo, ' + usuario.nome + '!';
} else {
  window.location.href = 'index.html';
}
