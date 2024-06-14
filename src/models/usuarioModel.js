var database = require("../database/config")


function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucaoSql = `
        SELECT idUsuario AS id, nome, email, fkEmpresa AS empresaId 
        FROM usuario 
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(email, nome, senha, empresaId) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, nome, senha, empresaId);
    var instrucaoSql = `
      INSERT INTO usuario (email, nome, senha, fkEmpresa) VALUES ('${email}', '${nome}', '${senha}', ${empresaId});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function nomeUsuario(usuarioId) {
    console.log("Acessando o método nome no modelo do usuário");
    var instrucaoSql = `
    SELECT usuario.nome  AS nome_Usuario
    FROM usuario WHERE idUsuario = ${usuarioId};

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterArmazens(usuarioId) {
    var instrucaoSql =
        ` SELECT 
            a.idArmazem, 
            a.nome AS nomeArmazem,  
            a.localizacao, 
            a.capacidade_toneladas,
            e.nome AS nomeEmpresa,
            dm.temperatura,
            dm.umidade,
            dm.data_horaCaptura AS dataHoraCaptura
        FROM 
            armazem a
        JOIN 
            empresa e ON a.fkEmpresa = e.idEmpresa
        JOIN 
            usuario u ON e.idEmpresa = u.fkEmpresa
        LEFT JOIN 
            dados_monitoramento dm ON a.idArmazem = dm.fkDispositivo
        WHERE 
            u.idUsuario = ${usuarioId};
    ;`
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    nomeUsuario,
    obterArmazens,
};
