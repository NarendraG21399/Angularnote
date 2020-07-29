const mysql = require("mysql");
const dbConfig = require("./mysql");


// Create a connection to the database
const connection = mysql.createConnection({
  host:  'localhost',
  user: 'root',
  password: 'root',
  database: 'employee',
 insecureAuth: true,
 port: 3306
  
});

// open the MySQL connection
connection.connect(error => {
  if (error) { console.log( error)}
  else console.log("Successfully connected to the database.");
});

module.exports = connection;