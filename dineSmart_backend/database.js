const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant'
});
 
// connect to database
mc.connect((err) => {
    if(!err)
        console.log('DB connection successful!');
    else
        console.log('DB connection failed!' + JSON.stringify(err, undefined, 2));
});

module.exports = mc; 