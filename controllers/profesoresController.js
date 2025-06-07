const db = require('../database/conexion.js');

class ProfesoresController{
    constructor(){}
    ingresar(req, res) {
        const {dni, nombre, apellido, email, profesion, telefono } = req.body;
        try {
            db.query('INSERT INTO cursos.profesores (id, dni, nombre, apellido, email, profesion, telefono) VALUES(NULL, ?, ?, ?, ?, ?, ?);',
                [dni, nombre, apellido, email, profesion, telefono],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }else{
                        res.status(200).json({resultado: "Se ha ingresado el profesor con éxito"});
                    }                    
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }
    consultar(req, res) {
        //const { id } = req.params;
        
        try {
            db.query('SELECT * FROM profesores', 
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
            db.query('SELECT * FROM profesores where id = ?', [id] , 
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
            const {dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query('UPDATE cursos.profesores SET dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=? WHERE id=?;',
                [dni, nombre, apellido, email, profesion, telefono, id],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }
                    res.status(200).json({resultado: "Se ha modificado el profesor con éxito"});
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    borrar(req, res) {
        const {id} = req.params;
        try{
            db.query('DELETE FROM cursos.profesores WHERE id=?;',
                [id],
                (err, rows) => {
                    if( err ){
                        res.status(400).send(err);
                    }
                    res.status(200).json({resultado: "Se ha eliminado el profesor con éxito"});
                }
            );
        }catch(err){
            res.status(500).send(err.message);
        }
    }


}

module.exports = new ProfesoresController();