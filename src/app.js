const express = require('express');
const db = require('../db/conection.js');
const bodyParser = require('body-parser');

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db conection (banco de dados)
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
    });

// home route
app.get("/", (req, res) => {
    res.send("Está funcionando");
});

// jobs routes
app.use('/jobs', require('../routes/jobs'));

module.exports = app;