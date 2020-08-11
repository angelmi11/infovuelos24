const express = require('express');
const controllerEuropa = require('../controller/controller-europa');
const routerEuropa= express.Router();

routerEuropa.all('/*', function (req, res, next) {
    req.app.locals.layout = 'Europa';
    next();
})


routerEuropa.route('/')
    .get(controllerEuropa.index)

    routerEuropa.route('/:')
    .get(controllerEuropa.getPaises)

    routerEuropa.route('/:pais/:name')
    .get(controllerEuropa.getAeropuertos)

module.exports = routerEuropa;