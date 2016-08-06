//connecting to the database and then exporting it the data back
//you only need to require it back in
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost', //where the database is (location url of db)
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'msgboard'
});

db.connect();

//fields is the SCHEMA what the table looks like

//rows is the data of objects

module.exports = db;
