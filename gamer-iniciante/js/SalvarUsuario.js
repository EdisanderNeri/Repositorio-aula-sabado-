export class SalvarUsuario {
  salvar(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  buscar() {
    return JSON.parse(localStorage.getItem('usuario'));
  }
}
