const express = require('express');
const controllerNorte = require('../controller/controller-norte');
const routerNorte = express.Router();

routerNorte.all('/*', function (req, res, next) {
    req.app.locals.layout = 'NorteAmerica';
    next();
})

routerNorte.route('/')
    .get(controllerNorte.index)


    //PAISESES
routerNorte.route('/:name')
    .get(controllerNorte.getPaises)

    //aeropuertos
routerNorte.route('/:pais/:name')
    .get(controllerNorte.getAeropuertos)



module.exports = routerNorte;