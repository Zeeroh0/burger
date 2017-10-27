const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log(`connected to the ${connection.config.database} database as id ${connection.threadId}`);
// });

// To use the DB on Heroku:
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
	  user: "root",
	  password: "",
	  database: "burgers_db"
	});
}

connection.connect();

module.exports = connection;
