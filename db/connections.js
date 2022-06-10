
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "Gohan0136!",
    database: "employeesarecool",

  },
  console.log("Connected to the employee tracker database.")
);

module.exports = db;