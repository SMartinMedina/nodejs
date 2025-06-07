const express = require('express');
const cursosRouter = express.Router();
const cursosController = require('../controllers/cursosController.js');

cursosRouter.get('/', cursosController.consultar);

cursosRouter.post('/', cursosController.ingresar);
cursosRouter.post('/registrarEstudiante', cursosController.asociarCurso);

cursosRouter.route('/:id')
    .get(cursosController.consultarDetalle)
    .put(cursosController.modificar)
    .delete(cursosController.borrar);

module.exports = cursosRouter;