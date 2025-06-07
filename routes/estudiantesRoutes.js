const express = require('express');
const estudiantesRouter = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');

estudiantesRouter.get('/', estudiantesController.consultar);

estudiantesRouter.post('/', estudiantesController.ingresar);

estudiantesRouter.route('/:id')
    .get(estudiantesController.consultarDetalle)
    .put(estudiantesController.modificar)
    .delete(estudiantesController.borrar);

module.exports = estudiantesRouter;