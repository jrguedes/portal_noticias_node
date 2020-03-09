var mysql = require('mysql');
var MySQLConnection = function () {
    console.log('The connection has been created');
    return mysql.createConnection({
        host: '34.70.175.147',
        user: 'root',
        password: 'senha@01',
        database: 'db_portal_noticias'
    });
}

module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o BD');
    return MySQLConnection;
}
