// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../loginCadastro.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../loginCadastro.html";
}

//carol
function validaUsuarioLogado() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    if (email == null || nome == null) {
        return false
    }
    else {
        return true
    }
}
function exibirMenu() {
    var usuarioLogado = validaUsuarioLogado()
    if (usuarioLogado == true) {
        let botao_login = document.getElementById("botao_login")
        botao_login.style.display = "none"

    }
    else {
        let botao_sair = document.getElementById("botao_sair")
        botao_sair.style.display = "none"

    }
}
//carol

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}
