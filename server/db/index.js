const pgp = require('pg-promise')(); // Import pg-promise and initialize it

const connection = 
    "postgresqql://postgres:123456@localhost:5432/postgres";

const db = pgp(connection); // Creating a database instance

// Now you can use the 'db' object to execute queries
module.exports = db;