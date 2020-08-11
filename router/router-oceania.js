const express = require('express');
const controllerOceania = require('../controller/controller-oceania');
const routerOceania = express.Router();

routerOceania.route('/')
    .get(controllerOceania.index)


    //PAISESES
routerOceania.route('/:name')
    .get(controllerOceania.getPaises)

    //aeropuertos
routerOceania.route('/:pais/:name')
    .get(controllerOceania.getAeropuertos)

module.exports = routerOceania;