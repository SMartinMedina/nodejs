const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRouter = require('./routes/estudiantesRoutes.js');
const profesoresRouter = require('./routes/profesoresRoutes.js');
const cursosRouter = require('./routes/cursosRoutes.js');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("hola mundo");
});



app.use('/estudiantes', estudiantesRouter);
app.use('/profesores', profesoresRouter);
app.use('/cursos', cursosRouter);

app.listen("6500", () =>{
    console.log("Servidor activo!")
});