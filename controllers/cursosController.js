const db = require('../database/conexion.js');

class CursosController{
    constructor(){}
    ingresar(req, res) {
        const {nombre, descripcion, profesor_id} = req.body;
        try {
            db.query('INSERT INTO cursos.cursos (id, nombre, descripcion, profesor_id) VALUES(NULL, ?, ?, ?);',
                [nombre, descripcion, profesor_id],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }else{
                        res.status(200).json({resultado: "Se ha ingresado el curso con éxito"});
                    }                    
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    asociarCurso(req, res) {
        const {curso_id, estudiante_id} = req.body;
        try {
            db.query('INSERT INTO cursos.cursos_estudiantes (curso_id, estudiante_id) VALUES(?, ?);',
                [curso_id, estudiante_id],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err.message);
                    }else{
                        res.status(200).json({resultado: "Se ha ingresado el estudiante al curso con éxito"});
                    }                    
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }
    consultar(req, res) {
        try {
            db.query('SELECT * FROM cursos', 
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req, res) {
        const { id } = req.params;
        try {
            db.query('SELECT * FROM cursos where id = ?', [id] , 
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    modificar(req, res) {
        const {id} = req.params;
        try{
            const {nombre, descripcion, profesor_id} = req.body;
            db.query('UPDATE cursos.cursos SET nombre=?, descripcion=?, profesor_id=? WHERE id=?;',
                [nombre, descripcion, profesor_id, id],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }
                    res.status(200).json({resultado: "Se ha modificado el curso con éxito"});
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    borrar(req, res) {
        const {id} = req.params;
        try{
            db.query('DELETE FROM cursos.cursos WHERE id=?;',
                [id],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }
                    res.status(200).json({resultado: "Se ha eliminado el curso con éxito"});
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }


}

module.exports = new CursosController();