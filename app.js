// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
require('ejs');


//conexion a la base de datos

const { conexionDB } = require("./database");

conexionDB();

const app = express();

//PUERTO
const port = process.env.PORT || 5000

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');

});


// Starting the server
app.listen(port, () => console.log(`Server on http://localhost:${port}`));
