var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/monitoramento/:armazemId", function (req, res) {
    medidaController.buscarDadosMonitoramento(req, res);
});

router.get("/buscarUltimoDadoMonitoramento/:armazemId", function (req, res) {
    medidaController.buscarUltimoDadoMonitoramento(req, res);
});

module.exports = router;