const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cursos'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("BD conectada");
})

module.exports = db;