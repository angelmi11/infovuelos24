const express = require('express');
const controllerSur = require('../controller/controller-sur');
const routerSur = express.Router();

routerSur.all('/*', function (req, res, next) {
    req.app.locals.layout = 'SurAmerica';
    next();
})

routerSur.route('/')
    .get(controllerSur.index)


    //PAISESES
    routerSur.route('/:name')
    .get(controllerSur.getPaises)

    //aeropuertos
    routerSur.route('/:pais/:name')
    .get(controllerSur.getAeropuertos)


module.exports = routerSur;