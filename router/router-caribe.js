const express = require('express');
const controllerCaribe = require('../controller/controller-caribe');
const routerCaribe = express.Router();

routerCaribe.all('/*', function (req, res, next) {
    req.app.locals.layout = 'Caribe';
    next();
})

routerCaribe.route('/')
    .get(controllerCaribe.index)

routerCaribe.route('/:')
    .get(controllerCaribe.getPaises)

routerCaribe.route('/:pais/:name')
    .get(controllerCaribe.getAeropuertos)




module.exports = routerCaribe;