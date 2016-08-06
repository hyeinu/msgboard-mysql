//alternative to modifying the table

require('dotenv').config();

const db = require('./config/db')

//potato is the table name

const db.query('drop table potato'), err =>{
  if (err) throw err;

  console.log("done!")

  db.end();
}
