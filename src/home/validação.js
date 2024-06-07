
const users = [
    { usuario: 'usuario1', senha: 'senha123' },
  
  ];
  

  function validarLogin() {
  
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
  
    const user = users.find(user => user.usuario === usuario);
  
    if (!user) {
      alert('Nome de usuário incorreto! Tente outra vez.');
      return;
    }
  

    if (user.senha !== senha) {
      alert('Senha incorreta! Tente outra vez.');
      return;
    }
  

    alert('Login feito com sucesso!');
 
    window.location.href = 'index.html';
    
  }
  