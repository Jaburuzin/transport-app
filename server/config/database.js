const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({
    path: '../.env'
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "transport"
})

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Conectado com o banco de dados!')
    }
})

module.exports = db;