const express = require('express');
const controllerAsia = require('../controller/controller-asia');
const routerAsia = express.Router();

routerAsia.all('/*', function (req, res, next) {
    req.app.locals.layout = 'Asia';
    next();
})


routerAsia.route('/')
    .get(controllerAsia.index)

routerAsia.route('/:')
    .get(controllerAsia.getPaises)

routerAsia.route('/:pais/:name')
    .get(controllerAsia.getAeropuertos)


module.exports = routerAsia;