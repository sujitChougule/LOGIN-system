const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Pass@1234",
    database:"mydb"
});

connection.connect(function(error){
    if (error) {
        throw error;
    }
    else{
console.log('database connected');
    }
});


module.exports = connection;