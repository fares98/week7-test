const { join } = require('path');
const { readFileSync } = require('fs');
const dbConnection = require('./connection');

const sql = readFileSync(join(__dirname, 'build.sql')).toString();

dbConnection
  .query(sql)
  .then(console.log('DONE'))
  .catch(err => console.log(err.stack));



// module.exports = buildDB;