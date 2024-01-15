autenticarLogin = () => {
    var txtLogin = document.querySelector('#txtLogin').value;
    var txtSenha = document.querySelector('#txtSenha').value;

    if (txtLogin === 'admin' && txtSenha === 'admin') {
        window.location.href = 'index_star_wars.html';
    }else{
        alert('Senha incorreta, favor tentar novamente');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var btnEntrar = document.querySelector('#btnEntrar');
    btnEntrar.addEventListener('click', () => autenticarLogin());
});
