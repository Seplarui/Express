var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'seplarui',
    database: 'demo'
});

connection.connect();
connection.query('select * from Tabla_1', function (err, rows, fields) {

    if (err) throw err
    console.log("El resultado es: ", rows[0].Nombre);

});
connection.end();