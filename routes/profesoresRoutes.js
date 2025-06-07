const express = require('express');
const profesoresRouter = express.Router();
const profesoresController = require('../controllers/profesoresController.js');

profesoresRouter.get('/', profesoresController.consultar);

profesoresRouter.post('/', profesoresController.ingresar);

profesoresRouter.route('/:id')
    .get(profesoresController.consultarDetalle)
    .put(profesoresController.modificar)
    .delete(profesoresController.borrar);

module.exports = profesoresRouter;