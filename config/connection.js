// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require("mysql");

// Set up our connection information
const cnn = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "8ZZ,R!*2y5S{hCZ5",
    database: "burgers_db"
});

// Connect to the database
cnn.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + cnn.threadId);
});

// Export connection
module.exports = cnn;
