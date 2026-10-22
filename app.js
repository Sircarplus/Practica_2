const express = require("express");
const rutas = require("../routes");
const { notFound, errorHandler1 } = require("../middlewares/errorHandler1");

const app = express();

app.use(express.json());
app.use(rutas);
app.use(notFound);
app.use(errorHandler1);

module.exports = app;
