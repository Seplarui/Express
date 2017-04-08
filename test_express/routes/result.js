var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'seplarui',
    database: 'demo'
});

router.get('/', function (req, rows, fields) {

    connection.connect();

    connection.query('select * from Tabla_1', function (err, rows, fields) {
        console.log("El resultado es: ", rows[0].Nombre);
        console.log("El resultado es: ", rows[1].Nombre);
    })

    connection.end();
    
});




module.exports = router;
