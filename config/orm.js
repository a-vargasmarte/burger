// *********************************************************************************
// ORM.JS - THIS FILE CONTAINS MYSQL CONNECTION AND CONTROLLER METHODS FOR INTERACTING WITH MYSQL DB
// *********************************************************************************

// import connection.js
const cnn = require("./connection.js");

// ORM
// =============================================================

// store burgers table from burgers_db in a variable 
const tableName = "burgers";
// declare an object sql with relevant properties and query keys
const sql = {
    create: `INSERT INTO ${tableName} (burger_name) VALUES (?)`,
    read: `SELECT * FROM ${tableName}`,
    update: `UPDATE ${tableName} SET devoured =? WHERE id=?`
}

module.exports = {
    // Here our ORM is creating methods for performing some crud operations.
    // We make use of the callback (cb) to ensure data is returned after the query is complete.
    selectAll: cb =>
        cnn.query(sql.read, cb),
    insertOne: (burger, cb) =>
        cnn.query(sql.create, [burger.burger_name], cb),
    updateOne: (burger, cb) =>
        cnn.query(sql.update, [burger.devoured === 'true', burger.id], cb)
};