const express = require('express');
const controllerAfrica = require('../controller/controller-africa');
const routerAfrica= express.Router();

routerAfrica.all('/*', function (req, res, next) {
    req.app.locals.layout = 'Africa';
    next();
})


routerAfrica.route('/')
    .get(controllerAfrica.index)

    routerAfrica.route('/:')
    .get(controllerAfrica.getPaises)

    routerAfrica.route('/:pais/:name')
    .get(controllerAfrica.getAeropuertos)




module.exports = routerAfrica;