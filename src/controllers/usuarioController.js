var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                    res.json({
                        id: resultadoAutenticar[0].id,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        empresaId: resultadoAutenticar[0].empresaId
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var empresaId = req.body.empresaServer;
  
    if (nome == undefined) {
      res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
      res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
      res.status(400).send("Sua senha está undefined!");
    } else if (empresaId == undefined) {
      res.status(400).send("Sua empresa está undefined!");
    } else {
      usuarioModel.cadastrar(email, nome, senha, empresaId)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
    }
  }
  
  function nomeUsuario(req, res) {
    var usuarioId = req.query.usuarioId;

    if (usuarioId == undefined) {
        res.status(400).send("O ID do usuário está indefinido.");
        return;
    }

    usuarioModel.nomeUsuario(usuarioId)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
                res.status(404).send("Nenhum nome encontrado");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao obter o nome do usuário:", erro);
            res.status(500).json({ error: "Erro interno do servidor" });
        });
}

function obterArmazens(req, res) {
    usuarioModel.obterArmazens()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao obter armazéns:", erro);
            res.status(500).json({ error: "Erro interno do servidor" });
        });
}

module.exports = {
    autenticar,
    cadastrar,
    nomeUsuario,
    obterArmazens
}