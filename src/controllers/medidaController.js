var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


    function buscarMedidasEmTempoReal(req, res) {

        var idAquario = req.params.idAquario;

        console.log(`Recuperando medidas em tempo real`);

        medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    function buscarDadosMonitoramento(req, res) {
        var armazemId = req.params.armazemId;
    
        console.log(`Buscando dados de monitoramento para o armazém com ID ${armazemId}`);
    
        medidaModel.buscarDadosMonitoramento(armazemId).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado de monitoramento encontrado para este armazém.");
            }
        }).catch(function (erro) {
            console.error("Erro ao buscar dados de monitoramento:", erro);
            res.status(500).json({ error: "Houve um erro ao buscar os dados de monitoramento." });
        });
    }
    


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarDadosMonitoramento: buscarDadosMonitoramento
}