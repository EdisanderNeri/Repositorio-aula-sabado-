import { Usuario } from './Usuario.js';
import { SalvarUsuario } from './SalvarUsuario.js';

const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmar = document.getElementById('confirmar').value;

  if (senha !== confirmar) {
    mensagem.textContent = 'As senhas não são iguais!';
    return;
  }

  const usuario = new Usuario(nome, email);
  const armazenamento = new SalvarUsuario();
  armazenamento.salvar(usuario);

  window.location.href = 'home.html';
});
