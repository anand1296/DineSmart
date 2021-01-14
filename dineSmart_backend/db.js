'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'restaurant'
});

connection.connect((err) => {
    if(!err)
        console.log('DB connection successful!');
    else
        console.log('DB connection failed!' + JSON.stringify(err, undefined, 2));
});


module.exports = connection;