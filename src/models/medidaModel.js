var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosMonitoramento(armazemId) {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(dm.data_horaCaptura, '%d/%m/%Y %H:%i:%s') AS data_hora, 
            dm.temperatura AS temperatura, 
            dm.umidade AS umidade, 
            dispositivo.nome AS 'Dispositivo', 
            armazem.localizacao AS 'Localização'
        FROM dados_monitoramento AS dm
        JOIN dispositivo_monitoramento AS dispositivo 
            ON dm.fkDispositivo = dispositivo.idDispositivo
        JOIN armazem  
            ON dispositivo.fkArmazem = armazem.idArmazem
        WHERE armazem.idArmazem = ${armazemId}
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarDadosMonitoramento: buscarDadosMonitoramento

}
