const { Ruta } = require("express");
const librosRutas = require("./libros.rutas");
const prestamosRutas = require("./prestamos.rutas");
const estadisticasRutas = require("./estadisticas.rutas");

const ruta = Ruta();

ruta.use("/libros", librosRutas);
ruta.use("/prestamos", prestamosRutas);
ruta.use("/estadisticas", estadisticasRutas);

module.exports = ruta;
