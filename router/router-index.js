const express = require('express');
const controller = require('../controller/controller-index');
const routers = express.Router();

routers.all('/', function (req, res, next) {
    req.app.locals.layout = 'clienteIndex';
    next();
});


routers.route('/')
    .get(controller.index);


module.exports = routers;