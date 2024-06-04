var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

// router.get("/obterTemperaturasArmazem", function (req, res) {

//     medidaController.obterTemperaturasArmazem()
//         .then(function (temperaturas) {
//             res.status(200).json(temperaturas);
//         })
//         .catch(function (erro) {
//             res.status(500).json({ error: "Erro ao obter as temperaturas do armazém." });
//         });
// });



module.exports = router;