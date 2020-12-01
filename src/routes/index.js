const express = require('express');
const app = express();

const routerCatalogos = require('./catalogos');
const routerCategorias = require('./categorias');
const routerProveedor = require('./proveedores');

app.use('/catalogos',routerCatalogos);
app.use('/categorias',routerCategorias);
app.use('/proveedores',routerProveedor);

module.exports = app;