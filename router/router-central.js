const express = require('express');
const controllerCentral = require('../controller/controller-central');
const routerCentral = express.Router();

routerCentral.all('/*', function (req, res, next) {
    req.app.locals.layout = 'AmericaCentral';
    next();
})

    routerCentral.route('/')
        .get(controllerCentral.index)
    
    
        //PAISESES
        routerCentral.route('/:name')
        .get(controllerCentral.getPaises)
    
        //aeropuertos
        routerCentral.route('/:pais/:name')
        .get(controllerCentral.getAeropuertos)
    

        module.exports = routerCentral;