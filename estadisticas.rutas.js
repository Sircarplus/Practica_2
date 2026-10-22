const { Router } = require("express");
const estadisticas = require("../controllers/estadisticas.controlador");

const router = Router();

router.get("/", estadisticas.obtener);

module.exports = router;
