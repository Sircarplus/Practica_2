const { Router } = require("express");
const librosRoutes = require("./libros.rutas");
const prestamosRoutes = require("./prestamos.rutas");
const estadisticasRoutes = require("./estadisticas.rutas");

const router = Router();

router.use("/libros", librosRutas);
router.use("/prestamos", prestamosRutas);
router.use("/estadisticas", estadisticasRutas);

module.exports = router;
